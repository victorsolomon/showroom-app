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

      closeAnimLeftValue      : '-37.40625%',
      closeAnimLeftValueSmall : '-37.70625%',
      openAnimLeftValue       : "0%",

      isOpen                     : false,
      selectedItem               : 1,
      mainSliderPage             : 1,
      mainSliderPageTotal        : 4,
      recommendedSliderPage      : 1,

      events: {},

      initialize: function() {
        app.vent.on('loadItem', this.loadItem, this);
      },

      onShow: function() {
        this.populateRecommededProducts();
        this.closeActiveCart();
        this.recommendedSliderPageTotal = Math.ceil(app.config.recommended.length / 3)
        this.loadItem(1);

        var that = this;

        app.bindClickTouch(this.$('.active-left-arrow'), function(event) {
          that.onLeftActiveArrowClick(event);
        });

        app.bindClickTouch(this.$('.active-right-arrow'), function(event) {
          that.onRightActiveArrowClick(event);
        });

        app.bindClickTouch(this.$('.recommended-left-arrow'), function(event) {
          that.onLeftRecommendedArrowClick(event);
        });

        app.bindClickTouch(this.$('.recommended-right-arrow'), function(event) {
          that.onRightRecommendedArrowClick(event);
        });

        app.bindClickTouch(this.$('.activeCartDrawerBar'), function(event) {
          that.onDrawerClick(event);
        });

        app.bindClickTouch(this.$('.sizeSelector > li'), function(event) {
          that.sizeSelected(event);
        });

        app.bindClickTouch(this.$('.addButton'), function(event) {
          that.addButtonClick(event);
        });

        app.on('resize', this.checkClosePosition, this);
      },

      onDrawerClick: function() {
        this.isOpen ? this.closeActiveCart() : this.openActiveCart();
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

        this.$('#active-cart-main-slider, #active-cart-info-and-actions, #recommended-cart-slider, .recommendText').each(function(index, item) {
          $(item).animate( {'opacity' : 1 }, 200 );
        });

        this.$('.handle').animate({ 'opacity' : 0 }, 200);
        this.isOpen = true;
      },

      closeActiveCart: function() {
        var closeValueToUse = (app.smallMode) ? this.closeAnimLeftValueSmall : this.closeAnimLeftValue;

        $(this.el).parent().animate({ 'left' : closeValueToUse });
        this.$('#active-cart-main-slider, #active-cart-info-and-actions, #recommended-cart-slider, .recommendText').each( function( index, item ){
          $(item).animate({ 'opacity' : 0 }, 200);
        });

        this.$('.handle').animate({ 'opacity' : 1 }, 200);
        this.isOpen = false;
      },

      loadItem: function(id) {
        this.$('.sizeSelector > li').removeClass('selected');
        var itemData = app.config.itemData[id - 1];
        var container = $('.active-slider-container-inner-wrap');

        this.selectedItem   = id;
        this.mainSliderPage = 1;

        this.$('#title').html(itemData.itemTitle);
        this.$('#price').html(itemData.itemPrice);
        this.$('.description-content-td').html(itemData.itemDescription);

        if (itemData.hasSize) {
          $('.sizeSelector > li').css('visibility', 'visible');
        } else {
          $('.sizeSelector > li').css('visibility', 'hidden');
        }

        this.$('.active-slider-container-inner-wrap').css({ 'margin-left' : '0%' });


        if (container.find('.image-slide').length === 3) {
          container.find('.image-slide').remove();
        }

        for (var i = 0; i < itemData.allImages.length; i++) {
          var imageUrl = app.config.baseProductImagePath + "large/" + itemData.allImages[i];
          var imageSlide = $("<div class='slide image-slide'></div>").css({ 'background-image' : 'url(' + imageUrl + ")" });
          container.prepend(imageSlide);
        }

        var variants = itemData.variants;
        var sizeButton = $('.sizeSelector');

        $.map($('.sizeSelector').find('li'), function(e) {
          $(e).removeClass('unavailable');
          if ($(e).attr('data-variant') !== '')  {
            return $(e).attr('data-variant', '');
          }
        });


        if (variants != null)  {
          if (variants.xsmall != null) {
            sizeButton.find('li[data-value="xsmall"]').attr('data-variant', variants.xsmall.toString())
          }

          if (variants.small != null) {
            sizeButton.find('li[data-value="small"]').attr('data-variant', variants.small.toString())
          }

          if (variants.medium != null) {
            sizeButton.find('li[data-value="medium"]').attr('data-variant', variants.medium.toString())
          }

          if (variants.large != null) {
            sizeButton.find('li[data-value="large"]').attr('data-variant', variants.large.toString())
          }

          if (variants.xlarge != null) {
            sizeButton.find('li[data-value="xlarge"]').attr('data-variant', variants.xlarge.toString())
          }
        }

        $.map(sizeButton.find('li'), function(el) {
          if ($(el).attr('data-variant') === '') {
            $(el).addClass('unavailable');
          }
        });
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
          this.$('.active-slider-container-inner-wrap').animate({ 'margin-left' : offset });
        }
        app.Analytics.activeItemScrollLeftClick();
      },

      onRightActiveArrowClick: function() {
        if (app.smallMode) {
          this.loadNextItemInSmallMode();
        } else {
          this.mainSliderPage += 1;

          if (this.mainSliderPage > this.mainSliderPageTotal) {
            this.mainSliderPage = 1;
          }

          var offset = -(this.mainSliderPage - 1) * 100 + '%';
          this.$('.active-slider-container-inner-wrap').animate({ 'margin-left' : offset });
        }
        app.Analytics.activeItemScrollRightClick();
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
        this.$('.sizeSelector > li').removeClass('selected');

        if ($(event.currentTarget).hasClass('unavailable')) {
          return;
        } else {
          $(event.currentTarget).addClass('selected');
        }

        app.Analytics.logAnalyticEvent(app.Analytics.analyticVars.AC_LRG_ITEM_SIZE_SELECT, {});
      },

      addButtonClick: function() {
        var startingData = app.config.cartItems;

        if (startingData.length > 0) {
          for (var i = 0; i < startingData.length; i++) {
            if (startingData[i].id === this.selectedItem) {
              return;
            }
          }
        }

        if (app.cartManager.getItemById(this.selectedItem).variants.oneSize) {
          var data     = app.cartManager.getItemById(this.selectedItem);
          var cartItem = $.extend(true, {}, data);
          cartItem.variant = app.cartManager.getItemById(this.selectedItem).variants.oneSize[0];

          app.Analytics.logAnalyticEvent(app.Analytics.analyticVars.ADD_ITEM_CLICK, { 'itemName' : cartItem.itemTitle, 'itemId' : cartItem.id });

          app.cartManager.addItem(cartItem);
          app.vent.trigger('itemAdded');
        } else if ($('.sizeSelector').children().hasClass('selected')) {
          var size         = $('.sizeSelector').children('.selected').attr('data-size');
          var data         = app.cartManager.getItemById(this.selectedItem);
          var cartItem     = $.extend(true, {}, data);
          cartItem.size    = size;
          cartItem.variant = $('.sizeSelector').children('.selected').attr('data-variant')

          app.Analytics.logAnalyticEvent(app.Analytics.analyticVars.ADD_ITEM_CLICK, { 'itemName' : cartItem.itemTitle, 'itemId' : cartItem.id });

          app.cartManager.addItem(cartItem);
          app.vent.trigger('itemAdded');
        }
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

        var offset = -(this.recommendedSliderPage - 1) * 100 + '%';
        this.$('.recommended-slider-container-inner-wrap').animate({ 'margin-left' : offset });
      },

      populateRecommededProducts: function() {
        var data           = app.config.recommended;
        var that           = this;
        var amountOfSlides = Math.ceil(data.length / 3);
        var sliderWidth    = 100 * amountOfSlides;
        var slideWidth     = 100 / amountOfSlides + "%";
        var itemId;

        this.$('.recommended-slider-container-inner-wrap').css('width' , sliderWidth + "%");

        for (var i = 0; i < data.length; i+=3) {

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
            itemId = $(event.currentTarget).attr('itemId');
            that.loadItem(itemId);
            app.Analytics.logAnalyticEvent(app.Analytics.analyticVars.AC_RCM_ITEM_CLICK, { 'itemId' : itemId });
          });

          if (data[i+1]) {
            var slide2 = $("<div class='slide1'></div>");
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
              app.Analytics.logAnalyticEvent(app.Analytics.analyticVars.AC_RCM_ITEM_CLICK, { 'itemId' : itemId } );
            });
          }

          if (data[i+2]) {
            var slide2 = $("<div class='slide1'></div>");
            var imgUrl = app.config.baseProductImagePath + "small/" + data[i+2].largeItemSrc1;

            slide2.css({
              'background-image': 'url(' + imgUrl + ')',
              'background-size': 'contain',
              'background-repeat': 'no-repeat'
            }).attr('itemId', data[i+2].id);
            slide.append(slide2);

            app.bindClickTouch(slide2, function(event) {
              var itemId = $(event.currentTarget).attr('itemId');
              that.loadItem(itemId);
              app.Analytics.logAnalyticEvent(app.Analytics.analyticVars.AC_RCM_ITEM_CLICK, { 'itemId' : itemId } );
            });
          }

          this.$('.recommended-slider-container-inner-wrap').append(slide);
        }
      }
    });
});
