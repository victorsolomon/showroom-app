define([
  'underscore',
  'backbone'
], function (_, Backbone) {

    window.playerConfig = {

      gaKey        : 'UA-55667188-1',
      gaVendorName : 'Storq',

      loaderStyle       : 'image',
      splashImage       : 'static/images/posterFrames/storq.png',
      customSplashImage : null,

      mp4_video_src_med  : 'storq/storq_mp4.mp4',
      webm_video_src_med : 'storq/storq_webm.webm',

      baseVideoPath          : "static/movies/",
      baseProductImagePath   : "static/images/productImages/storq/",
      colorVariantsImagePath : "static/images/productImages/storq/optionVariants/",

      checkoutType : "shopify",
      checkoutUrl  : "http://storq.com/cart/",

      shareUrl          : "http://www.helloshowroom.co/storq",
      shareEmbedBaseUrl : "http://www.helloshowroom.co/storq/index.html?config=storqConfig",

      hotspotColor    : null,
      customFontSize  : null,
      customBoxSize   : null,
      beaconPlacement : null,

      recommended : [
        {
          "id"            : '1',
          "largeItemSrc1" : "shot_1_dress.png",
        },
        {
          "id"            : '2',
          "largeItemSrc1" : "shot_2_tank.png",
        },
        {
          "id"            : '3',
          "largeItemSrc1" : "shot_3_skirt.png",
        },
        {
          "id"            : '4',
          "largeItemSrc1" : "rec_bundle.png",
        },
        {
          "id"            : '5',
          "largeItemSrc1" : "rec_leggings.png",
        },
      ],

      variantColors: [
      ],

      itemData: [
        {
          "id"               : "1",
          "index"            : "0",
          "largeItemSrc1"    : 'shot_1_dress.png',
          "itemImageSrc"     : 'shot_1_dress.png',
          "itemTitle"        : "STORQ DRESS",
          "artist"           : null,
          "itemDescription"  : "A dress that hangs tough when even the drawstring has forsaken you. It’s soft, simple and goes with everything. Hugs your curves without strangling them. Pull it on, layer up and walk out the door. Scoop neck, straight cut that tapers toward the knee, short sleeves, hits just below the knee.",
          "itemPrice"        : "$88.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'P' : ['945929909'],
            '01' : ['427525205'],
            '02' : ['427570605'],
            '03' : ['427570665'],
            '04' : ['945930325']
          },
          "allImages": ['shot_1_dress.png']
        },
        {
          "id"               : "2",
          "index"            : "1",
          "largeItemSrc1"    : 'shot_2_tank.png',
          "itemImageSrc"     : 'shot_2_tank.png',
          "itemTitle"        : "STORQ TANK",
          "artist"           : null,
          "itemDescription"  : "Your new base layer, so flashing some bod is now an unmistakably conscious choice. Deep scoop neck for your epic cleavage and easy access for the nursing babe later on. Form-fitting with lots of extra length. Straps wide enough to cover your bra straps (we dare you to try going without a bra!)",
          "itemPrice"        : "$42.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'P' : ['945935753'],
            '01' : ['427527801'],
            '02' : ['427576797'],
            '03' : ['427576845'],
            '04' : ['945936917']
          },
          "allImages": ['shot_2_tank.png']
        },
        {
          "id"               : "3",
          "index"            : "2",
          "largeItemSrc1"    : 'shot_3_skirt.png',
          "itemImageSrc"     : 'shot_3_skirt.png',
          "itemTitle"        : "STORQ SKIRT",
          "artist"           : null,
          "itemDescription"  : "A versatile skirt for any occasion. And by occasion we mean being with child. Wear it above or below the bell, you make the rules. Double fabric for a smooth silhouette. Pulls on easy, stays in place with a thin elastic waistband that won't dig in. Straight, narrow cut that has a slim fit and tapers to the knee.",
          "itemPrice"        : "$74.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'P' : ['945933677'],
            '01' : ['427564345'],
            '02' : ['427574489'],
            '03' : ['427574529'],
            '04' : ['945933961']
          },
          "allImages": ['shot_3_skirt.png']
        },
        {
          "id"               : "4",
          "index"            : "3",
          "largeItemSrc1"    : 'rec_bundle.png',
          "itemImageSrc"     : 'rec_bundle.png',
          "itemTitle"        : "STORQ BUNDLE",
          "artist"           : null,
          "itemDescription"  : "Your daily essentials in one click. Because getting dressed should be the easy part.",
          "itemPrice"        : "$250.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'P' : ['945927461'],
            '01' : ['430967153'],
            '02' : ['431019969'],
            '03' : ['431020041'],
            '04' : ['945928153']
          },
          "allImages": ['rec_bundle.png']
        },
        {
          "id"               : "5",
          "index"            : "4",
          "largeItemSrc1"    : 'rec_leggings.png',
          "itemImageSrc"     : 'rec_leggings.png',
          "itemTitle"        : "STORQ LEGGINGS",
          "artist"           : null,
          "itemDescription"  : "A pregnant lady’s best friend whom she pretends she never met once the baby comes. No hard feelings. Ideal for keeping cozy lounging around the house. Outside the house, wear under tunics or dresses for a softer alternative to tights. Pull ‘em up over the bell or fold down to sit comfortably underneath. Extra wide, double fabric waist panel with a single side seam. Added length at the ankles to ensure full coverage.",
          "itemPrice"        : "$60.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'P' : ['945932081'],
            '01' : ['427520217'],
            '02' : ['427563909'],
            '03' : ['427563941'],
            '04' : ['945932533']
          },
          "allImages": ['rec_leggings.png']
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
          "endTime"            : "0.3695",
          "hotSpotStartX"      : "640",
          "hotSpotStartY"      : "200",
          "hotSpotStartWidth"  : "600",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "2", //tank
          "hotSpotId"          : "2",
          "index"              : "0",
          "startTime"          : "0.3716",
          "endTime"            : "1.0",
          "hotSpotStartX"      : "845",
          "hotSpotStartY"      : "180",
          "hotSpotStartWidth"  : "300",
          "hotSpotStartHeight" : "300"
        },
        {
          "id"                 : "3", //skirt
          "hotSpotId"          : "3",
          "index"              : "0",
          "startTime"          : "0.40",
          "endTime"            : "0.64",
          "hotSpotStartX"      : "845",
          "hotSpotStartY"      : "500",
          "hotSpotStartWidth"  : "300",
          "hotSpotStartHeight" : "300"
        },
      ],

      cartItems:[]
    };
  });

