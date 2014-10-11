define([
  'marionette',
  'application',
  'hbs!modules/player/templates/playerVideoView'
], function (Marionette, app, template, config) {

    return Marionette.ItemView.extend({
      tagName  : 'div',
      template : template,
      id       : "theVideoHolder",

      canPlay: false,

      initialize: function(options) {},

      onShow: function() {
        app.vent.on('seek', this.onSeek, this);
        app.vent.on('pause', this.pause, this);
        app.vent.on('play', this.play, this);
        app.vent.on('replay', this.replay, this);
        this.$('video').hide();
      },

      onRender: function() {
        var that  = this;
        var video = this.$('video');

        if (app.isMobileSafari()) {
          video.attr('src', 'static/movies/' + app.config.mp4_video_src_med);
        }

        video
          .append("<source src='static/movies/" + app.config.mp4_video_src_med + "' type='video/mp4'></source>")
          .append("<source src='static/movies/" + app.config.webm_video_src_med + "' type='video/webm'></source>");

        // this.video.bind('loadeddata', function(event){ that.onCanPlay(); });
        video.bind('canplay', function(event) {
          that.onCanPlay();
        });

        video.bind("timeupdate", function(event) {
          that.onTimeUpdate(this.currentTime, this.duration);
        });

        //  TODO: TURN THIS BACK UP
        video[0].volume = 0.0;
      },

      onCanPlay: function() {
        $('.loadingtrail').hide();
        this.play();
      },

      onTimeUpdate: function(currentTime, duration) {
        app.vent.trigger('timeUpdate', { 'currentTime': currentTime, 'duration': duration });
        this.$('video').show();
      },

      onSeek: function(timeSig) {
        this.$('video')[0].currentTime = timeSig;
      },

      pause: function() {
        this.$('video')[0].pause();
        app.isPlaying = false;
        app.Analytics.pauseButtonControlBarClick();
      },

      play: function() {
        this.$('video')[0].play();
        app.isPlaying = true;
        app.Analytics.playButtonControlBarClick();
      },

      replay: function() {
        this.onSeek(0.0);
        this.play();
      }
    });
});
