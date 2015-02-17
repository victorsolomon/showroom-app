define([
  'marionette',
  'application',
  'hbs!modules/player/templates/cartThirdPanelCustomize',
  'modules/player/views/playerActiveCartView',
  'modules/player/views/playerCheckoutCartView'
], function(Marionette, app, template, PlayerActiveCartView, PlayerCheckoutCartView) {

    return Marionette.ItemView.extend({
      template         : template,
      tagName          : 'div',
      className        : 'third-panel-cart-customizers',

      closeAnimRightValue : '-38.79167%',
      openAnimRightValue  : "0%",
      isOpen              : false,

      initialize: function() {
        this.checkoutCartView = new PlayerCheckoutCartView();
        this.customizePanel   = new PlayerActiveCartView();
      },

      onShow: function() {
        this.closeCheckoutCart();
        this.checkoutCartView.emailCheckout();

        app.bindClickTouch($('.showroom-checkout-text'), function(event) {
          window.open('http://www.helloshowroom.co');
        });

        app.bindClickTouch($('.customize-button'), function(event) {
          this.loadItemOptions(event);
        }.bind(this));

        app.bindClickTouch(this.$('.addButton'), function(event) {
          this.addItem();
        }.bind(this));

        app.bindClickTouch(this.$('.view-cart-button'), function() {
          this.viewCart();
        }.bind(this));

        app.on('resize', this.checkClosePosition, this);
      },

      openCheckoutCart: function() {
        var itemId = $('.customize-button').data('item');
        var selectedItem = app.config.itemData[itemId - 1];

        if (selectedItem.noOptions === true) {
          this.addItem();
        } else {
          $('.customization-panel').slideDown();
          $('.third-panel-checkout').slideUp();
        }

        $(this.el).parent().animate({ 'right' : this.openAnimRightValue });

        $('.checkout-cart-handle').animate({'opacity' : 0}, 200);
        this.isOpen = true;
      },

      closeCheckoutCart: function() {
        $(this.el).parent().animate({'right' : this.closeAnimRightValue});

        $('.checkout-cart-handle').animate({'opacity' : 1}, 200);
        this.isOpen = false;
      },

      checkClosePosition: function() {
        if (!this.isOpen) {
          $(this.el).parent().css('right', this.closeAnimRightValue);
        }
      },

      loadItemOptions: function(event) {
        this.openCheckoutCart();
      },

      viewCart: function() {
        $('.customization-panel').slideUp();
        $('.third-panel-checkout').slideDown();
      },

      addItem: function() {
        var addValidItem = this.customizePanel.addButtonClick();
        var itemId = $('.customize-button').data('item');
        var selectedItem = app.config.itemData[itemId - 1];

        if (addValidItem === true) {
          this.checkoutCartView.renderCart();

          if (selectedItem.noOptions === true) {
            $('.customization-panel').hide();
            $('.third-panel-checkout').show();
          } else {
            $('.customization-panel').slideUp();
            $('.third-panel-checkout').slideDown();
          }
        }
      }
    });
});
