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
        $(this.el).css('background', 'url(' + app.config.splashImage + ') no-repeat center center');
        $(this.el).css('background-size', 'cover');

        if (app.isMobileSafari()) {
          $(this.el)[0].onclick = function() {
            $('#player-poster-region').hide();
            $('#video-region').find('video')[0].play();
          };
        } else {
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
