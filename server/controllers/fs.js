'use strict';

module.exports = ({ strapi }) => ({

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

   getAllFolders: async (ctx, next) => {
    try {
      const folders = await strapi.query('plugin::upload.folder').findMany()
      ctx.body = folders;
    } catch (err) {
      ctx.body = err;
    }
  },

});
