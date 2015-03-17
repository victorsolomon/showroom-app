define([
  'underscore',
  'backbone'
], function (_, Backbone) {

    window.playerConfig = {

      gaKey        : 'UA-55667188-1',
      gaVendorName : 'Villa',
      devMode      : false,

      loaderStyle       : 'image',
      splashImage       : 'static/images/posterFrames/villa.png',
      customSplashImage : null,

      mp4_video_src_med  : 'villa/villa.mp4',
      webm_video_src_med : 'villa/villa.webm',
      iphone_video_src   : 'villa/villa.mpg',
      iphone_audio_src   : 'villa/villa_soundtrack.mp3',
      beacon_video_mp4   : 'villa/villaBeacon.mp4',
      beacon_video_webm  : 'villa/villaBeacon.webm',


      baseVideoPath          : "static/movies/",
      baseProductImagePath   : "static/images/productImages/villa/",
      colorVariantsImagePath : "static/images/productImages/villa/optionVariants/",

      checkoutType : "email",
      checkoutUrl  : "mailto:we@helloshowroom.co?subject=Showroom - Shop Video&body=Let's activate video.",

      shareUrl          : "http://www.helloshowroom.co/villa",
      shareEmbedBaseUrl : "http://www.helloshowroom.co/villa/main.html?config=villaConfig",

      hotspotColor    : 'white',
      spinnerColor    : null,
      customFontSize  : null,
      customBoxSize   : null,
      beaconPlacement : null,

      recommended : [
        {
          "id"           : '1',
          "itemImageSrc" : 'sneakers_1.jpg'
        },
        {
          "id"           : '2',
          "itemImageSrc" : 'pants_1.jpg'
        },
        {
          "id"           : '3',
          "itemImageSrc" : 'jacket.jpg'
        }
      ],

      variantColors: [
      ],

      itemData: [
        {
          "id"               : "1",
          "index"            : "0",
          "itemImageSrc"     : 'sneakers_1.jpg',
          "itemTitle"        : "Lebron 12 (Double Helix)",
          "artist"           : null,
          "itemDescription"  : 'The Lebron 12 is designed to enhance James’s explosiveness while combining three key benefits: superior cushioning, harnessed support and natural flexibility.',
          "itemPrice"        : "$200.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "noOptions"        : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            '8'    : ['111'],
            '9'    : ['111'],
            '10'   : ['111'],
            '11'   : ['111'],
            '12'   : ['111'],
            '13'   : ['111'],
            '14'   : ['111'],
          },
          "allImages": ['sneakers_3.jpg', 'sneakers_2.jpg', 'sneakers_1.jpg']
        },
        {
          "id"               : "2",
          "index"            : "1",
          "itemImageSrc"     : 'pants_1.jpg',
          "itemTitle"        : "TECH FLEECE PANT",
          "artist"           : null,
          "itemDescription"  : 'The Nike Tech Fleece Men\'s Pants are made for long-lasting warmth with lightweight fleece and a relaxed, ultra-comfortable fit. Nike Tech Fleece is an innovative thermal construction that merges jersey with a synthetic spacer, allowing body heat to be trapped to create warmth without adding weight. Side pockets keep small items secure and easy to access. Double-faced jersey fabric is smooth to the touch inside and out for comfort.',
          "itemPrice"        : "$100.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "noOptions"        : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'S'   : ['111'],
            'M'   : ['111'],
            'L'   : ['111'],
            'XL'  : ['111'],
            'XXL' : ['111'],
          },
          "allImages": ['pants_3.jpg', 'pants_2.jpg', 'pants_1.jpg']
        },
        {
          "id"               : "3",
          "index"            : "2",
          "itemImageSrc"     : 'jacket.jpg',
          "itemTitle"        : "WINGER REVERSIBLE JACKET",
          "artist"           : null,
          "itemDescription"  : 'Side A of the Nike Winger Reversible Ultra Men\'s Jacket shows off a ripstop fabric design with a "crosswind" print in the middle to create a color-block effect. Side B reverses to a taffeta style that lets the neon of Side A glow through. It features a vertical left chest pocket for added style and convenience. Reversible design gives you two looks in one. Built-in hood for extra coverage and warmth. Zippered chest pocket on Side A is perfect for media players.',
          "itemPrice"        : "$85.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "noOptions"        : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'S'   : ['111'],
            'M'   : ['111'],
            'L'   : ['111'],
            'XL'  : ['111'],
            'XXL' : ['111'],
          },
          "allImages": ['jacket.jpg']
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
          "startTime"          : "0.126",
          "endTime"            : "0.2796",
          "hotSpotStartX"      : "10",
          "hotSpotStartY"      : "10",
          "hotSpotStartWidth"  : "1900",
          "hotSpotStartHeight" : "900",
        },
        {
          "id"                 : "1",
          "hotSpotId"          : "2",
          "index"              : "0",
          "startTime"          : "0.307",
          "endTime"            : "0.56",
          "hotSpotStartX"      : "10",
          "hotSpotStartY"      : "10",
          "hotSpotStartWidth"  : "1900",
          "hotSpotStartHeight" : "900",
        },
        {
          "id"                 : "1", // all items shot - sneakers
          "hotSpotId"          : "3",
          "index"              : "0",
          "startTime"          : "0.668",
          "endTime"            : "0.697",
          "hotSpotStartX"      : "650",
          "hotSpotStartY"      : "360",
          "hotSpotStartWidth"  : "450",
          "hotSpotStartHeight" : "400",
        },
        {
          "id"                 : "2", // all items shot - pants
          "hotSpotId"          : "4",
          "index"              : "0",
          "startTime"          : "0.668",
          "endTime"            : "0.697",
          "hotSpotStartX"      : "280",
          "hotSpotStartY"      : "350",
          "hotSpotStartWidth"  : "350",
          "hotSpotStartHeight" : "650",
        },
        {
          "id"                 : "3", // all items shot - jacket
          "hotSpotId"          : "5",
          "index"              : "0",
          "startTime"          : "0.668",
          "endTime"            : "0.697",
          "hotSpotStartX"      : "1200",
          "hotSpotStartY"      : "300",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "650",
        },
        {
          "id"                 : "2", //pants
          "hotSpotId"          : "6",
          "index"              : "0",
          "startTime"          : "0.736",
          "endTime"            : "0.789",
          "hotSpotStartX"      : "250",
          "hotSpotStartY"      : "50",
          "hotSpotStartWidth"  : "1500",
          "hotSpotStartHeight" : "1000",
        },
        {
          "id"                 : "3", //jacket
          "hotSpotId"          : "7",
          "index"              : "0",
          "startTime"          : "0.79",
          "endTime"            : "0.82",
          "hotSpotStartX"      : "250",
          "hotSpotStartY"      : "50",
          "hotSpotStartWidth"  : "1300",
          "hotSpotStartHeight" : "1000",
        },
        {
          "id"                 : "1", // all items shot - sneakers
          "hotSpotId"          : "8",
          "index"              : "0",
          "startTime"          : "0.84",
          "endTime"            : "0.905",
          "hotSpotStartX"      : "650",
          "hotSpotStartY"      : "360",
          "hotSpotStartWidth"  : "450",
          "hotSpotStartHeight" : "400",
        },
        {
          "id"                 : "2", //pants
          "hotSpotId"          : "9",
          "index"              : "0",
          "startTime"          : "0.84",
          "endTime"            : "0.905",
          "hotSpotStartX"      : "280",
          "hotSpotStartY"      : "350",
          "hotSpotStartWidth"  : "350",
          "hotSpotStartHeight" : "650",
        },
        {
          "id"                 : "3", //jacket
          "hotSpotId"          : "10",
          "index"              : "0",
          "startTime"          : "0.84",
          "endTime"            : "0.905",
          "hotSpotStartX"      : "1200",
          "hotSpotStartY"      : "300",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "650",
        },
        {
          "id"                 : "1", //sneakers
          "hotSpotId"          : "11",
          "index"              : "0",
          "startTime"          : "0.58",
          "endTime"            : "0.60",
          "hotSpotStartX"      : "350",
          "hotSpotStartY"      : "150",
          "hotSpotStartWidth"  : "1100",
          "hotSpotStartHeight" : "850",
        },
        {
          "id"                 : "1", //sneakers
          "hotSpotId"          : "12",
          "index"              : "0",
          "startTime"          : "0.62",
          "endTime"            : "0.663",
          "hotSpotStartX"      : "350",
          "hotSpotStartY"      : "150",
          "hotSpotStartWidth"  : "1100",
          "hotSpotStartHeight" : "850",
        },
      ],

      cartItems:[]
    };
  });

