define([
  'jquery',
  'backbone',
  'application',
  'modules/player/views/playerView',
  'libs/jcookie'
], function ($, Backbone, app, MainView, jcookie) {

    return Marionette.Controller.extend({

      initialize: function(options) {},

      openPlayer: function() {
        var cookieObj = $.cookie('cart-boba-guys');

        if (cookieObj) {
          cookieObj = JSON.parse(cookieObj);

          for (var i in cookieObj.dataItems) {
            quantity = parseInt(cookieObj.dataItems[i].quantity);
            itemToken = cookieObj.dataItems[i].itemToken;

            console.log('quantity: ' + quantity);

            for (var j = 0; j < quantity; j++) {
              app.cartManager.addItem(app.cartManager.findCartItemByItemToken(itemToken));
            }
          }
        }

        this.mainView = new MainView();
        app.mainRegion.show(this.mainView);
      }
    });
  });
