define([
    'jquery',
    'backbone'
], function ($, Backbone) {
    return Backbone.Model.extend({

    	defaults : {
    		uuid : "",
    		name : "",
    		create_date : "",
            update_date : "",
    	},

        initialize : function() {

        },

        setDefaults : function() {
            this.set( "uuid", this.generateUUID );
            this.set( "name", "New Video" );
            this.set( "create_date", "1/2/2" );  
            this.set( "create_date", "1/2/2" );
        },

        setUpdateDate : function() {
            this.set( "update_date", "1/4/4" );
        }

    });
});

