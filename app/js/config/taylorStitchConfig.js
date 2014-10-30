define([
  'underscore',
  'backbone'
], function (_, Backbone) {

    window.playerConfig = {

      gaKey : 'UA-55667188-1',

      mp4_video_src_med  : "taylorStitch/taylorStitchVideo.mp4",
      webm_video_src_med : 'taylorStitch/taylorStitchVideoWebm.webm',

      loaderStyle: 'image',

      baseVideoPath          : "static/movies/",
      baseProductImagePath   : "static/images/productImages/taylorStitch/",
      colorVariantsImagePath : 'static/images/productImages/taylorStitch/colorVariants/',

      checkoutUrl          : "http://www.taylorstitch.com/cart/",
      checkoutCartAddPath  : "http://www.taylorstitch.com/cart/add",
      checkoutCartLocation : "http://www.taylorstitch.com/cart/",

      beaconColor       : '',
      checkoutType      : "shopify",
      shareUrl          : "http://www.helloshowroom.co/taylor-stitch/index.html",
      shareEmbedBaseUrl : "http://www.helloshowroom.co/taylor-stitch/index.html?config=taylorStitchConfig",
      splashImage       : 'static/images/posterFrames/taylorStitchOverlay.gif',
      hotspotColor      : 'white',

      recommended : [
        {
          "id"            : '1',
          "largeItemSrc1" : "Blue_1.jpg"
        },
        {
          "id"            : '2',
          "largeItemSrc1" : "White_1.jpg"
        },
        {
          "id"            : '3',
          "largeItemSrc1" : "Charcoal_1.jpg"
        },
        {
          "id"            : '4',
          "largeItemSrc1" : 'midnight_trousers_1.jpg'
        },
        {
          "id"            : '5',
          "largeItemSrc1" : 'pine_trousers_1.jpg'
        },
        {
          "id"            : '6',
          "largeItemSrc1" : 'driftwood_trousers_1.jpg'
        }
      ],

      itemData: [
        {
          "id"                 : "1",
          "index"              : "0",
          "largeItemSrc1"      : "Blue_1.jpg",
          "itemImageSrc"       : "Blue_1.jpg",
          "itemTitle"          : "The Blue Everyday Oxford Jack",
          "itemDescription"    : "The Everyday Oxford is our calling card. If you could only own one shirt, this would be it. At any given day at the shop, at least one of us has one on. It is never overdressed or underdressed, and it looks perfectly fine with a few wrinkles.",
          "itemPrice"          : "$98",
          "hasSize"            : true,
          "colorBlockId"       : '1',
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "allImages"          : ["Blue_2.jpg", "Blue_1.jpg"],
          "variants" : {
            xsmall : ['812187233'],
            small  : ['812187237'],
            medium : ['812187241'],
            large  : ['812187245'],
            xlarge : ['812187249']
          }
        },
        {
          "id"                 : "2",
          "index"              : "1",
          "largeItemSrc1"      : "White_1.jpg",
          "itemImageSrc"       : "White_1.jpg",
          "itemTitle"          : "The White Everyday Oxford Jack",
          "itemDescription"    : "The Everyday Oxford is our calling card. If you could only own one shirt, this would be it. At any given day at the shop, at least one of us has one on. It is never overdressed or underdressed, and it looks perfectly fine with a few wrinkles.",
          "itemPrice"          : "$98",
          "hasSize"            : true,
          "colorBlockId"       : '1',
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "allImages"          : ["White_2.jpg", "White_1.jpg"],
          "variants" : {
            xsmall : ['812192337'],
            small  : ['812192369'],
            medium : ['812192737'],
            large  : ['812192741'],
            xlarge : ['812192745']
          }
        },
        {
          "id"                 : "3",
          "index"              : "2",
          "largeItemSrc1"      : "Charcoal_1.jpg",
          "itemImageSrc"       : "Charcoal_1.jpg",
          "itemTitle"          : "The Charcoal Everyday Oxford Jack",
          "itemDescription"    : "The Everyday Oxford is our calling card. If you could only own one shirt, this would be it. At any given day at the shop, at least one of us has one on. It is never overdressed or underdressed, and it looks perfectly fine with a few wrinkles.",
          "itemPrice"          : "$98",
          "hasSize"            : true,
          "colorBlockId"       : '1',
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "allImages"          : ["Charcoal_2.jpg", "Charcoal_1.jpg"],
          "variants" : {
            xsmall : ['812189549'],
            small  : ['812189829'],
            medium : ['812189833'],
            large  : ['812189837'],
            xlarge : ['812189841']
          }
        },
        {
          "id"                 : "4",
          "index"              : "3",
          "largeItemSrc1"      : "midnight_trousers_1.jpg",
          "itemImageSrc"       : "midnight_trousers_1.jpg",
          "itemTitle"          : "Vintner's Chore Pant",
          "itemDescription"    : "10 Oz. Compact Woven Army Canvas. Double Reinforced Knee. Pencil Slot. Button Fly Closure. Democratic Fit. Pre-Shrunk. Made in California.",
          "itemPrice"          : "$128",
          "hasSize"            : true,
          "hasColor"           : true,
          "colorBlockId"       : '2',
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "allImages"          : ["midnight_trousers_3.jpg", "midnight_trousers_2.jpg", "midnight_trousers_1.jpg"],
          "variants"           : {
            xsmall : ['812064149'],
            small  : ['812064157'],
            medium : ['812064233'],
            large  : ['812064497'],
            xlarge : ['812065001']
          }
        },
        {
          "id"                 : "5",
          "index"              : "4",
          "largeItemSrc1"      : "pine_trousers_1.jpg",
          "itemImageSrc"       : "pine_trousers_1.jpg",
          "itemTitle"          : "Vintner's Chore Pant",
          "itemDescription"    : "10 Oz. Compact Woven Army Canvas. Double Reinforced Knee. Pencil Slot. Button Fly Closure. Democratic Fit. Pre-Shrunk. Made in California.",
          "itemPrice"          : "$128",
          "hasSize"            : true,
          "hasColor"           : true,
          "colorBlockId"       : '2',
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "allImages"          : ["pine_trousers_3.jpg", "pine_trousers_2.jpg", "pine_trousers_1.jpg"],
          "variants"           : {
            xsmall : ['812173405'],
            small  : ['812064157'],
            medium : ['812064233'],
            large  : ['812064497'],
            xlarge : ['812065001']
          }
        },
        {
          "id"                 : "6",
          "index"              : "5",
          "largeItemSrc1"      : "driftwood_trousers_1.jpg",
          "itemImageSrc"       : "driftwood_trousers_1.jpg",
          "itemTitle"          : "Vintner's Chore Pant",
          "itemDescription"    : "10 Oz. Compact Woven Army Canvas. Double Reinforced Knee. Pencil Slot. Button Fly Closure. Democratic Fit. Pre-Shrunk. Made in California.",
          "itemPrice"          : "$128",
          "hasSize"            : true,
          "hasColor"           : true,
          "colorBlockId"       : '2',
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "allImages"          : ["driftwood_trousers_3.jpg", "driftwood_trousers_2.jpg", "driftwood_trousers_1.jpg"],
          "variants"           : {
            xsmall : ['812031425'],
            large  : ['812173429'],
            xlarge : ['812173437']
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
        {
          "id"           : '6',
          "colorSrc"     : "#9f9a94",
          "colorBlockId" : '2'
        }
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
          "hotSpotStartHeight" : "300"
        },
        {
          "id"                 : "1",
          "hotSpotId"          : "2",
          "index"              : "0",
          "startTime"          : "0.13",
          "endTime"            : "0.235",
          "hotSpotStartX"      : "1155",
          "hotSpotStartY"      : "275",
          "hotSpotStartWidth"  : "300",
          "hotSpotStartHeight" : "300"
        },
        {
          "id"                 : "1",
          "hotSpotId"          : "3",
          "index"              : "0",
          "startTime"          : "0.235",
          "endTime"            : "0.31",
          "hotSpotStartX"      : "100",
          "hotSpotStartY"      : "200",
          "hotSpotStartWidth"  : "1300",
          "hotSpotStartHeight" : "900"
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
          "hotSpotStartHeight" : "200"
        },
        {
          "id"                 : "1",
          "hotSpotId"          : "5",
          "index"              : "0",
          "startTime"          : "0.39",
          "endTime"            : "0.56",
          "hotSpotStartX"      : "1000",
          "hotSpotStartY"      : "300",
          "hotSpotStartWidth"  : "550",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "1",
          "hotSpotId"          : "6",
          "index"              : "0",
          "startTime"          : "0.56",
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
          "startTime"          : "0.785",
          "endTime"            : "0.89",
          "hotSpotStartX"      : "450",
          "hotSpotStartY"      : "100",
          "hotSpotStartWidth"  : "400",
          "hotSpotStartHeight" : "400"
        },
        {
          "id"                 : "4",
          "hotSpotId"          : "9",
          "index"              : "0",
          "startTime"          : "0.055",
          "endTime"            : "0.13",
          "hotSpotStartX"      : "1050",
          "hotSpotStartY"      : "590",
          "hotSpotStartWidth"  : "200",
          "hotSpotStartHeight" : "200"
        },
      ],

      cartItems:[]
    };
  });

