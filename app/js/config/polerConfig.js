define([
  'underscore',
  'backbone'
], function (_, Backbone) {

    window.playerConfig = {

      gaKey        : 'UA-55667188-1',
      gaVendorName : 'Poler',

      loaderStyle       : 'image',
      splashImage       : 'static/images/posterFrames/poler.png',
      customSplashImage : null,

      mp4_video_src_med  : 'poler/poler_mp4.mp4',
      webm_video_src_med : 'poler/poler_webm.webm',

      baseVideoPath          : "static/movies/",
      baseProductImagePath   : "static/images/productImages/poler/",
      colorVariantsImagePath : "static/images/productImages/poler/optionVariants/",

      checkoutType : "shopify",
      checkoutUrl  : "http://polerstuff.com/cart/",

      shareUrl          : "http://www.helloshowroom.co/poler",
      shareEmbedBaseUrl : "http://www.helloshowroom.co/poler/index.html?config=polerConfig",

      hotspotColor    : null,
      customFontSize  : null,
      customBoxSize   : null,
      beaconPlacement : 'topLeft',

      recommended : [
        {
          "id"            : '1',
          "largeItemSrc1" : 'autumn_camo_1.jpeg',
        },
        {
          "id"            : '2',
          "largeItemSrc1" : 'green_camo_1.jpeg',
        },
        {
          "id"            : '3',
          "largeItemSrc1" : 'holiday_beanie.jpg',
        },
        {
          "id"            : '4',
          "largeItemSrc1" : 'poler_nike_bomber.jpg',
        },
        {
          "id"            : '5',
          "largeItemSrc1" : 'sunrise_crewneck.jpg',
        },
      ],

      variantColors: [
        {
          "id"           : "1",
          "colorSrc"     : "#E6B445",
          "colorBlockId" : '1'
        },
        {
          "id"           : "2",
          "colorSrc"     : "#758459",
          "colorBlockId" : '1'
        }
      ],

      itemData: [
        {
          "id"               : "1",
          "index"            : "0",
          "largeItemSrc1"    : 'autumn_camo_1.jpeg',
          "itemImageSrc"     : 'autumn_camo_1.jpeg',
          "itemTitle"        : "Excursion Pack and Camera Insert",
          "artist"           : null,
          "itemDescription"  : "The Excursion Pack is a great size for your longer trips into the field. Two organizer slash pockets on the outside and easy laptop access along with a sturdy leather bottom and a design that allows you to open the bag wide and see everything inside. Leather lash downs on the bottom allow a tripod or jacket to be strapped to the bottom when needed.",
          "itemPrice"        : "$99.00",
          "hasSize"          : false,
          "hasColor"         : true,
          "colorBlockId"     : '1',
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            "oneSize" : ['701731769']
          },
          "allImages": ['autumn_camo_3.jpeg', 'autumn_camo_2.jpeg', 'autumn_camo_1.jpeg']
        },
        {
          "id"               : "2",
          "index"            : "1",
          "largeItemSrc1"    : 'green_camo_1.jpeg',
          "itemImageSrc"     : 'green_camo_1.jpeg',
          "itemTitle"        : "Excursion Pack and Camera Insert",
          "artist"           : null,
          "itemDescription"  : "The Excursion Pack is a great size for your longer trips into the field. Two organizer slash pockets on the outside and easy laptop access along with a sturdy leather bottom and a design that allows you to open the bag wide and see everything inside. Leather lash downs on the bottom allow a tripod or jacket to be strapped to the bottom when needed.",
          "itemPrice"        : "$99.00",
          "hasSize"          : false,
          "hasColor"         : true,
          "colorBlockId"     : '1',
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            "oneSize" : ['701731781']
          },
          "allImages": ['green_camo_3.jpeg', 'green_camo_2.jpeg', 'green_camo_1.jpeg']
        },
        {
          "id"               : "3",
          "index"            : "2",
          "largeItemSrc1"    : 'holiday_beanie.jpg',
          "itemImageSrc"     : 'holiday_beanie.jpg',
          "itemTitle"        : "The Holiday Workerman",
          "artist"           : null,
          "itemDescription"  : null,
          "itemPrice"        : "$28.00",
          "hasSize"          : false,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            "oneSize" : ['956486633']
          },
          "allImages": ['holiday_beanie.jpg']
        },
        {
          "id"               : "4",
          "index"            : "3",
          "largeItemSrc1"    : 'poler_nike_bomber.jpg',
          "itemImageSrc"     : 'poler_nike_bomber.jpg',
          "itemTitle"        : "POLER X NIKE SB DAVIS BOMBER",
          "artist"           : null,
          "itemDescription"  : null,
          "itemPrice"        : "$150.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            "M"  : ['1018643740'],
            'L'  : ['1018643748'],
            'XL' : ['1018643756']
          },
          "allImages": ['poler_nike_bomber.jpg']
        },
        {
          "id"               : "5",
          "index"            : "4",
          "largeItemSrc1"    : 'sunrise_crewneck.jpg',
          "itemImageSrc"     : 'sunrise_crewneck.jpg',
          "itemTitle"        : "Sunrise Crew Neck",
          "artist"           : null,
          "itemDescription"  : null,
          "itemPrice"        : "$50.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            "S"   : ['1023463892'],
            "M"   : ['1023463884'],
            'L'   : ['1023463880'],
            'XL'  : ['1023463900'],
            'XXL' : ['1023463908']
          },
          "allImages": ['sunrise_crewneck.jpg']
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
          "id"                 : "1", //dress
          "hotSpotId"          : "1",
          "index"              : "0",
          "startTime"          : "0.03411",
          "endTime"            : "0.80",
          "hotSpotStartX"      : "640",
          "hotSpotStartY"      : "200",
          "hotSpotStartWidth"  : "600",
          "hotSpotStartHeight" : "600"
        }
      ],

      cartItems:[]
    };
  });

