require.config({
  'paths': {
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

  // default plugin settings, listing here just as a reference
  hbs: {
    templateExtension: 'hbs',
    // if disableI18n is `true` it won't load locales and the i18n helper
    // won't work as well.
    disableI18n: true
  }
});
