define([
  'jquery', 'backbone', 'underscore',
  'modules/tool/models/videoModel'
], function ($, Backbone, _, VideoModel) {
    return Backbone.Collection.extend({

      model : VideoModel,
      key   : "videoListLocalStorage",

      initialize: function() {
        this.clearLocalStorage();
        this.loadFromLocalStorage();
      },

      clearLocalStorage: function() {
        localStorage.setItem(this.key, "");
      },

      loadFromLocalStorage: function() {
        if (localStorage.getItem(this.key)) {
          var models = JSON.parse(localStorage.getItem(this.key));

          for (var i in models) {
            this.add(models[i]);
          }
        }
      },

      saveToLocalStorage: function() {
        localStorage.setItem(this.key, JSON.stringify(this.models));
      },

      addEmpty: function() {
        var newVideoModel = new VideoModel();
        newVideoModel.setDefaults();
        this.add(newVideoModel);
      }
  });
});
