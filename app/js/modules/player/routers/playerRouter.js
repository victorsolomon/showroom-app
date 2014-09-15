define([
  'marionette',
  'modules/player/controllers/playerController'
], function (Marionette, PlayerController) {
    'use strict';

    return Marionette.AppRouter.extend({

      appRoutes: {
        '': 'openPlayer'
      },

      controller: new PlayerController()
    });
});
