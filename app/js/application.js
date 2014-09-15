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

    return app;
});
