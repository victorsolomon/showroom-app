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
  'keyframes',
], function (Marionette, app, template, PlayerVideoView, PlayerActiveCartView,
             PlayerCheckoutCartView, PlayerPosterView, PlayerShareView, PlayerSplashVideoView, ActiveItemThirdPanel, CartThirdPanelCustomize, keyframes) {

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

        var baseWidth = 1280;
        var newFontPct = playerWidth / baseWidth * 62.5;
        $('html').css('font-size' , newFontPct + '%', 'important');
        $('.hotSpot').remove();
        this.createBeacons();
      },

      onShow: function() {
        this.$('.play-button').hide();

        this.playerPosterRegion.show(this.playerPosterView);
        this.playerPosterRegion.$el.css('z-index', 10);

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

        $('html, #showroom-player').css('width' , windowWidth).css('height' , htmlHeight);

        if (app.isiPhone()) {
          $('html, #showroom-player').css('width', '100%');

          if (window.orientation === 90 || window.orientation === -90) {
            $('html, body').addClass('iphone-landscape').removeClass('iphone-portrait');
          } else {
            $('html, body').addClass('iphone-portrait').removeClass('iphone-landscape');
          }
        } else if (app.isMobileSafari()) {
          var baseWidth = 1280;
          var newFontPct = windowWidth / baseWidth * 62.5;
          $('html').attr('style', 'width:' + windowWidth + ';height:' + htmlHeight + ';font-size:' + newFontPct + '% !important;');
        }
      },

      fadeSplashPlayer: function() {
        if (!app.isiPhone()) {
          $(this.playerPosterRegion.el).hide();
        }

        this.showMainPlayer();

        if (!app.isMobileSafari()) {
          this.playerVideoView.play();
        }
      },

      showMainPlayer: function() {
        var that = this;

        this.videoRegion.show(this.playerVideoView);
        this.videoRegion.$el.css('z-index', 1);
        this.shareRegion.show(this.playerShareView);

        app.bindClickTouch(this.$('.scrubber'), function(event) {
          that.onScrubberClick(event);
        });

        app.bindClickTouch(this.$('.share-icn, .share-text, .embed-text, .embed-icn'), function(event) {
          that.onShareClick(event);
          // app.Analytics.shareButtonClick();
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
          this.removeKeyframes(hotspotItemData.pathName);

          var beacon = $('<svg version="1.1" class="beacon" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="52px" height="54px" viewBox="0 0 52 54" enable-background="new 0 0 52 54" xml:space="preserve" type="image/svg+xml"><g><circle class="beacon-circle" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-miterlimit="10" cx="26" cy="27" r="19.358"/><g><path class="beacon-path" fill="#FFFFFF" d="M24.771,28.259H14.457c-0.42,0-0.779-0.36-0.779-0.779v-0.9c0-0.419,0.359-0.779,0.779-0.779h10.314V15.426c0-0.419,0.359-0.719,0.779-0.719h0.959c0.42,0,0.78,0.3,0.78,0.719v10.375h10.254c0.42,0,0.779,0.36,0.779,0.779v0.9c0,0.419-0.359,0.779-0.779,0.779H27.29v10.254c0,0.42-0.36,0.78-0.78,0.78H25.55c-0.42,0-0.779-0.36-0.779-0.78V28.259z"/></g></g><g><circle fill="none" stroke="#FFFFFF" stroke-width="2" stroke-miterlimit="10" cx="88.71" cy="25.533" r="19.358"/><g><path fill="#FFFFFF" d="M87.481,26.792H77.167c-0.42,0-0.779-0.36-0.779-0.779v-0.9c0-0.419,0.359-0.779,0.779-0.779h10.314V13.959c0-0.419,0.359-0.719,0.779-0.719h0.959c0.42,0,0.78,0.3,0.78,0.719v10.375h10.254c0.42,0,0.779,0.36,0.779,0.779v0.9c0,0.419-0.359,0.779-0.779,0.779H90v10.254c0,0.42-0.36,0.78-0.78,0.78h-0.959c-0.42,0-0.779-0.36-0.779-0.78V26.792z"/></g></g></svg>');

          if (app.config.hotspotColor != null) {
            $('.beacon-circle').attr('stroke', app.config.hotspotColor);
            $('.beacon-path').attr('fill', app.config.hotspotColor);
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
        if (app.isiPhone()) {
          $('.fullscreen-icn').hide();
        } else {
          $('.pause-button, .fullscreen-icn').show();
        }

        if (app.isPlaying === false) {
          $('.pause-button, .fullscreen-icn').hide();
        }

        if (app.config.beaconPlacement === 'top')  {
          $('.beacon').css({
            bottom : 'auto',
            top    : '10px'
          });
        } else if (app.config.beaconPlacement === 'topLeft') {
          $('.beacon').css({
            bottom : 'auto',
            top    : '10px',
            left   : '-30%'
          });
        }
      },

      hoverBeaconsOff: function() {
        $('.pause-button, .fullscreen-icn').hide();
      },

      tagClick: function(event) {
        var itemId = $(event.currentTarget).attr('itemId');
        var data   = app.cartManager.getItemById(itemId);

        app.Analytics.logAnalyticEvent(app.Analytics.analyticVars.TAG_ITEM_CLICK, { 'itemName': data.itemTitle, 'itemId': data.id });
        app.vent.trigger('showMask');
        app.vent.trigger('pause');

        this.playerActiveCartView.loadItem(itemId);
        this.chooseItemPanel();
      },

      removeKeyframes: function(pathName) {
        if ($('.keyframe-style#' + pathName).length > 0) {
          $('.keyframe-style#' + pathName).remove();
        }
      },

      updateTagPosition: function(timeSig, duration, newTime) {
        var currentTime          = timeSig / duration;
        var ratioComparisonWidth = 1920;
        var ratio                = $('html').width() / ratioComparisonWidth;
        // console.log(currentTime);

        for (var i in app.config.hotSpots) {

          var hotSpot = app.config.hotSpots[i];

          if (currentTime >= hotSpot.startTime && currentTime <= hotSpot.endTime) {
            var startX      = hotSpot.hotSpotStartX;
            var startY      = hotSpot.hotSpotStartY;
            var width       = hotSpot.hotSpotStartWidth;
            var height      = hotSpot.hotSpotStartHeight;
            var totalSteps  = 0;

            startX *= ratio;
            startY *= ratio;
            width  *= ratio;
            height *= ratio;

            if (hotSpot.movingBeacon === true && app.isiPhone() === null) {

              if ($('.keyframe-style#' + hotSpot.pathName).length === 0) {

                // if (newTime != null) {
                //   var newCurrentTime = newTime / duration;

                //   if (newCurrentTime > hotSpot.startTime) {
                //     var oldSteps             = hotSpot.endTime - hotSpot.startTime;
                //     var diff                 = newCurrentTime - hotSpot.startTime;
                //     var percentage           = diff / oldSteps;
                //     totalSteps               = hotSpot.endTime - newCurrentTime;
                //     hotSpot.bezierStartXY[0] = (hotSpot.bezierMoveXY[0] - hotSpot.bezierStartXY[0]) * (diff / oldSteps);
                //     console.log(hotSpot.bezierStartXY);
                //   }
                // } else {
                  totalSteps = hotSpot.endTime - hotSpot.startTime;
                // }


                hotSpot.bezierStartXY[0] *= ratio;
                hotSpot.bezierStartXY[1] *= ratio;

                // TODO: Add back in once iPhone beacons are in place.
                // if (app.isiPhone()) {
                //   if (window.orientation === 90 || window.orientation === -90) {
                //     hotSpot.bezierMoveXY[0] = hotSpot.bezierMoveXY[0] / 2;
                //     hotSpot.bezierMoveXY[1] = hotSpot.bezierMoveXY[1] / 2;
                //     hotSpot.firstPull[0]    = hotSpot.firstPull[0] / 2;
                //     hotSpot.firstPull[1]    = hotSpot.firstPull[1] / 2;
                //   } else {
                //     hotSpot.bezierMoveXY[0] = hotSpot.bezierMoveXY[0] / 4;
                //     hotSpot.bezierMoveXY[1] = hotSpot.bezierMoveXY[1] / 4;
                //     hotSpot.firstPull[0]    = hotSpot.firstPull[0] / 4;
                //     hotSpot.firstPull[1]    = hotSpot.firstPull[1] / 4;
                //   }
                // }

                if (hotSpot.pathType === 'regular') {
                  var rules = $.keyframe.bezierPath( { name: hotSpot.pathName } , hotSpot.bezierStartXY, hotSpot.bezierMoveXY, hotSpot.firstPull);
                } else if (hotSpot.pathType === 'advanced') {
                  var rules = $.keyframe.bezierPath( { name: hotSpot.pathName } , hotSpot.bezierStartXY, hotSpot.bezierMoveXY, hotSpot.firstPull, hotSpot.secondPull);
                } else if (hotSpot.pathType === 'circular' && hotSpot.circularCentersXY != null && hotSpot.radius != null) {
                  var rules = $.keyframe.circlePath( { name: hotSpot.pathName } , hotSpot.circularCentersXY, hotSpot.radius );
                }

                $.keyframe.define([rules]);

                var duration = Math.abs(totalSteps * hotSpot.durationMultiple);
                // console.log(duration);

                $('#hotspot' + hotSpot.hotSpotId)
                .css({ 'left' : startX, 'top' : startY, 'width' : width, 'height' : height})
                .playKeyframe({
                  name: hotSpot.pathName,
                  duration: duration + 's',
                  timingFunction: hotSpot.timingType || 'linear',
                  iterationCount: hotSpot.iterationCount,
                  direction: 'normal',
                  fillMode: 'none',
                  complete: function() {
                    $(this).css({'left' : -2000});
                  }
                });
              }
            } else {
              $('#hotspot' + hotSpot.hotSpotId).css({ 'left' : startX, 'top' : startY, 'width' : width, 'height' : height})
            }
          } else {
            $('#hotspot' + hotSpot.hotSpotId).css({ 'left' : -200000 });
          }
        }
      },

      onShareClick: function() {
        var vendor = app.config.gaVendorName;
        app.Analytics.logAnalyticEvent(app.Analytics.analyticVars.CB_SHAREBUTTON_CLICK, { 'vendor' : vendor });

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
          app.vent.trigger('play');
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
            this.playerActiveCartView.openActiveCart();
            this.playerCheckoutCartView.openCheckoutCart();

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

        //for touch devices
        if (event.originalEvent.touches && event.originalEvent.touches[0].pageX) {
          var pageX = event.originalEvent.touches[0].pageX;
        } else {
          var pageX = (( event.pageX ) ? event.pageX : event.x);
        }

        var seekTime = pageX / scrubberWidth * this.duration;
        app.vent.trigger('seek', seekTime);

        this.playerActiveCartView.closeActiveCart();
        this.playerCheckoutCartView.closeCheckoutCart();
        this.playerShareView.animateOut();

        $('.hotSpot').remove();
        this.createBeacons();
        this.updateTagPosition(this.currentTime, this.duration, seekTime);

        app.vent.trigger('hideMask');
        app.Analytics.logAnalyticEvent(app.Analytics.analyticVars.CB_JUMPTOTIME_CLICK, { 'timeJumpedTo' : seekTime });
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
