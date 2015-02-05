define([
  'underscore',
  'backbone'
], function (_, Backbone) {

    window.playerConfig = {

      gaKey        : 'UA-55667188-1',
      gaVendorName : 'Bucketfeet',

      loaderStyle       : 'image',
      splashImage       : 'static/images/posterFrames/bucketfeet.png',
      customSplashImage : null,

      mp4_video_src_med  : 'bucketfeet/bucketfeet_mp4.mp4',
      webm_video_src_med : 'bucketfeet/bucketfeet_webm.webm',
      iphone_video_src   : 'bucketfeet/bucketfeet_iphone.mpg',
      iphone_audio_src   : 'bucketfeet/bucketfeet_soundtrack.mp3',

      baseVideoPath          : "static/movies/",
      baseProductImagePath   : "static/images/productImages/bucketfeet/",
      colorVariantsImagePath : "static/images/productImages/bucketfeet/optionVariants/",

      checkoutType : "magento",
      checkoutUrl  : "mailto:we@helloshowroom.co?subject=Showroom - Shop Video&body=Let's activate video.",

      shareUrl          : "http://www.helloshowroom.co/bucketfeet",
      shareEmbedBaseUrl : "http://www.helloshowroom.co/bucketfeet/index.html?config=bucketfeetConfig",

      hotspotColor    : null,
      customFontSize  : null,
      customBoxSize   : null,
      beaconPlacement : null,

      recommended : [
        {
          "id"            : '1',
          "largeItemSrc1" : 'shot_1_minigod_01.png',
        },
        {
          "id"            : '2',
          "largeItemSrc1" : 'shot_2_spirit_01.png',
        },
        {
          "id"            : '3',
          "largeItemSrc1" : 'shot_3_pinegrenade_01.png',
        },
        {
          "id"            : '4',
          "largeItemSrc1" : 'shot_7_floral_01.png',
        },
        {
          "id"            : '5',
          "largeItemSrc1" : 'shot_8_monogram_01.png',
        },
        {
          "id"            : '6',
          "largeItemSrc1" : 'shot_10_kinetics_01.png',
        },
        {
          "id"            : '7',
          "largeItemSrc1" : 'shot_14_warrior_01.png',
        },
        {
          "id"            : '8',
          "largeItemSrc1" : 'shot_15_geo_01.png',
        }
      ],

      variantColors: [],

      itemData: [
        {
          "id"               : "1",
          "index"            : "0",
          "largeItemSrc1"    : 'shot_1_minigod_01.png',
          "itemImageSrc"     : 'shot_1_minigod_01.png',
          "itemTitle"        : "Minigod",
          "artist"           : null,
          "itemDescription"  : "Intricate detail, polka dots, and floral accents—these shoes have it all! Designed by one of our SoHo Studio’s Residency alumni, Marka27, the Minigod is a compelling piece of art that keeps you moving all day.",
          "itemPrice"        : "$68.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : null,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            "8"  : ['1111111'],
            "9"  : ['1111111'],
            "10" : ['1111111'],
            "11" : ['1111111'],
            "12" : ['1111111']
          },
          "allImages": ['shot_1_minigod_03.png', 'shot_1_minigod_02.png', 'shot_1_minigod_01.png']
        },
        {
          "id"               : "2",
          "index"            : "1",
          "largeItemSrc1"    : 'shot_2_spirit_01.png',
          "itemImageSrc"     : 'shot_2_spirit_01.png',
          "itemTitle"        : "SPIRIT",
          "artist"           : null,
          "itemDescription"  : "Red and white and blue all over, these canvas lace-ups are a festive and upbeat addition to any wardrobe.",
          "itemPrice"        : "$68.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : null,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            "8"  : ['1111111'],
            "9"  : ['1111111'],
            "10" : ['1111111'],
            "11" : ['1111111'],
            "12" : ['1111111']
          },
          "allImages": ['shot_2_spirit_03.png', 'shot_2_spirit_02.png', 'shot_2_spirit_01.png']
        },
        {
          "id"               : "3",
          "index"            : "2",
          "largeItemSrc1"    : 'shot_3_pinegrenade_01.png',
          "itemImageSrc"     : 'shot_3_pinegrenade_01.png',
          "itemTitle"        : "PINEAPPLEADE MID TOP",
          "artist"           : null,
          "itemDescription"  : "Our favorite pineapple-meets-grenade print rises up to even higher heights thanks to our new mid-top format. This compelling piece of art is a sure-fire conversation-starter and a versatile closet staple.",
          "itemPrice"        : "$82.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : null,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            "8"  : ['1111111'],
            "9"  : ['1111111'],
            "10" : ['1111111'],
            "11" : ['1111111'],
            "12" : ['1111111']
          },
          "allImages": ['shot_3_pinegrenade_03.png', 'shot_3_pinegrenade_02.png', 'shot_3_pinegrenade_01.png']
        },
        {
          "id"               : "4",
          "index"            : "3",
          "largeItemSrc1"    : 'shot_7_floral_01.png',
          "itemImageSrc"     : 'shot_7_floral_01.png',
          "itemTitle"        : "BLUE EAST",
          "artist"           : null,
          "itemDescription"  : "Florals get a retro-feel in this pretty as pink canvas lace-up. The juxtaposition of navy with the etheral pattern keeps these shoes both feminine yet edgy at the same time time.",
          "itemPrice"        : "$68.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : null,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            "5" : ['1111111'],
            "6" : ['1111111'],
            "7" : ['1111111'],
            "8" : ['1111111'],
            "9" : ['1111111']
          },
          "allImages": ['shot_7_floral_03.png', 'shot_7_floral_02.png', 'shot_7_floral_01.png']
        },
        {
          "id"               : "5",
          "index"            : "4",
          "largeItemSrc1"    : 'shot_8_monogram_01.png',
          "itemImageSrc"     : 'shot_8_monogram_01.png',
          "itemTitle"        : "MONOGRAM CANVAS SLIP-ON",
          "artist"           : null,
          "itemDescription"  : "The Monogram, a monochromatic canvas slip-on with an intricate design, is the sort of minimalist yet one-of-a-kind work you'd expect from artist Salotezumo of Tokyo, Japan.",
          "itemPrice"        : "$68.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : null,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            "8"  : ['1111111'],
            "9"  : ['1111111'],
            "10" : ['1111111'],
            "11" : ['1111111'],
            "12" : ['1111111']
          },
          "allImages": ['shot_8_monogram_03.png', 'shot_8_monogram_02.png', 'shot_8_monogram_01.png']
        },
        {
          "id"               : "6",
          "index"            : "5",
          "largeItemSrc1"    : 'shot_10_kinetics_01.png',
          "itemImageSrc"     : 'shot_10_kinetics_01.png',
          "itemTitle"        : "KINETICS CANVAS LACE-UP",
          "artist"           : null,
          "itemDescription"  : "The Kinetics are like a Magic Eye for your feet. Explore the twists and turns of your surroundings in these comfortable canvas lace-up shoes.",
          "itemPrice"        : "$68.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : null,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            "5" : ['1111111'],
            "6" : ['1111111'],
            "7" : ['1111111'],
            "8" : ['1111111'],
            "9" : ['1111111']
          },
          "allImages": ['shot_10_kinetics_03.png', 'shot_10_kinetics_02.png', 'shot_10_kinetics_01.png']
        },
        {
          "id"               : "7",
          "index"            : "6",
          "largeItemSrc1"    : 'shot_14_warrior_01.png',
          "itemImageSrc"     : 'shot_14_warrior_01.png',
          "itemTitle"        : "PEACE WARRIORS NAVY",
          "artist"           : null,
          "itemDescription"  : "The Peace Warriors get a makeover in this blue and red rendition. DJ LU of Colombia is notorious for his meaning-packed imagery, and these shoes, which feature a soldier shooting out hearts, are indicative of his work.",
          "itemPrice"        : "$74.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : null,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            "8"  : ['1111111'],
            "9"  : ['1111111'],
            "10" : ['1111111'],
            "11" : ['1111111'],
            "12" : ['1111111']
          },
          "allImages": ['shot_14_warrior_03.png', 'shot_14_warrior_02.png', 'shot_14_warrior_01.png']
        },
        {
          "id"               : "8",
          "index"            : "7",
          "largeItemSrc1"    : 'shot_15_geo_01.png',
          "itemImageSrc"     : 'shot_15_geo_01.png',
          "itemTitle"        : "PEACE WARRIORS NAVY",
          "artist"           : null,
          "itemDescription"  : "A dash of geometry adds an unexpected dose of style in these canvas lace-ups by Madeline Waggoner of Austin, Texas.",
          "itemPrice"        : "$68.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : null,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            "8"  : ['37'],
            "9"  : ['11'],
            "10" : ['4'],
            "11" : ['5'],
            "12" : ['6']
          },
          "allImages": ['shot_15_geo_03.png', 'shot_15_geo_02.png', 'shot_15_geo_01.png']
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
          "id"                 : "1", //minigod
          "hotSpotId"          : "1",
          "index"              : "0",
          "startTime"          : "0.03",
          "endTime"            : "0.245",
          "hotSpotStartX"      : "200",
          "hotSpotStartY"      : "500",
          "hotSpotStartWidth"  : "1000",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "2", //spirit
          "hotSpotId"          : "2",
          "index"              : "0",
          "startTime"          : "0.258",
          "endTime"            : "0.2739",
          "hotSpotStartX"      : "400",
          "hotSpotStartY"      : "500",
          "hotSpotStartWidth"  : "800",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "3", //pineapple
          "hotSpotId"          : "3",
          "index"              : "0",
          "startTime"          : "0.288",
          "endTime"            : "0.2992",
          "hotSpotStartX"      : "400",
          "hotSpotStartY"      : "500",
          "hotSpotStartWidth"  : "800",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "1", //minigod
          "hotSpotId"          : "4",
          "index"              : "0",
          "startTime"          : "0.317",
          "endTime"            : "0.330",
          "hotSpotStartX"      : "400",
          "hotSpotStartY"      : "500",
          "hotSpotStartWidth"  : "800",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "2", //spirit
          "hotSpotId"          : "5",
          "index"              : "0",
          "startTime"          : "0.347",
          "endTime"            : "0.357",
          "hotSpotStartX"      : "400",
          "hotSpotStartY"      : "500",
          "hotSpotStartWidth"  : "800",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "3", //pineapple
          "hotSpotId"          : "6",
          "index"              : "0",
          "startTime"          : "0.371",
          "endTime"            : "0.384",
          "hotSpotStartX"      : "400",
          "hotSpotStartY"      : "500",
          "hotSpotStartWidth"  : "800",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "4", //floral
          "hotSpotId"          : "7",
          "index"              : "0",
          "startTime"          : "0.3999",
          "endTime"            : "0.41",
          "hotSpotStartX"      : "400",
          "hotSpotStartY"      : "500",
          "hotSpotStartWidth"  : "800",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "5", //monogram
          "hotSpotId"          : "8",
          "index"              : "0",
          "startTime"          : "0.423",
          "endTime"            : "0.435",
          "hotSpotStartX"      : "470",
          "hotSpotStartY"      : "400",
          "hotSpotStartWidth"  : "600",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "3", //pineapple
          "hotSpotId"          : "9",
          "index"              : "0",
          "startTime"          : "0.453",
          "endTime"            : "0.474",
          "hotSpotStartX"      : "470",
          "hotSpotStartY"      : "400",
          "hotSpotStartWidth"  : "1000",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "6", //kinetics
          "hotSpotId"          : "10",
          "index"              : "0",
          "startTime"          : "0.475",
          "endTime"            : "0.625",
          "hotSpotStartX"      : "700",
          "hotSpotStartY"      : "200",
          "hotSpotStartWidth"  : "600",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "2", //spirit
          "hotSpotId"          : "11",
          "index"              : "0",
          "startTime"          : "0.680",
          "endTime"            : "0.728",
          "hotSpotStartX"      : "1000",
          "hotSpotStartY"      : "400",
          "hotSpotStartWidth"  : "1100",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "2", //spirt
          "hotSpotId"          : "12",
          "index"              : "0",
          "startTime"          : "0.762",
          "endTime"            : "0.784",
          "hotSpotStartX"      : "410",
          "hotSpotStartY"      : "400",
          "hotSpotStartWidth"  : "800",
          "hotSpotStartHeight" : "800"
        },
        {
          "id"                 : "7", //peace warrior
          "hotSpotId"          : "13",
          "index"              : "0",
          "startTime"          : "0.83",
          "endTime"            : "0.865",
          "hotSpotStartX"      : "900",
          "hotSpotStartY"      : "600",
          "hotSpotStartWidth"  : "600",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "7", //peace warrior
          "hotSpotId"          : "14",
          "index"              : "0",
          "startTime"          : "0.8658",
          "endTime"            : "0.914",
          "hotSpotStartX"      : "1150",
          "hotSpotStartY"      : "200",
          "hotSpotStartWidth"  : "600",
          "hotSpotStartHeight" : "600"
        },
      ],

      cartItems:[]
    };
  });

