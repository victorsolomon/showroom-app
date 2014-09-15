define([
    'marionette',
    'application',
    'hbs!modules/tool/templates/toolProductListView'
], function (Marionette, app, template ) {

    return Marionette.ItemView.extend({
        template: template,
        tagName: 'div',
        
        events: {
        },

        initialize : function(){
            
        },

        onShow: function() {
            
        }
    });
});
