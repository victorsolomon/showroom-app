define([
  'marionette',
  'application',
  'hbs!modules/player/templates/playerActiveCartView',
  'modules/player/views/playerActiveCartMainSliderView',
  'modules/player/views/playerActiveCartInfoAndActionsView',
  'modules/player/views/playerActiveCartRecommendedSliderView',
], function (Marionette, app, template, PlayerActiveCartMainSliderView, PlayerActiveCartInfoAndActionsView, PlayerActiveCartRecommendedSliderView) {

    return Marionette.ItemView.extend({
      template  : template,
      tagName   : 'div',
      id        : "active-cart",
      className : "active-cart",

      closeAnimLeftValue      : '-26.40625%',
      closeAnimLeftValueSmall : '-37.70625%',
      openAnimLeftValue       : "0%",

      isOpen                     : false,
      selectedItem               : 1,
      mainSliderPage             : 1,
      mainSliderPageTotal        : 2,
      recommendedSliderPage      : 1,
      recommendedSliderPageTotal : 3,

      events: {},

      initialize: function() {
        app.vent.on('loadItem', this.loadItem, this);
      },

      onShow: function() {
        this.loadItem( 1 );
        this.populateRecommededProducts();
        this.closeActiveCart();

        var that = this;

        app.bindClickTouch($('.active-left-arrow'), function(event) {
          that.onLeftActiveArrowClick(event);
        });

        app.bindClickTouch($('.active-right-arrow'), function(event) {
          that.onRightActiveArrowClick(event);
        });

        app.bindClickTouch($('.recommended-left-arrow'), function(event) {
          that.onLeftRecommendedArrowClick(event);
        });

        app.bindClickTouch($('.recommended-right-arrow'), function(event) {
          that.onRightRecommendedArrowClick(event);
        });

        app.bindClickTouch($('.activeCartDrawerBar'), function(event) {
          that.onDrawerClick(event);
        });

        app.bindClickTouch($('.sizeSelector > li'), function(event) {
          that.sizeSelected(event);
        });

        app.bindClickTouch($('.addButton'), function(event) {
          that.addButtonClick(event);
        });

        app.on('resize', this.checkClosePosition, this);
      },

      onDrawerClick: function() {
        this.isOpen ? this.closeActiveCart() : this.openActiveCart;
        app.vent.trigger('activeDrawerClick');
      },

      checkClosePosition: function() {
        if (!this.isOpen) {
          var closeValueToUse = (app.smallMode) ? this.closeAnimLeftValueSmall : this.closeAnimLeftValue;
          $(this.el).parent().css('left', closeValueToUse);
        }
      },

      openActiveCart: function() {
        $(this.el).parent().animate({ 'left' : this.openAnimLeftValue });

        $('#active-cart-main-slider, #active-cart-info-and-actions, #recommended-cart-slider, .recommendText').each(function(index, item) {
          $(item).animate( {'opacity' : 1 }, 200 );
        });

        $('.handle').animate({ 'opacity' : 0 }, 200);
        this.isOpen = true;
      },

      closeActiveCart: function() {
        var closeValueToUse = (app.smallMode) ? this.closeAnimLeftValueSmall : this.closeAnimLeftValue;

        $(this.el).parent().animate({ 'left' : closeValueToUse });
        $('#active-cart-main-slider, #active-cart-info-and-actions, #recommended-cart-slider, .recommendText').each( function( index, item ){
          $(item).animate({ 'opacity' : 0 }, 200);
        });

        $('.handle').animate({ 'opacity' : 1 }, 200);
        this.isOpen = false;
      },

      loadItem: function(id) {
        var itemData = app.config.itemData[id-1];

        this.selectedItem   = id;
        this.mainSliderPage = 1;

        $('#title').html(itemData.itemTitle);
        $('#price').html(itemData.itemPrice);
        $('.description-content-td').html(itemData.itemDescription);

        if (itemData.hasSize) {
          $('.sizeSelector > li').css('visibility', 'visible');
        } else {
          $('.sizeSelector > li').css('visibility', 'hidden');
        }

        $('.active-slider-container-inner-wrap').css({ 'margin-left' : '0%' });

        var imageUrl = app.config.baseProductImagePath + "large/" + itemData.largeItemSrc1;
        $('.image-slide').css({ 'background-image' : 'url(' + imageUrl + ")" });
      },

      onLeftActiveArrowClick: function() {
        if (app.smallMode) {
          this.loadPrevItemInSmallMode();
        } else {
          this.mainSliderPage -= 1;

          if (this.mainSliderPage <= 0) {
            this.mainSliderPage = this.mainSliderPageTotal;
          }

          var offset = -(this.mainSliderPage - 1) * 100 + '%';
          $('.active-slider-container-inner-wrap').animate({ 'margin-left' : offset });
        }
      },

      onRightActiveArrowClick: function() {
        if (app.smallMode) {
          this.loadNextItemInSmallMode();
        } else {
          this.mainSliderPage += 1;

          if (this.mainSliderPage > this.mainSliderPageTotal) {
            this.mainSliderPage = 1;
          }

          var offset = -( this.mainSliderPage - 1 ) * 100 + '%';
          $('.active-slider-container-inner-wrap').animate( { 'margin-left' : offset });
        }
      },

      loadPrevItemInSmallMode: function() {
        this.selectedItem--;

        if (this.selectedItem < 1) {
          this.selectedItem = app.config.itemData.length;
        }

        this.loadItem(this.selectedItem);
      },

      loadNextItemInSmallMode: function() {
        this.selectedItem++;

        if (this.selectedItem > app.config.itemData.length)  {
          this.selectedItem = 1;
        }

        this.loadItem(this.selectedItem);
      },

      sizeSelected: function(event) {
        $('.sizeSelector > li').removeClass('selected');
        $(event.currentTarget).addClass('selected');

        app.Analytics.logAnalyticEvent(app.Analytics.AC_LRG_ITEM_SIZE_SELECT, {});
      },

      addButtonClick: function() {
        var size = $('.sizeSelector').children('.selected').attr('data-value');

        var data     = app.cartManager.getItemById(this.selectedItem);
        var cartItem = $.extend(true, {}, data);

        cartItem.size = size;
        app.Analytics.logAnalyticEvent(app.Analytics.ADD_ITEM_CLICK, { 'itemName' : cartItem.itemTitle, 'itemId' : cartItem.id });

        app.cartManager.addItem(cartItem);
        app.vent.trigger('itemAdded');
      },

      onLeftRecommendedArrowClick: function() {
        this.recommendedSliderPage -= 1;

        if (this.recommendedSliderPage <= 0) {
          this.recommendedSliderPage = this.recommendedSliderPageTotal;
        }

        var offset = -(this.recommendedSliderPage - 1) * 100 + '%';
        this.$('.recommended-slider-container-inner-wrap').animate( { 'margin-left' : offset });
      },

      onRightRecommendedArrowClick: function() {
        this.recommendedSliderPage += 1;

        if (this.recommendedSliderPage > this.recommendedSliderPageTotal) {
          this.recommendedSliderPage = 1;
        }

        var offset = -( this.recommendedSliderPage - 1 ) * 100 + '%';
        $('.recommended-slider-container-inner-wrap').animate({ 'margin-left' : offset });
      },

      populateRecommededProducts: function() {
        var data           = app.config.itemData;
        var that           = this;
        var amountOfSlides = Math.ceil(data.length / 2);
        var sliderWidth    = 100 * amountOfSlides;
        var slideWidth     = 100 / amountOfSlides + "%";

        $('.recommended-slider-container-inner-wrap').css('width' , sliderWidth + "%");

        for (var i = 0; i < data.length; i += 2) {

          var slide = $("<div class='slide'></div>");
          slide.css('width', slideWidth);

          var slide1 = $("<div class='slide1'></div>");
          var imgUrl = app.config.baseProductImagePath + "small/" + data[i].largeItemSrc1;

          slide1.css({
            'background-image': 'url(' + imgUrl + ')',
            'background-size': 'contain',
            'background-repeat': 'no-repeat'
          }).attr('itemId', data[i].id);
          slide.append(slide1);

          app.bindClickTouch(slide1, function(event) {
            var itemId = $(event.currentTarget).attr('itemId');
            that.loadItem(itemId);
            app.Analytics.logAnalyticEvent(app.Analytics.AC_RCM_ITEM_CLICK, { 'itemId' : itemId });
          });

          if (data[i+1]) {
            var slide2 = $("<div class='slide2'></div>");
            var imgUrl = app.config.baseProductImagePath + "small/" + data[i+1].largeItemSrc1;

            slide2.css({
              'background-image': 'url(' + imgUrl + ')',
              'background-size': 'contain',
              'background-repeat': 'no-repeat'
            }).attr('itemId', data[i+1].id);
            slide.append(slide2);

            app.bindClickTouch(slide2, function(event) {
              var itemId = $(event.currentTarget).attr('itemId');
              that.loadItem(itemId);
              app.Analytics.logAnalyticEvent( app.Analytics.AC_RCM_ITEM_CLICK, { 'itemId' : itemId } );
            });
          }

          $('.recommended-slider-container-inner-wrap').append(slide);
        }
      }
  });
});
