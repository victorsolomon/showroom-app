({
  //- paths are relative to this app.build.js file
  appDir: "../app",
  baseUrl: "js/",
  removeCombined: true,
  //- this is the directory that the new files will be. it will be created if it doesn't exist
  dir: "../../builds/oldnavy",
  optimize: 'uglify2',
  paths: {
    'jquery'        : 'libs/jquery/dist/jquery',
    'underscore'    : 'libs/lodash-3.1.0',
    'backbone'      : 'libs/backbone/backbone',
    'hbs'           : 'libs/hbs/hbs',
    'Handlebars'    : 'libs/handlebars/handlebars',
    'marionette'    : 'libs/marionette/lib/backbone.marionette',
    'jsmpeg'        : 'libs/jsmpeg'
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

  fileExclusionRegExp: /\.git|.sass-cache|sass|tool|component|bower|spec|amd|runtime|demo|karma|react|jsx|0328|112313|teacollection|midnightrider|minted|revolver|modcloth|square|ballandbuck|brooktide|zerouv|nylon|poler|converse|bucketfeet|jimmychoo|penguin|square|storq|config.rb|docs|index.js/
})

