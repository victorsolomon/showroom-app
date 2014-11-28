({
  //- paths are relative to this app.build.js file
  appDir: "../app",
  baseUrl: "js/",
  removeCombined: true,
  //- this is the directory that the new files will be. it will be created if it doesn't exist
  dir: "../../builds/zeroUVBuild",
  paths: {
    'jquery': 'libs/jquery-2.0.3',
    'velocity': 'libs/velocity.min',
    'underscore': 'libs/lodash-1.3.1',
    'backbone': 'libs/backbone-1.1.0',
    'hbs': 'libs/hbs',
    'Handlebars' : 'libs/Handlebars',
    'marionette': 'libs/backbone.marionette',
    'serializeObject': 'libs/serializeObject',
    'i18nprecompile' : 'libs/hbs/i18nprecompile',
    'json2' : 'libs/hbs/json2',
    'backbone.wreqr': 'libs/backbone.wreqr',
    'backbone.eventbinder': 'libs/backbone.eventbinder',
    'backbone.babysitter': 'libs/backbone.babysitter'
  },

  shim: {
    backbone: {
      exports: 'Backbone',
      deps: ['jquery', 'underscore']
    },
    marionette: {
      deps: ['backbone']
    },
    velocity: {
      deps: ["jquery"]
    }
  },

  optimizeCss: "standard",
  modules: [{
    name: "modules/player/app"
  }],

  fileExclusionRegExp: /\.git|.sass-cache|sass|tool|component|0328|112313|minted|revolverBuild|revolver|taylorstitch|taylorStitch|midnightrider|teacollection|modcloth|showroom|square|config.rb|docs|index.js/
})
