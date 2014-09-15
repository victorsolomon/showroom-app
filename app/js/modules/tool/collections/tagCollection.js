define([
  'jquery', 'backbone', 'underscore',
  'modules/tool/tagModel'
], function ($, Backbone, _, TagModel ) {
    return Backbone.Collection.extend({

      model: TagModel,

    });

});
