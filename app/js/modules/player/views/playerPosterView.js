define([
  'marionette',
  'application',
  'hbs!modules/player/templates/playerPosterView'
], function (Marionette, app, template ) {

    return Marionette.ItemView.extend({
      tagName   : 'div',
      className : 'poster-frame',
      id        : "poster-frame",
      template  : template,

      events: {
          // 'click' : 'onSplashClick'
      },

      initialize: function(options) {},

      onShow: function() {
      },

      onRender: function() {
        var that = this;

        if (app.isMobileSafari() && app.config.customSplashImage != null) {
          $(that.el).css('background', 'url(' + app.config.customSplashImage + ') no-repeat center center');
          $(that.el).css('background-size', 'cover');

          $(that.el)[0].onclick = function() {
            $('#player-poster-region').hide();
            $('#video-region').find('video')[0].play();
          };
        } else {
          $(that.el).css('background', 'url(' + app.config.splashImage + ') no-repeat center center');
          $(that.el).css('background-size', 'cover');
          app.bindClickTouch(this.$('.poster-frame-image'), function(event) {
            that.onSplashClick(event);
          });
        }
      },

      onSplashClick: function() {
        app.vent.trigger('splashClick');
      },
    });
});
