define([
  'underscore',
  'backbone'
], function (_, Backbone) {

    window.playerConfig = {

      gaKey        : 'UA-55667188-1',
      gaVendorName : 'Old Navy',

      loaderStyle       : 'image',
      splashImage       : 'static/images/posterFrames/oldnavy.png',
      customSplashImage : null,

      mp4_video_src_med  : 'oldnavy/oldnavy.mp4',
      webm_video_src_med : 'oldnavy/oldnavy.webm',
      iphone_video_src   : 'oldnavy/oldnavy.mpg',
      iphone_audio_src   : 'oldnavy/oldnavy_soundtrack.mp3',

      baseVideoPath          : "static/movies/",
      baseProductImagePath   : "static/images/productImages/oldnavy/",
      colorVariantsImagePath : "static/images/productImages/oldnavy/optionVariants/",

      checkoutType : "email",
      checkoutUrl  : "mailto:we@helloshowroom.co?subject=Showroom - Shop Video&body=Let's activate video.",

      shareUrl          : "http://www.helloshowroom.co/oldnavy",
      shareEmbedBaseUrl : "http://www.helloshowroom.co/oldnavy/main.html?config=nylonConfig",

      hotspotColor    : 'white',
      spinnerColor    : null,
      customFontSize  : null,
      customBoxSize   : null,
      beaconPlacement : null,

      recommended : [
        {
          "id"           : '1',
          "itemImageSrc" : 'shot_1_child.jpg'
        },
        {
          "id"           : '2',
          "itemImageSrc" : 'shot_1_mens_coat.jpg'
        },
        {
          "id"           : '3',
          "itemImageSrc" : 'shot_1_mens_shirt.jpg'
        },
        {
          "id"           : '4',
          "itemImageSrc" : 'shot_1_womens_dress.jpg'
        },
        {
          "id"           : '5',
          "itemImageSrc" : 'shot_1_womens_jacket.jpg',
        },
        {
          "id"           : '6',
          "itemImageSrc" : 'shot_2_jacket.jpg'
        },
        {
          "id"           : '7',
          "itemImageSrc" : 'shot_2_pants.jpg'
        },
        {
          "id"           : '8',
          "itemImageSrc" : 'shot_2_shoes.jpg'
        },
        {
          "id"           : '9',
          "itemImageSrc" : 'shot_3_girls_jacket.jpg'
        },
        {
          "id"           : '10',
          "itemImageSrc" : 'shot_3_sweater.jpg'
        },
        {
          "id"           : '11',
          "itemImageSrc" : 'shot_4_shirt.jpg'
        },
        {
          "id"              : '12',
          "itemImageSrc"    : 'shot_5_child_shorts.jpg',
          "imageTopAligned" : true,
        },
        {
          "id"           : '13',
          "itemImageSrc" : 'shot_5_child_top.jpg'
        },
        {
          "id"           : '14',
          "itemImageSrc" : 'shot_5_mens_shorts.jpg'
        },
        {
          "id"           : '16',
          "itemImageSrc" : 'shot_5_womens_dress_1.jpg'
        },
        {
          "id"           : '17',
          "itemImageSrc" : 'shot_6_shorts.jpg'
        },
        {
          "id"           : '18',
          "itemImageSrc" : 'shot_9_dress.jpg'
        },
        {
          "id"           : '19',
          "itemImageSrc" : 'shot_9_mens_shorts.jpg'
        },
        {
          "id"           : '20',
          "itemImageSrc" : 'shot_9_mens_top.jpg'
        },
        {
          "id"           : '21',
          "itemImageSrc" : 'shot_6_top.jpg'
        },
      ],

      variantColors: [
      ],

      itemData: [
        {
          "id"               : "1",
          "index"            : "0",
          "itemImageSrc"     : 'shot_1_child.jpg',
          "itemTitle"        : "Striped Sleeveless Dresses for Baby",
          "artist"           : null,
          "itemDescription"  : null,
          "itemPrice"        : "$14.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            "12-18M" : ['1'],
            "18-24M" : ['1'],
            "2T"     : ['1'],
            "3T"     : ['1'],
            "4T"     : ['1'],
            "5T"     : ['1'],
          },
          "allImages": ['shot_1_child.jpg']
        },
        {
          "id"               : "2",
          "index"            : "1",
          "itemImageSrc"     : 'shot_1_mens_coat.jpg',
          "itemTitle"        : "Lightweight Anoraks",
          "artist"           : null,
          "itemDescription"  : null,
          "itemPrice"        : "$28.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'XS' : ['1056431864'],
            'S'  : ['1056431868'],
            'M'  : ['1056431868'],
            'L'  : ['1056431868'],
            'XL' : ['1056431868']
          },
          "allImages": ['shot_1_mens_coat.jpg']
        },
        {
          "id"               : "3",
          "index"            : "2",
          "itemImageSrc"     : 'shot_1_mens_shirt.jpg',
          "itemTitle"        : "Slim-Fit Plaid Shirts",
          "artist"           : null,
          "itemDescription"  : null,
          "itemPrice"        : "$29.94",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'S'  : ['961129984'],
            'M'  : ['961129992'],
            'L'  : ['961129996'],
            'XL' : ['961129984'],
          },
          "allImages": ['shot_1_mens_shirt.jpg']
        },
        {
          "id"               : "4",
          "index"            : "3",
          "itemImageSrc"     : 'shot_1_womens_dress.jpg',
          "itemTitle"        : "Patterned Jersey Shift Dresses",
          "artist"           : null,
          "itemDescription"  : null,
          "itemPrice"        : "$32.94",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'XS' : ['495568665'],
            'S'  : ['495568665'],
            'M'  : ['495568669'],
            'L'  : ['495568673'],
            'XL' : ['495568677']
          },
          "allImages": ['shot_1_womens_dress.jpg']
        },
        {
          "id"               : "5",
          "index"            : "4",
          "itemImageSrc"     : 'shot_1_womens_jacket.jpg',
          "itemTitle"        : "Women's Cropped Trench Coats",
          "artist"           : null,
          "itemDescription"  : null,
          "itemPrice"        : "$42.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'XS' : ['495568665'],
            'S'  : ['495568665'],
            'M'  : ['495568669'],
            'L'  : ['495568673'],
            'XL' : ['495568677']
          },
          "allImages": ['shot_1_womens_jacket.jpg']
        },
        {
          "id"               : "6",
          "index"            : "5",
          "itemImageSrc"     : 'shot_2_jacket.jpg',
          "itemTitle"        : "Twill Striped-Trim Bomber Jackets",
          "artist"           : null,
          "itemDescription"  : null,
          "itemPrice"        : "$29.94",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'XS' : ['1039844200'],
            'S'  : ['1039844200'],
            'M'  : ['1039844200'],
            'L'  : ['1039844200'],
            'XL' : ['1039844208']
          },
          "allImages": ['shot_2_jacket.jpg']
        },
        {
          "id"               : "7",
          "index"            : "6",
          "itemImageSrc"     : 'shot_2_pants.jpg',
          "itemTitle"        : "Poplin Jogger Pants",
          "artist"           : null,
          "itemDescription"  : null,
          "itemPrice"        : "$15.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : null,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            '5'  : ['1006314588'],
            '6'  : ['1006314592'],
            '7'  : ['1006314596'],
            '8'  : ['1006314600'],
            '9'  : ['1006314604'],
            '10' : ['1006314604'],
            '12' : ['1006314604'],
            '14' : ['1006314604'],
          },
          "allImages": ['shot_2_pants.jpg']
        },
        {
          "id"               : "8",
          "index"            : "7",
          "itemImageSrc"     : 'shot_2_shoes.jpg',
          "itemTitle"        : "Canvas Boat Shoes",
          "artist"           : null,
          "itemDescription"  : null,
          "itemPrice"        : "$22.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : null,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            '1'  : ['1006314588'],
            '2'  : ['1006314592'],
            '3'  : ['1006314596'],
            '4'  : ['1006314600'],
            '5'  : ['1006314604'],
            '11' : ['1006314604'],
            '12' : ['1006314604'],
            '13' : ['1006314604'],
          },
          "allImages": ['shot_2_shoes.jpg']
        },
        {
          "id"               : "9",
          "index"            : "8",
          "itemImageSrc"     : 'shot_3_girls_jacket.jpg',
          "itemTitle"        : "Twill Trenchcoat",
          "artist"           : null,
          "itemDescription"  : null,
          "itemPrice"        : "$22.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : null,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'S'  : ['1006314588'],
            'M'  : ['1006314592'],
            'L'  : ['1006314596'],
            'XL' : ['1006314600'],
          },
          "allImages": ['shot_3_girls_jacket.jpg']
        },
        {
          "id"               : "10",
          "index"            : "9",
          "itemImageSrc"     : 'shot_3_sweater.jpg',
          "itemTitle"        : "Pointelle-Knit Cardigans for Baby",
          "artist"           : null,
          "itemDescription"  : null,
          "itemPrice"        : "$19.94",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : null,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            "12-18M" : ['1'],
            "18-24M" : ['1'],
            "2T"     : ['1'],
            "3T"     : ['1'],
            "4T"     : ['1'],
            "5T"     : ['1'],
          },
          "allImages": ['shot_3_sweater.jpg']
        },
        {
          "id"               : "11",
          "index"            : "10",
          "itemImageSrc"     : 'shot_4_shirt.jpg',
          "itemTitle"        : "Slim-Fit Floral Shirts",
          "artist"           : null,
          "itemDescription"  : null,
          "itemPrice"        : "$29.94",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : null,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            "S"   : ['1'],
            "M"   : ['1'],
            "L"   : ['1'],
            "XL"  : ['1'],
            "XXL" : ['1']
          },
          "allImages": ['shot_4_shirt.jpg']
        },
        {
          "id"               : "12",
          "index"            : "11",
          "itemImageSrc"     : 'shot_5_child_shorts.jpg',
          "itemTitle"        : "Classic Rise Denim Shorts",
          "artist"           : null,
          "itemDescription"  : null,
          "itemPrice"        : "$14.94",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : null,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            "5"  : ['1'],
            "6"  : ['1'],
            "7"  : ['1'],
            "8"  : ['1'],
            "9"  : ['1'],
            "10" : ['1'],
            "11" : ['1'],
            "12" : ['1'],
          },
          "allImages": ['shot_5_child_shorts.jpg']
        },
        {
          "id"               : "13",
          "index"            : "12",
          "itemImageSrc"     : 'shot_5_child_top.jpg',
          "itemTitle"        : "Cross-Back Bubble Tanks",
          "artist"           : null,
          "itemDescription"  : null,
          "itemPrice"        : "$14.94",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : null,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            "XS" : ['1'],
            "S"  : ['1'],
            "M"  : ['1'],
            "L"  : ['1'],
            "XL" : ['1']
          },
          "allImages": ['shot_5_child_top.jpg']
        },
        {
          "id"               : "14",
          "index"            : "13",
          "itemImageSrc"     : 'shot_5_mens_shorts.jpg',
          "itemTitle"        : "Slim-Fit Embroidered-Pattern Shorts (10\")",
          "artist"           : null,
          "itemDescription"  : null,
          "itemPrice"        : "$22.94",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : null,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            "28" : ['1'],
            "29" : ['1'],
            "30" : ['1'],
            "31" : ['1'],
            "32" : ['1']
          },
          "allImages": ['shot_5_mens_shorts.jpg']
        },
        {
          "id"               : "15",
          "index"            : "14",
          "itemImageSrc"     : 'shot_5_mens_tops.jpg',
          "itemTitle"        : "Slim-Fit Floral Shirts",
          "artist"           : null,
          "itemDescription"  : null,
          "itemPrice"        : "$29.94",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : null,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            "S"   : ['1'],
            "M"   : ['1'],
            "L"   : ['1'],
            "XL"  : ['1'],
            "XXL" : ['1']
          },
          "allImages": ['shot_5_mens_tops.jpg']
        },
        {
          "id"               : "16",
          "index"            : "15",
          "itemImageSrc"     : 'shot_5_womens_dress_1.jpg',
          "itemTitle"        : "Maxi Cami Dresses",
          "artist"           : null,
          "itemDescription"  : null,
          "itemPrice"        : "$39.94",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : null,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            "S"   : ['1'],
            "M"   : ['1'],
            "L"   : ['1'],
            "XL"  : ['1'],
            "XXL" : ['1']
          },
          "allImages": ['shot_5_womens_dress_2.jpg', 'shot_5_womens_dress_1.jpg']
        },
        {
          "id"               : "17",
          "index"            : "16",
          "itemImageSrc"     : 'shot_6_shorts.jpg',
          "itemTitle"        : "Boys Cargo Shorts",
          "artist"           : null,
          "itemDescription"  : null,
          "itemPrice"        : "$10.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : null,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            "12"   : ['1'],
            "16"   : ['1'],
            "18"   : ['1'],
          },
          "allImages": ['shot_6_shorts.jpg']
        },
        {
          "id"               : "18",
          "index"            : "17",
          "itemImageSrc"     : 'shot_9_dress.jpg',
          "itemTitle"        : "Floral Chiffon Maxi Dresses",
          "artist"           : null,
          "itemDescription"  : null,
          "itemPrice"        : "$39.94",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : null,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            "XS" : ['1'],
            "S"  : ['1'],
            "M"  : ['1'],
            "L"  : ['1'],
            "XL" : ['1'],
          },
          "allImages": ['shot_9_dress.jpg']
        },
        {
          "id"               : "19",
          "index"            : "18",
          "itemImageSrc"     : 'shot_9_mens_shorts.jpg',
          "itemTitle"        : "Canvas Shorts (10\")",
          "artist"           : null,
          "itemDescription"  : null,
          "itemPrice"        : "$22.94",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : null,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            "28" : ['1'],
            "29" : ['1'],
            "30" : ['1'],
            "31" : ['1'],
            "32" : ['1'],
          },
          "allImages": ['shot_9_mens_shorts.jpg']
        },
        {
          "id"               : "20",
          "index"            : "19",
          "itemImageSrc"     : 'shot_9_mens_top.jpg',
          "itemTitle"        : "Slim-Fit Linen-Blend Shirts",
          "artist"           : null,
          "itemDescription"  : null,
          "itemPrice"        : "$34.94",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : null,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            "S"  : ['1'],
            "M"  : ['1'],
            "L"  : ['1'],
            "XL" : ['1'],
          },
          "allImages": ['shot_9_mens_top.jpg']
        },
        {
          "id"               : "21",
          "index"            : "20",
          "itemImageSrc"     : 'shot_6_top.jpg',
          "itemTitle"        : "Classic V-Neck Tees",
          "artist"           : null,
          "itemDescription"  : null,
          "itemPrice"        : "$8.94",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : null,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            "XS"  : ['1'],
            "S"  : ['1'],
            "M"  : ['1'],
            "L"  : ['1'],
            "XL" : ['1'],
          },
          "allImages": ['shot_6_top.jpg']
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
          "id"                 : "1", //child - shot 1
          "hotSpotId"          : "1",
          "index"              : "0",
          "startTime"          : "0.07",
          "endTime"            : "0.10",
          "hotSpotStartX"      : "650",
          "hotSpotStartY"      : "700",
          "hotSpotStartWidth"  : "200",
          "hotSpotStartHeight" : "200",
          'movingBeacon'       : false,
        },
        {
          "id"                 : "2", //mens coat
          "hotSpotId"          : "2",
          "index"              : "0",
          "startTime"          : "0.07",
          "endTime"            : "0.10",
          "hotSpotStartX"      : "550",
          "hotSpotStartY"      : "275",
          "hotSpotStartWidth"  : "150",
          "hotSpotStartHeight" : "300",
          'movingBeacon'       : false,
        },
        {
          "id"                 : "3", //mens shirt
          "hotSpotId"          : "3",
          "index"              : "0",
          "startTime"          : "0.07",
          "endTime"            : "0.10",
          "hotSpotStartX"      : "490",
          "hotSpotStartY"      : "275",
          "hotSpotStartWidth"  : "100",
          "hotSpotStartHeight" : "400",
          'movingBeacon'       : false,
        },
        {
          "id"                 : "4", //womens dress
          "hotSpotId"          : "4",
          "index"              : "0",
          "startTime"          : "0.07",
          "endTime"            : "0.10",
          "hotSpotStartX"      : "950",
          "hotSpotStartY"      : "275",
          "hotSpotStartWidth"  : "100",
          "hotSpotStartHeight" : "400",
          'movingBeacon'       : false,
        },
        {
          "id"                 : "5", //womens jacket
          "hotSpotId"          : "5",
          "index"              : "0",
          "startTime"          : "0.07",
          "endTime"            : "0.10",
          "hotSpotStartX"      : "1050",
          "hotSpotStartY"      : "275",
          "hotSpotStartWidth"  : "170",
          "hotSpotStartHeight" : "550",
          'movingBeacon'       : false,
        },
        {
          "id"                 : "6", //jacket - shot 2
          "hotSpotId"          : "6",
          "index"              : "0",
          "startTime"          : "0.105",
          "endTime"            : "0.146",
          "hotSpotStartX"      : "870",
          "hotSpotStartY"      : "200",
          "hotSpotStartWidth"  : "300",
          "hotSpotStartHeight" : "300",
          'movingBeacon'       : false,
        },
        {
          "id"                 : "7", //pants
          "hotSpotId"          : "7",
          "index"              : "0",
          "startTime"          : "0.105",
          "endTime"            : "0.146",
          "hotSpotStartX"      : "870",
          "hotSpotStartY"      : "600",
          "hotSpotStartWidth"  : "300",
          "hotSpotStartHeight" : "280",
          'movingBeacon'       : false,
        },
        {
          "id"                 : "8", //shoes
          "hotSpotId"          : "8",
          "index"              : "0",
          "startTime"          : "0.105",
          "endTime"            : "0.146",
          "hotSpotStartX"      : "880",
          "hotSpotStartY"      : "970",
          "hotSpotStartWidth"  : "300",
          "hotSpotStartHeight" : "100",
          'movingBeacon'       : false,
        },

        {
          "id"                 : "9", //jacket - shot 3
          "hotSpotId"          : "9",
          "index"              : "0",
          "startTime"          : "0.15",
          "endTime"            : "0.189",
          "hotSpotStartX"      : "800",
          "hotSpotStartY"      : "500",
          "hotSpotStartWidth"  : "100",
          "hotSpotStartHeight" : "400",
          'movingBeacon'       : false,
        },
        {
          "id"                 : "10", //sweater
          "hotSpotId"          : "10",
          "index"              : "0",
          "startTime"          : "0.15",
          "endTime"            : "0.189",
          "hotSpotStartX"      : "600",
          "hotSpotStartY"      : "580",
          "hotSpotStartWidth"  : "200",
          "hotSpotStartHeight" : "200",
          'movingBeacon'       : true,

          "bezierStartXY"      : [1, 1],
          'bezierMoveXY'       : [1, 100],
          "firstPull"          : [1, 100],
          "secondPull"         : null,
          'circularCentersXY'  : null,
          'radius'             : null,
          'pathType'           : 'regular',  //regular, advanced, circular
          'pathName'           : 'firstMovingBeacon',
          'timingType'         : 'cubic-bezier(0, .96, .91, .82)',
          'iterationCount'     : 1,
          'durationMultiple'   : 40
        },

        {
          "id"                 : "11", //shirt - shot 4
          "hotSpotId"          : "11",
          "index"              : "0",
          "startTime"          : "0.325",
          "endTime"            : "0.344",
          "hotSpotStartX"      : "400",
          "hotSpotStartY"      : "350",
          "hotSpotStartWidth"  : "400",
          "hotSpotStartHeight" : "400",
          'movingBeacon'       : false,
        },

        {
          "id"                 : "11", //shirt again - shot 5
          "hotSpotId"          : "27",
          "index"              : "0",
          "startTime"          : "0.389",
          "endTime"            : "0.41",
          "hotSpotStartX"      : "225",
          "hotSpotStartY"      : "275",
          "hotSpotStartWidth"  : "100",
          "hotSpotStartHeight" : "200",
          'movingBeacon'       : false,
        },
        {
          "id"                 : "12", //child shorts
          "hotSpotId"          : "12",
          "index"              : "0",
          "startTime"          : "0.389",
          "endTime"            : "0.41",
          "hotSpotStartX"      : "1530",
          "hotSpotStartY"      : "720",
          "hotSpotStartWidth"  : "150",
          "hotSpotStartHeight" : "150",
          'movingBeacon'       : false,
        },
        {
          "id"                 : "13", //child top
          "hotSpotId"          : "13",
          "index"              : "0",
          "startTime"          : "0.389",
          "endTime"            : "0.41",
          "hotSpotStartX"      : "1490",
          "hotSpotStartY"      : "450",
          "hotSpotStartWidth"  : "250",
          "hotSpotStartHeight" : "250",
          'movingBeacon'       : false,
        },
        // {
        //   "id"                 : "14", //mens shorts
        //   "hotSpotId"          : "14",
        //   "index"              : "0",
        //   "startTime"          : "0.389",
        //   "endTime"            : "0.41",
        //   "hotSpotStartX"      : "1400",
        //   "hotSpotStartY"      : "275",
        //   "hotSpotStartWidth"  : "400",
        //   "hotSpotStartHeight" : "400",
        //   'movingBeacon'       : false,
        // },
        {
          "id"                 : "15", //womens dress
          "hotSpotId"          : "15",
          "index"              : "0",
          "startTime"          : "0.389",
          "endTime"            : "0.41",
          "hotSpotStartX"      : "250",
          "hotSpotStartY"      : "300",
          "hotSpotStartWidth"  : "100",
          "hotSpotStartHeight" : "600",
          'movingBeacon'       : false,
        },

        {
          "id"                 : "17", //shot 6 - shorts
          "hotSpotId"          : "16",
          "index"              : "0",
          "startTime"          : "0.428",
          "endTime"            : "0.473",
          "hotSpotStartX"      : "1250",
          "hotSpotStartY"      : "600",
          "hotSpotStartWidth"  : "200",
          "hotSpotStartHeight" : "200",
          'movingBeacon'       : false,
        },
        {
          "id"                 : "21", //shot 6 - top
          "hotSpotId"          : "17",
          "index"              : "0",
          "startTime"          : "0.428",
          "endTime"            : "0.473",
          "hotSpotStartX"      : "1110",
          "hotSpotStartY"      : "200",
          "hotSpotStartWidth"  : "300",
          "hotSpotStartHeight" : "300",
          'movingBeacon'       : false,
        },

        {
          "id"                 : "21", //shot 7 - boy top
          "hotSpotId"          : "18",
          "index"              : "0",
          "startTime"          : "0.478",
          "endTime"            : "0.489",
          "hotSpotStartX"      : "960",
          "hotSpotStartY"      : "490",
          "hotSpotStartWidth"  : "150",
          "hotSpotStartHeight" : "300",
          'movingBeacon'       : false,
        },
        {
          "id"                 : "13", //shot 7 - girl top
          "hotSpotId"          : "19",
          "index"              : "0",
          "startTime"          : "0.478",
          "endTime"            : "0.489",
          "hotSpotStartX"      : "1200",
          "hotSpotStartY"      : "600",
          "hotSpotStartWidth"  : "300",
          "hotSpotStartHeight" : "300",
          'movingBeacon'       : false,
        },

        {
          "id"                 : "16", //shot 8 - maxi dress
          "hotSpotId"          : "20",
          "index"              : "0",
          "startTime"          : "0.53",
          "endTime"            : "0.595",
          "hotSpotStartX"      : "600",
          "hotSpotStartY"      : "275",
          "hotSpotStartWidth"  : "400",
          "hotSpotStartHeight" : "550",
          'movingBeacon'       : false,
        },

        {
          "id"                 : "19", //shot 9-1 - mens top
          "hotSpotId"          : "21",
          "index"              : "0",
          "startTime"          : "0.60",
          "endTime"            : "0.634",
          "hotSpotStartX"      : "1150",
          "hotSpotStartY"      : "175",
          "hotSpotStartWidth"  : "400",
          "hotSpotStartHeight" : "400",
          'movingBeacon'       : true,

          "bezierStartXY"      : [1, 1],
          'bezierMoveXY'       : [-400, -200],
          "firstPull"          : [-400, -200],
          "secondPull"         : null,
          'circularCentersXY'  : null,
          'radius'             : null,
          'pathType'           : 'regular',  //regular, advanced, circular
          'pathName'           : 'secondMovingBeacon',
          'timingType'         : 'cubic-bezier(0, .96, .91, .82)',
          'iterationCount'     : 1,
          'durationMultiple'   : 60
        },
        {
          "id"                 : "20", //shot 9-1 - mens shorts
          "hotSpotId"          : "22",
          "index"              : "0",
          "startTime"          : "0.60",
          "endTime"            : "0.636",
          "hotSpotStartX"      : "1225",
          "hotSpotStartY"      : "500",
          "hotSpotStartWidth"  : "300",
          "hotSpotStartHeight" : "300",
          'movingBeacon'       : true,

          "bezierStartXY"      : [1, 1],
          'bezierMoveXY'       : [-400, -100],
          "firstPull"          : [-400, -100],
          "secondPull"         : null,
          'circularCentersXY'  : null,
          'radius'             : null,
          'pathType'           : 'regular',  //regular, advanced, circular
          'pathName'           : 'thirdMovingBeacon',
          'timingType'         : 'cubic-bezier(0, .96, .91, .82)',
          'iterationCount'     : 1,
          'durationMultiple'   : 55
        },
        {
          "id"                 : "18", //shot 9-1 - dress
          "hotSpotId"          : "23",
          "index"              : "0",
          "startTime"          : "0.60",
          "endTime"            : "0.636",
          "hotSpotStartX"      : "1800",
          "hotSpotStartY"      : "275",
          "hotSpotStartWidth"  : "200",
          "hotSpotStartHeight" : "400",
          'movingBeacon'       : true,

          "bezierStartXY"      : [1, 1],
          'bezierMoveXY'       : [-375, -80],
          "firstPull"          : [-375, -80],
          "secondPull"         : null,
          'circularCentersXY'  : null,
          'radius'             : null,
          'pathType'           : 'regular',  //regular, advanced, circular
          'pathName'           : 'fourthMovingBeacon',
          'timingType'         : 'cubic-bezier(0, .96, .91, .82)',
          'iterationCount'     : 1,
          'durationMultiple'   : 40
        },

        {
          "id"                 : "19", //shot 9-2 - mens top
          "hotSpotId"          : "28",
          "index"              : "0",
          "startTime"          : "0.639",
          "endTime"            : "0.68",
          "hotSpotStartX"      : "820",
          "hotSpotStartY"      : "400",
          "hotSpotStartWidth"  : "120",
          "hotSpotStartHeight" : "120",
          'movingBeacon'       : false,
        },
        {
          "id"                 : "20", //shot 9-2 - mens shorts
          "hotSpotId"          : "29",
          "index"              : "0",
          "startTime"          : "0.639",
          "endTime"            : "0.68",
          "hotSpotStartX"      : "825",
          "hotSpotStartY"      : "500",
          "hotSpotStartWidth"  : "100",
          "hotSpotStartHeight" : "100",
          'movingBeacon'       : false,
        },
        {
          "id"                 : "18", //shot 9-2 - dress
          "hotSpotId"          : "30",
          "index"              : "0",
          "startTime"          : "0.639",
          "endTime"            : "0.68",
          "hotSpotStartX"      : "910",
          "hotSpotStartY"      : "275",
          "hotSpotStartWidth"  : "100",
          "hotSpotStartHeight" : "400",
          'movingBeacon'       : false,
        },

        {
          "id"                 : "19", //shot 9-3 - mens top
          "hotSpotId"          : "31",
          "index"              : "0",
          "startTime"          : "0.69",
          "endTime"            : "0.728",
          "hotSpotStartX"      : "1100",
          "hotSpotStartY"      : "400",
          "hotSpotStartWidth"  : "200",
          "hotSpotStartHeight" : "200",
          'movingBeacon'       : false,
        },
        {
          "id"                 : "20", //shot 9-3 - mens shorts
          "hotSpotId"          : "32",
          "index"              : "0",
          "startTime"          : "0.69",
          "endTime"            : "0.728",
          "hotSpotStartX"      : "1100",
          "hotSpotStartY"      : "600",
          "hotSpotStartWidth"  : "200",
          "hotSpotStartHeight" : "200",
          'movingBeacon'       : false,
        },
        {
          "id"                 : "18", //shot 9-3 - dress
          "hotSpotId"          : "33",
          "index"              : "0",
          "startTime"          : "0.69",
          "endTime"            : "0.728",
          "hotSpotStartX"      : "820",
          "hotSpotStartY"      : "500",
          "hotSpotStartWidth"  : "100",
          "hotSpotStartHeight" : "600",
          'movingBeacon'       : false,
        },

        {
          "id"                 : "19", //shot 10 - mens top
          "hotSpotId"          : "24",
          "index"              : "0",
          "startTime"          : "0.73",
          "endTime"            : "0.93",
          "hotSpotStartX"      : "1250",
          "hotSpotStartY"      : "450",
          "hotSpotStartWidth"  : "400",
          "hotSpotStartHeight" : "400",
          'movingBeacon'       : false,
        },
        {
          "id"                 : "20", //shot 10 - mens shorts
          "hotSpotId"          : "25",
          "index"              : "0",
          "startTime"          : "0.73",
          "endTime"            : "0.785",
          "hotSpotStartX"      : "1250",
          "hotSpotStartY"      : "940",
          "hotSpotStartWidth"  : "300",
          "hotSpotStartHeight" : "100",
          'movingBeacon'       : false,
        },
        {
          "id"                 : "18", //shot 10 - dress
          "hotSpotId"          : "26",
          "index"              : "0",
          "startTime"          : "0.73",
          "endTime"            : "0.93",
          "hotSpotStartX"      : "660",
          "hotSpotStartY"      : "400",
          "hotSpotStartWidth"  : "300",
          "hotSpotStartHeight" : "500",
          'movingBeacon'       : false,
        },


      ],

      cartItems:[]
    };
  });

