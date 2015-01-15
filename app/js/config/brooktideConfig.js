define([
  'underscore',
  'backbone'
], function (_, Backbone) {

    window.playerConfig = {

      gaKey        : 'UA-55667188-1',
      gaVendorName : 'Brooktide',

      loaderStyle       : 'image',
      splashImage       : 'static/images/posterFrames/brooktide.gif',
      customSplashImage : null,

      mp4_video_src_med  : 'brooktide/brooktide_mp4.mp4',
      webm_video_src_med : 'brooktide/brooktide_webm.webm',

      baseVideoPath          : "static/movies/",
      baseProductImagePath   : "static/images/productImages/brooktide/",
      colorVariantsImagePath : "static/images/productImages/brooktide/optionVariants/",

      checkoutType : "shopify",
      checkoutUrl  : "http://brooktide.com/cart/",

      shareUrl          : "http://www.helloshowroom.co/brooktide",
      shareEmbedBaseUrl : "http://www.helloshowroom.co/brooktide/index.html?config=brooketideConfig",

      hotspotColor    : 'white',
      customFontSize  : null,
      customBoxSize   : null,
      beaconPlacement : null,

      recommended : [
        {
          "id"            : '1',
          "largeItemSrc1" : "black_mirror_1.jpg",
        },
        {
          "id"            : '2',
          "largeItemSrc1" : "amber_original_with_board_1.jpg",
        },
        {
          "id"            : '3',
          "largeItemSrc1" : "moonshine_1.jpg",
        },
        {
          "id"            : '4',
          "largeItemSrc1" : "seafoam_green_1.jpg",
        },
        {
          "id"            : '5',
          "largeItemSrc1" : "carolina_blue_1.jpg",
        },
        {
          "id"            : '6',
          "largeItemSrc1" : "white_1.jpg",
        },
      ],

      variantColors: [
      ],

      itemData: [
        {
          "id"               : "1",
          "index"            : "0",
          "largeItemSrc1"    : 'black_mirror_1.jpg',
          "itemImageSrc"     : 'black_mirror_1.jpg',
          "itemTitle"        : "Black / Mirror Original",
          "artist"           : null,
          "itemDescription"  : "The Brooktide Original model puts a modern touch on the classic aviator style look. All Brooktide Originals have:\n\n\nDurable polycarbonate frame with glossy finish\nLight-weight design (0.8 oz)\nFDA approved scratch-resistant lenses\n100% UV400 protection\nLaser printed logo on left temple\nMicrofiber carrying case/cleaning cloth\n\n\nDimensions:\n\n5.394 in. (front)\n2.165 in. (tall)\n5.236 in. (temple)\n\n\n",
          "itemPrice"        : "$15.00",
          "hasSize"          : false,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'oneSize' : ['336273593']
          },
          "allImages": ["black_mirror_3.jpg", "black_mirror_2.jpg", "black_mirror_1.jpg"]
        },
        {
          "id"               : "2",
          "index"            : "1",
          "largeItemSrc1"    : 'amber_original_with_board_1.jpg',
          "itemImageSrc"     : 'amber_original_with_board_1.jpg',
          "itemTitle"        : "Military Green / Amber Original",
          "artist"           : null,
          "itemDescription"  : "The Brooktide Original model puts a modern touch on the classic look of an aviator style pair of sunglasses. All Brooktide Originals have:\n\n\nDurable polycarbonate frame with glossy finish\nLight-weight design (0.8 oz)\nFDA approved scratch-resistant lenses\nEssential UV400 protection\nLaser printed logo on left temple\nMicrofiber carrying case/cleaning cloth\n\n\nDimensions:\n\n5.394 in. (front)\n2.165 in. (tall)\n5.236 in. (temple)\n\n\n",
          "itemPrice"        : "$15.00",
          "hasSize"          : false,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'oneSize' : ['629662717']
          },
          "allImages": ['amber_original_with_board_3.jpg', 'amber_original_with_board_2.jpg', 'amber_original_with_board_1.jpg']
        },
        {
          "id"               : "3",
          "index"            : "2",
          "largeItemSrc1"    : 'moonshine_1.jpg',
          "itemImageSrc"     : 'moonshine_1.jpg',
          "itemTitle"        : "Black / Moonshine Original",
          "artist"           : null,
          "itemDescription"  : "The Brooktide Original model puts a modern touch on the classic look of an aviator style pair of sunglasses. All Brooktide Originals have:\n\n\nDurable polycarbonate frame with glossy finish\nLight-weight design (0.8 oz)\nFDA approved scratch-resistant lenses\nEssential UV400 protection\nLaser printed logo on left temple\nMicrofiber carrying case/cleaning cloth\n\n\nDimensions:\n\n5.394 in. (front)\n2.165 in. (tall)\n5.236 in. (temple)\n\n\n",
          "itemPrice"        : "$15.00",
          "hasSize"          : false,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'oneSize' : ['617544989']
          },
          "allImages": ['moonshine_3.jpg', 'moonshine_2.jpg', 'moonshine_1.jpg']
        },
        {
          "id"               : "4",
          "index"            : "3",
          "largeItemSrc1"    : 'seafoam_green_1.jpg',
          "itemImageSrc"     : 'seafoam_green_1.jpg',
          "itemTitle"        : "Seafoam Green / Amber Original",
          "artist"           : null,
          "itemDescription"  : "The Brooktide Original model puts a modern touch on the classic aviator style look. All Brooktide Originals have:\n\n\nDurable polycarbonate frame with glossy finish\nLight-weight design (0.8 oz)\nFDA approved scratch-resistant lenses\nEssential UV400 protection\nLaser printed logo on left temple\nMicrofiber carrying case/cleaning cloth\n\n\nDimensions:\n\n5.394 in. (front)\n2.165 in. (tall)\n5.236 in. (temple)\n\n\n",
          "itemPrice"        : "$15.00",
          "hasSize"          : false,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'oneSize' : ['637000017']
          },
          "allImages": ['seafoam_green_3.jpg', 'seafoam_green_2.jpg', 'seafoam_green_1.jpg']
        },
        {
          "id"               : "5",
          "index"            : "4",
          "largeItemSrc1"    : 'carolina_blue_1.jpg',
          "itemImageSrc"     : 'carolina_blue_1.jpg',
          "itemTitle"        : "Carolina Blue / Mirror Original",
          "artist"           : null,
          "itemDescription"  : "The Brooktide Original model puts a modern touch on the classic look of an aviator style pair of sunglasses. All Brooktide Originals have:\r\n\r\n\r\nDurable polycarbonate frame with glossy finish\r\nLight-weight design (0.8 oz)\r\nFDA approved scratch-resistant lenses\r\nEssential UV400 protection\r\nLaser printed logo on left temple\r\nMicrofiber carrying case/cleaning cloth\r\n\r\n\r\nDimensions:\r\n\r\n5.394 in. (front)\r\n2.165 in. (tall)\r\n5.236 in. (temple)\r\n\r\n\r\n",
          "itemPrice"        : "$15.00",
          "hasSize"          : false,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'oneSize' : ['636492185']
          },
          "allImages": ['carolina_blue_3.jpg', 'carolina_blue_1.jpg']
        },
        {
          "id"               : "6",
          "index"            : "5",
          "largeItemSrc1"    : 'white_1.jpg',
          "itemImageSrc"     : 'white_1.jpg',
          "itemTitle"        : "White / Black Original",
          "artist"           : null,
          "itemDescription"  : "The Brooktide Original model puts a modern touch on the classic look of an aviator style pair of sunglasses. All Brooktide Originals have:\r\n\r\n\r\nDurable polycarbonate frame with glossy finish\r\nLight-weight design (0.8 oz)\r\nFDA approved scratch-resistant lenses\r\nEssential UV400 protection\r\nLaser printed logo on left temple\r\nMicrofiber carrying case/cleaning cloth\r\n\r\n\r\nDimensions:\r\n\r\n5.394 in. (front)\r\n2.165 in. (tall)\r\n5.236 in. (temple)\r\n\r\n\r\n",
          "itemPrice"        : "$16.00",
          "hasSize"          : false,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'oneSize' : ['958094545']
          },
          "allImages": ['white_3.jpg', 'white_2.jpg', 'white_1.jpg']
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
          "id"                 : "1", //original black
          "hotSpotId"          : "1",
          "index"              : "0",
          "startTime"          : "0.00",
          "endTime"            : "0.077",
          "hotSpotStartX"      : "820",
          "hotSpotStartY"      : "375",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "300",
          "hotSpotStartHeight" : "300"
        },

        {
          "id"                 : "1", //original black
          "hotSpotId"          : "2",
          "index"              : "0",
          "startTime"          : "0.10",
          "endTime"            : "0.20",
          "hotSpotStartX"      : "1300",
          "hotSpotStartY"      : "30",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "300",
          "hotSpotStartHeight" : "300"
        },
        {
          "id"                 : "2", //amber
          "hotSpotId"          : "3",
          "index"              : "0",
          "startTime"          : "0.10",
          "endTime"            : "0.20",
          "hotSpotStartX"      : "650",
          "hotSpotStartY"      : "125",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "300",
          "hotSpotStartHeight" : "300"
        },
        {
          "id"                 : "3", //moonshine
          "hotSpotId"          : "4",
          "index"              : "0",
          "startTime"          : "0.10",
          "endTime"            : "0.20",
          "hotSpotStartX"      : "1020",
          "hotSpotStartY"      : "110",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "300",
          "hotSpotStartHeight" : "300"
        },


        {
          "id"                 : "1", //original black
          "hotSpotId"          : "5",
          "index"              : "0",
          "startTime"          : "0.27",
          "endTime"            : "0.35",
          "hotSpotStartX"      : "1180",
          "hotSpotStartY"      : "100",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "300",
          "hotSpotStartHeight" : "300"
        },
        {
          "id"                 : "3", //moonshine
          "hotSpotId"          : "6",
          "index"              : "0",
          "startTime"          : "0.27",
          "endTime"            : "0.34",
          "hotSpotStartX"      : "580",
          "hotSpotStartY"      : "180",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "300",
          "hotSpotStartHeight" : "300"
        },
        {
          "id"                 : "3", //moonshine
          "hotSpotId"          : "7",
          "index"              : "0",
          "startTime"          : "0.39",
          "endTime"            : "0.415",
          "hotSpotStartX"      : "1200",
          "hotSpotStartY"      : "180",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "300",
          "hotSpotStartHeight" : "300"
        },

        {
          "id"                 : "2", //amber
          "hotSpotId"          : "8",
          "index"              : "0",
          "startTime"          : "0.43",
          "endTime"            : "0.555",
          "hotSpotStartX"      : "675",
          "hotSpotStartY"      : "300",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "300",
          "hotSpotStartHeight" : "300"
        },

        {
          "id"                 : "2", //amber
          "hotSpotId"          : "9",
          "index"              : "0",
          "startTime"          : "0.60",
          "endTime"            : "0.64",
          "hotSpotStartX"      : "780",
          "hotSpotStartY"      : "150",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "300",
          "hotSpotStartHeight" : "300"
        },

        {
          "id"                 : "2", //amber
          "hotSpotId"          : "10",
          "index"              : "0",
          "startTime"          : "0.65",
          "endTime"            : "0.71",
          "hotSpotStartX"      : "500",
          "hotSpotStartY"      : "200",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "300",
          "hotSpotStartHeight" : "300"
        },
        {
          "id"                 : "3", //moonshine
          "hotSpotId"          : "11",
          "index"              : "0",
          "startTime"          : "0.65",
          "endTime"            : "0.69",
          "hotSpotStartX"      : "1600",
          "hotSpotStartY"      : "180",
          "hotSpotEndX"        : "1500",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "300",
          "hotSpotStartHeight" : "300"
        },

        {
          "id"                 : "1", //black original
          "hotSpotId"          : "12",
          "index"              : "0",
          "startTime"          : "0.72",
          "endTime"            : "0.82",
          "hotSpotStartX"      : "875",
          "hotSpotStartY"      : "390",
          "hotSpotEndX"        : "1500",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "300",
          "hotSpotStartHeight" : "300"
        },
        {
          "id"                 : "1", //black original
          "hotSpotId"          : "13",
          "index"              : "0",
          "startTime"          : "0.39",
          "endTime"            : "0.415",
          "hotSpotStartX"      : "700",
          "hotSpotStartY"      : "180",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "300",
          "hotSpotStartHeight" : "300"
        },
      ],

      cartItems:[]
    };
  });

