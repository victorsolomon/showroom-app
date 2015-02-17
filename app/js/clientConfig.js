require.config({
  paths: {
    'jquery'        : 'libs/jquery/dist/jquery',
    'underscore'    : 'libs/lodash-3.1.0',
    'backbone'      : 'libs/backbone/backbone',
    'hbs'           : 'libs/hbs/hbs',
    'Handlebars'    : 'libs/handlebars/handlebars',
    'marionette'    : 'libs/marionette/lib/backbone.marionette',
    'jsmpeg'        : 'libs/jsmpeg',
    'keyframes'     : 'libs/keyframes',
    'pathfinder'    : 'libs/keyframes.pathfinder',
    JSXTransformer  : 'libs/react/JSXTransformer',
    jsx             : "libs/jsx",
    react           : 'libs/react/react'
  },

  jsx : {
    fileExtension: '.jsx'
  },

  shim: {
    JSXTransformer: {
      exports: 'JSXTransformer'
    },
    backbone: {
      exports: 'Backbone',
      deps: ['jquery', 'underscore']
    },
    marionette: {
      deps: ['backbone']
    }
  },

  // default plugin settings, listing here just as a reference
  hbs: {
    templateExtension: 'hbs',
    // if disableI18n is `true` it won't load locales and the i18n helper
    // won't work as well.
    disableI18n: true
  }
});

