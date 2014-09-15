define([
  'jquery', 'backbone', 'underscore',
  'modules/tool/productModel'
], function ($, Backbone, _, ProductModel ) {
    return Backbone.Collection.extend({

      model: ProductModel,

    });

});
