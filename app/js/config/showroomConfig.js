define([
  'underscore',
  'backbone'
], function (_, Backbone) {

    window.playerConfig = {

      gaKey : 'UA-55667188-1',

      mp4_video_src_med  : 'showroom/showroom.mp4',
      webm_video_src_med : 'showroom/showroom-webm.webm',
      iphone_video_src   : 'showroom/midtest.mpg',
      iphone_audio_src   : 'showroom/soundtrack.mp3',
      loaderStyle        : 'image',

      baseVideoPath          : "static/movies/",
      baseProductImagePath   : "static/images/productImages/taylorStitch/",
      colorVariantsImagePath : 'static/images/productImages/taylorStitch/colorVariants/',

      checkoutUrl : "mailto:we@helloshowroom.co?subject=Showroom - Shop Video&body=Let's activate video.",

      beaconColor       : '',
      checkoutType      : "email",
      shareUrl          : "http://www.helloshowroom.co/showroom/index.html",
      shareEmbedBaseUrl : "http://www.helloshowroom.co/showroom/index.html?config=showroomConfig",
      splashImage       : 'static/images/posterFrames/taylorStitchOverlay.gif',
      hotspotColor      : 'white',
      spinnerColor      : null,

      recommended : [
        {
          "id"            : '4',
          "itemImageSrc" : 'denim_glacier_1.jpg'
        },
        {
          "id"            : '5',
          "itemImageSrc" : 'twill_glacier_1.jpg'
        },
        {
          "id"            : '1',
          "itemImageSrc" : "Blue_1.jpg"
        },
        {
          "id"            : '2',
          "itemImageSrc" : "White_1.jpg"
        },
        {
          "id"            : '3',
          "itemImageSrc" : "Charcoal_1.jpg"
        }
      ],

      itemData: [
        {
          "id"                 : "1",
          "index"              : "0",
          "itemImageSrc"       : "Blue_1.jpg",
          "itemTitle"          : "The Blue Everyday Oxford Jack",
          "itemDescription"    : "The Everyday Oxford is our calling card. If you could only own one shirt, this would be it. At any given day at the shop, at least one of us has one on. It is never overdressed or underdressed, and it looks perfectly fine with a few wrinkles.",
          "itemPrice"          : "$98",
          "hasSize"            : true,
          "colorBlockId"       : '1',
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "allImages"          : ["Blue_2.jpg", "Blue_1.jpg"],
          "variants" : {
            XS : ['812187233'],
            S  : ['812187237'],
            M  : ['812187241'],
            L  : ['812187245'],
            XL : ['812187249']
          }
        },
        {
          "id"                 : "2",
          "index"              : "1",
          "itemImageSrc"       : "White_1.jpg",
          "itemTitle"          : "The White Everyday Oxford Jack",
          "itemDescription"    : "The Everyday Oxford is our calling card. If you could only own one shirt, this would be it. At any given day at the shop, at least one of us has one on. It is never overdressed or underdressed, and it looks perfectly fine with a few wrinkles.",
          "itemPrice"          : "$98",
          "hasSize"            : true,
          "colorBlockId"       : '1',
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "allImages"          : ["White_2.jpg", "White_1.jpg"],
          "variants" : {
            XS : ['812192337'],
            S  : ['812192369'],
            M  : ['812192737'],
            L  : ['812192741'],
            XL : ['812192745']
          }
        },
        {
          "id"                 : "3",
          "index"              : "2",
          "itemImageSrc"       : "Charcoal_1.jpg",
          "itemTitle"          : "The Charcoal Everyday Oxford Jack",
          "itemDescription"    : "The Everyday Oxford is our calling card. If you could only own one shirt, this would be it. At any given day at the shop, at least one of us has one on. It is never overdressed or underdressed, and it looks perfectly fine with a few wrinkles.",
          "itemPrice"          : "$98",
          "hasSize"            : true,
          "colorBlockId"       : '1',
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "allImages"          : ["Charcoal_2.jpg", "Charcoal_1.jpg"],
          "variants" : {
            XS : ['812189549'],
            S  : ['812189829'],
            M  : ['812189833'],
            L  : ['812189837'],
            XL : ['812189841']
          }
        },
        {
          "id"                 : "4",
          "index"              : "3",
          "itemImageSrc"       : "denim_glacier_1.jpg",
          "itemTitle"          : "Denim Glacier Shirt",
          "itemDescription"    : "The Glacier Shirt is a collaboration with our favorite hat makers, FairEnds. A modern take on the western classic, the inspiration behind this shirt is Glacier National Park. It is equally at home casting dry flies from an empty bank as it is on a hike under the big sky.",
          "itemPrice"          : "$125",
          "hasSize"            : true,
          "hasColor"           : true,
          "colorBlockId"       : '2',
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "allImages"          : ["denim_glacier_2.jpg", "denim_glacier_1.jpg"],
          "variants"           : {
            XS : ['986914052'],
            S  : ['986914056'],
            M  : ['986914060'],
            L  : ['986914064'],
            XL : ['986914068']
          }
        },
        {
          "id"                 : "5",
          "index"              : "4",
          "itemImageSrc"       : "twill_glacier_1.jpg",
          "itemTitle"          : "Twill Glacier Shirt",
          "itemDescription"    : "The Glacier Shirt is a collaboration with our favorite hat makers, FairEnds. A modern take on the western classic, the inspiration behind this shirt is Glacier National Park. It is equally at home casting dry flies from an empty bank as it is on a hike under the big sky.",
          "itemPrice"          : "$125",
          "hasSize"            : true,
          "hasColor"           : true,
          "colorBlockId"       : '2',
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "allImages"          : ["twill_glacier_2.jpg", "twill_glacier_1.jpg"],
          "variants"           : {
            XS : ['986909080'],
            S  : ['986909084'],
            M  : ['986909088'],
            L  : ['986909092'],
            XL : ['986909096']
          }
        },

      ],

      variantColors: [
        {
          "id"           : "1",
          "colorSrc"     : "#b0b6cf",
          "colorBlockId" : '1'
        },
        {
          "id"           : "3",
          "colorSrc"     : "#ababb0",
          "colorBlockId" : '1'
        },
        {
          "id"           : "2",
          "colorSrc"     : "#FFF",
          "colorBlockId" : '1'
        },
        {
          "id"           : '4',
          "colorSrc"     : "#272a3d",
          "colorBlockId" : '2'
        },
        {
          "id"           : '5',
          "colorSrc"     : "#3b3b2f",
          "colorBlockId" : '2'
        },
      ],

      hotSpots: [
        {
          "id"                 : "1",
          "hotSpotId"          : "1",
          "index"              : "0",
          "startTime"          : "0.02",
          "endTime"            : "0.13",
          "hotSpotStartX"      : "1100",
          "hotSpotStartY"      : "250",
          "hotSpotStartWidth"  : "300",
          "hotSpotStartHeight" : "300",
          "bezierStartXY"      : [1, 1],
          'bezierMoveXY'       : [-45, 1],
          "firstPull"          : [-45, 1],
          "secondPull"         : null,
          'circularCentersXY'  : null,
          'radius'             : null,
          'pathType'           : 'regular',  //regular, advanced, circular
          'pathName'           : 'firstMovingBeacon',
          'timingType'         : 'cubic-bezier(0, .96, .91, .82)',
          'iterationCount'     : 1,
          'movingBeacon'       : true,
          'durationMultiple'   : 40
        },
        {
          "id"                 : "1",
          "hotSpotId"          : "2",
          "index"              : "0",
          "startTime"          : "0.13",
          "endTime"            : "0.235",
          "hotSpotStartX"      : "1155",
          "hotSpotStartY"      : "275",
          "hotSpotEndX"        : "1300",
          "hotSpotEndY"        : "200",
          "hotSpotStartWidth"  : "300",
          "hotSpotStartHeight" : "300",
          'movingBeacon'       : false,
        },
        {
          "id"                 : "1",
          "hotSpotId"          : "3",
          "index"              : "0",
          "startTime"          : "0.239",
          "endTime"            : "0.31",
          "hotSpotStartX"      : "100",
          "hotSpotStartY"      : "200",
          "hotSpotStartWidth"  : "1300",
          "hotSpotStartHeight" : "900",
          'movingBeacon'       : false,
        },
        {
          "id"                 : "1",
          "hotSpotId"          : "4",
          "index"              : "0",
          "startTime"          : "0.31",
          "endTime"            : "0.39",
          "hotSpotStartX"      : "1370",
          "hotSpotStartY"      : "240",
          "hotSpotStartWidth"  : "400",
          "hotSpotStartHeight" : "200",
          'movingBeacon'       : false,
        },
        {
          "id"                 : "1",
          "hotSpotId"          : "5",
          "index"              : "0",
          "startTime"          : "0.393",
          "endTime"            : "0.56",
          "hotSpotStartX"      : "900",
          "hotSpotStartY"      : "300",
          "hotSpotStartWidth"  : "550",
          "hotSpotStartHeight" : "300",
          "bezierStartXY"      : [1, 1],
          'bezierMoveXY'       : [300, 20],
          "firstPull"          : [300, -20],
          "secondPull"         : null,
          'circularCentersXY'  : null,
          'radius'             : null,
          'pathType'           : 'regular',  //regular, advanced, circular
          'pathName'           : 'secondMovingBeacon',
          'timingType'         : 'cubic-bezier(0, .96, .91, .82)',
          'iterationCount'     : 1,
          'movingBeacon'       : true,
          'durationMultiple'   : 50
        },
        {
          "id"                 : "1",
          "hotSpotId"          : "6",
          "index"              : "0",
          "startTime"          : "0.566",
          "endTime"            : "0.675",
          "hotSpotStartX"      : "100",
          "hotSpotStartY"      : "0",
          "hotSpotStartWidth"  : "550",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "1",
          "hotSpotId"          : "7",
          "index"              : "0",
          "startTime"          : "0.675",
          "endTime"            : "0.785",
          "hotSpotStartX"      : "1400",
          "hotSpotStartY"      : "200",
          "hotSpotStartWidth"  : "400",
          "hotSpotStartHeight" : "400"
        },
        {
          "id"                 : "1",
          "hotSpotId"          : "8",
          "index"              : "0",
          "startTime"          : "0.788",
          "endTime"            : "0.89",
          "hotSpotStartX"      : "450",
          "hotSpotStartY"      : "100",
          "hotSpotStartWidth"  : "400",
          "hotSpotStartHeight" : "400"
        }
      ],

      cartItems:[]
    };
  });

