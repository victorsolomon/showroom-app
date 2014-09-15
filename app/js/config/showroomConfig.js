define([
    'underscore',
    'backbone'
], function (_, Backbone ) {

    window.playerConfig = {

    	loaderStyle : 'video',
    	mp4loaderSrc : 'static/movies/0328AnimationLoop.mp4',
    	webmLoaderSrc : 'static/movies/0328AnimationLoop.webm',

		mp4_video_src_small : "112313_ShowroomIntro480.mp4",
		mp4_video_src_med : "112313_ShowroomIntro720.mp4",
		mp4_video_src_lrg : "112313_ShowroomIntro1080.mp4",
		webm_video_src_small : '112313_ShowroomIntro480.webm',
		webm_video_src_med : '112313_ShowroomIntro720.webm',
		webm_video_src_lrg : '112313_ShowroomIntro1080.webm',

		baseVideoPath : "static/movies/",
		baseProductImagePath : "static/images/productImages/showroom/",

		checkoutType : "email",
		checkoutUrl : "mailto:we@helloshowroom.co?subject=Showroom! Showroom!&body=Tell me more!",
		shareUrl : "http://www.helloshowroom.co",
		shareEmbedBaseUrl : "http://www.helloshowroom.co/player/showroom/index.html?config=showroomConfig",
		splashImage : 'static/images/posterFrames/NewPosterFrame1080.png',

		itemData : [
			 {
			 	"id": "1",
			 	"index": "0",
			 	"largeItemSrc1":"Green.png",
			 	"itemImageSrc":"Green.png",
			 	"itemTitle":"GREEN SPORT COAT",
			 	"itemDescription":"Two-button sport coat, made from pure Harris Tweed wool, handwoven in the Outer Hebrides of Scotland. The Cambridge is a slim-fitting version of our iconic sack coat and has a shorter length and a more fitted body. Hand-finished upper armholes. 3/2 roll lapel. Half-canvas construction. 3/8 lined with chambray interior. Center vent. Dry clean. Imported.",
			 	"itemPrice":"$110",
		     	"hasSize" : true,
		     	"sizes" : [ 36, 38, 40, 42 ]
		 	},
		 	{
			 	"id": "2",
			 	"index": "1",
			 	"largeItemSrc1":"Brown.png",
			 	"itemImageSrc":"Brown.png",
			 	"itemTitle":"BROWN SPORT COAT",
			 	"itemDescription":"Two-button sport coat, made from a blend of wool, cashmere, linen and silk, woven in Italy by Loro Piana. The slimmer Fitzgerald fit is distinguished by narrow lapels and higher armholes. Minimally lined for ultimate in lightness and comfort. Center vent. Sleeves finished with functional button holes. Dry clean. Made in Italy.",
			 	"itemPrice":"$110",
		     	"hasSize" : true,
		     	"sizes" : [ 36, 38, 40, 42 ]
		 	},
			{
			 	"id": "3",
			 	"index": "2",
			 	"largeItemSrc1":"Plaid.png",
			 	"itemImageSrc":"Plaid.png",
			 	"itemTitle":"PLAID SPORT COAT",
			 	"itemDescription":"Two-button sport coat, made from Shetland wool, woven at Italy's Lanificio di Pray mill. The slimmer Fitzgerald fit is distinguished by narrow lapels and higher, hand-sewn armholes. Hand-sewn armholes. Half-canvas construction. 3/8 lined. Center vent. Dry clean. Imported.",
			 	"itemPrice":"$155",
		     	"hasSize" : true,
		     	"sizes" : [ 36, 38, 40, 42 ]
		 	},
		 	{
			 	"id": "4",
			 	"index": "3",
			 	"largeItemSrc1":"WhiteOxford.png",
			 	"itemImageSrc":"WhiteOxford.png",
			 	"itemTitle":"WHITE OXFORD SHIRT",
			 	"itemDescription":"Pure Supima cotton made with pucker-free seams and specially treated to remain virtually wrinkle free. Center back pleat. Signature shirring at barrel cuffs. Machine wash. Imported.",
			 	"itemPrice":"$65",
		     	"hasSize" : true,
		     	"sizes" : [ 36, 38, 40, 42 ]
		 	},
		 	{
		 		"id": "5",
			 	"index": "4",
			 	"largeItemSrc1":"Beige.png",
			 	"itemImageSrc":"Beige.png",
			 	"itemTitle":"BEIGE SPORT COAT",
			 	"itemDescription":"Two-button sport coat, made from cotton with a bit of Lycra® for stretch, woven in Italy. The slimmer Fitzgerald fit is distinguished by narrow lapels and higher, hand-finished armholes. Self-elbow patches. Half-canvas construction. Leather-covered buttons. Center vent. Dry clean. Imported.",
			 	"itemPrice":"$125",
		     	"hasSize" : true,
		     	"sizes" : [ 36, 38, 40, 42 ]
		 	},
		 	{
		 		"id": "6",
			 	"index": "5",
			 	"largeItemSrc1":"GreyTrousers.png",
			 	"itemImageSrc":"GreyTrousers.png",
			 	"itemTitle":"PLAIN FRONT TROUSERS",
			 	"itemDescription":"Tailored in pure worsted wool. On-seam pockets. Lined to the knee. Finished hem. Dry clean. Imported.",
			 	"itemPrice":"$75",
		     	"hasSize" : true,
		     	"sizes" : [ 31, 33, 35, 37 ]
		 	},
		 	{
		 		"id": "7",
			 	"index": "6",
			 	"largeItemSrc1":"Vase.png",
			 	"itemImageSrc":"Vase.png",
			 	"itemTitle":"BLUE VASE",
			 	"itemDescription":"This exclusive collection of refined yet affordable home accessories is created for everyday use from all-natural, recycled, and new materials, simple and tastefully designed to comfortably mix with any décor. Showcasing the handwork skilled craftsmen, the HomArt collection evokes the warmth and serenity of a less-hurried era.",
			 	"itemPrice":"$45",
		     	"hasSize" : false
		 	},
		 	{
		 		"id": "8",
			 	"index": "7",
			 	"largeItemSrc1":"TableLamp.png",
			 	"itemImageSrc":"TableLamp.png",
			 	"itemTitle":"TABLE LAMP",
			 	"itemDescription":"This fun and stylish table lamp offers a down to Earth, contemporary allure that will liven up your decor. Modern white globe with an organic angular pattern, makes for the perfect inspiration piece to a decorating scheme.",
			 	"itemPrice":"$65",
		     	"hasSize" : false
		 	},
		 	{
		 		"id": "9",
			 	"index": "8",
			 	"largeItemSrc1":"Lamp.png",
			 	"itemImageSrc":"Lamp.png",
			 	"itemTitle":"FLOOR LAMP",
			 	"itemDescription":"This is Mid-Century Modern solid walnut floor lamp with the original shade. Steel footing, polished stem. Great condition with vintage wear.",
			 	"itemPrice":"$85",
		     	"hasSize" : false
		 	},
		 	{
		 		"id": "10",
			 	"index": "9",
			 	"largeItemSrc1":"Desk.png",
			 	"itemImageSrc":"Desk.png",
			 	"itemTitle":"MID CENTURY DESK",
			 	"itemDescription":"The 1/2 brother of the Cushing metal, hand rub beech wood combined with turned legs will make you want to work at home.",
			 	"itemPrice":"$1200",
		     	"hasSize" : false
		 	},
		 	{
		 		"id": "11",
			 	"index": "10",
			 	"largeItemSrc1":"Monitor.png",
			 	"itemImageSrc":"Monitor.png",
			 	"itemTitle":"27\" DISPLAY",
			 	"itemDescription":"A panoramic viewing experience unlike any other. This huge 27-inch glossy widescreen display features a cinematic 16:9 aspect ratio and an astonishing 2560-by-1440 resolution. That gives you more room to work with apps on your MacBook Air or MacBook Pro. ",
			 	"itemPrice":"$999",
		     	"hasSize" : false
		 	}
	    ],

		hotSpots : [

			{
				"id": "3",
				"hotSpotId":"1",
				"index": "0",
				"startTime":"0.08",
				"endTime":"0.122",
				"hotSpotStartX":"0",
				"hotSpotStartY":"545",
				"hotSpotStartWidth":"506",
				"hotSpotStartHeight":"535"
		 	},
		 	{
				"id": "2",
				"hotSpotId":"2",
				"index": "0",
				"startTime":"0.08",
				"endTime":"0.122",
				"hotSpotStartX":"506",
				"hotSpotStartY":"568",
				"hotSpotStartWidth":"387",
				"hotSpotStartHeight":"512"
		 	},
		 	{
				"id": "1",
				"hotSpotId":"3",
				"index": "0",
				"startTime":"0.08",
				"endTime":"0.122",
				"hotSpotStartX":"893",
				"hotSpotStartY":"459",
				"hotSpotStartWidth":"1027",
				"hotSpotStartHeight":"621"
		 	},
		 	{
				"id": "4",
				"hotSpotId":"4",
				"index": "0",
				"startTime":"0.08",
				"endTime":"0.122",
				"hotSpotStartX":"1162",
				"hotSpotStartY":"417",
				"hotSpotStartWidth":"300",
				"hotSpotStartHeight":"663"
		 	},
		 	{
				"id": "3",
				"hotSpotId":"5",
				"index": "0",
				"startTime":"0.122",
				"endTime":"0.191",
				"hotSpotStartX":"0",
				"hotSpotStartY":"546",
				"hotSpotStartWidth":"393",
				"hotSpotStartHeight":"534"
		 	},
		 	{
				"id": "3",
				"hotSpotId":"6",
				"index": "0",
				"startTime":"0.396",
				"endTime":"0.488",
				"hotSpotStartX":"0",
				"hotSpotStartY":"546",
				"hotSpotStartWidth":"393",
				"hotSpotStartHeight":"534"
		 	},
		 	{
				"id": "3",
				"hotSpotId":"7",
				"index": "0",
				"startTime":"0.663",
				"endTime":"0.748",
				"hotSpotStartX":"0",
				"hotSpotStartY":"546",
				"hotSpotStartWidth":"393",
				"hotSpotStartHeight":"534"
		 	},
		 	{
				"id": "2",
				"hotSpotId":"8",
				"index": "0",
				"startTime":"0.122",
				"endTime":"0.191",
				"hotSpotStartX":"394",
				"hotSpotStartY":"585",
				"hotSpotStartWidth":"284",
				"hotSpotStartHeight":"495"
		 	},
		 	{
				"id": "2",
				"hotSpotId":"9",
				"index": "0",
				"startTime":"0.396",
				"endTime":"0.488",
				"hotSpotStartX":"394",
				"hotSpotStartY":"585",
				"hotSpotStartWidth":"284",
				"hotSpotStartHeight":"495"
		 	},
		 	{
				"id": "2",
				"hotSpotId":"10",
				"index": "0",
				"startTime":"0.663",
				"endTime":"0.748",
				"hotSpotStartX":"394",
				"hotSpotStartY":"585",
				"hotSpotStartWidth":"284",
				"hotSpotStartHeight":"495"
		 	},

		 	{
				"id": "1",
				"hotSpotId":"11",
				"index": "0",
				"startTime":"0.122",
				"endTime":"0.191",
				"hotSpotStartX":"705",
				"hotSpotStartY":"471",
				"hotSpotStartWidth":"894",
				"hotSpotStartHeight":"609"
		 	},
		 	{
				"id": "1",
				"hotSpotId":"12",
				"index": "0",
				"startTime":"0.396",
				"endTime":"0.488",
				"hotSpotStartX":"705",
				"hotSpotStartY":"471",
				"hotSpotStartWidth":"894",
				"hotSpotStartHeight":"609"
		 	},
		 	{
				"id": "1",
				"hotSpotId":"13",
				"index": "0",
				"startTime":"0.663",
				"endTime":"0.748",
				"hotSpotStartX":"705",
				"hotSpotStartY":"471",
				"hotSpotStartWidth":"894",
				"hotSpotStartHeight":"609"
		 	},
		 	{
				"id": "4",
				"hotSpotId":"14",
				"index": "0",
				"startTime":"0.122",
				"endTime":"0.191",
				"hotSpotStartX":"1107",
				"hotSpotStartY":"510",
				"hotSpotStartWidth":"218",
				"hotSpotStartHeight":"570"
		 	},
		 	{
				"id": "4",
				"hotSpotId":"15",
				"index": "0",
				"startTime":"0.396",
				"endTime":"0.488",
				"hotSpotStartX":"1107",
				"hotSpotStartY":"510",
				"hotSpotStartWidth":"218",
				"hotSpotStartHeight":"570"
		 	},
		 	{
				"id": "4",
				"hotSpotId":"16",
				"index": "0",
				"startTime":"0.663",
				"endTime":"0.748",
				"hotSpotStartX":"1107",
				"hotSpotStartY":"510",
				"hotSpotStartWidth":"218",
				"hotSpotStartHeight":"570"
		 	},
		 	{
				"id": "11",
				"hotSpotId":"17",
				"index": "0",
				"startTime":"0.122",
				"endTime":"0.191",
				"hotSpotStartX":"1597",
				"hotSpotStartY":"580",
				"hotSpotStartWidth":"323",
				"hotSpotStartHeight":"500"
		 	},
		 	{
				"id": "11",
				"hotSpotId":"18",
				"index": "0",
				"startTime":"0.396",
				"endTime":"0.488",
				"hotSpotStartX":"1597",
				"hotSpotStartY":"580",
				"hotSpotStartWidth":"323",
				"hotSpotStartHeight":"500"
		 	},
		 	{
				"id": "11", "hotSpotId":"19", "index": "0",
				"startTime":"0.663", "endTime":"0.748",
				"hotSpotStartX":"1597", "hotSpotStartY":"580", "hotSpotStartWidth":"323", "hotSpotStartHeight":"500"
		 	},

		 	{
				"id": "5", "hotSpotId":"20", "index": "0",
				"startTime":"0.08", "endTime":"0.122",
				"hotSpotStartX":"0", "hotSpotStartY":"338", "hotSpotStartWidth":"443", "hotSpotStartHeight":"742"
		 	},
		 	{
				"id": "5", "hotSpotId":"21", "index": "0",
				"startTime":"0.191", "endTime":"0.396",
				"hotSpotStartX":"0", "hotSpotStartY":"338", "hotSpotStartWidth":"443", "hotSpotStartHeight":"742"
		 	},
		 	{
				"id": "5", "hotSpotId":"22", "index": "0",
				"startTime":"0.488", "endTime":"0.558",
				"hotSpotStartX":"0", "hotSpotStartY":"338", "hotSpotStartWidth":"443", "hotSpotStartHeight":"742"
		 	},
		 	{
				"id": "5", "hotSpotId":"23", "index": "0",
				"startTime":"0.620", "endTime":"0.663",
				"hotSpotStartX":"0", "hotSpotStartY":"338", "hotSpotStartWidth":"443", "hotSpotStartHeight":"742"
		 	},

		 	{
				"id": "3", "hotSpotId":"24", "index": "0",
				"startTime":"0.08", "endTime":"0.122",
				"hotSpotStartX":"446", "hotSpotStartY":"371", "hotSpotStartWidth":"153", "hotSpotStartHeight":"709"
		 	},
		 	{
				"id": "3", "hotSpotId":"25", "index": "0",
				"startTime":"0.191", "endTime":"0.396",
				"hotSpotStartX":"446", "hotSpotStartY":"371", "hotSpotStartWidth":"153", "hotSpotStartHeight":"709"
		 	},
		 	{
				"id": "3", "hotSpotId":"26", "index": "0",
				"startTime":"0.488", "endTime":"0.558",
				"hotSpotStartX":"446", "hotSpotStartY":"371", "hotSpotStartWidth":"153", "hotSpotStartHeight":"709"
		 	},
		 	{
				"id": "3", "hotSpotId":"27", "index": "0",
				"startTime":"0.620", "endTime":"0.663",
				"hotSpotStartX":"446", "hotSpotStartY":"371", "hotSpotStartWidth":"153", "hotSpotStartHeight":"709"
		 	},

		 	{
				"id": "2", "hotSpotId":"28", "index": "0",
				"startTime":"0.08", "endTime":"0.122",
				"hotSpotStartX":"600", "hotSpotStartY":"395", "hotSpotStartWidth":"84", "hotSpotStartHeight":"685"
		 	},
		 	{
				"id": "2", "hotSpotId":"29", "index": "0",
				"startTime":"0.191", "endTime":"0.396",
				"hotSpotStartX":"600", "hotSpotStartY":"395", "hotSpotStartWidth":"84", "hotSpotStartHeight":"685"
		 	},
		 	{
				"id": "2", "hotSpotId":"30", "index": "0",
				"startTime":"0.488", "endTime":"0.558",
				"hotSpotStartX":"600", "hotSpotStartY":"395", "hotSpotStartWidth":"84", "hotSpotStartHeight":"685"
		 	},
		 	{
				"id": "2", "hotSpotId":"31", "index": "0",
				"startTime":"0.620", "endTime":"0.663",
				"hotSpotStartX":"600", "hotSpotStartY":"395", "hotSpotStartWidth":"84", "hotSpotStartHeight":"685"
		 	},

		 	{
				"id": "1", "hotSpotId":"32", "index": "0",
				"startTime":"0.08", "endTime":"0.122",
				"hotSpotStartX":"682", "hotSpotStartY":"395", "hotSpotStartWidth":"585", "hotSpotStartHeight":"501"
		 	},
		 	{
				"id": "1", "hotSpotId":"33", "index": "0",
				"startTime":"0.191", "endTime":"0.396",
				"hotSpotStartX":"682", "hotSpotStartY":"395", "hotSpotStartWidth":"585", "hotSpotStartHeight":"501"
		 	},
		 	{
				"id": "1", "hotSpotId":"34", "index": "0",
				"startTime":"0.488", "endTime":"0.558",
				"hotSpotStartX":"682", "hotSpotStartY":"395", "hotSpotStartWidth":"585", "hotSpotStartHeight":"501"
		 	},
		 	{
				"id": "1", "hotSpotId":"35", "index": "0",
				"startTime":"0.620", "endTime":"0.663",
				"hotSpotStartX":"682", "hotSpotStartY":"395", "hotSpotStartWidth":"585", "hotSpotStartHeight":"501"
		 	},

		 	{
				"id": "4", "hotSpotId":"36", "index": "0",
				"startTime":"0.08", "endTime":"0.122",
				"hotSpotStartX":"971", "hotSpotStartY":"294", "hotSpotStartWidth":"175", "hotSpotStartHeight":"512"
		 	},
		 	{
				"id": "4", "hotSpotId":"37", "index": "0",
				"startTime":"0.191", "endTime":"0.396",
				"hotSpotStartX":"971", "hotSpotStartY":"294", "hotSpotStartWidth":"175", "hotSpotStartHeight":"512"
		 	},
		 	{
				"id": "4", "hotSpotId":"38", "index": "0",
				"startTime":"0.488", "endTime":"0.558",
				"hotSpotStartX":"971", "hotSpotStartY":"294", "hotSpotStartWidth":"175", "hotSpotStartHeight":"512"
		 	},
		 	{
				"id": "4", "hotSpotId":"39", "index": "0",
				"startTime":"0.620", "endTime":"0.663",
				"hotSpotStartX":"971", "hotSpotStartY":"294", "hotSpotStartWidth":"175", "hotSpotStartHeight":"512"
		 	},

		 	{
				"id": "11", "hotSpotId":"40", "index": "0",
				"startTime":"0.08", "endTime":"0.122",
				"hotSpotStartX":"1232", "hotSpotStartY":"404", "hotSpotStartWidth":"229", "hotSpotStartHeight":"391"
		 	},
		 	{
				"id": "11", "hotSpotId":"41", "index": "0",
				"startTime":"0.191", "endTime":"0.396",
				"hotSpotStartX":"1232", "hotSpotStartY":"404", "hotSpotStartWidth":"229", "hotSpotStartHeight":"391"
		 	},
		 	{
				"id": "11", "hotSpotId":"42", "index": "0",
				"startTime":"0.488", "endTime":"0.558",
				"hotSpotStartX":"1232", "hotSpotStartY":"404", "hotSpotStartWidth":"229", "hotSpotStartHeight":"391"
		 	},
		 	{
				"id": "11", "hotSpotId":"43", "index": "0",
				"startTime":"0.620", "endTime":"0.663",
				"hotSpotStartX":"1232", "hotSpotStartY":"404", "hotSpotStartWidth":"229", "hotSpotStartHeight":"391"
		 	},

		 	{
				"id": "9", "hotSpotId":"44", "index": "0",
				"startTime":"0.08", "endTime":"0.122",
				"hotSpotStartX":"1593", "hotSpotStartY":"208", "hotSpotStartWidth":"295", "hotSpotStartHeight":"656"
		 	},
		 	{
				"id": "9", "hotSpotId":"45", "index": "0",
				"startTime":"0.191", "endTime":"0.396",
				"hotSpotStartX":"1593", "hotSpotStartY":"208", "hotSpotStartWidth":"295", "hotSpotStartHeight":"656"
		 	},
		 	{
				"id": "9", "hotSpotId":"46", "index": "0",
				"startTime":"0.488", "endTime":"0.558",
				"hotSpotStartX":"1593", "hotSpotStartY":"208", "hotSpotStartWidth":"295", "hotSpotStartHeight":"656"
		 	},
		 	{
				"id": "9", "hotSpotId":"47", "index": "0",
				"startTime":"0.620", "endTime":"0.663",
				"hotSpotStartX":"1593", "hotSpotStartY":"208", "hotSpotStartWidth":"295", "hotSpotStartHeight":"656"
		 	},

		 	{
				"id": "10", "hotSpotId":"48", "index": "0",
				"startTime":"0.08", "endTime":"0.122",
				"hotSpotStartX":"1526", "hotSpotStartY":"854", "hotSpotStartWidth":"393", "hotSpotStartHeight":"226"
		 	},
		 	{
				"id": "10", "hotSpotId":"49", "index": "0",
				"startTime":"0.191", "endTime":"0.396",
				"hotSpotStartX":"1526", "hotSpotStartY":"854", "hotSpotStartWidth":"393", "hotSpotStartHeight":"226"
		 	},
		 	{
				"id": "10", "hotSpotId":"50", "index": "0",
				"startTime":"0.488", "endTime":"0.558",
				"hotSpotStartX":"1526", "hotSpotStartY":"854", "hotSpotStartWidth":"393", "hotSpotStartHeight":"226"
		 	},
		 	{
				"id": "10", "hotSpotId":"51", "index": "0",
				"startTime":"0.620", "endTime":"0.663",
				"hotSpotStartX":"1526", "hotSpotStartY":"854", "hotSpotStartWidth":"393", "hotSpotStartHeight":"226"
		 	},

		 	{
				"id": "7", "hotSpotId":"52", "index": "0",
				"startTime":"0.08", "endTime":"0.122",
				"hotSpotStartX":"1509", "hotSpotStartY":"597", "hotSpotStartWidth":"122", "hotSpotStartHeight":"290"
		 	},
		 	{
				"id": "7", "hotSpotId":"53", "index": "0",
				"startTime":"0.191", "endTime":"0.396",
				"hotSpotStartX":"1509", "hotSpotStartY":"597", "hotSpotStartWidth":"122", "hotSpotStartHeight":"290"
		 	},
		 	{
				"id": "7", "hotSpotId":"54", "index": "0",
				"startTime":"0.488", "endTime":"0.558",
				"hotSpotStartX":"1509", "hotSpotStartY":"597", "hotSpotStartWidth":"122", "hotSpotStartHeight":"290"
		 	},
		 	{
				"id": "7", "hotSpotId":"55", "index": "0",
				"startTime":"0.620", "endTime":"0.663",
				"hotSpotStartX":"1509", "hotSpotStartY":"597", "hotSpotStartWidth":"122", "hotSpotStartHeight":"290"
		 	},

		 	{
				"id": "6", "hotSpotId":"56", "index": "0",
				"startTime":"0.08", "endTime":"0.122",
				"hotSpotStartX":"810", "hotSpotStartY":"788", "hotSpotStartWidth":"724", "hotSpotStartHeight":"292"
		 	},
		 	{
				"id": "6", "hotSpotId":"57", "index": "0",
				"startTime":"0.191", "endTime":"0.396",
				"hotSpotStartX":"810", "hotSpotStartY":"788", "hotSpotStartWidth":"724", "hotSpotStartHeight":"292"
		 	},
		 	{
				"id": "6", "hotSpotId":"58", "index": "0",
				"startTime":"0.488", "endTime":"0.558",
				"hotSpotStartX":"810", "hotSpotStartY":"788", "hotSpotStartWidth":"724", "hotSpotStartHeight":"292"
		 	},
		 	{
				"id": "6", "hotSpotId":"59", "index": "0",
				"startTime":"0.620", "endTime":"0.663",
				"hotSpotStartX":"810", "hotSpotStartY":"788", "hotSpotStartWidth":"724", "hotSpotStartHeight":"292"
		 	},

		 	{
				"id": "5", "hotSpotId":"22", "index": "0",
				"startTime":"0.488", "endTime":"0.558",
				"hotSpotStartX":"0", "hotSpotStartY":"338", "hotSpotStartWidth":"443", "hotSpotStartHeight":"742"
		 	},


		 	{
				"id": "3", "hotSpotId":"26", "index": "0",
				"startTime":"0.748", "endTime":"1.0",
				"hotSpotStartX":"446", "hotSpotStartY":"371", "hotSpotStartWidth":"153", "hotSpotStartHeight":"709"
		 	},
		 	{
				"id": "2", "hotSpotId":"30", "index": "0",
				"startTime":"0.748", "endTime":"1.0",
				"hotSpotStartX":"600", "hotSpotStartY":"395", "hotSpotStartWidth":"84", "hotSpotStartHeight":"685"
		 	},
		 	{
				"id": "1", "hotSpotId":"34", "index": "0",
				"startTime":"0.748", "endTime":"1.0",
				"hotSpotStartX":"682", "hotSpotStartY":"395", "hotSpotStartWidth":"585", "hotSpotStartHeight":"501"
		 	},
		 	{
				"id": "4", "hotSpotId":"38", "index": "0",
				"startTime":"0.748", "endTime":"1.0",
				"hotSpotStartX":"971", "hotSpotStartY":"294", "hotSpotStartWidth":"175", "hotSpotStartHeight":"512"
		 	},
		 	{
				"id": "11", "hotSpotId":"42", "index": "0",
				"startTime":"0.748", "endTime":"1.0",
				"hotSpotStartX":"1232", "hotSpotStartY":"404", "hotSpotStartWidth":"229", "hotSpotStartHeight":"391"
		 	},
		 	{
				"id": "9", "hotSpotId":"46", "index": "0",
				"startTime":"0.748", "endTime":"1.0",
				"hotSpotStartX":"1593", "hotSpotStartY":"208", "hotSpotStartWidth":"295", "hotSpotStartHeight":"656"
		 	},
		 	{
				"id": "10", "hotSpotId":"50", "index": "0",
				"startTime":"0.748", "endTime":"1.0",
				"hotSpotStartX":"1526", "hotSpotStartY":"854", "hotSpotStartWidth":"393", "hotSpotStartHeight":"226"
		 	},

		 	{
				"id": "7", "hotSpotId":"54", "index": "0",
				"startTime":"0.748", "endTime":"1.0",
				"hotSpotStartX":"1509", "hotSpotStartY":"597", "hotSpotStartWidth":"122", "hotSpotStartHeight":"290"
		 	},
		 	{
				"id": "6", "hotSpotId":"58", "index": "0",
				"startTime":"0.748", "endTime":"1.0",
				"hotSpotStartX":"810", "hotSpotStartY":"788", "hotSpotStartWidth":"724", "hotSpotStartHeight":"292"
		 	},
		],

		cartItems:[]

	};

});
