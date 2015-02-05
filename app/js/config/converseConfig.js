define([
  'underscore',
  'backbone'
], function (_, Backbone) {

    window.playerConfig = {

      gaKey        : 'UA-55667188-1',
      gaVendorName : 'Converse',

      loaderStyle       : 'image',
      splashImage       : 'static/images/posterFrames/converse.png',
      customSplashImage : null,

      mp4_video_src_med  : 'converse/converse_mp4.mp4',
      webm_video_src_med : 'converse/converse_webm.webm',
      iphone_video_src   : 'converse/converse_iphone.mpg',
      iphone_audio_src   : 'converse/converse_soundtrack.mp3',

      baseVideoPath          : "static/movies/",
      baseProductImagePath   : "static/images/productImages/converse/",
      colorVariantsImagePath : "static/images/productImages/converse/optionVariants/",

      checkoutType : "email",
      checkoutUrl  : "mailto:we@helloshowroom.co?subject=Showroom - Shop Video&body=Let's activate video.",

      shareUrl          : "http://www.helloshowroom.co/converse",
      shareEmbedBaseUrl : "http://www.helloshowroom.co/converse/index.html?config=converseConfig",

      hotspotColor    : 'rgb(128, 128, 126)',
      customFontSize  : null,
      customBoxSize   : null,
      beaconPlacement : null,

      recommended : [
        {
          "id"            : '1',
          "largeItemSrc1" : 'shot_1_white_chucks_01.png',
        },
        {
          "id"            : '2',
          "largeItemSrc1" : 'shot_2_grey_hoodie.png',
        },
        {
          "id"            : '3',
          "largeItemSrc1" : 'shot_3_blue_hoodie.png',
        },
        {
          "id"            : '4',
          "largeItemSrc1" : 'shot_4_white_hoodie.png',
        },
        {
          "id"            : '5',
          "largeItemSrc1" : 'shot_5_blue_jacket.png',
        },
        {
          "id"            : '6',
          "largeItemSrc1" : 'shot_6_black_midchucks_01.png',
        },
        {
          "id"            : '7',
          "largeItemSrc1" : 'shot_8_black_lowchucks_01.png',
        },
        {
          "id"            : '8',
          "largeItemSrc1" : 'shot_9_pink_midchucks_01.png',
        },
        {
          "id"            : '9',
          "largeItemSrc1" : 'shot_11_midchucks_01.png',
        },
        {
          "id"            : '10',
          "largeItemSrc1" : 'shot_12_leather_midchucks_01.png',
        },
        {
          "id"            : '11',
          "largeItemSrc1" : 'shot_14_navy_mids.png',
        },
        {
          "id"            : '12',
          "largeItemSrc1" : 'shot_16_grey_lowchuks_01.png',
        },
        {
          "id"            : '13',
          "largeItemSrc1" : 'shot_17_red_lowchucks_01.png',
        },
      ],

      variantColors: [],

      itemData: [
        {
          "id"               : "1",
          "index"            : "0",
          "largeItemSrc1"    : 'shot_1_white_chucks_01.png',
          "itemImageSrc"     : 'shot_1_white_chucks_01.png',
          "itemTitle"        : "Low Top Canvas",
          "artist"           : null,
          "itemDescription"  : "The Chuck Taylor All Star is the most iconic sneaker in the world, recognized for its unmistakable silhouette and cultural authenticity. And like all like the best paradigms, they only get better with time. Find here the classic colors that have donned it's low top canvas upper for generations, all resting on top of a quality vulcanized rubber sole. It is the sneaker you choose to do whatever you want in.",
          "itemPrice"        : "$50.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : null,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            "7"  : ['701731769'],
            "8"  : ['701731769'],
            "9"  : ['701731769'],
            "10" : ['701731769'],
            "11" : ['701731769'],
          },
          "allImages": ['shot_1_white_chucks_03.png', 'shot_1_white_chucks_02.png', 'shot_1_white_chucks_01.png']
        },
        {
          "id"               : "2",
          "index"            : "1",
          "largeItemSrc1"    : 'shot_2_grey_hoodie.png',
          "itemImageSrc"     : 'shot_2_grey_hoodie.png',
          "itemTitle"        : "Full Zip Hoodie",
          "artist"           : null,
          "itemDescription"  : "Cotton/Poly. Made in China. Machine wash cold (30c), wash with like colors, use non-chlorine bleach when needed, tumble dry low, warm iron, do not dry clean.",
          "itemPrice"        : "$60.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : null,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            "XS" : ['701731769'],
            "S"  : ['701731769'],
            "M"  : ['701731769'],
            "L"  : ['701731769'],
            "XL" : ['701731769'],
          },
          "allImages": ['shot_2_grey_hoodie.png']
        },
        {
          "id"               : "3",
          "index"            : "2",
          "largeItemSrc1"    : 'shot_3_blue_hoodie.png',
          "itemImageSrc"     : 'shot_3_blue_hoodie.png',
          "itemTitle"        : "Blank Hoodie",
          "artist"           : null,
          "itemDescription"  : "100% Cotton. Made in China. Machine wash cold (30c), wash with like colors, use non-chlorine bleach when needed, tumble dry low, warm iron, do not dry clean.",
          "itemPrice"        : "$45.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : null,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            "XS" : ['701731769'],
            "S"  : ['701731769'],
            "M"  : ['701731769'],
            "L"  : ['701731769'],
            "XL" : ['701731769'],
          },
          "allImages": ['shot_3_blue_hoodie.png']
        },
        {
          "id"               : "4",
          "index"            : "3",
          "largeItemSrc1"    : 'shot_4_white_hoodie.png',
          "itemImageSrc"     : 'shot_4_white_hoodie.png',
          "itemTitle"        : "Funnel Neck Zip Hoodie",
          "artist"           : null,
          "itemDescription"  : "100% Cotton. Made in China. Machine wash cold (30c), wash with like colors, use non-chlorine bleach when needed, tumble dry low, warm iron, do not dry clean.",
          "itemPrice"        : "$49.99",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : null,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            "XS" : ['701731769'],
            "S"  : ['701731769'],
            "M"  : ['701731769'],
            "L"  : ['701731769'],
            "XL" : ['701731769'],
          },
          "allImages": ['shot_4_white_hoodie.png']
        },
        {
          "id"               : "5",
          "index"            : "4",
          "largeItemSrc1"    : 'shot_5_blue_jacket.png',
          "itemImageSrc"     : 'shot_5_blue_jacket.png',
          "itemTitle"        : "Boys Full Zip Fleece",
          "artist"           : null,
          "itemDescription"  : "Polyester Tri-Cotton Blend. Made in China. Close zipper (snaps or buttons), machine wash cold inside out with similar colors. Do not bleach, tumble dry low. Iron on low inside out if necessary. Do not iron decoration.",
          "itemPrice"        : "$55.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : null,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            "XS" : ['701731769'],
            "S"  : ['701731769'],
            "M"  : ['701731769'],
            "L"  : ['701731769'],
            "XL" : ['701731769'],
          },
          "allImages": ['shot_5_blue_jacket.png']
        },
        {
          "id"               : "6",
          "index"            : "5",
          "largeItemSrc1"    : 'shot_6_black_midchucks_01.png',
          "itemImageSrc"     : 'shot_6_black_midchucks_01.png',
          "itemTitle"        : "Hi Top Canvas",
          "artist"           : null,
          "itemDescription"  : "The Chuck Taylor All Star high top is the most iconic sneaker in the world, recognized for its unmistakable silhouette, star-centered ankle patch and cultural authenticity. And like all like the best paradigms, they only get better with time. Find here the classic colors that have donned it’s canvas upper for generations, all resting on top of a quality vulcanized rubber sole. It is the sneaker you choose to do whatever you want in.",
          "itemPrice"        : "$55.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : null,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            "7"  : ['701731769'],
            "8"  : ['701731769'],
            "9"  : ['701731769'],
            "10" : ['701731769'],
            "11" : ['701731769'],
          },
          "allImages": ['shot_6_black_midchucks_03.png', 'shot_6_black_midchucks_02.png', 'shot_6_black_midchucks_01.png']
        },
        {
          "id"               : "7",
          "index"            : "6",
          "largeItemSrc1"    : 'shot_8_black_lowchucks_01.png',
          "itemImageSrc"     : 'shot_8_black_lowchucks_01.png',
          "itemTitle"        : "Low Top Canvas",
          "artist"           : null,
          "itemDescription"  : "The Chuck Taylor All Star is the most iconic sneaker in the world, recognized for its unmistakable silhouette and cultural authenticity. And like all like the best paradigms, they only get better with time. Find here the classic colors that have donned it's low top canvas upper for generations, all resting on top of a quality vulcanized rubber sole. It is the sneaker you choose to do whatever you want in.",
          "itemPrice"        : "$50.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : null,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            "7"  : ['701731769'],
            "8"  : ['701731769'],
            "9"  : ['701731769'],
            "10" : ['701731769'],
            "11" : ['701731769'],
          },
          "allImages": ['shot_8_black_lowchucks_03.png', 'shot_8_black_lowchucks_02.png', 'shot_8_black_lowchucks_01.png']
        },
        {
          "id"               : "8",
          "index"            : "7",
          "largeItemSrc1"    : 'shot_9_pink_midchucks_01.png',
          "itemImageSrc"     : 'shot_9_pink_midchucks_01.png',
          "itemTitle"        : "Hi Top Canvas",
          "artist"           : null,
          "itemDescription"  : "These are our classic All-Stars in some new eye-catching colors. Yes, those quintessential high-top canvas Chucks. The same ones, but these are available in a varity of colors. Either way, you’ve made the right choice. And just because they’re in some new colors doesn’t mean we’ve changed anything else about our iconic sneaker. It’s still got the features that made it an icon in the first place, like the vulcanized rubber soles and All-Star insignia. An electric update to a classic.",
          "itemPrice"        : "$30.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : null,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            "7"  : ['701731769'],
            "8"  : ['701731769'],
            "9"  : ['701731769'],
            "10" : ['701731769'],
            "11" : ['701731769'],
          },
          "allImages": ['shot_9_pink_midchucks_03.png', 'shot_9_pink_midchucks_02.png', 'shot_9_pink_midchucks_01.png']
        },
        {
          "id"               : "9",
          "index"            : "8",
          "largeItemSrc1"    : 'shot_11_midchucks_01.png',
          "itemImageSrc"     : 'shot_11_midchucks_01.png',
          "itemTitle"        : "All Star Woven Suede",
          "artist"           : null,
          "itemDescription"  : null,
          "itemPrice"        : "$80.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : null,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            "7"  : ['701731769'],
            "8"  : ['701731769'],
            "9"  : ['701731769'],
            "10" : ['701731769'],
            "11" : ['701731769'],
          },
          "allImages": ['shot_11_midchucks_03.png', 'shot_11_midchucks_02.png', 'shot_11_midchucks_01.png']
        },
        {
          "id"               : "10",
          "index"            : "9",
          "largeItemSrc1"    : 'shot_12_leather_midchucks_01.png',
          "itemImageSrc"     : 'shot_12_leather_midchucks_01.png',
          "itemTitle"        : "All Star Asylum Leather",
          "artist"           : null,
          "itemDescription"  : null,
          "itemPrice"        : "$80.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : null,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            "7"  : ['701731769'],
            "8"  : ['701731769'],
            "9"  : ['701731769'],
            "10" : ['701731769'],
            "11" : ['701731769'],
          },
          "allImages": ['shot_12_leather_midchucks_03.png', 'shot_12_leather_midchucks_02.png', 'shot_12_leather_midchucks_01.png']
        },
        {
          "id"               : "11",
          "index"            : "10",
          "largeItemSrc1"    : 'shot_14_navy_mids.png',
          "itemImageSrc"     : 'shot_14_navy_mids.png',
          "itemTitle"        : "Jack Purcell Mid Nubuck",
          "artist"           : null,
          "itemDescription"  : null,
          "itemPrice"        : "$85.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : null,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            "7"  : ['701731769'],
            "8"  : ['701731769'],
            "9"  : ['701731769'],
            "10" : ['701731769'],
            "11" : ['701731769'],
          },
          "allImages": ['shot_14_navy_mids.png']
        },
        {
          "id"               : "12",
          "index"            : "11",
          "largeItemSrc1"    : 'shot_16_grey_lowchuks_01.png',
          "itemImageSrc"     : 'shot_16_grey_lowchuks_01.png',
          "itemTitle"        : "Hi Top Canvas",
          "artist"           : null,
          "itemDescription"  : 'The Chuck Taylor All Star high top is the most iconic sneaker in the world, recognized for its unmistakable silhouette, star-centered ankle patch and cultural authenticity. And like all like the best paradigms, they only get better with time. Find here the classic colors that have donned it’s canvas upper for generations, all resting on top of a quality vulcanized rubber sole. It is the sneaker you choose to do whatever you want in.',
          "itemPrice"        : "$55.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : null,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            "7"  : ['701731769'],
            "8"  : ['701731769'],
            "9"  : ['701731769'],
            "10" : ['701731769'],
            "11" : ['701731769'],
          },
          "allImages": ['shot_16_grey_lowchuks_03.png', 'shot_16_grey_lowchuks_02.png', 'shot_16_grey_lowchuks_01.png']
        },
        {
          "id"               : "13",
          "index"            : "12",
          "largeItemSrc1"    : 'shot_17_red_lowchucks_01.png',
          "itemImageSrc"     : 'shot_17_red_lowchucks_01.png',
          "itemTitle"        : "Low Top Canvas",
          "artist"           : null,
          "itemDescription"  : "The Chuck Taylor All Star is the most iconic sneaker in the world, recognized for its unmistakable silhouette and cultural authenticity. And like all like the best paradigms, they only get better with time. Find here the classic colors that have donned it's low top canvas upper for generations, all resting on top of a quality vulcanized rubber sole. It is the sneaker you choose to do whatever you want in.",
          "itemPrice"        : "$50.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : null,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            "7"  : ['701731769'],
            "8"  : ['701731769'],
            "9"  : ['701731769'],
            "10" : ['701731769'],
            "11" : ['701731769'],
          },
          "allImages": ['shot_17_red_lowchucks_03.png', 'shot_17_red_lowchucks_02.png', 'shot_17_red_lowchucks_01.png']
        },

      ],

      variantOptions: [
        // {
        //   'id'               : 1,
        //   'variantOptionsId' : 2,
        //   'mintedFrameColor' : 1,
        //   "isImage"          : true,
        //   "optionTitle"      : "Black Premium Wood",
        //   "optionType"       : 'Frame',
        //   'options'          : 'black-premium-wood.png',
        // }
      ],

      hotSpots: [
        {
          "id"                 : "1", //low white chucks
          "hotSpotId"          : "1",
          "index"              : "0",
          "startTime"          : "0.00",
          "endTime"            : "0.039",
          "hotSpotStartX"      : "500",
          "hotSpotStartY"      : "200",
          "hotSpotStartWidth"  : "600",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "2", //grey hoodie
          "hotSpotId"          : "2",
          "index"              : "0",
          "startTime"          : "0.0405",
          "endTime"            : "0.0631",
          "hotSpotStartX"      : "650",
          "hotSpotStartY"      : "200",
          "hotSpotStartWidth"  : "600",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "3", //blue hoodie
          "hotSpotId"          : "3",
          "index"              : "0",
          "startTime"          : "0.065",
          "endTime"            : "0.115",
          "hotSpotStartX"      : "850",
          "hotSpotStartY"      : "200",
          "hotSpotStartWidth"  : "600",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "4", //white hoodie
          "hotSpotId"          : "4",
          "index"              : "0",
          "startTime"          : "0.118",
          "endTime"            : "0.149",
          "hotSpotStartX"      : "450",
          "hotSpotStartY"      : "480",
          "hotSpotStartWidth"  : "600",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "5", //blue jacket
          "hotSpotId"          : "5",
          "index"              : "0",
          "startTime"          : "0.15",
          "endTime"            : "0.191",
          "hotSpotStartX"      : "790",
          "hotSpotStartY"      : "290",
          "hotSpotStartWidth"  : "600",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "6", //black mid chucks
          "hotSpotId"          : "6",
          "index"              : "0",
          "startTime"          : "0.195",
          "endTime"            : "0.258",
          "hotSpotStartX"      : "610",
          "hotSpotStartY"      : "260",
          "hotSpotStartWidth"  : "600",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "1", //low white chucks, left
          "hotSpotId"          : "7",
          "index"              : "0",
          "startTime"          : "0.259",
          "endTime"            : "0.299",
          "hotSpotStartX"      : "290",
          "hotSpotStartY"      : "350",
          "hotSpotStartWidth"  : "600",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "6", //black mid chucks, right
          "hotSpotId"          : "8",
          "index"              : "0",
          "startTime"          : "0.259",
          "endTime"            : "0.299",
          "hotSpotStartX"      : "980",
          "hotSpotStartY"      : "400",
          "hotSpotStartWidth"  : "600",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "7", //black low chucks
          "hotSpotId"          : "9",
          "index"              : "0",
          "startTime"          : "0.30",
          "endTime"            : "0.346",
          "hotSpotStartX"      : "900",
          "hotSpotStartY"      : "300",
          "hotSpotStartWidth"  : "600",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "8", //pink low chucks
          "hotSpotId"          : "10",
          "index"              : "0",
          "startTime"          : "0.35",
          "endTime"            : "0.3897",
          "hotSpotStartX"      : "475",
          "hotSpotStartY"      : "400",
          "hotSpotStartWidth"  : "600",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "9", //woven chucks
          "hotSpotId"          : "11",
          "index"              : "0",
          "startTime"          : "0.429",
          "endTime"            : "0.483",
          "hotSpotStartX"      : "600",
          "hotSpotStartY"      : "600",
          "hotSpotStartWidth"  : "600",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "6", //black mid chucks, left
          "hotSpotId"          : "12",
          "index"              : "0",
          "startTime"          : "0.487",
          "endTime"            : "0.529",
          "hotSpotStartX"      : "400",
          "hotSpotStartY"      : "600",
          "hotSpotStartWidth"  : "600",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "10", //leather chucks, right
          "hotSpotId"          : "13",
          "index"              : "0",
          "startTime"          : "0.487",
          "endTime"            : "0.529",
          "hotSpotStartX"      : "950",
          "hotSpotStartY"      : "600",
          "hotSpotStartWidth"  : "600",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "8", //pink chucks
          "hotSpotId"          : "14",
          "index"              : "0",
          "startTime"          : "0.57",
          "endTime"            : "0.601",
          "hotSpotStartX"      : "700",
          "hotSpotStartY"      : "300",
          "hotSpotStartWidth"  : "600",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "11", //navy chucks - maybe not
          "hotSpotId"          : "15",
          "index"              : "0",
          "startTime"          : "0.639",
          "endTime"            : "0.659",
          "hotSpotStartX"      : "1100",
          "hotSpotStartY"      : "250",
          "hotSpotStartWidth"  : "600",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "7", //black low chucks
          "hotSpotId"          : "16",
          "index"              : "0",
          "startTime"          : "0.69",
          "endTime"            : "0.73",
          "hotSpotStartX"      : "700",
          "hotSpotStartY"      : "150",
          "hotSpotStartWidth"  : "600",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "7", //grey low chucks, left
          "hotSpotId"          : "17",
          "index"              : "0",
          "startTime"          : "0.775",
          "endTime"            : "0.79",
          "hotSpotStartX"      : "550",
          "hotSpotStartY"      : "80",
          "hotSpotStartWidth"  : "600",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "7", //black low chucks, right
          "hotSpotId"          : "18",
          "index"              : "0",
          "startTime"          : "0.775",
          "endTime"            : "0.79",
          "hotSpotStartX"      : "1000",
          "hotSpotStartY"      : "220",
          "hotSpotStartWidth"  : "600",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "13", //red low chucks
          "hotSpotId"          : "19",
          "index"              : "0",
          "startTime"          : "0.879",
          "endTime"            : "0.915",
          "hotSpotStartX"      : "990",
          "hotSpotStartY"      : "300",
          "hotSpotStartWidth"  : "600",
          "hotSpotStartHeight" : "600"
        },
      ],

      cartItems:[]
    };
  });

