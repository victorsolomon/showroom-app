define([
  'marionette',
  'application',
  'hbs!modules/player/templates/playerActiveCartRecommendedSliderView'
], function (Marionette, app, template) {

    return Marionette.ItemView.extend({
      template : template,
      tagName  : 'div',
      id       : "active-cart-recommended-items",

      events: {},

      initialize: function(options){
      },

      onShow: function() {
      }

    });
});
