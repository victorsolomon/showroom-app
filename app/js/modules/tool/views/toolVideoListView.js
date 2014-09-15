define([
    'marionette',
    'application',
    'hbs!modules/tool/templates/toolVideoListView',
    'modules/tool/collections/videoCollection',
], function (Marionette, app, template, VideoCollection ) {

    return Marionette.ItemView.extend({
        template: template,
        tagName: 'div',
        
        events: {
            'click .add' : 'onAddClick'
        },

        initialize : function(){
            this.videoCollection = new VideoCollection();
            this.videoCollection.on('add', this.render );
            this.videoCollection.on('add', this.videoCollection.saveToLocalStorage );
        },

        onShow: function() {
            
        },

        onRender : function() {
             this.$('.editable').editable(function(value, settings) { 
                 console.log(this);
                 console.log(value);
                 console.log(settings);
                 return(value);
              }, { 
                 type    : 'textarea',
                 submit  : 'OK',
             });  
        },

        serializeData : function() {
            return {
                'videos' : this.videoCollection.toJSON()
            };
        },

        onAddClick : function() {
            this.videoCollection.addEmpty();
            this.render();
        }

    });
});
