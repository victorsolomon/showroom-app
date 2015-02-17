define([
  'underscore',
  'backbone'
], function (_, Backbone) {

    window.playerConfig = {

      gaKey        : 'UA-55667188-1',
      gaVendorName : 'Nylon',

      loaderStyle       : 'image',
      splashImage       : 'static/images/posterFrames/nylon.gif',
      customSplashImage : null,

      mp4_video_src_med  : 'nylon/nylon_mp4.mp4',
      webm_video_src_med : 'nylon/nylon_webm.webm',

      baseVideoPath          : "static/movies/",
      baseProductImagePath   : "static/images/productImages/nylon/",
      colorVariantsImagePath : "static/images/productImages/nylon/optionVariants/",

      checkoutType : "shopify",
      checkoutUrl  : "http://shop.nylon.com/cart/",

      shareUrl          : "http://www.helloshowroom.co/nylon",
      shareEmbedBaseUrl : "http://www.helloshowroom.co/nylon/index.html?config=nylonConfig",

      hotspotColor    : 'white',
      customFontSize  : null,
      customBoxSize   : null,
      beaconPlacement : null,

      recommended : [
        {
          "id"            : '1',
          "largeItemSrc1" : "bowie_soap.png",
        },
        {
          "id"            : '2',
          "largeItemSrc1" : "black_rainfall_earrings.png",
        },
        {
          "id"            : '3',
          "largeItemSrc1" : "as_if_socks.png",
        },
        {
          "id"            : '4',
          "largeItemSrc1" : "krying_kim.png",
        },
        {
          "id"            : '5',
          "largeItemSrc1" : "worst_enemy.png",
        },
        {
          "id"            : '6',
          "largeItemSrc1" : "turnip_for_what.png",
        },
      ],

      variantColors: [
      ],

      itemData: [
        {
          "id"               : "1",
          "index"            : "0",
          "largeItemSrc1"    : 'bowie_soap.png',
          "itemImageSrc"     : 'bowie_soap.png',
          "itemTitle"        : "BOWIE SOAP",
          "artist"           : null,
          "itemDescription"  : "\r\n\"I'm an instant star. Just add water and stir.\" David Bowie vegan hair, face, and body soap handmade with twilight zen fragrance, jojoba oil, glitter exfoliant, coconut Oil, palm Oil, safflower oil, glycerine (kosher, of vegetable origin), Purified Water, sugar moisturizer, and oat/ soybean conditioner. WASH UP!",
          "itemPrice"        : "$16.00",
          "hasSize"          : false,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'oneSize' : ['1002901428']
          },
          "allImages": ['bowie_soap.png']
        },
        {
          "id"               : "2",
          "index"            : "1",
          "largeItemSrc1"    : 'black_rainfall_earrings.png',
          "itemImageSrc"     : 'black_rainfall_earrings.png',
          "itemTitle"        : "Black Rainfall Earrings",
          "artist"           : null,
          "itemDescription"  : "\r\nHello sparkle! Bring in the holidays with these super sparkle earrings. Iridescent pave sparkle set ablaze to a jet black backdrop. Statement earrings with glitz and sophistication. Rock these with our Laque Maxi Dress for an ultra glam look! Fancy Drape Earrings. \r\nSilver plated. Steel post. Secure disc backs. \r\nBlack crystal and aurora borealis pave geo topper.",
          "itemPrice"        : "$36.00",
          "hasSize"          : false,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : true,
          "variants": {
            'oneSize' : ['1011246320']
          },
          "allImages": ['black_rainfall_earrings.png']
        },
        {
          "id"               : "3",
          "index"            : "2",
          "largeItemSrc1"    : 'as_if_socks.png',
          "itemImageSrc"     : 'as_if_socks.png',
          "itemTitle"        : "\"As IF!\" Socks",
          "artist"           : null,
          "itemDescription"  : "\r\nDo you prefer \"fashion victim\" or \"ensembly challenged\"? \r\n \r\nDon't be either in these totally amazing socks. I know these socks are way existential but you totally need them. Don't be buggin' rock them with our white pulse sandals!",
          "itemPrice"        : "$8.00",
          "hasSize"          : false,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'oneSize' : ['1011312132']
          },
          "allImages": ['as_if_socks.png']
        },
        {
          "id"               : "4",
          "index"            : "3",
          "largeItemSrc1"    : 'krying_kim.png',
          "itemImageSrc"     : 'krying_kim.png',
          "itemTitle"        : "Kryin' Kim Tee",
          "artist"           : null,
          "itemDescription"  : "\"Kim, there are literally people dying\" -Kourtney Kardashian\r\n \r\nThe famous Kim K Kryin face, now on a t-shirt! The reaction to this oversized tee will be awesome!\r\nAll-Over Printed Shirts are made using white fabric produced specifically for dye sublimation. The t-shirts are made with high-quality, 100% spun polyester to deliver the look and feel of cotton with the benefits of polyester, like, superior sweat wicking. Dye sublimation printing produces vibrant, super-soft, permanent prints that are guaranteed to never crack, peel or flake.",
          "itemPrice"        : "$125.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'M'   : ['1006341132'],
            'L'   : ['1006341136'],
            'XL'  : ['1006341140'],
            '2XL' : ['1006341144']
          },
          "allImages": ['krying_kim.png']
        },
        {
          "id"               : "5",
          "index"            : "4",
          "largeItemSrc1"    : 'worst_enemy.png',
          "itemImageSrc"     : 'worst_enemy.png',
          "itemTitle"        : "Worst Enemy Crop Top",
          "artist"           : null,
          "itemDescription"  : "Style up this super cool crop top with matching camo print leggings from MTTM!\r\n\r\nPoly Spandex Leggings.\r\nMachine Wash Cold\r\n",
          "itemPrice"        : "$44.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'XS' : ['1013891032'],
            'M'  : ['1013891040'],
            'L'  : ['1013891048']
          },
          "allImages": ['worst_enemy.png']
        },
        {
          "id"               : "6",
          "index"            : "5",
          "largeItemSrc1"    : 'turnip_for_what.png',
          "itemImageSrc"     : 'turnip_for_what.png',
          "itemTitle"        : "Turnip...for what?",
          "artist"           : null,
          "itemDescription"  : "Even if you don't eat your veggies, you can wear them. Also, veggies are a source of turnin' up.\r\n\r\n<!--\ntd {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}\n-->\r\n50% Polyester/ 50% Cotton\r\n<!--\ntd {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}\n-->",
          "itemPrice"        : "$58.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'XS' : ['1003276336'],
            'M'  : ['1003276344'],
            'L'  : ['1003276348'],
            'XL' : ['1003276352']
          },
          "allImages": ['turnip_for_what.png']
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
          "id"                 : "1", //bowie soap
          "hotSpotId"          : "1",
          "index"              : "0",
          "startTime"          : "0.12",
          "endTime"            : "0.21",
          "hotSpotStartX"      : "840",
          "hotSpotStartY"      : "300",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "700",
          "hotSpotStartHeight" : "700"
        },
        {
          "id"                 : "2", //earrings
          "hotSpotId"          : "2",
          "index"              : "0",
          "startTime"          : "0.26",
          "endTime"            : "0.30",
          "hotSpotStartX"      : "930",
          "hotSpotStartY"      : "370",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "700",
          "hotSpotStartHeight" : "700"
        },
        {
          "id"                 : "3", //as if
          "hotSpotId"          : "3",
          "index"              : "0",
          "startTime"          : "0.36",
          "endTime"            : "0.445",
          "hotSpotStartX"      : "930",
          "hotSpotStartY"      : "300",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "700",
          "hotSpotStartHeight" : "700"
        },
        {
          "id"                 : "4", //kim
          "hotSpotId"          : "4",
          "index"              : "0",
          "startTime"          : "0.489",
          "endTime"            : "0.54",
          "hotSpotStartX"      : "675",
          "hotSpotStartY"      : "300",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "700",
          "hotSpotStartHeight" : "700"
        },
        {
          "id"                 : "5", //worst enemy
          "hotSpotId"          : "5",
          "index"              : "0",
          "startTime"          : "0.58",
          "endTime"            : "0.689",
          "hotSpotStartX"      : "675",
          "hotSpotStartY"      : "300",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "700",
          "hotSpotStartHeight" : "700"
        },
        {
          "id"                 : "6", //turnip
          "hotSpotId"          : "6",
          "index"              : "0",
          "startTime"          : "0.72",
          "endTime"            : "0.75",
          "hotSpotStartX"      : "675",
          "hotSpotStartY"      : "300",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "700",
          "hotSpotStartHeight" : "700"
        },
        {
          "id"                 : "6", //turnip
          "hotSpotId"          : "7",
          "index"              : "0",
          "startTime"          : "0.78",
          "endTime"            : "0.81",
          "hotSpotStartX"      : "0",
          "hotSpotStartY"      : "300",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "700",
          "hotSpotStartHeight" : "700"
        },
      ],

      cartItems:[]
    };
  });

