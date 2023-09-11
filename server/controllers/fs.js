'use strict';

module.exports = ({ strapi }) => ({
  getBaseFiles: async (ctx, next) => {
    try {
      const files = await strapi.query('plugin::upload.file').findMany({
        where: {
          folderPath: {
            $eqi: '/'
          }
        },
      });
      ctx.body = files;
    } catch (err) {
      ctx.body = err;
    }
  },
  getOne: async (ctx, next) => {
    try {
      const { folderName } = ctx.params;
      const folder = await strapi.query("plugin::upload.folder").findOne({
        where: {
          name: {
            $eqi: folderName,
          },
        },
        populate: ["files", "children"],
      });
      if (folder) {
        ctx.body = folder;
      } else {
        ctx.assert({}, 404);
      }
    } catch (err) {
     console.log(err);
    }
  },
  getAllFolders: async (ctx, next) => {
    try {
      const folders = await strapi.query('plugin::upload.folder').findMany();
      ctx.body = folders;
    } catch (err) {
      ctx.body = err;
    }
  },
  getFolder: async (ctx, next) => {
    try {
      // get all folders
      const folders = await strapi.query('plugin::upload.folder').findMany();
      let tableIdsNames = [];
      folders.forEach(folder => {
        // generate table with relations between ids and names
        tableIdsNames.push([folder.pathId, folder.name]);
      });
      // create new folders array with readable folders paths
      const foldersNew = folders.map(folder => {
        const path = folder.path;
        const pathArr = path.split('/');
        const pathArrNew = pathArr.map(pathPart => {
          let pathName = pathPart;
          tableIdsNames.forEach(element => {
            if (pathPart === String(element[0])) {
              pathName = element[1];
            }
          });
          return pathName;
        });
        const pathStr = pathArrNew.join('/');
        folder.readablePath = pathStr;
        return folder;
      });
      // get query
      let { path } = ctx.query;
      if (path[path.length - 1] === '/') {
        path = path.substring(0, path.length - 1);
      }
      if (path[0] !== '/') {
        path = '/' + path;
      }
      let folderPath = path;
      let folderFullPath = path;
      foldersNew.forEach(folder => {
        // search requested path in modified list of folders
        if (folder.readablePath === path) {
          folderPath = folder.path;
          folderFullPath = folder.readablePath;
        }
      });
      // search match of path in strapi db
      const folder = await strapi.query("plugin::upload.folder").findOne({
        where: {
          path: {
            $eqi: folderPath,
          },
        },
        populate: ["files", "children"],
      });
      if (folder && path.length > 0) {
        // uses more proper name for nested folders
        folder.folders = [ ...folder.children ];
        delete folder.children;
        // added full readble path of folder in response
        folder.readablePath = folderFullPath;
        ctx.body = folder;
      } else {
        ctx.assert({}, 404);
      }
    } catch (err) {
     console.log(err);
    }
  },
});
