define([
  'underscore',
  'backbone'
], function (_, Backbone) {

    window.playerConfig = {

      gaKey        : 'UA-55667188-1',
      gaVendorName : 'Nylon',

      loaderStyle       : 'image',
      splashImage       : 'static/images/posterFrames/nylon.png',
      customSplashImage : null,

      mp4_video_src_med  : 'nylon/nylon.mp4',
      webm_video_src_med : 'nylon/nylon.webm',
      iphone_video_src   : 'nylon/nylon.mpg',
      iphone_audio_src   : 'nylon/nylon_soundtrack.mp3',

      baseVideoPath          : "static/movies/",
      baseProductImagePath   : "static/images/productImages/nylon/",
      colorVariantsImagePath : "static/images/productImages/nylon/optionVariants/",

      checkoutType : "shopify",
      checkoutUrl  : "http://shop.nylon.com/cart/",

      shareUrl          : "http://www.helloshowroom.co/nylon",
      shareEmbedBaseUrl : "http://www.helloshowroom.co/nylon/main.html?config=nylonConfig",

      hotspotColor    : 'white',
      spinnerColor    : null,
      customFontSize  : null,
      customBoxSize   : null,
      beaconPlacement : null,

      recommended : [
        {
          "id"            : '1',
          "itemImageSrc" : 'shot_1_fml_1.jpg'
        },
        {
          "id"            : '2',
          "itemImageSrc" : 'shot_2_shirt_1.jpg'
        },
        {
          "id"            : '3',
          "itemImageSrc" : 'shot_3_loyal_1.jpg'
        },
        {
          "id"            : '4',
          "itemImageSrc" : 'shot_4_queen_1.png'
        },
        {
          "id"            : '5',
          "itemImageSrc" : 'shot_5_whiskey.jpg'
        },
        {
          "id"            : '6',
          "itemImageSrc" : 'shot_6_knees_1.jpg'
        },
        {
          "id"            : '7',
          "itemImageSrc" : 'shot_7_jesus_1.jpg'
        },
      ],

      variantColors: [
      ],

      itemData: [
        {
          "id"               : "1",
          "index"            : "0",
          "itemImageSrc"     : 'shot_1_fml_1.jpg',
          "itemTitle"        : "FML CREWNECK",
          "artist"           : null,
          "itemDescription"  : "Whether you wear this at a pregame, bar, or just on the streets, this is the perfect crewneck sweatshirt to keep you warm.",
          "itemPrice"        : "$68.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : true,
          "variants": {},
          "allImages": ['shot_1_fml_1.jpg']
        },
        {
          "id"               : "2",
          "index"            : "1",
          "itemImageSrc"     : 'shot_2_shirt_1.jpg',
          "itemTitle"        : "TALK SHIT",
          "artist"           : null,
          "itemDescription"  : "Talk shit, get hit. 2007 Britney is back in this amazing t-shirt. Rock it with your bad ass attitude and our favorite leather jacket! ",
          "itemPrice"        : "$28.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'XS' : ['1056431864'],
            'S'  : ['1056431868']
          },
          "allImages": ['shot_2_shirt_1.jpg']
        },
        {
          "id"               : "3",
          "index"            : "2",
          "itemImageSrc"     : 'shot_3_loyal_1.jpg',
          "itemTitle"        : "These Hoes Ain't Loyal",
          "artist"           : null,
          "itemDescription"  : "You can't trust those dirty hoes.",
          "itemPrice"        : "$32.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'XS' : ['961129984'],
            'M'  : ['961129992'],
            'L'  : ['961129996']
          },
          "allImages": ['shot_3_loyal_1.jpg']
        },
        {
          "id"               : "4",
          "index"            : "3",
          "itemImageSrc"     : 'shot_4_queen_1.png',
          "itemTitle"        : "Queen of Fucking Everything",
          "artist"           : null,
          "itemDescription"  : "And if they don't know now they know.",
          "itemPrice"        : "$59.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : true,
          "variants": {},
          "allImages": ['shot_4_queen_1.png']
        },
        {
          "id"               : "5",
          "index"            : "4",
          "itemImageSrc"     : 'shot_5_whiskey.jpg',
          "itemTitle"        : "More Whiskey",
          "artist"           : null,
          "itemDescription"  : "Hot toddy anyone? Black ink hand screen printed of a tri-blend, women's track grey, American Apparel T-shirt. Has the feel and durability of a vintage T-shirt, in a brand new version. Fits true to size. All of our T-shirts are freshly hand printed by us in our Philadelphia, Pennsylvania studio. Our shirts are 100% Made in the USA.",
          "itemPrice"        : "$28.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'S'  : ['495568665'],
            'M'  : ['495568669'],
            'L'  : ['495568673'],
            'XL' : ['495568677']
          },
          "allImages": ['shot_5_whiskey.jpg']
        },
        {
          "id"               : "6",
          "index"            : "5",
          "itemImageSrc"     : 'shot_6_knees_1.jpg',
          "itemTitle"        : "On My Knees Thermal",
          "artist"           : null,
          "itemDescription"  : "I only get on my knees to pray.",
          "itemPrice"        : "$36.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'M'  : ['1039844200'],
            'XL' : ['1039844208']
          },
          "allImages": ['shot_6_knees_1.jpg']
        },
        {
          "id"               : "7",
          "index"            : "6",
          "itemImageSrc"     : 'shot_7_jesus_1.jpg',
          "itemTitle"        : "I have more followers than you",
          "artist"           : null,
          "itemDescription"  : "You can't argue with the Lord! Jesus shows us that our Instafame means nothing with this super cool oversized tee. All-Over Printed Shirts are made using white fabric produced specifically for dye sublimation. The t-shirts are made with high-quality, 100% spun polyester to deliver the look and feel of cotton with the benefits of polyester, like, superior sweat wicking. Dye sublimation printing produces vibrant, super-soft, permanent prints that are guaranteed to never crack, peel or flake.",
          "itemPrice"        : "$125.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'S'   : ['1006314588'],
            'M'   : ['1006314592'],
            'L'   : ['1006314596'],
            'XL'  : ['1006314600'],
            '2XL' : ['1006314604']
          },
          "allImages": ['shot_7_followers_1.jpg', 'shot_7_jesus_1.jpg']
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
          "id"                 : "1",
          "hotSpotId"          : "1",
          "index"              : "0",
          "startTime"          : "0.00",
          "endTime"            : "0.0906",
          "hotSpotStartX"      : "900",
          "hotSpotStartY"      : "275",
          "hotSpotEndX"        : "1300",
          "hotSpotEndY"        : "200",
          "hotSpotStartWidth"  : "400",
          "hotSpotStartHeight" : "400",
          'movingBeacon'       : false,
        },
        {
          "id"                 : "1",
          "hotSpotId"          : "2",
          "index"              : "0",
          "startTime"          : "0.14",
          "endTime"            : "0.268",
          "hotSpotStartX"      : "900",
          "hotSpotStartY"      : "275",
          "hotSpotEndX"        : "1300",
          "hotSpotEndY"        : "200",
          "hotSpotStartWidth"  : "400",
          "hotSpotStartHeight" : "400",
          'movingBeacon'       : false,
        },
        {
          "id"                 : "2",
          "hotSpotId"          : "3",
          "index"              : "0",
          "startTime"          : "0.27",
          "endTime"            : "0.369",
          "hotSpotStartX"      : "900",
          "hotSpotStartY"      : "275",
          "hotSpotEndX"        : "1300",
          "hotSpotEndY"        : "200",
          "hotSpotStartWidth"  : "400",
          "hotSpotStartHeight" : "400",
          'movingBeacon'       : false,
        },
        {
          "id"                 : "3",
          "hotSpotId"          : "4",
          "index"              : "0",
          "startTime"          : "0.376",
          "endTime"            : "0.459",
          "hotSpotStartX"      : "900",
          "hotSpotStartY"      : "275",
          "hotSpotEndX"        : "1300",
          "hotSpotEndY"        : "200",
          "hotSpotStartWidth"  : "400",
          "hotSpotStartHeight" : "400",
          'movingBeacon'       : false,
        },
        {
          "id"                 : "4",
          "hotSpotId"          : "5",
          "index"              : "0",
          "startTime"          : "0.46",
          "endTime"            : "0.541",
          "hotSpotStartX"      : "900",
          "hotSpotStartY"      : "275",
          "hotSpotEndX"        : "1300",
          "hotSpotEndY"        : "200",
          "hotSpotStartWidth"  : "400",
          "hotSpotStartHeight" : "400",
          'movingBeacon'       : false,
        },
        {
          "id"                 : "5",
          "hotSpotId"          : "6",
          "index"              : "0",
          "startTime"          : "0.544",
          "endTime"            : "0.63",
          "hotSpotStartX"      : "900",
          "hotSpotStartY"      : "475",
          "hotSpotEndX"        : "1300",
          "hotSpotEndY"        : "200",
          "hotSpotStartWidth"  : "400",
          "hotSpotStartHeight" : "400",
          'movingBeacon'       : false,
        },
        {
          "id"                 : "6",
          "hotSpotId"          : "7",
          "index"              : "0",
          "startTime"          : "0.634",
          "endTime"            : "0.699",
          "hotSpotStartX"      : "900",
          "hotSpotStartY"      : "275",
          "hotSpotEndX"        : "1300",
          "hotSpotEndY"        : "200",
          "hotSpotStartWidth"  : "400",
          "hotSpotStartHeight" : "400",
          'movingBeacon'       : false,
        },
        {
          "id"                 : "7",
          "hotSpotId"          : "8",
          "index"              : "0",
          "startTime"          : "0.70",
          "endTime"            : "0.84",
          "hotSpotStartX"      : "900",
          "hotSpotStartY"      : "275",
          "hotSpotEndX"        : "1300",
          "hotSpotEndY"        : "200",
          "hotSpotStartWidth"  : "400",
          "hotSpotStartHeight" : "400",
          'movingBeacon'       : false,
        },
        {
          "id"                 : "2",
          "hotSpotId"          : "9",
          "index"              : "0",
          "startTime"          : "0.846",
          "endTime"            : "0.877",
          "hotSpotStartX"      : "800",
          "hotSpotStartY"      : "475",
          "hotSpotEndX"        : "1300",
          "hotSpotEndY"        : "200",
          "hotSpotStartWidth"  : "400",
          "hotSpotStartHeight" : "400",
          'movingBeacon'       : false,
        },
      ],

      cartItems:[]
    };
  });

