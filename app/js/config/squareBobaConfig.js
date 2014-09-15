define([
    'underscore',
    'backbone'
], function (_, Backbone ) {

    window.playerConfig = {

    	gaKey : 'UA-50151593-1',

    	loaderStyle : 'image',
    	mp4loaderSrc : 'static/movies/0328AnimationLoop.mp4',
    	webmLoaderSrc : 'static/movies/0328AnimationLoop.webm',

		mp4_video_src_small : "SquareBoba720.mp4",
		mp4_video_src_med : "SquareBoba720.mp4",
		mp4_video_src_lrg : "SquareBoba720.mp4",
		webm_video_src_small : 'SquareBoba720.webm',
		webm_video_src_med : 'SquareBoba720.webm',
		webm_video_src_lrg : 'SquareBoba720.webm',

		baseVideoPath : "static/movies/",
		baseProductImagePath : "static/images/productImages/squareboba/",

		checkoutType : "email",
		checkoutUrl : "mailto:we@helloshowroom.co?subject=Showroom! Showroom!&body=Tell me more!",
		shareUrl : "https://squareup.com/market/shop/bobademo",
		shareEmbedBaseUrl : "https://squareup.com/market/shop/bobademo",
		splashImage : 'static/images/posterFrames/posterFrameBoba.png',

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
		     	"hasSize" : false,
		     	"cookieObj" : {"itemToken":"55e59c12-bfce-40dd-a842-b3fcdd3209d0","variationToken":"c8e3e90c-6184-4b0e-b380-6c82e84b104a","quantity":1,"modifierOptionTokens":["2aa967b6-865e-4402-962c-f67008603c4f","dea7b435-9715-4e81-85a1-d9d1ffc9e2ec","b8f4613a-ff6c-4e82-87a7-314da5df566e","a53b3174-2161-48b8-8bf5-94a29b68cdd0"]}
		 	},
		 	{
			 	"id": "2", 
			 	"index": "1",
			 	"largeItemSrc1":"Matcha_clip.png", 
			 	"itemImageSrc":"Matcha_clip.png", 
			 	"itemTitle":"ICED MATCHA LATTE", 
			 	"itemDescription":"Pairing traditional green tea flavors with local ingredients like Straus Family Creamery organic milk makes Matcha a popular with the neighborhood crowd. Kids and adults alike love the vibrant color and fresh taste.", 
			 	"itemPrice":"$4", 
		     	"hasSize" : false,
		     	"cookieObj" : {"itemToken":"6dac6f4e-1be1-4e68-b93e-a11b873156f4","variationToken":"ec901847-946c-41cc-abcb-c5407eff4dd8","quantity":1,"modifierOptionTokens":["b8f4613a-ff6c-4e82-87a7-314da5df566e","dea7b435-9715-4e81-85a1-d9d1ffc9e2ec","a53b3174-2161-48b8-8bf5-94a29b68cdd0"]}
		 	},
		 	{
			 	"id": "3", 
			 	"index": "2",
			 	"largeItemSrc1":"Thai_clip.png", 
			 	"itemImageSrc":"Thai_clip.png", 
			 	"itemTitle":"THAI TEA", 
			 	"itemDescription":"Our syrup is homemade which means you'll see no signs of powders and artificial ingredients. Thai tea with boba can be enjoyed on a hot summer day or weekend stroll through to the park.", 
			 	"itemPrice":"$4", 
		     	"hasSize" : false,
		     	"cookieObj" : {"itemToken":"7308ece6-1443-42cf-a92a-252c09f291b3","variationToken":"54c6d268-44a2-47fa-9e70-df7b1c2a3674","quantity":1,"modifierOptionTokens":["b8f4613a-ff6c-4e82-87a7-314da5df566e","dea7b435-9715-4e81-85a1-d9d1ffc9e2ec"]}
		 	},
		 	{
			 	"id": "4", 
			 	"index": "3",
			 	"largeItemSrc1":"HongKong_clip.png", 
			 	"itemImageSrc":"HongKong_clip.png", 
			 	"itemTitle":"HONG KONG STYLE", 
			 	"itemDescription":"Hong Kong style is traditionally made with condensed milk. We make ours with local organic milk to offer a more wholesome version of an old classic.", 
			 	"itemPrice":"$4", 
		     	"hasSize" : false,
		     	"cookieObj" : {"itemToken":"3d5972a8-f7b1-48fc-88ba-76c2c40be60c","variationToken":"a3de1091-cd52-48cb-b670-511401ff9b58","quantity":1,"modifierOptionTokens":["b8f4613a-ff6c-4e82-87a7-314da5df566e","2aa967b6-865e-4402-962c-f67008603c4f","dea7b435-9715-4e81-85a1-d9d1ffc9e2ec","a53b3174-2161-48b8-8bf5-94a29b68cdd0"]}
		 	},
		 	{
			 	"id": "5", 
			 	"index": "4",
			 	"largeItemSrc1":"Horchata_Clip.png", 
			 	"itemImageSrc":"Horchata_Clip.png", 
			 	"itemTitle":"HORCHATA", 
			 	"itemDescription":"Inspired by the community where we opened our first shop, the Mission district celebrates vibrant Mexican heritage and welcomed us with open arms.", 
			 	"itemPrice":"$4", 
		     	"hasSize" : false,
		     	"cookieObj" : {"itemToken":"355e02a7-ff12-4522-ae61-5c98e1f11efd","variationToken":"b8612456-1633-4fd7-a58f-ed4e82046c25","quantity":1,"modifierOptionTokens":["dea7b435-9715-4e81-85a1-d9d1ffc9e2ec"]}
		 	}
	    ],
	    
		hotSpots : [
			{
				"id": "2", 
				"hotSpotId":"1", 
				"startTime":"0.075062552", 
				"endTime":"0.135112594", 
				"hotSpotStartX":"144", 
				"hotSpotStartY":"2", 
				"hotSpotStartWidth":"468", 
				"hotSpotStartHeight":"715"
		 	},
		 	{
				"id": "1", 
				"hotSpotId":"2", 
				"startTime":"0.075062552", 
				"endTime":"0.135112594", 
				"hotSpotStartX":"613", 
				"hotSpotStartY":"1", 
				"hotSpotStartWidth":"309", 
				"hotSpotStartHeight":"529"
		 	},
		 	{
				"id": "1", 
				"hotSpotId":"3", 
				"startTime":"0.231859883", 
				"endTime":"0.268557131", 
				"hotSpotStartX":"120", 
				"hotSpotStartY":"13", 
				"hotSpotStartWidth":"697", 
				"hotSpotStartHeight":"682"
		 	},
		 	{
				"id": "1", 
				"hotSpotId":"4", 
				"startTime":"0.269391159", 
				"endTime":"0.314428691", 
				"hotSpotStartX":"454", 
				"hotSpotStartY":"13", 
				"hotSpotStartWidth":"687", 
				"hotSpotStartHeight":"691"
		 	},
		 	{
				"id": "1", 
				"hotSpotId":"5", 
				"startTime":"0.359466222", 
				"endTime":"0.430358632", 
				"hotSpotStartX":"610", 
				"hotSpotStartY":"101", 
				"hotSpotStartWidth":"521", 
				"hotSpotStartHeight":"517"
		 	},
		 	{
				"id": "4", 
				"hotSpotId":"6", 
				"startTime":"0.431192661", 
				"endTime":"0.502085071", 
				"hotSpotStartX":"153", 
				"hotSpotStartY":"99", 
				"hotSpotStartWidth":"523", 
				"hotSpotStartHeight":"525"
		 	},
		 	{
				"id": "5", 
				"hotSpotId":"7", 
				"startTime":"0.502919099", 
				"endTime":"0.57381151", 
				"hotSpotStartX":"607", 
				"hotSpotStartY":"100", 
				"hotSpotStartWidth":"522", 
				"hotSpotStartHeight":"520"
		 	},
		 	{
				"id": "3", 
				"hotSpotId":"8", 
				"startTime":"0.574645538", 
				"endTime":"0.645537948", 
				"hotSpotStartX":"114", 
				"hotSpotStartY":"74", 
				"hotSpotStartWidth":"592", 
				"hotSpotStartHeight":"576"
		 	},
		 	{
				"id": "1", 
				"hotSpotId":"9", 
				"startTime":"0.698081735", 
				"endTime":"0.728940784", 
				"hotSpotStartX":"493", 
				"hotSpotStartY":"4", 
				"hotSpotStartWidth":"783", 
				"hotSpotStartHeight":"709"
		 	},
		 	{
				"id": "1", 
				"hotSpotId":"10", 
				"startTime":"0.729774812", 
				"endTime":"0.794829024", 
				"hotSpotStartX":"744", 
				"hotSpotStartY":"0", 
				"hotSpotStartWidth":"535", 
				"hotSpotStartHeight":"719"
		 	},
		 	{
				"id": "1", 
				"hotSpotId":"11", 
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