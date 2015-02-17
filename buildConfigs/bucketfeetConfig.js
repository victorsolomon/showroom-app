({
  //- paths are relative to this app.build.js file
  appDir: "../app",
  baseUrl: "js/",
  removeCombined: true,
  //- this is the directory that the new files will be. it will be created if it doesn't exist
  dir: "../../builds/bucketfeet",
  optimize: 'none',
  paths: {
    'jquery'               : 'libs/jquery-2.0.3',
    'underscore'           : 'libs/lodash-1.3.1',
    'backbone'             : 'libs/backbone-1.1.0',
    'hbs'                  : 'libs/hbs',
    'Handlebars'           : 'libs/Handlebars',
    'marionette'           : 'libs/backbone.marionette',
    'serializeObject'      : 'libs/serializeObject',
    'i18nprecompile'       : 'libs/hbs/i18nprecompile',
    'json2'                : 'libs/hbs/json2',
    'backbone.wreqr'       : 'libs/backbone.wreqr',
    'backbone.eventbinder' : 'libs/backbone.eventbinder',
    'backbone.babysitter'  : 'libs/backbone.babysitter',
    'jsmpeg'               : 'libs/jsmpeg',
    'keyframes'            : 'libs/keyframes',
    'pathfinder'           : 'libs/keyframes.pathfinder'
  },

  shim: {
    backbone: {
      exports: 'Backbone',
      deps: ['jquery', 'underscore']
    },
    marionette: {
      deps: ['backbone']
    }
  },

  optimizeCss: "standard",
  modules: [{
    name: "modules/player/app"
  }],

  fileExclusionRegExp: /\.git|.sass-cache|sass|tool|component|0328|112313|teacollection|midnightrider|minted|revolver|modcloth|square|ballandbuck|brooktide|zerouv|nylon|config.rb|docs|index.js/
})
