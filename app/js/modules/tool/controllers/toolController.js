define([
  'jquery',
  'backbone',
  'application',
  'modules/tool/views/toolView',
], function ($, Backbone, app, MainView) {

    return Marionette.Controller.extend({

      initialize: function(options) {

      },

      openTool: function () {
        this.mainView = new MainView();
        app.mainRegion.show(this.mainView);
      }
    });
});
