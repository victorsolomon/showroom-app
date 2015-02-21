define([
  'marionette',
  'application',
  'hbs!modules/player/templates/activeItemThirdPanel',
  'modules/player/views/playerActiveCartView'
], function(Marionette, app, template, PlayerActiveCartView) {

    return Marionette.ItemView.extend({
      template: template,
      tagName: 'div',
      className: 'active-item-third-panel',

      closeAnimLeftValue : '-43.70625%',
      openAnimLeftValue       : "0%",

      isOpen                : false,
      selectedItem          : 1,
      mainSliderPage        : 1,
      mainSliderPageTotal   : 3,
      recommendedSliderPage : 1,
      currentlySelectedItem : null,

      initialize: function() {
        this.activeItemThirdPanel = new PlayerActiveCartView();
      },

      onShow: function() {
        if (app.config.variantColors) {
          this.colorOptions = app.config.variantColors.length;
        }

        this.closeActiveCart();
        this.activeItemThirdPanel.loadItem(1);

        app.bindClickTouch($('.active-left-arrow'), function(event) {
          this.activeItemThirdPanel.onLeftActiveArrowClick(event);
        }.bind(this));

        app.bindClickTouch($('.active-right-arrow'), function(event) {
          this.activeItemThirdPanel.onRightActiveArrowClick(event);
        }.bind(this));

        app.bindClickTouch($('.activeCartDrawerBar'), function(event) {
          this.activeItemThirdPanel.onDrawerClick(event);
        }.bind(this));

        app.on('resize', this.checkClosePosition, this);
      },

      checkClosePosition: function() {
        if (!this.isOpen) {
          $(this.el).parent().css('left', this.closeAnimLeftValue);
        }
      },

      openActiveCart: function() {
        $(this.el).parent().animate({ 'left' : this.openAnimLeftValue });
        $(this.el).children().animate({ 'opacity': 1 }, 200);
        $('.active-cart-handle').animate({ 'opacity' : 0 }, 200);

        this.isOpen = true;
      },

      closeActiveCart: function() {
        $(this.el).parent().animate({ 'left' : this.closeAnimLeftValue });
        $(this.el).children().animate({ 'opacity': 0 }, 200);
        $('.active-cart-handle').animate({ 'opacity' : 1 }, 200);

        this.isOpen = false;
      },
    });
});
