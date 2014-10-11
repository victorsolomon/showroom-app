define([
  'application',
  'modules/player/routers/playerRouter',
  'libs/analytics',
], function (app, PlayerRouter, Analytics) {

    app.addInitializer(function () {

      function qs(key) {
        key = key.replace(/[*+?^$.\[\]{}()|\\\/]/g, "\\$&"); // escape RegEx meta chars
        var match = location.search.match(new RegExp("[?&]"+key+"=([^&]+)(&|$)"));
        return match && decodeURIComponent(match[1].replace(/\+/g, " "));
      }

      config = qs('config');

      require(['config/' + config], function() {
        app.config = window.playerConfig;

        //preload images
        for (var i in app.config.itemData) {
          imgSrcSmall = app.config.baseProductImagePath + "small/" + app.config.itemData[i].largeItemSrc1;
          imgSrcLarge = app.config.baseProductImagePath + "large/" + app.config.itemData[i].largeItemSrc1;
          $('<img />').attr('src', imgSrcSmall );
          $('<img />').attr('src', imgSrcLarge );
        }

        Analytics.initializeAnalytics('page', false, app.config.gaKey);

        new PlayerRouter();
        Backbone.history.start();
      });
    });

    app.cartManager = {};
    app.cartManager.cartItems = [];

    app.cartManager.addItem = function(obj) {
      app.config.cartItems.push(obj);
    };

    app.cartManager.getItemById = function(id) {
      for (var i in app.config.itemData) {
        if ("" + id === app.config.itemData[i].id) {
          return app.config.itemData[i];
        }
      }
    };

    app.cartManager.removeFromCart = function(index) {
      app.config.cartItems.splice(index, 1);
    };

    // TODO: what does this control?
    app.cartManager.findCartItemByItemToken = function(itemToken) {
      for (var i in app.config.itemData) {
        if (app.config.itemData[i].cookieObj.itemToken === itemToken) {
          return app.config.itemData[i];
        }
      }
    };

    app.Analytics = Analytics;

    app.isMobileSafari = function(argument) {
      return (navigator.userAgent.match(/(iPod|iPhone|iPad)/) && navigator.userAgent.match(/AppleWebKit/));
    };

    app.bindClickTouch = function(selector, callback) {
      var eventType = this.isMobileSafari() ? 'touchstart' : 'click';

      $(selector).bind(eventType, function(event) {
        callback(event);
      });
    };

    app.start();
});
