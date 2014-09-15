define([
  'jquery',
  'marionette',
  'application',
  'hbs!modules/player/templates/playerCheckoutCartView',
  'modules/player/views/playerCheckoutCartItemView',
  'libs/jcookie'
], function ($, Marionette, app, template, PlayerCheckoutCartItemView, jcookie) {

    return Marionette.ItemView.extend({
      template : template,
      tagName  : 'div',
      id       : "checkout-cart",

      // TODO: why are these numbers so specific?
      closeAnimRightValue      : '-26.40625%',
      closeAnimRightValueSmall : '-35.79167%',
      openAnimRightValue       : "0%",

      isOpen : false,

      events: {
        // 'click .checkoutCartDrawerBar' : 'onDrawerClick',
        // 'click .checkoutButton' : 'onCheckoutButtonClick'
      },

      initialize : function(options) {},

      onShow: function() {
        this.closeCheckoutCart();
        app.vent.on('itemAdded', this.renderCart, this);
        app.vent.on('itemRemoved', this.renderCart, this);

        if (app.config.checkoutType == "email") {
          $('.checkoutButton').attr('href', app.config.checkoutUrl).attr('target', '_top');
        } else {
          $('.checkoutButton').attr('href', app.config.checkoutUrl).attr('target', '_blank');
        }

        var that = this;
        app.bindClickTouch($('.checkoutCartDrawerBar'), function(event) { that.onDrawerClick(event); } );
        app.bindClickTouch($('.checkoutButton'), function(event) { that.onCheckoutButtonClick(event); } );
        app.bindClickTouch($('.logo'), function(event) { window.open('http://www.helloshowroom.co'); } );

        app.on('resize', this.checkClosePosition, this);
      },

      onRender: function() {
        this.renderCart();
      },

      renderCart : function(){
        this.openCheckoutCart();

        $('.items').empty();

        for (var i in app.config.cartItems) {
          var item = this.generateItem(app.config.cartItems[i], i);
          $('.items').append(item);
        }
      },

      generateItem: function(itemData, index) {
        var imgUrl = app.config.baseProductImagePath + "small/" + itemData.largeItemSrc1;
        var title  = itemData.itemTitle;
        var size   = itemData.size;
        var price  = itemData.itemPrice;

        var item = $("<li class='cartItem'>" +
                      "<div class='cartItemImage' style='background-image:url(" + imgUrl + ");'></div>" +
                      "<div class='cartItemDescription'>" +
                        "<div class='cartItemTitle'>" + title + "</div>" +
                        "<div class='cartItemPrice'>" + price + "</div>" +
                        ((itemData.hasSize) ? "<div class='itemSize'>" + size + "</div>" : "" ) +
                      "</div>" +
                      "<div class='close' data-index='" + index + "'>X</div>" +
                      "<div class='clear'></div>" +
                    "</li>");

        var that = this;

        app.bindClickTouch(item.find('.close'), function(event) {
          that.onCloseClick(event);
        });

        return item;
      },

      onCloseClick: function(event) {
        var index = parseInt($(event.currentTarget).attr('data-index'));
        app.cartManager.removeFromCart(index);
        app.vent.trigger('itemRemoved');
      },

      onDrawerClick: function() {
        this.isOpen ? this.closeCheckoutCart() : this.openCheckoutCart()
        app.vent.trigger('checkoutDrawerClick');
      },

      checkClosePosition: function() {
        if (!this.isOpen) {
          var closeValueToUse = (app.smallMode) ? this.closeAnimRightValueSmall : this.closeAnimRightValue;
          $(this.el).parent().css('right', closeValueToUse);
        }
      },

      openCheckoutCart: function() {
        $(this.el).parent().animate({ 'right' : this.openAnimRightValue });

        $('.items, .logo, .checkoutButton').each(function(index, item) {
          $(item).animate({'opacity' : 1}, 200);
        });

        $('.handle').animate({'opacity' : 0}, 200);
        this.isOpen = true;
      },

      closeCheckoutCart: function() {
        var closeValueToUse = ( app.smallMode ) ? this.closeAnimRightValueSmall : this.closeAnimRightValue;

        $(this.el).parent().animate({'right' : closeValueToUse});

        $('.items, .logo, .checkoutButton').each(function(index, item) {
          $(item).animate({'opacity' : 0}, 200);
        });

        $('.handle').animate({'opacity' : 1}, 200);
        this.isOpen = false;
      },

      // TODO: is there another way to check for shopify? string checking seems fragile
      onCheckoutButtonClick: function() {
        if (app.config.checkoutType === 'shopify') {
          this.performShopifyCheckout();
        } else if (app.config.checkoutType === 'cookie') {
          this.performCookieCheckout();
        }
      },

      performShopifyCheckout: function(){
        this.checkoutAddedCount = 0;

        var addedItems = $.extend(true, {}, app.config.cartItems);
        var that = this;

        // TODO: what is this ID number?
        for (var i in addedItems) {
          $.post(app.config.checkoutCartAddPath, { 'id' : 298719667 }).done(function() {
            that.checkShopifyCheckoutCount();
          });
        }
      },

      checkShopifyCheckoutCount: function() {
        this.checkoutAddedCount += 1;

        if (this.checkoutAddedCount >= app.config.cartItems.length) {
          window.open(app.config.checkoutCartLocation);
        }
      },

      performUrlCheckout: function(method) {
          //if( method == "POST" )
              //$.post( url, data )
          //if( method == "GET" ){
              // url = app.config.checkoutUrl + "?data=" + urlencode( JSON.stringify( app.config.cartItems) );
              //window.open( url )
          // }
      },

      performCookieCheckout: function() {

        var cookieObj = {};
        cookieObj.dataItems = [];

        var addedItems = $.extend(true, {}, app.config.cartItems);

        // TODO: this double for loop needs to be revisited
        for (var i in addedItems) {

          if (!cookieObj.dataItems.length) {
            cookieObj.dataItems.push($.extend(true, {}, addedItems[i].cookieObj));
          } else {
            var added = false;

            for (var j in cookieObj.dataItems) {
              if (addedItems[i].cookieObj.itemToken === cookieObj.dataItems[j].itemToken) {
                added = true;
              }
            }

            if (added) {
              cookieObj.dataItems[j].quantity++;
            } else {
              cookieObj.dataItems.push(addedItems[i].cookieObj);
            }
          }
        }

        var cookieDataEncodeStr = JSON.stringify(cookieObj);
        var domainKey = this.getCookieDomain();

        // TODO: is this cookie only being used on boba guys?
        $.cookie('cart-boba-guys', cookieDataEncodeStr, {expires : 7, domain : domainKey});

        domainKey ? window.open('https://' + domainKey + '/market/shop/cart') : window.open('https://squareup.com/market/shop/cart');
      },

      getCookieDomain : function(){
        var windowLocation = window.location.href;

        // TODO: cookies shouldn't be hardcoded
        var ramenLocalMatch = 'squareup.com.ramen.local';
        var broadwayMatch   = 'broadway.squareup.com';
        var squareMatch     = 'squareup.com';

        if (windowLocation.indexOf(ramenLocalMatch) >= 0) {
          return ramenLocalMatch;
        } else if (windowLocation.indexOf(broadwayMatch) >= 0) {
          return broadwayMatch;
        } else if (windowLocation.indexOf(squareMatch) >= 0) {
          return squareMatch;
        } else {
          return '';
        }

      }
  });
});
