define([
    'marionette',
    'application',
    'hbs!modules/player/templates/playerSplashVideoView'
], function (Marionette, app, template, config ) {

    return Marionette.ItemView.extend({
      tagName  : 'div',
      template : template,
      id       : "poster-frame",

      events: {
        'click': 'onSplashVideoClick'
      },

      initialize: function() {
      },

      onSplashVideoClick: function() {
        app.vent.trigger('splashClick');
      },

      onShow: function() {
        var that  = this;
        var video = $('video');

        video
          .append("<source src='" + app.config.mp4loaderSrc + "' type='video/mp4'></source>")
          .append("<source src='" + app.config.webmloaderSrc + "' type='video/webm'></source>");
        video.attr('loop', true);
      },

      onCanPlay: function() {
        $('video')[0].play();
      }
    });
});
