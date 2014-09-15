define([
  'jquery', 'backbone', 'underscore',
  'modules/tool/styleModel'
], function ($, Backbone, _, StyleModel ) {
    return Backbone.Collection.extend({

      model: StyleModel,

    });

});
