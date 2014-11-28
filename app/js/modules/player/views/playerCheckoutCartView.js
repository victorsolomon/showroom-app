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

      closeAnimRightValue      : '-26.40625%',
      closeAnimRightValueSmall : '-35.79167%',
      openAnimRightValue       : "0%",
      otherLink : '',
      isOpen : false,

      events: {
        // 'click .checkoutCartDrawerBar' : 'onDrawerClick',
        'click .checkoutButton' : 'onCheckoutButtonClick'
      },

      initialize : function(options) {
        this.otherLink = '';
      },

      onShow: function() {
        var that = this;

        this.closeCheckoutCart();
        app.vent.on('itemAdded', this.renderCart, this);
        app.vent.on('itemRemoved', this.renderCart, this);

        if (app.config.checkoutType === "email") {
          this.$('.checkoutButton').attr('href', app.config.checkoutUrl).attr('target', '_top');
        }

        app.bindClickTouch(this.$('.checkoutCartDrawerBar'), function(event) {
          that.onDrawerClick(event);
        });

        app.bindClickTouch(this.$('.checkoutButton'), function(event) {
          if (app.config.checkoutType === 'shopify') {
            that.performShopifyCheckout();
            window.open(that.otherLink);
          }
        });

        app.bindClickTouch(this.$('.logo'), function(event) {
          window.open('http://www.helloshowroom.co');
        });

        app.on('resize', this.checkClosePosition, this);
      },

      onRender: function() {
        this.renderCart();
      },

      renderCart : function(){
        this.openCheckoutCart();

        this.$('.items').empty();

        for (var i in app.config.cartItems) {
          var item = this.generateItem(app.config.cartItems[i], i);
          this.$('.items').append(item);
        }
      },

      generateItem: function(itemData, index) {
        var imgUrl     = app.config.baseProductImagePath + "small/" + itemData.largeItemSrc1;
        var title      = itemData.itemTitle;
        var size       = itemData.size;
        var price      = itemData.itemPrice || itemData.price;
        var optionType = itemData.variantOptionName;
        var item;

        if (app.config.checkoutType !== 'minted') {
          item = $("<li class='cartItem'>" +
                    "<div class='close' data-index='" + index + "'>X</div>" +
                    "<div class='cartItemImage' style='background-image:url(" + imgUrl + ");'></div>" +
                    "<div class='cartItemDescription'>" +
                      "<div class='cartItemTitle'>" + title + "</div>" +
                      ((itemData.hasSize) ? "<div class='itemSize'>" + size + "</div>" : "" ) +
                      "<div class='cartItemPrice'>" + price + "</div>" +
                    "</div>" +
                    "<div class='clear'></div>" +
                  "</li>");
        } else {
          item = $("<li class='cartItem'>" +
                    "<div class='close' data-index='" + index + "'>X</div>" +
                    "<div class='cartItemImage' style='background-image:url(" + imgUrl + ");'></div>" +
                    "<div class='cartItemDescription'>" +
                      "<div class='cartItemTitle'>" + title + "</div>" +
                      "<div class='itemOptionSize'>" + (size ? size : '') + "</div>" +
                      "<div class='itemOptionType'>" + (optionType ? optionType : '') + "</div>" +
                      "<div class='cartItemPrice'>" + (price ? price : '') + "</div>" +
                    "</div>" +
                    "<div class='clear'></div>" +
                  "</li>");
        }


        var that = this;

        app.bindClickTouch(item.find('.close'), function(event) {
          that.onCloseClick(event);
        });

        this.customMintedCheckout(itemData);

        return item;
      },

      customMintedCheckout: function(item) {
        if (app.config.checkoutType !== 'minted') {
          return;
        } else {
          $('#other-iframe').remove();

          var color = 0;
          var sku = item.variant;

          if (item.optionChoice != null) {
            var paperChoice = item.optionChoice.paperChoice || 62; //default color
            var frameChoice = item.optionChoice.mintedFrameColor;
          } else {
            var paperChoice = 62; //default color
            var frameChoice = 0;
          }

          $('<iframe id="other-iframe"/>').appendTo('body').contents().find('body')
          .append('<form action="http://www.minted.com/product/wall-art-prints/addToCart" method="POST" id="addToCartForm"><input type="hidden" name="colorChoiceIdx" id="colorChoiceIdx" value="' + color + '">  <input type="hidden" name="sku" id="sku" value="' + sku + '">  <input type="hidden" name="paperChoice" id="paperChoice" value="' + paperChoice + '">  <input type="hidden" id="frameChoiceIdx" name="frameChoiceIdx" value="' + frameChoice + '"> </form>');
          $('#other-iframe').contents().find('body').find('form').submit()
        }
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

        this.$('.items, .logo, .checkoutButton').each(function(index, item) {
          $(item).animate({'opacity' : 1}, 200);
        });

        this.$('.handle').animate({'opacity' : 0}, 200);
        this.isOpen = true;
      },

      closeCheckoutCart: function() {
        var closeValueToUse = (app.smallMode) ? this.closeAnimRightValueSmall : this.closeAnimRightValue;

        $(this.el).parent().animate({'right' : closeValueToUse});

        this.$('.items, .logo, .checkoutButton').each(function(index, item) {
          $(item).animate({'opacity' : 0}, 200);
        });

        this.$('.handle').animate({'opacity' : 1}, 200);
        this.isOpen = false;
      },

      onCheckoutButtonClick: function() {
        if (app.config.checkoutType === 'shopify') {
          this.performShopifyCheckout();
        } else if (app.config.checkoutType === 'cookie') {
          this.performCookieCheckout();
        } else if (app.config.checkoutType === 'minted') {
          window.open('http://www.minted.com/cart');
        }
      },

      performShopifyCheckout: function() {
        if (app.config.cartItems.length === 0) {
          return;
        }

        var permalink = '';
        for (var i = 0; i < app.config.cartItems.length; i++) {
          permalink +=  app.config.cartItems[i].variant + ':1,'
        }

        var newDate     = new Date();
        var currentTime = (newDate.getMonth() + 1) + '-' + newDate.getDay(); + '-' + newDate.getFullYear();
        var referral    = '?note=i-know-you-see-me-on-the-video' + currentTime;
        app.Analytics.checkoutClick(app.config.cartItems, currentTime);
        this.otherLink = app.config.checkoutUrl + permalink + referral;
        return this.otherLink;
      },


        // this.$('.checkoutButton').attr('href', checkoutLink).attr('target', '_blank');
        // this.checkoutAddedCount = 0;

        // var addedItems = $.extend(true, {}, app.config.cartItems);
        // var that = this;

        // // TODO: what is this ID number?
        // for (var i in addedItems) {
        //   $.post(app.config.checkoutCartAddPath, { 'id' : 298719667 }).done(function() {
        //     that.checkShopifyCheckoutCount();
        //   });
        // }

      // checkShopifyCheckoutCount: function() {
      //   this.checkoutAddedCount += 1;

      //   if (this.checkoutAddedCount >= app.config.cartItems.length) {
      //     window.open(app.config.checkoutCartLocation);
      //   }
      // },

      // performUrlCheckout: function(method) {
          //if( method == "POST" )
              //$.post( url, data )
          //if( method == "GET" ){
              // url = app.config.checkoutUrl + "?data=" + urlencode( JSON.stringify( app.config.cartItems) );
              //window.open( url )
          // }
      // },

      // performCookieCheckout: function() {

      //   var cookieObj = {};
      //   cookieObj.dataItems = [];

      //   var addedItems = $.extend(true, {}, app.config.cartItems);

      //   // TODO: this double for loop needs to be revisited
      //   for (var i in addedItems) {

      //     if (!cookieObj.dataItems.length) {
      //       cookieObj.dataItems.push($.extend(true, {}, addedItems[i].cookieObj));
      //     } else {
      //       var added = false;

      //       for (var j in cookieObj.dataItems) {
      //         if (addedItems[i].cookieObj.itemToken === cookieObj.dataItems[j].itemToken) {
      //           added = true;
      //         }
      //       }

      //       if (added) {
      //         cookieObj.dataItems[j].quantity++;
      //       } else {
      //         cookieObj.dataItems.push(addedItems[i].cookieObj);
      //       }
      //     }
      //   }

      //   var cookieDataEncodeStr = JSON.stringify(cookieObj);
      //   var domainKey = this.getCookieDomain();

      //   // TODO: is this cookie only being used on boba guys?
      //   $.cookie('revolver-build', cookieDataEncodeStr, {expires : 7, domain : domainKey});

      //   domainKey ? window.open('https://' + domainKey + '/market/shop/cart') : window.open('https://squareup.com/market/shop/cart');
      // },

      // getCookieDomain : function(){
      //   var windowLocation = window.location.href;

      //   // TODO: cookies shouldn't be hardcoded
      //   var ramenLocalMatch = 'squareup.com.ramen.local';
      //   var broadwayMatch   = 'broadway.squareup.com';
      //   var squareMatch     = 'squareup.com';

      //   if (windowLocation.indexOf(ramenLocalMatch) >= 0) {
      //     return ramenLocalMatch;
      //   } else if (windowLocation.indexOf(broadwayMatch) >= 0) {
      //     return broadwayMatch;
      //   } else if (windowLocation.indexOf(squareMatch) >= 0) {
      //     return squareMatch;
      //   } else {
      //     return '';
      //   }

      // }
  });
});
