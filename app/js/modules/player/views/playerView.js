define([
  'marionette',
  'application',
  'hbs!modules/player/templates/playerView',
  'modules/player/views/playerVideoView',
  'modules/player/views/playerActiveCartView',
  'modules/player/views/playerCheckoutCartView',
  'modules/player/views/playerPosterView',
  'modules/player/views/playerShareView',
  'modules/player/views/playerSplashVideoView'
], function (Marionette, app, template, PlayerVideoView, PlayerActiveCartView,
             PlayerCheckoutCartView, PlayerPosterView, PlayerShareView, PlayerSplashVideoView) {

    return Marionette.Layout.extend({
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

        app.vent.on('splashClick', this.fadeSplashPlayer, this);

        var that = this;

        app.vent.on('showMask', function(isEnd) {
          $('#mask-region').hide().show().animate({ 'opacity' : 0.7 }, 400).css('z-index', 4);

          that.isEnd = isEnd;

          if (!that.isEnd) {
            $('.play-button, .share-icn, .fullscreen-icn').show();
          }
        });

        app.vent.on('hideMask', function() {
          $('#mask-region').animate({ 'opacity' : 0.0 }, 400).css('z-index', 2);
          $('.play-button, .share-icn, .fullscreen-icn').hide();
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

        if (playerWidth <= 600) {
          app.smallMode = true;
          $('body').addClass('smallApp');
        } else {
          app.smallMode = false;
          $('body').removeClass('smallApp');
        }

        if (app.isMobileSafari()) {
          this.calculateContainerSize();
        }

        app.trigger('resize');
        this.checkCartStatus();

        var baseWidth = 1280;
        var newFontPct = playerWidth / baseWidth * 62.5;
        $('html').css( 'font-size' , newFontPct + '%', 'important' );
      },

      onShow: function() {
        this.$('.play-button').hide();

        if (app.config.loaderStyle === 'video') {
          this.playerPosterRegion.show(this.playerSplashVideoView);
        } else {
          this.playerPosterRegion.show(this.playerPosterView);
        }

        this.playerPosterRegion.$el.css('z-index', 10);

        if (app.isMobileSafari()) {
          $('body,html').addClass('ipad');

          this.showMainPlayer();
          this.calculateContainerSize();
          // $('.fullscreen').remove();
        } else {
          // $('html').resizable({
          //     aspectRatio: 16 / 9, minWidth: 640, maxWidth: 1920, resize : this.onResize
          // });
          // this.fadeSplashPlayer();
        }

        $('.fullscreen-icn').show();
      },

      calculateContainerSize: function(argument) {
        var windowWidth = $(window).width();
        var htmlHeight = windowWidth * (9 / 16);
        console.log(htmlHeight);
        $('html, #showroom-player').css('width' , windowWidth).css('height' , htmlHeight);

        if (app.isMobileSafari()) {
          var baseWidth = 1280;
          var newFontPct = windowWidth / baseWidth * 62.5;
          $('html').attr('style', 'width:' + windowWidth + ';height:' + htmlHeight + ';font-size:' + newFontPct + '% !important;');
        }
      },

      fadeSplashPlayer: function() {
        $(this.playerPosterRegion.el).hide();
        this.showMainPlayer();

        if (!app.isMobileSafari()) {
          this.playerVideoView.play();
        }
      },

      showMainPlayer: function() {
        var that = this;

        this.videoRegion.show(this.playerVideoView);
        this.videoRegion.$el.css('z-index', 1);

        this.activeCartRegion.show(this.playerActiveCartView);
        this.checkoutCartRegion.show(this.playerCheckoutCartView);
        this.shareRegion.show(this.playerShareView);

        app.bindClickTouch(this.$('.scrubber'), function(event) {
          that.onScrubberClick(event);
        });

        app.bindClickTouch(this.$('.share-icn'), function(event) {
          that.onShareClick(event);
          app.Analytics.shareButtonClick()
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

        var that = this;

        for (var i = 0; i < app.config.hotSpots.length; i++) {
          var hotspotItemData = app.config.hotSpots[i];

          var beacon = $('<div class="beacon"></div>')

          if (app.config.hotspotColor != null) {
            beacon.css('background', app.config.hotspotColor);
          }

          var hotspot =
                $('<div class="hotSpot"></div>')
                .attr('id', 'hotspot' + hotspotItemData.hotSpotId)
                .attr('itemId', hotspotItemData.id)
                .attr('hotSpotId', hotspotItemData.hotSpotId)
                .append(beacon);

          app.bindClickTouch($(hotspot), function(event) {
            that.tagClick(event);
          });

          $('.hotspot-container').append(hotspot);
        }
      },

      hoverBeaconsOn: function() {
        // For testing purposes
        // $('.hotSpot').css({display: 'block', background: 'blue', opacity: 0.1});
        $('.pause-button').show();

        if (app.isPlaying === false) {
          $('.pause-button').hide();
        }

        if (app.config.beaconPlacement === 'top')  {
          $('.beacon').css({
            bottom : 'auto',
            top    : '10px'
          });
        }
      },

      hoverBeaconsOff: function() {
        // For testing purposes
        // $('.hotSpot').css({display: 'none', background: 'none'});
        $('.pause-button').hide();
      },

      tagClick: function(event) {
        var itemId = $(event.currentTarget).attr('itemId');
        var data   = app.cartManager.getItemById(itemId);

        app.Analytics.logAnalyticEvent(app.Analytics.analyticVars.TAG_ITEM_CLICK, { 'itemName': data.itemTitle, 'itemId': data.id });
        app.vent.trigger('showMask');
        app.vent.trigger('pause');

        this.playerActiveCartView.loadItem(itemId);
        this.playerActiveCartView.openActiveCart();
      },

      updateTagPosition: function(timeSig, duration) {
        var currentTime = timeSig / duration;
        var ratioComparisonWidth = 1920;

        if (app.config.baseTaggingDimensionWidth) {
          ratioComparisonWidth = app.config.baseTaggingDimensionWidth;
        }

        var ratio = $('html').width() / ratioComparisonWidth;

        for (var i in app.config.hotSpots) {

          var hotSpot = app.config.hotSpots[i];

          if (currentTime >= hotSpot.startTime && currentTime <= hotSpot.endTime) {
            var percentThroughAnim = (currentTime - hotSpot.startTime) / (hotSpot.endTime - hotSpot.startTime) * 100000;
            var posX   = hotSpot.hotSpotStartX;
            var posY   = hotSpot.hotSpotStartY;
            var endX   = hotSpot.hotSpotEndX;
            var endY   = hotSpot.hotSpotEndY;
            var width  = hotSpot.hotSpotStartWidth;
            var height = hotSpot.hotSpotStartHeight;

            posX *= ratio;
            posY *= ratio;
            width *= ratio;
            height *= ratio;

            $('#hotspot' + hotSpot.hotSpotId).css({ 'left' : posX, 'top' : posY, 'width' : width, 'height' : height });

            // // TODO: animation prototype
            // if (endX != null && endY != null) {
            //   $('#hotspot' + hotSpot.hotSpotId).Velocity({
            //     left : endX,
            //     top  : endY
            //   }, percentThroughAnim, function() {
            //     $('#hotspot' + hotSpot.hotSpotId).css({ left : posX, top : posY });
            //   });
            // }


          } else {
            $('#hotspot' + hotSpot.hotSpotId).css({ 'left' : -2000 });
          }
        }
      },

      onShareClick: function() {
        var vendor = app.config.gaVendorName;
        app.Analytics.logAnalyticEvent(app.Analytics.analyticVars.CB_SHAREBUTTON_CLICK, { 'vendor' : vendor });
        app.vent.trigger('pause');
        app.vent.trigger('showMask');
        this.playerShareView.animateIn();

        if (app.smallMode) {
          this.playerActiveCartView.closeActiveCart();
          this.playerCheckoutCartView.closeCheckoutCart();
        }
      },

      checkCartStatus: function() {
        if (this.playerCheckoutCartView.isOpen || this.playerActiveCartView.isOpen || this.playerShareView.isOpen) {
          app.vent.trigger('pause');
          app.vent.trigger('showMask');

          if (app.smallMode) {
            this.playerShareView.animateOut();
          }
        } else {
          app.vent.trigger('play');
          app.vent.trigger('hideMask');
        }
      },

      onTimeUpdate: function(videoTimeObj) {
        this.currentTime = videoTimeObj.currentTime;
        this.duration    = videoTimeObj.duration;

        //update scrub bar
        var currentProgress = videoTimeObj.currentTime / videoTimeObj.duration;

        this.$('.scrubber').children('p').css('width' , currentProgress * 100 + '%');
        this.$('.scrubber').children('div').css('width' , (1 - currentProgress) * 100 + '%');
        this.updateTagPosition(this.currentTime, this.duration);

        if (currentProgress >= 1.0) {
          this.playerActiveCartView.openActiveCart();
          this.playerCheckoutCartView.openCheckoutCart();

          app.vent.trigger('showMask', true);

          this.$('.replay-button').show();
          this.$('.play-button').hide();

          this.isEnd = true;
        } else {
          this.isEnd = false;
        }
      },

      onScrubberClick: function(event) {
        var scrubberWidth = parseInt(this.$('.scrubber').css('width'));

        //for touch devices
        var pageX;
        if (event.originalEvent.touches && event.originalEvent.touches[0].pageX) {
          pageX = event.originalEvent.touches[0].pageX;
        }
        else {
          pageX = (( event.pageX ) ? event.pageX : event.x);
        }

        var seekTime = pageX / scrubberWidth * this.duration;
        app.vent.trigger('seek', seekTime);

        this.playerActiveCartView.closeActiveCart();
        this.playerCheckoutCartView.closeCheckoutCart();
        this.playerShareView.animateOut();
        app.vent.trigger('hideMask');
        app.Analytics.logAnalyticEvent(app.Analytics.analyticVars.CB_JUMPTOTIME_CLICK, { 'timeJumpedTo' : seekTime });
      },

      onMaskClick: function() {
        this.playerActiveCartView.closeActiveCart();
        this.playerCheckoutCartView.closeCheckoutCart();
        this.playerShareView.animateOut();
        app.vent.trigger('hideMask');
        app.vent.trigger('play');
      },

      onReplayClick: function() {
        this.$('.replay-button').hide();
        app.vent.trigger('replay');
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
        var id = 'showroom-player';
        app.Analytics.logAnalyticEvent(app.Analytics.analyticVars.CB_FULLSCREEN_CLICK, {});

        if (!app.isFullscreen) {
          var element = document.getElementById(id);

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
