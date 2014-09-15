define([
    'marionette',
    'modules/tool/controllers/toolController'
], function (Marionette, ToolController) {
    'use strict';

    return Marionette.AppRouter.extend({

        appRoutes:{
            '': 'openTool'
        },

        controller: new ToolController()
    });

});
