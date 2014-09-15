define([
    'application',
    'modules/tool/routers/toolRouter',
    'libs/toolUtils'
], function (app, ToolRouter, Utils ) {
    "use strict";

    app.addInitializer(function () {
        new ToolRouter();
        Backbone.history.start();
    });

    app.utils = Utils;

    app.start();
});
