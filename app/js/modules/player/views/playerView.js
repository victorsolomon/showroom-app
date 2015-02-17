define([
  'marionette',
  'application',
  'hbs!modules/player/templates/playerView',
  'modules/player/views/playerVideoView',
  'modules/player/views/playerActiveCartView',
  'modules/player/views/playerCheckoutCartView',
  'modules/player/views/playerPosterView',
  'modules/player/views/playerShareView',
  'modules/player/views/playerSplashVideoView',
  'modules/player/views/activeItemThirdPanel',
  'modules/player/views/cartThirdPanelCustomize',
  'oembed'
], function (Marionette, app, template, PlayerVideoView, PlayerActiveCartView,
             PlayerCheckoutCartView, PlayerPosterView, PlayerShareView, PlayerSplashVideoView, ActiveItemThirdPanel, CartThirdPanelCustomize, oembed) {

    return Marionette.LayoutView.extend({
      template              : template,
      tagName               : 'div',
      id                    : "showroom-player",
      controlBarFadeTimeout : "",

      isEnd: false,

      events: {
        'mousemove' : 'onMouseMove',
        'mouseover' : 'hoverBeaconsOn',
        'mouseout'  : 'hoverBeaconsOff'
      },

      regions: {
        playerPosterRegion : '#player-poster-region',
        videoRegion        : '#video-region',
        activeCartRegion   : '#active-cart-region',
        checkoutCartRegion : '#checkout-cart-region',
        shareRegion        : '#share-region',
        controlsRegion     : '#controls-region',
        posterRegion       : '#poster-region'
      },

      initialize: function(options) {
        this.playerSplashVideoView  = new PlayerSplashVideoView();
        this.playerVideoView        = new PlayerVideoView();
        this.playerActiveCartView   = new PlayerActiveCartView();
        this.playerCheckoutCartView = new PlayerCheckoutCartView();
        this.playerPosterView       = new PlayerPosterView();
        this.playerShareView        = new PlayerShareView();
        this.activeItemThirdPanel   = new ActiveItemThirdPanel();
        this.customizePanel         = new CartThirdPanelCustomize();

        app.vent.on('splashClick', this.fadeSplashPlayer, this);

        var that = this;

        app.vent.on('showMask', function(isEnd) {
          $('#mask-region').hide().show().animate({ 'opacity' : 0.7 }, 400).css('z-index', 4);

          that.isEnd = isEnd;

          if (app.isiPhone() && !that.isEnd) {
            $('.play-button').show();
            $('.pause-button').hide();
          } else if (!that.isEnd) {
            $('.play-button, .share-icn, .embed-icn').show();

            if (app.thirdPanel === true) {
              $('.share-text, .embed-text').hide();
            } else {
              $('.share-text, .embed-text').show();
            }
          }
        });

        app.vent.on('hideMask', function() {
          $('#mask-region').animate({ 'opacity' : 0.0 }, 400).css('z-index', 2);
          $('.play-button, .share-icn, .share-text, .embed-text, .embed-icn, .fullscreen-icn').hide();

          if (app.isiPhone()) {
            $('.pause-button').show();
          }
        });

        app.vent.on('checkoutDrawerClick', this.checkCartStatus, this);
        app.vent.on('activeDrawerClick', this.checkCartStatus, this);
        app.vent.on('timeUpdate', this.onTimeUpdate, this);

        window.addEventListener('orientationchange', this.calculateContainerSize);

        $(window).on('resize', function() {
          that.applyResizeAttributes();
        });

        this.addSpaceBarClick();

        setTimeout(function() {
          that.applyResizeAttributes();
        }, 200);
      },

      applyResizeAttributes: function() {
        var playerWidth = $('html').width();

        app.trigger('resize');
        this.checkCartStatus();

        if (playerWidth < 641 || app.isiPhone()) {
          app.thirdPanel = true;
          this.activeCartRegion.show(this.activeItemThirdPanel, { preventDestroy: true });
          this.checkoutCartRegion.show(this.customizePanel, { preventDestroy: true });
        } else {
          app.thirdPanel = false;
          this.activeCartRegion.show(this.playerActiveCartView, { preventDestroy: true });
          this.checkoutCartRegion.show(this.playerCheckoutCartView, { preventDestroy: true });
        }

        var newFontPct = playerWidth / 1280 * 62.5;
        $('html').css('font-size' , newFontPct + '%', 'important');
        $('.hotSpot').remove();
        this.createBeacons();
      },

      onShow: function() {
        this.$('.play-button').hide();
        this.playerPosterRegion.show(this.playerPosterView);
        this.playerPosterRegion.$el.css('z-index', 10);

        if (app.isiPhone() == null) {
          this.videoRegion.show(this.playerVideoView);
        }

        if (app.isiPhone()) {
          this.calculateContainerSize();
        } else if (app.isMobileSafari()) {
          $('body,html').addClass('ipad');
          this.calculateContainerSize();
        }
      },

      calculateContainerSize: function() {
        var windowWidth = $(window).width();
        var htmlHeight  = windowWidth * (9 / 16);

        $('html, #showroom-player').css({
          'width'  : windowWidth,
          'height' : htmlHeight
        });

        if (app.isiPhone()) {
          $('html, #showroom-player').css('width', '100%');

          if (window.orientation === 90 || window.orientation === -90) {
            $('html, body').addClass('iphone-landscape').removeClass('iphone-portrait');
          } else {
            $('html, body').addClass('iphone-portrait').removeClass('iphone-landscape');
          }
        } else if (app.isMobileSafari()) {
          var newFontPct = windowWidth / 1280 * 62.5;
          $('html').attr('style', 'width:' + windowWidth + ';height:' + htmlHeight + ';font-size:' + newFontPct + '% !important;');
        }
      },

      fadeSplashPlayer: function() {
        if (!app.isiPhone()) {
          $(this.playerPosterRegion.el).hide();
        }

        this.showMainPlayer();

        if (!app.isiPhone()) {
          this.playerVideoView.play();
        }
      },

      showMainPlayer: function() {
        var that = this;

        if (app.isiPhone()) {
          this.videoRegion.show(this.playerVideoView);
        }

        this.videoRegion.$el.css('z-index', 1);
        this.shareRegion.show(this.playerShareView);

        app.bindClickTouch(this.$('.scrubber'), function(event) {
          that.onScrubberClick(event);
        });

        app.bindClickTouch(this.$('.share-icn, .share-text, .embed-text, .embed-icn'), function(event) {
          that.onShareClick(event);
        });

        app.bindClickTouch(this.$('.fullscreen-icn'), function(event) {
          that.onFullscreenClick(event);
        });

        app.bindClickTouch(this.$('.replay-button'), function(event) {
          that.onReplayClick(event);
        });

        app.bindClickTouch(this.$('.pause-button'), function(event) {
          that.onPauseClick(event);
        });

        app.bindClickTouch(this.$('.play-button'), function(event) {
          that.onMaskClick(event);
          app.Analytics.playButtonControlBarClick()
        });

        app.bindClickTouch(this.$('#mask-region'), function(event) {
          that.onMaskClick(event);
        });

        this.createBeacons();
        this.applyResizeAttributes();
      },

      createBeacons: function() {
        if (app.config.hotSpots.length === $('.hotspot-container').children().length) {
          return;
        }

        for (var i = 0; i < app.config.hotSpots.length; i++) {
          var hotspotItemData = app.config.hotSpots[i];

          var hotspot =
                $('<div class="hotSpot"></div>')
                .attr('id', 'hotspot' + hotspotItemData.hotSpotId)
                .attr('itemId', hotspotItemData.id)
                .attr('hotSpotId', hotspotItemData.hotSpotId);

          app.bindClickTouch($(hotspot), function(event) {
            this.tagClick(event);
          }.bind(this));

          $('.hotspot-container').append(hotspot);
        }
      },

      hoverBeaconsOn: function() {
        if (app.isiPhone()) {
          $('.fullscreen-icn').hide();
        } else {
          $('.pause-button, .fullscreen-icn').show();
          $('#beacon-video').css('opacity', '1');
          $('#theVideo').css('opacity', '0');
        }

        if (app.isMobileSafari()) {
          $('.fullscreen-icn').hide();
        }

        if (app.config.devMode === true) {
          $('.hotSpot').css({
            'opacity'    : '0.5',
            'background' : 'blue'
          });
        }

        if (app.isPlaying === false) {
          $('.pause-button, .fullscreen-icn').hide();
        }
      },

      hoverBeaconsOff: function() {
        $('.pause-button, .fullscreen-icn').hide();
        $('#beacon-video').css('opacity', '0');
        $('#theVideo').css('opacity', '1');

        if (app.config.devMode === true) {
          $('.hotSpot').css({
            'opacity'    : '0.0',
            'background' : 'blue'
          });
        }
      },

      tagClick: function(event) {
        var itemId = $(event.currentTarget).attr('itemId');
        var data   = app.cartManager.getItemById(itemId);

        var keenClickEvent = {
          vendor : app.config.gaVendorName,
          item : {
            name  : data.itemTitle,
            price : data.itemPrice
          }
        }

        app.keenAnalytics.client.addEvent('itemClicked', keenClickEvent, function(err, res) {
          if (!err) console.log(res);
        });

        app.Analytics.logAnalyticEvent(app.Analytics.analyticVars.TAG_ITEM_CLICK, { 'itemName': data.itemTitle, 'itemId': data.id });
        app.vent.trigger('showMask');
        app.vent.trigger('pause');

        this.playerActiveCartView.loadItem(itemId);
        this.chooseItemPanel();
      },

      updateTagPosition: function(timeSig, duration, newTime) {
        var currentTime = timeSig / duration;
        var ratio       = $('html').width() / 1920;

        if (app.config.devMode === true) {
          console.log(currentTime);
        }

        for (var i in app.config.hotSpots) {

          var hotSpot = app.config.hotSpots[i];

          if (currentTime >= hotSpot.startTime && currentTime <= hotSpot.endTime) {
            var startX     = hotSpot.hotSpotStartX;
            var startY     = hotSpot.hotSpotStartY;
            var width      = hotSpot.hotSpotStartWidth;
            var height     = hotSpot.hotSpotStartHeight;

            startX *= ratio;
            startY *= ratio;
            width  *= ratio;
            height *= ratio;

            $('#hotspot' + hotSpot.hotSpotId)
              .css({ 'left' : startX, 'top' : startY, 'width' : width, 'height' : height})
              .addClass('js-active-hotspot');
          } else {
            $('#hotspot' + hotSpot.hotSpotId)
              .css({ 'left' : -200000 })
              .removeClass('js-active-hotspot');
          }
        }
      },

      onShareClick: function() {
        var vendor = app.config.gaVendorName;
        app.Analytics.logAnalyticEvent(app.Analytics.analyticVars.CB_SHAREBUTTON_CLICK, { 'vendor' : vendor });

        var keenClickEvent = {
          vendor: vendor
        };

        app.keenAnalytics.client.addEvent('shareClicked', keenClickEvent, function(err, res) {
          if (!err) console.log(res);
        });

        app.vent.trigger('pause');
        app.vent.trigger('showMask');
        this.playerShareView.animateIn();

        if (app.thirdPanel) {
          this.playerActiveCartView.closeActiveCart();
          this.playerCheckoutCartView.closeCheckoutCart();
        }
      },

      closeSharePanel: function() {
        this.playerShareView.animateOut();
        this.playerActiveCartView.closeActiveCart();
        this.playerCheckoutCartView.closeCheckoutCart();
      },

      checkCartStatus: function() {
        if (this.playerCheckoutCartView.isOpen || this.playerActiveCartView.isOpen || this.playerShareView.isOpen || this.activeItemThirdPanel.isOpen) {
          app.vent.trigger('pause');
          app.vent.trigger('showMask');

          if (app.smallMode) {
            this.playerShareView.animateOut();
          }
        } else {
          app.vent.trigger('hideMask');
        }
      },

      chooseItemPanel: function() {
        if (app.thirdPanel) {
          this.activeItemThirdPanel.openActiveCart();
        } else {
          this.playerActiveCartView.openActiveCart();
        }
      },

      onTimeUpdate: function(videoTimeObj) {
        this.currentTime = videoTimeObj.currentTime;
        this.duration    = videoTimeObj.duration;

        //update scrub bar
        var currentProgress = videoTimeObj.currentTime / videoTimeObj.duration;

        if (app.isiPhone()) {
          if (currentProgress >= 0.993) {
            this.activeItemThirdPanel.openActiveCart();
            this.customizePanel.openCheckoutCart();

            app.vent.trigger('showMask', true);

            this.$('.replay-button').show();
            this.$('.play-button').hide();

            this.isEnd = true;
          }
        } else {
          if (currentProgress >= 1.0) {

          this.chooseItemPanel();
          this.playerCheckoutCartView.openCheckoutCart();

          app.vent.trigger('showMask', true);

          this.$('.replay-button').show();
          this.$('.play-button').hide();

            this.isEnd = true;
          } else {
            this.isEnd = false;
          }
        }

        this.$('.scrubber').children('p').css('width' , currentProgress * 100 + '%');
        this.$('.scrubber').children('div').css('width' , (1 - currentProgress) * 100 + '%');
        this.updateTagPosition(this.currentTime, this.duration);
      },

      onScrubberClick: function(event) {
        var scrubberWidth = parseInt(this.$('.scrubber').css('width'));

        //for touch devices - not ipad/iphone?
        if (event.originalEvent.touches && event.originalEvent.touches[0].pageX) {
          var pageX = event.originalEvent.touches[0].pageX;
        } else {
          var pageX = (( event.pageX ) ? event.pageX : event.x);
        }
        console.log(pageX);
        var seekTime = pageX / scrubberWidth * this.duration;
        app.vent.trigger('seek', seekTime);

        this.playerActiveCartView.closeActiveCart();
        this.playerCheckoutCartView.closeCheckoutCart();
        this.playerShareView.animateOut();

        $('.hotSpot').remove();
        this.updateTagPosition(this.currentTime, this.duration, seekTime);
        this.createBeacons();

        app.vent.trigger('hideMask');
        app.Analytics.logAnalyticEvent(app.Analytics.analyticVars.CB_JUMPTOTIME_CLICK, { 'timeJumpedTo' : seekTime });

        var keenClickEvent = {
          vendor       : app.config.gaVendorName,
          currentTime  : parseInt(this.currentTime, 10) + 's',
          timeJumpedTo : parseInt(seekTime, 10) + 's'
        };

        app.keenAnalytics.client.addEvent('timeJumpedTo', keenClickEvent, function(err, res) {
          if (!err) console.log(res);
        });
      },

      onMaskClick: function() {
        if (app.thirdPanel === true) {
          this.activeItemThirdPanel.closeActiveCart();
          this.customizePanel.closeCheckoutCart();
        } else {
          this.playerActiveCartView.closeActiveCart();
          this.playerCheckoutCartView.closeCheckoutCart();
        }

        this.playerShareView.animateOut();
        app.vent.trigger('hideMask');
        app.vent.trigger('play');
      },

      onReplayClick: function() {
        this.$('.replay-button').hide();
        app.vent.trigger('replay');
        $('.hotSpot').remove();
        app.vent.trigger('splashClick');
        this.onMaskClick();
      },

      onPauseClick: function(event) {
        $('.play-button').show();
        $('.pause-button').hide();
        app.vent.trigger('pause');
      },

      addSpaceBarClick: function() {
        var that = this;

        $(window).keyup(function(event) {
          if (event.keyCode === 32) {
            if (app.isPlaying === true) {
              that.onPauseClick(event);
            } else {
              that.onMaskClick(event);
            }
          }
        });
      },

      onFullscreenClick: function() {
        app.Analytics.logAnalyticEvent(app.Analytics.analyticVars.CB_FULLSCREEN_CLICK, {});

        if (!app.isFullscreen) {
          var element = document.getElementById('showroom-player');

          if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
          } else if (element.webkitRequestFullScreen) {
            element.webkitRequestFullScreen();
          }

          $('html,body').addClass('fullscreen');
        } else {

          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
          }

          $('html,body').removeClass('fullscreen');
        }

        app.isFullscreen = !app.isFullscreen;
      },

      cancelFadeTimeout: function() {
        clearTimeout(this.controlBarFadeTimeout);
      },

      initFadeTimeout: function() {
        var that = this;
        this.controlBarFadeTimeout = setTimeout(function() {
          that.hideControlBar();
        }, 1000);
      },

      showControlBar: function() {
        this.$('.controlBarScrubber').fadeIn();
      },

      hideControlBar: function() {
        this.$('.controlBarScrubber').fadeOut();
      },

      onMouseMove: function() {
        this.cancelFadeTimeout();
        this.showControlBar();

        if (app.isPlaying) {
          this.initFadeTimeout();
        }
      }
    });
});
