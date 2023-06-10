'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('fs')
      .service('myService')
      .getWelcomeMessage();
  },

  hello (ctx) {
    ctx.body = 'Hello World'
    return "Hello, World!";
  }
});
