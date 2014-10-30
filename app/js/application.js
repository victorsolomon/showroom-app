define([
  'jquery',
  'underscore',
  'marionette'
], function ($, _, Marionette ) {

    "use strict";

    var app = new Marionette.Application();

    app.addRegions({
      mainRegion : "#main"
    });

    $(window).on('resize', function() {
      var windowWidth = $(window).width();
      $('#frame1').width(windowWidth).height(windowWidth * (9 / 16));
    });

    return app;
});
