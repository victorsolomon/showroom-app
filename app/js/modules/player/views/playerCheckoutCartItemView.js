define([
  'marionette',
  'application',
  'hbs!modules/player/templates/playerCheckoutCartItemView'
], function (Marionette, app, template) {

    return Marionette.ItemView.extend({
      template : template,
      tagName  : 'li',
      id       : "cart-item",

      events: {},

      initialize: function(options) {
      },

      onShow: function() {
      }

    });
});
