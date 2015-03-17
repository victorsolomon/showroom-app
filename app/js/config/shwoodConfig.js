define([
  'underscore',
  'backbone'
], function (_, Backbone) {

    window.playerConfig = {

      gaKey        : 'UA-55667188-1',
      gaVendorName : 'Shwood',

      loaderStyle       : 'image',
      splashImage       : 'static/images/posterFrames/shwood.png',
      customSplashImage : null,

      mp4_video_src_med  : 'shwood/shwood.mp4',
      webm_video_src_med : 'shwood/shwood.webm',
      iphone_video_src   : 'shwood/shwood.mpg',
      iphone_audio_src   : 'shwood/shwood_soundtrack.mp3',
      beacon_video_mp4   : 'shwood/ShwoodBeacon.mp4',
      beacon_video_webm  : 'shwood/ShwoodBeacon.webm',


      baseVideoPath          : "static/movies/",
      baseProductImagePath   : "static/images/productImages/shwood/",
      colorVariantsImagePath : "static/images/productImages/shwood/optionVariants/",

      checkoutType : "email",
      checkoutUrl  : "mailto:we@helloshowroom.co?subject=Showroom - Shop Video&body=Let's activate video.",

      shareUrl          : "http://www.helloshowroom.co/shwood",
      shareEmbedBaseUrl : "http://www.helloshowroom.co/shwood/main.html?config=shwoodConfig",

      hotspotColor    : 'white',
      spinnerColor    : null,
      customFontSize  : null,
      customBoxSize   : null,
      beaconPlacement : null,

      recommended : [
        {
          "id"           : '1',
          "itemImageSrc" : 'shot_1.png'
        },
        {
          "id"           : '2',
          "itemImageSrc" : 'shot_2.png'
        },
        {
          "id"           : '3',
          "itemImageSrc" : 'shot_3.png'
        },
        {
          "id"           : '4',
          "itemImageSrc" : 'shot_4.png'
        },
        {
          "id"           : '5',
          "itemImageSrc" : 'shot_5.png',
        },
        {
          "id"           : '6',
          "itemImageSrc" : 'shot_6.png'
        },
        {
          "id"           : '7',
          "itemImageSrc" : 'shot_7.png'
        },
        {
          "id"           : '8',
          "itemImageSrc" : 'shot_8.png'
        }
      ],

      variantColors: [
      ],

      itemData: [
        {
          "id"               : "1",
          "index"            : "0",
          "itemImageSrc"     : 'shot_1.png',
          "itemTitle"        : "Eugene RX - Walnut",
          "artist"           : null,
          "itemDescription"  : 'The Eugene\'s sleek silhouette combines a gold-finish metal rim and bridge with luxurious hardwoods for a timeless and refined look.  The simple aesthetic compliments a wide variety of face shapes, a perfect choice for anyone desiring sharp, classic style.  The Eugene Rx looks best on Rectangle, Oval, and Diamond face shapes.',
          "itemPrice"        : "$350.00",
          "hasSize"          : false,
          "hasColor"         : false,
          "noOptions"        : true,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            "oneSize" : ['1']
          },
          "allImages": ['shot_1.png']
        },
        {
          "id"               : "2",
          "index"            : "1",
          "itemImageSrc"     : 'shot_2.png',
          "itemTitle"        : "Astoria RX",
          "artist"           : null,
          "itemDescription"  : 'The Astoria’s vintage style is complete with a raised keyhole bridge and bold accents to separate you from the pack. The Astoria looks best on Round, Square, Oval, and Rectangle face shapes.',
          "itemPrice"        : "$295.00",
          "hasSize"          : false,
          "hasColor"         : false,
          "noOptions"        : true,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'oneSize' : ['1056431864']
          },
          "allImages": ['shot_2.png']
        },
        {
          "id"               : "3",
          "index"            : "2",
          "itemImageSrc"     : 'shot_3.png',
          "itemTitle"        : "Eugene RX - Dark Walnut",
          "artist"           : null,
          "itemDescription"  : 'The Eugene\'s sleek silhouette combines a gold-finish metal rim and bridge with luxurious hardwoods for a timeless and refined look.  The simple aesthetic compliments a wide variety of face shapes, a perfect choice for anyone desiring sharp, classic style. The Eugene Rx looks best on Rectangle, Oval, and Diamond face shapes.',
          "itemPrice"        : "$350.00",
          "hasSize"          : false,
          "hasColor"         : false,
          "noOptions"        : true,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'oneSize' : ['1056431864']
          },
          "allImages": ['shot_3.png']
        },
        {
          "id"               : "4",
          "index"            : "3",
          "itemImageSrc"     : 'shot_4.png',
          "itemTitle"        : "Canby RX - Zebrawood",
          "artist"           : null,
          "itemDescription"  : 'Shwood\'s original wooden glasses. Since the beginning, the Canby has been Shwood’s flagship model, and for good reason. The classic wayfarer styling and refined aesthetics of the Canby lay the groundwork for an entire wooden eyewear revolution. The Canby mixes timeless style with the luxuriousness of exotic hardwoods for a look that\'s simple yet unforgettable. Our brand-new, patent-pending SuperGroove structure provides the strength needed to convert our Wood Originals into everyday-use prescription eyewear. Exclusive to our Rx line, the SuperGroove is a rigid metal ring that allows thicker Rx lenses to be fitted into the frame without damaging it. The Canby Rx looks good on most face shapes.',
          "itemPrice"        : "$350.00",
          "hasSize"          : false,
          "hasColor"         : false,
          "noOptions"        : true,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'oneSize' : ['1056431864']
          },
          "allImages": ['shot_4.png']
        },
        {
          "id"               : "5",
          "index"            : "4",
          "itemImageSrc"     : 'shot_5.png',
          "itemTitle"        : "Fremont RX - Black Fade",
          "artist"           : null,
          "itemDescription"  : 'The Fremont’s commanding rectangular shape and hearty temples are perfect for mid to larger faces and anyone desiring a versatile look. The Fremont looks best on Round, Oval, and Rectangle face shapes.',
          "itemPrice"        : "$295.00",
          "hasSize"          : false,
          "hasColor"         : false,
          "noOptions"        : true,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'oneSize' : ['1056431864']
          },
          "allImages": ['shot_5.png']
        },
        {
          "id"               : "6",
          "index"            : "5",
          "itemImageSrc"     : 'shot_6.png',
          "itemTitle"        : "Fremont RX - Black",
          "artist"           : null,
          "itemDescription"  : 'The Fremont’s commanding rectangular shape and hearty temples are perfect for mid to larger faces and anyone desiring a versatile look. The Fremont looks best on Round, Oval, and Rectangle face shapes.',
          "itemPrice"        : "$295.00",
          "hasSize"          : false,
          "hasColor"         : false,
          "noOptions"        : true,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'oneSize' : ['1056431864']
          },
          "allImages": ['shot_6.png']
        },
        {
          "id"               : "7",
          "index"            : "6",
          "itemImageSrc"     : 'shot_7.png',
          "itemTitle"        : "CANBY FIFTY FIFTY RX - Tortoise",
          "artist"           : null,
          "itemDescription"  : 'Our most popular sun style, now available in RX.  This ubiquitous design offers a nearly universal fit for anyone desiring a bold, confident look. The Canby Fifty/Fifty Rx looks good on most face shapes.',
          "itemPrice"        : "$275.00",
          "hasSize"          : false,
          "hasColor"         : false,
          "noOptions"        : true,
          "colorBlockId"     : null,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'oneSize' : ['1056431864']
          },
          "allImages": ['shot_7.png']
        },
        {
          "id"               : "8",
          "index"            : "7",
          "itemImageSrc"     : 'shot_8.png',
          "itemTitle"        : "Quimby RX - Honey",
          "artist"           : null,
          "itemDescription"  : 'A little quirky, a little curious, the playful styling of the Quimby adds a touch of sophistication to any look. The Quimby Rx looks best on Square, Oval, Rectangle, Diamond, and Heart face shapes.',
          "itemPrice"        : "$295.00",
          "hasSize"          : false,
          "hasColor"         : false,
          "noOptions"        : true,
          "colorBlockId"     : null,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'oneSize' : ['1056431864']
          },
          "allImages": ['shot_8.png']
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
          "startTime"          : "0.086",
          "endTime"            : "0.18",
          "hotSpotStartX"      : "590",
          "hotSpotStartY"      : "200",
          "hotSpotStartWidth"  : "550",
          "hotSpotStartHeight" : "500",
        },
        {
          "id"                 : "2",
          "hotSpotId"          : "2",
          "index"              : "0",
          "startTime"          : "0.185",
          "endTime"            : "0.272",
          "hotSpotStartX"      : "680",
          "hotSpotStartY"      : "300",
          "hotSpotStartWidth"  : "400",
          "hotSpotStartHeight" : "300",
        },
        {
          "id"                 : "3",
          "hotSpotId"          : "3",
          "index"              : "0",
          "startTime"          : "0.276",
          "endTime"            : "0.341",
          "hotSpotStartX"      : "680",
          "hotSpotStartY"      : "200",
          "hotSpotStartWidth"  : "400",
          "hotSpotStartHeight" : "200",
        },
        {
          "id"                 : "4",
          "hotSpotId"          : "4",
          "index"              : "0",
          "startTime"          : "0.344",
          "endTime"            : "0.421",
          "hotSpotStartX"      : "850",
          "hotSpotStartY"      : "300",
          "hotSpotStartWidth"  : "400",
          "hotSpotStartHeight" : "200",
        },
        {
          "id"                 : "5",
          "hotSpotId"          : "5",
          "index"              : "0",
          "startTime"          : "0.426",
          "endTime"            : "0.487",
          "hotSpotStartX"      : "600",
          "hotSpotStartY"      : "120",
          "hotSpotStartWidth"  : "700",
          "hotSpotStartHeight" : "400",
        },
        {
          "id"                 : "6",
          "hotSpotId"          : "6",
          "index"              : "0",
          "startTime"          : "0.498",
          "endTime"            : "0.569",
          "hotSpotStartX"      : "600",
          "hotSpotStartY"      : "200",
          "hotSpotStartWidth"  : "600",
          "hotSpotStartHeight" : "300",
        },
        {
          "id"                 : "7",
          "hotSpotId"          : "7",
          "index"              : "0",
          "startTime"          : "0.573",
          "endTime"            : "0.683",
          "hotSpotStartX"      : "770",
          "hotSpotStartY"      : "270",
          "hotSpotStartWidth"  : "400",
          "hotSpotStartHeight" : "200",
        },
        {
          "id"                 : "8",
          "hotSpotId"          : "8",
          "index"              : "0",
          "startTime"          : "0.689",
          "endTime"            : "0.78",
          "hotSpotStartX"      : "780",
          "hotSpotStartY"      : "255",
          "hotSpotStartWidth"  : "400",
          "hotSpotStartHeight" : "200",
        },
      ],

      cartItems:[]
    };
  });

