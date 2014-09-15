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
          //'click' : 'onSplashClick'
      },

      initialize: function(options) {
      },

      onShow: function() {
      },

      onRender: function() {
        var that = this;
        $(this.el).css('background', 'url(' + app.config.splashImage + ') 100%');

        // $(this.el).css('background-image', 'url(' + app.config.splashImage + ')');
        // $(this.el).css('background-size', '100%');

        if (app.isMobileSafari()) {
          // TODO: Does this ever cause a mem leak?
          $(this.el)[0].onclick = function() {
            $('#player-poster-region').hide();
            $('#video-region').find('video')[0].play();
          };
        } else {
          app.bindClickTouch($('.poster-frame-image'), function(event) {
            that.onSplashClick(event);
          });
        }
      },

      onSplashClick: function() {
        app.vent.trigger('splashClick');
      },
    });
});
