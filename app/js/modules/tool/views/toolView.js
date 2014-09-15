define([
    'marionette',
    'application',
    'hbs!modules/tool/templates/toolView',
    'modules/tool/views/toolProductListView',
    'modules/tool/views/toolStylingView',
    'modules/tool/views/toolVideoListView',
    'modules/tool/views/toolTagListView',
    'jqueryui'
], function (Marionette, app, template, ToolProductListView, ToolStylingView, ToolVideoListView, ToolTagListView ) {

    return Marionette.Layout.extend({
        template: template,
        tagName: 'div',
        id: "tool",
        
        events: {
        },

        regions: {
            videoListRegion : '#video-list-region',
            productsRegion : '#product-list-region',
            tagsRegion : '#tag-list-region',
            stylesRegion : '#styling-region',
            playerRegion : "#player-region"
        },

        initialize : function(){
            this.toolVideoListView = new ToolVideoListView();
        },

        onShow: function() {
            this.videoListRegion.show( this.toolVideoListView );
            
            $('.module').draggable({ handle: ".header", containment : 'body' });    
        },

    });
});
