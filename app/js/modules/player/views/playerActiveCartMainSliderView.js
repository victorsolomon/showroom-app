define([
  'marionette',
  'application',
  'hbs!modules/player/templates/playerActiveCartMainSliderView'
], function (Marionette, app, template) {

    return Marionette.ItemView.extend({
      template : template,
      tagName  : 'div',
      id       : "active-cart-main-slider",

      events: {
        'click .left-arrow'  : 'onLeftArrowClick',
        'click .right-arrow' : 'onRightArrowClick'
      },

      initialize : function(options){
      },

      onShow: function() {

      },

      loadItem : function( itemData ) {

      },

      onLeftArrowClick : function() {

      },

      onRightArrowClick : function() {

      }

    });
});
