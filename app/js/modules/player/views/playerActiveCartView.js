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
      closeAnimLeftValueSmall : '-43.70625%',
      openAnimLeftValue       : "0%",

      isOpen                : false,
      selectedItem          : 1,
      mainSliderPage        : 1,
      mainSliderPageTotal   : 3,
      recommendedSliderPage : 1,
      currentlySelectedItem : null,

      events: {},

      initialize: function() {
        app.vent.on('loadItem', this.loadItem, this);
      },

      onShow: function() {
        if (app.config.variantColors) {
          this.colorOptions = app.config.variantColors.length;
        }

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
        $(this.el).children().animate({ 'opacity': 1 }, 200);
        $('.active-cart-handle').animate({ 'opacity' : 0 }, 200);

        this.isOpen = true;
      },

      closeActiveCart: function() {
        var closeValueToUse = (app.smallMode) ? this.closeAnimLeftValueSmall : this.closeAnimLeftValue;

        $(this.el).parent().animate({ 'left' : closeValueToUse });
        $(this.el).children().animate({ 'opacity': 0 }, 200);
        $('.active-cart-handle').animate({ 'opacity' : 1 }, 200);

        this.isOpen = false;
      },

      removeRecommendedArrows: function() {
        if ($('.recommended-slider-container-inner-wrap .recommended-item-slide').children().length <= 3) {
          $('.recommended-left-arrow, .recommended-right-arrow').hide();
        }
      },

      removeDescriptionArrows: function(id) {
        var items = app.config.itemData[id - 1];

        if (items.itemDescription === null && (items.allImages.length === 1 || items.allImages.length == null)) {
          $('.active-left-arrow, .active-right-arrow').hide();
        } else {
          $('.active-left-arrow, .active-right-arrow').show();
        }
      },

      checkIfSoldOut: function(item) {
        if (item.soldOut === true) {
          $('.size-selector').prepend('<div class="sold-out">Sold Out</div');
        } else {
          $('.sold-out').remove();
        }
      },

      resetSizeOptions: function() {
        // TODO: refactor this into childrenRemove function
        if ($('.size-selector').children().length !== 0) {
          $('.size-selector').children().remove();
        }
      },

      customFontSize: function(item) {
        if (app.config.customFontSize) {
          $(item).css({
            'font-size' : app.config.customFontSize,
            'width'     : app.config.customBoxSize
          });
        }
      },

      loadArtistName: function(item) {
        if (item.isArt) {
          $('.artist-name').text('by ' + item.artist);
        }
      },

      checkColorOptions: function(itemData) {
        if (itemData.hasColor === false) {
          $('.color-selector').css('visibility', 'hidden');
        } else {
          $('.color-selector').css('visibility', 'visible');
        }
      },

      loadItem: function(id, optionSelector) {
        if (optionSelector != null) {
          var itemData = app.config.itemData[id];
        } else {
          var itemData = app.config.itemData[id - 1];
        }

        var container       = $('.active-slider-container-inner-wrap');
        var slideWidth      = 94.5 / (itemData.allImages.length + 1);
        var variants        = itemData.variants;
        var sizeButton      = $('.size-selector');
        var that            = this;
        this.selectedItem   = id;
        this.mainSliderPage = 1;

        this.populateVariantColors();
        // this.populateOtherOptions();

        this.loadArtistName(itemData);
        this.resetSizeOptions();
        this.checkIfSoldOut(itemData);
        this.removeRecommendedArrows();
        this.removeDescriptionArrows(id);

        if (itemData.itemDescription != null) {
          $('.description-content-block').html(itemData.itemDescription);
          $('.description').css({
            'width'   : slideWidth + '%',
            'display' : 'inline-block'
          });
        } else {
          $('.description').css('display', 'none');
        }

        this.$('.size-selector > li').removeClass('selected');
        $('#title').html(itemData.itemTitle);
        $('#price').html(itemData.itemPrice);
        $('.color-selector-item[itemid=' + this.selectedItem + ']').css('border', '1.5px solid black');

        if (optionSelector != null) {
          $('.variant-option-type[itemid=' + id + ']').css('border', '1.5px solid black');
          $('.variant-option-type[itemid=' + id + ']').addClass('chosen');
        }

        if (itemData.hasSize && itemData.soldOut !== true) {
          $('.size-selector > li').css('visibility', 'visible');
        } else {
          $('.size-selector > li').css('visibility', 'hidden');
        }

        this.checkColorOptions(itemData);

        if (Object.prototype.toString.call(itemData.allImages) === '[object Object]') {
          $('.active-slider-container-inner-wrap').children().remove();

          var imageUrl = app.config.baseProductImagePath + itemData.itemImageSrc;
          var imageSlide = $("<div class='active-item-slide active-item-image-slide'></div>").css({
            'background-image' : 'url(' + imageUrl + ")"
          });

          imageSlide.attr('itemId', id);
          container.append(imageSlide);

        } else {
          this.$('.active-slider-container-inner-wrap').css({
            'margin-left' : '0%',
            'width'       : (itemData.allImages.length + 1) * 100 + '%'
          });

          if (container.find('.active-item-image-slide').length) {
            container.find('.active-item-image-slide').remove();
          }

          for (var i = 0; i < itemData.allImages.length; i++) {
            var imageUrl = app.config.baseProductImagePath + itemData.allImages[i];
            var imageSlide = $("<div class='active-item-slide active-item-image-slide'></div>").css({
              'background-image' : 'url(' + imageUrl + ")",
              'width'            : slideWidth + '%'
            });

            container.prepend(imageSlide);
          }
        }

        _.map($('.size-selector').find('li'), function(e) {
          $(e).removeClass('unavailable');
          if ($(e).attr('data-variant') !== '')  {
            return $(e).attr('data-variant', '');
          }
        });

        for (var key in variants) {
          sizeButton.css('visibility', 'visible');

          if (key !== 'oneSize') {
            var newKey = null;

            // in case sizes are mixed numbers and letters
            if (key[0] === '0') {
              newKey = key.replace('0', '');
            }

            var listItem = $('<li data-value="' + key.replace(/"/g, " ").replace(/ /g, '') + '" data-variant="' + variants[key][0].toString() + '" data-price="' + (variants[key][1] ? variants[key][1] : undefined)   + '">' + (newKey ? newKey : key) +'</li>');
            app.bindClickTouch(listItem, function(event) {
              that.sizeSelected(event);
            });

            this.customFontSize(listItem);
            sizeButton.append(listItem);
          } else {
            var listItem = $('<li data-variant="' + variants[key][0].toString() + '">x</li>');
            sizeButton.append(listItem);
            sizeButton.css('visibility', 'hidden');
          }
        }

        _.map(sizeButton.find('li'), function(el) {
          if ($(el).attr('data-variant') === '') {
            $(el).addClass('unavailable');
          }
        });

        if (this.currentlySelectedItem != null) {
          $('.size-selector').find('li[data-value=' + this.currentlySelectedItem + ']').addClass('selected');
        }

        if (window.event != null) {
          this.toggleOptions(window.event);
        }
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
          var items = app.config.itemData[this.selectedItem - 1];
          this.mainSliderPage += 1;

          if (this.mainSliderPage > (items.allImages.length + 1)) {
            this.mainSliderPage = 1;
          }

          var offset = -(this.mainSliderPage - 1) * 95 + '%';
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
        this.currentlySelectedItem = $(event.currentTarget).data('value');
        this.$('.size-selector > li').removeClass('selected');

        if ($(event.currentTarget).hasClass('unavailable')) {
          return;
        } else {
          $(event.currentTarget).addClass('selected');
        }

        this.toggleOptions(event);

        if ($(event.currentTarget).attr('data-price') != null && $(event.currentTarget).attr('data-price') !== 'undefined') {
          $('.price').text($(event.currentTarget).attr('data-price'));
        }

        var selectedSize = event.currentTarget.innerHTML;
        var selectedItem = app.config.itemData[this.selectedItem - 1].itemTitle;
        app.Analytics.logAnalyticEvent(app.Analytics.analyticVars.AC_LRG_ITEM_SIZE_SELECT, { size: selectedItem, item: selectedSize });
      },


      toggleOptions: function(event) {
        if ($.isEmptyObject(app.config.variantOptions) || app.config.variantOptions.length === 0) {
          $('.other-option-selector').hide();
          $('#active-cart-info-and-actions').css('height', '20.5%');
          return;
        }
        // MINTED
        var that          = this;
        var currentItem   = app.config.itemData[this.selectedItem - 1];
        var variantChoice = $('.variant-option-type');

        if ($(event.currentTarget).text().indexOf('Unframed') > -1 || $('.size-selector').children('.selected').length === 0) {
          variantChoice.unbind();
          variantChoice.css('opacity', '0.1');
          that.loadImage(currentItem, 0);
        } else {
          variantChoice.css('opacity', '1');
          variantChoice.on('click touchstart', function(event) {
            var optionId = $(event.currentTarget).attr('itemId');
            var item = currentItem.itemTitle;
            that.loadImage(currentItem, optionId);
            app.Analytics.logAnalyticEvent(app.Analytics.analyticVars.OTHER_OPTION_CLICK, { 'item' : item } );
          });
        }
      },

      addButtonClick: function() {
        var startingData = app.config.cartItems;

        if (app.config.itemData[this.selectedItem - 1].soldOut === true) {
          return;
        }

        if (startingData.length > 0) {
          for (var i = 0; i < startingData.length; i++) {
            if (startingData[i].id === this.selectedItem) {
              return;
            }
          }
        }

        if (app.cartManager.getItemById(this.selectedItem).variants.oneSize) {
          var data         = app.cartManager.getItemById(this.selectedItem);
          var cartItem     = $.extend(true, {}, data);
          cartItem.variant = app.cartManager.getItemById(this.selectedItem).variants.oneSize[0];

          // app.Analytics.logAnalyticEvent(app.Analytics.analyticVars.ADD_ITEM_CLICK, { 'itemName' : cartItem.itemTitle });
          app.Analytics.addItemClick({ 'itemName' : cartItem.itemTitle });

          app.cartManager.addItem(cartItem);
          app.vent.trigger('itemAdded');
        } else if ($('.size-selector').children().hasClass('selected')) {
          var data             = app.cartManager.getItemById(this.selectedItem);
          var cartItem         = $.extend(true, {}, data);
          var selectedChildren = $('.size-selector').children('.selected')
          var selectedOptionId = $('.other-option-selector').children('.chosen').attr('itemid');

          cartItem.variant           = selectedChildren.attr('data-variant')
          cartItem.size              = selectedChildren.attr('data-size') || selectedChildren.text();
          cartItem.variantOptionName = $('.other-option-selector').children('.chosen').attr('itemname');
          cartItem.price             = selectedChildren.attr('data-price');

          if (app.config.variantOptions != null) {
            cartItem.optionChoice      = app.config.variantOptions[selectedOptionId - 1]
          }

          // app.Analytics.logAnalyticEvent(app.Analytics.analyticVars.ADD_ITEM_CLICK, { 'itemName' : cartItem.itemTitle });
          app.Analytics.addItemClick({ 'itemName' : cartItem.itemTitle });

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
        app.Analytics.logAnalyticEvent(app.Analytics.analyticVars.AC_RCM_ITEM_SCROLL_LEFT);
      },

      onRightRecommendedArrowClick: function() {
        this.recommendedSliderPage += 1;

        if (this.recommendedSliderPage > this.recommendedSliderPageTotal) {
          this.recommendedSliderPage = 1;
        }

        var offset = -(this.recommendedSliderPage - 1) * 100 + '%';
        this.$('.recommended-slider-container-inner-wrap').animate({ 'margin-left' : offset });
        app.Analytics.logAnalyticEvent(app.Analytics.analyticVars.AC_RCM_ITEM_SCROLL_RIGHT);
      },

      populateOtherOptions: function() {
        if (app.config.variantOptions.length === 0) {
          return;
        }

        // TODO: refactor this into childrenRemove function
        if ($('.other-option-selector').children().length !== 0) {
          $('.other-option-selector').children().remove();
        }

        var that            = this;
        var options         = app.config.variantOptions;
        var optionSelector  = $('.other-option-selector');
        var currentItem     = app.config.itemData[this.selectedItem - 1];
        var optionBlock;

        for (var key in currentItem.allImages) {

          if (options[key - 1]) {
            $('.option-selector-title').text(options[key - 1].optionType);

            if (options[key - 1].isImage) {
              optionBlock = $('<li class="variant-option-type"></li>');
              var optionImage = app.config.colorVariantsImagePath + options[key - 1].options;
              optionSelector.css('height', '13%');
              optionBlock.css({
                'background-image'  : ('url(' + optionImage + ')'),
                'background-repeat' : 'no-repeat',
                'background-size'   : '101%',
                "border"            : "none"
              });
            } else {
              optionBlock = $('<li class="variant-option-type">' + options[key].options + '</li>');
            }
            optionBlock.attr('itemId', options[key - 1].id);
            optionBlock.attr('itemName', options[key - 1].optionTitle);
            optionSelector.append(optionBlock);

            app.bindClickTouch(optionBlock, function(event) {
              var optionId = $(event.currentTarget).attr('itemId');
              that.loadImage(currentItem, optionId);
              var item = currentItem.itemTitle;
              app.Analytics.logAnalyticEvent(app.Analytics.analyticVars.OTHER_OPTION_CLICK, { 'item' : item } );
            });
          }
        }
      },

      loadImage: function(currentItem, optionId) {
        var container = $('.active-slider-container-inner-wrap');
        $('.variant-option-type').removeClass('chosen');
        $('.variant-option-type').css('border', 'none');

        container.children().remove();
        var imageUrl = app.config.baseProductImagePath + (currentItem.allImages[optionId] || currentItem.itemImageSrc);
        var imageSlide = $("<div class='active-item-slide active-item-image-slide'></div>").css({
          'background-image' : 'url(' + imageUrl + ")"
        });

        if (optionId !== 0) {
          $('.variant-option-type[itemid=' + optionId + ']').css('border', '1.5px solid black');
          $('.variant-option-type[itemid=' + optionId + ']').addClass('chosen');
        }

        imageSlide.attr('itemId', currentItem.id);
        container.append(imageSlide);
      },

      populateVariantColors: function() {
        if (app.config.variantColors.length === 0) {
          return;
        } else {
          var colorSelector = $('.color-selector');
        }
        var data = app.config.variantColors;

        // TODO: refactor this into childrenRemove function
        if (colorSelector.children().length !== 0) {
          colorSelector.children().remove();
        }

        for (var i = 0; i < data.length; i++) {
          if (app.config.itemData[this.selectedItem - 1].colorBlockId === data[i].colorBlockId) {
            var color      = data[i].colorSrc ? data[i].colorSrc : app.config.colorVariantsImagePath + data[i].colorImgSrc;
            var colorBlock = $('<li class="color-selector-item">XX</li>');

            if (data[i].colorSrc) {
              colorBlock.css('background', color).attr('itemId', data[i].id);;
            } else {
              colorSelector.css('height', '23%');
              colorBlock.css({
                'background-image'  : ('url(' + color + ')'),
                'background-repeat' : 'no-repeat',
                'background-size'   : '100%',
                "border"            : "none"
              });
            }

            colorSelector.append(colorBlock);

            app.bindClickTouch(colorBlock, function(event) {
              var itemId = $(event.currentTarget).attr('itemId');
              this.loadItem(itemId);
              var item = app.config.itemData[itemId].itemTitle;
              app.Analytics.logAnalyticEvent(app.Analytics.analyticVars.OTHER_OPTION_CLICK, { 'item' : item } );
            }.bind(this));
          }
        }
      },

      populateRecommededProducts: function() {
        var data           = app.config.recommended;
        var amountOfSlides = Math.ceil(data.length / 3);
        var sliderWidth    = 100 * amountOfSlides;
        var slideWidth     = 100 / amountOfSlides + "%";
        var itemId;

        $('.recommended-slider-container-inner-wrap').css('width' , sliderWidth + "%");

        for (var i = 0; i < data.length; i+=3) {

          var slide = $("<div class='recommended-item-slide'></div>");
          slide.css('width', slideWidth);

          var slide1 = $("<div class='slide-inner-item'></div>");
          var imgUrl = app.config.baseProductImagePath + data[i].itemImageSrc;

          slide1.css({
            'background-image': 'url(' + imgUrl + ')',
            'background-size': 'contain',
            'background-repeat': 'no-repeat'
          }).attr('itemId', data[i].id);
          slide.append(slide1);

          app.bindClickTouch(slide1, function(event) {
            itemId = $(event.currentTarget).attr('itemId');
            this.loadItem(itemId);
            var item = app.config.itemData[this.selectedItem - 1].itemTitle;
            app.Analytics.logAnalyticEvent(app.Analytics.analyticVars.AC_RCM_ITEM_CLICK, { 'item' : item });
          }.bind(this));

          if (data[i+1]) {
            var slide2 = $("<div class='slide-inner-item'></div>");
            var imgUrl = app.config.baseProductImagePath + data[i+1].itemImageSrc;

            slide2.css({
              'background-image': 'url(' + imgUrl + ')',
              'background-size': 'contain',
              'background-repeat': 'no-repeat'
            }).attr('itemId', data[i+1].id);
            slide.append(slide2);

            app.bindClickTouch(slide2, function(event) {
              var itemId = $(event.currentTarget).attr('itemId');
              this.loadItem(itemId);
              var item = app.config.itemData[this.selectedItem - 1].itemTitle;
              app.Analytics.logAnalyticEvent(app.Analytics.analyticVars.AC_RCM_ITEM_CLICK, { 'item' : item });
            }.bind(this));
          }

          if (data[i+2]) {
            var slide2 = $("<div class='slide-inner-item'></div>");
            var imgUrl = app.config.baseProductImagePath + data[i+2].itemImageSrc;

            slide2.css({
              'background-image': 'url(' + imgUrl + ')',
              'background-size': 'contain',
              'background-repeat': 'no-repeat'
            }).attr('itemId', data[i+2].id);
            slide.append(slide2);

            app.bindClickTouch(slide2, function(event) {
              var itemId = $(event.currentTarget).attr('itemId');
              this.loadItem(itemId);
              var item = app.config.itemData[this.selectedItem - 1].itemTitle;
              app.Analytics.logAnalyticEvent(app.Analytics.analyticVars.AC_RCM_ITEM_CLICK, { 'item' : item });
            }.bind(this));
          }

          $('.recommended-slider-container-inner-wrap').append(slide);
        }
      }
    });
});
