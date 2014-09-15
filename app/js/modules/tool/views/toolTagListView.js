define([
    'marionette',
    'application',
    'hbs!modules/tool/templates/toolTagListView'
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
