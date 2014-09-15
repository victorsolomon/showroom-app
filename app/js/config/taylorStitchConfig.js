define([
    'underscore',
    'backbone'
], function (_, Backbone ) {

    window.playerConfig = {

    	gaKey : 'UA-50151593-1',

    	loaderStyle : 'video',
    	mp4loaderSrc : 'static/movies/0328AnimationLoop.mp4',
    	webmLoaderSrc : 'static/movies/0328AnimationLoop.webm',
    	splashImage : 'static/images/posterFrames/posterFrameBoba.png',

		mp4_video_src_small : "SquareBoba720.mp4",
		mp4_video_src_med : "SquareBoba720.mp4",
		mp4_video_src_lrg : "SquareBoba720.mp4",
		webm_video_src_small : 'SquareBoba720.webm',
		webm_video_src_med : 'SquareBoba720.webm',
		webm_video_src_lrg : 'SquareBoba720.webm',

		baseVideoPath : "static/movies/",
		baseProductImagePath : "static/images/productImages/taylorstitch/",

		checkoutType : "shopify",
		checkoutCartAddPath : "http://taylorstitch.com/cart/add",
		checkoutCartLocation : "http://taylorstitch.com/cart",
		shareUrl : "http://www.helloshowroom.co/taylorstitch/",
		shareEmbedBaseUrl : "https://www.helloshowroom.co/taylorstitch/",

		baseTaggingDimensionWidth : 1280,
		baseTaggingDimensionHeight : 720,

		itemData : [
			 {
			 	"id": "1", 
			 	"index": "0",
			 	"largeItemSrc1":"Black_Clip.png", 
			 	"itemImageSrc":"Black_Clip.png", 
			 	"itemTitle":"CLASSIC BLACK", 
			 	"itemDescription":"Hand-crafted classic black tea made with Straus Family Creamery organic milk and home-brewed heirloom organic tea from the world's finest tea purveyors.", 
			 	"itemPrice":"$4", 
		     	"hasSize" : false
		 	}
	    ],
	    
		hotSpots : [
		 	{
				"id": "1", 
				"hotSpotId":"1", 
				"startTime":"0.1359466222", 
				"endTime":"0.2310258549", 
				"hotSpotStartX":"0", 
				"hotSpotStartY":"0", 
				"hotSpotStartWidth":"1280", 
				"hotSpotStartHeight":"720"
		 	},
		 		
		],

		cartItems:[]
	
	};

});