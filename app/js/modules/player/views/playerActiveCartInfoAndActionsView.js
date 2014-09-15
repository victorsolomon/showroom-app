define([
  'marionette',
  'application',
  'hbs!modules/player/templates/playerActiveCartView'
], function (Marionette, app, template ) {

    return Marionette.ItemView.extend({
      template : template,
      tagName  : 'div',
      id       : "active-cart",

      events: {},

      initialize : function(options){
      },

      onShow: function() {
      }

    });
});
