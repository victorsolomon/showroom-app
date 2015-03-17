define([
  'underscore',
  'backbone'
], function (_, Backbone) {

    window.playerConfig = {

      gaKey        : 'UA-55667188-1',
      gaVendorName : 'Pop Basic',
      devMode      : false,

      loaderStyle       : 'image',
      splashImage       : 'static/images/posterFrames/popbasic.png',
      customSplashImage : null,

      mp4_video_src_med  : 'popbasic/popbasic.mp4',
      webm_video_src_med : 'popbasic/popbasic.webm',
      iphone_video_src   : 'popbasic/popbasic.mpg',
      iphone_audio_src   : 'popbasic/popbasic_soundtrack.mp3',
      beacon_video_mp4   : 'popbasic/popbasicBeacon.mp4',
      beacon_video_webm  : 'popbasic/popbasicBeacon.webm',


      baseVideoPath          : "static/movies/",
      baseProductImagePath   : "static/images/productImages/popbasic/",
      colorVariantsImagePath : "static/images/productImages/popbasic/optionVariants/",

      checkoutType : "email",
      checkoutUrl  : "mailto:we@helloshowroom.co?subject=Showroom - Shop Video&body=Let's activate video.",

      shareUrl          : "http://www.helloshowroom.co/popbasic",
      shareEmbedBaseUrl : "http://www.helloshowroom.co/popbasic/main.html?config=popbasicConfig",

      hotspotColor    : 'white',
      spinnerColor    : null,
      customFontSize  : null,
      customBoxSize   : null,
      beaconPlacement : null,

      recommended : [
        {
          "id"           : '1',
          "itemImageSrc" : 'shot_1_necklace_1.jpg'
        },
        {
          "id"           : '2',
          "itemImageSrc" : 'shot_1_skirt_1.jpg'
        },
        {
          "id"           : '3',
          "itemImageSrc" : 'shot_1_top_1.jpg'
        }
      ],

      variantColors: [
      ],

      itemData: [
        {
          "id"               : "1",
          "index"            : "0",
          "itemImageSrc"     : 'shot_1_necklace_1.jpg',
          "itemTitle"        : "Vantage Point Necklace",
          "artist"           : null,
          "itemDescription"  : 'Set your style direction right with our Vantage Point Necklace. Wear alone or stacked with our Mixed Metals necklace. Alloy; gold plated.',
          "itemPrice"        : "$75.00",
          "hasSize"          : false,
          "hasColor"         : false,
          "noOptions"        : true,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'oneSize' : ['111']
          },
          "allImages": ['shot_1_top_1.jpg', 'shot_1_skirt_1.jpg', 'shot_1_necklace_1.jpg']
        },
        {
          "id"               : "2",
          "index"            : "1",
          "itemImageSrc"     : 'shot_1_skirt_1.jpg',
          "itemTitle"        : "Cobalt Dream Maxi Skirt",
          "artist"           : null,
          "itemDescription"  : 'Celebrate Spring with a swishy new skirt. This piece looks lovely with a silk camisole for Spring or a chunky cream knit for the colder months. 100% polyester. Length: 35 inches. Fully lined. Elasticized waistband. Lizzie wears size small. Lizzie is 5’6”.',
          "itemPrice"        : "$75.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "noOptions"        : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'XS'  : ['111'],
            'S'   : ['111'],
            'M'   : ['111'],
            'L'   : ['111'],
            'XL'  : ['111'],
            'XXL' : ['111'],
          },
          "allImages": ['shot_1_necklace_1.jpg', 'shot_1_top_1.jpg', 'shot_1_skirt_1.jpg']
        },
        {
          "id"               : "3",
          "index"            : "2",
          "itemImageSrc"     : 'shot_1_top_1.jpg',
          "itemTitle"        : "Basic Black Tee",
          "artist"           : null,
          "itemDescription"  : 'Our Basic Black Tee is the ultimate wardrobe staple. Featuring a v-neckline, this super soft piece is perfect for loosely tucking into high-waisted jeans. Pair it with our Vantage Point Necklace and a slim-fit blazer. 50% cotton, 50% Rayon. Natalie wears size small.',
          "itemPrice"        : "$75.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "noOptions"        : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'XS'  : ['111'],
            'S'   : ['111'],
            'M'   : ['111'],
            'L'   : ['111'],
            'XL'  : ['111'],
            'XXL' : ['111'],
          },
          "allImages": ['shot_1_skirt_1.jpg', 'shot_1_necklace_1.jpg', 'shot_1_top_1.jpg']
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
          "id"                 : "2", //shot 1 - skirt
          "hotSpotId"          : "1",
          "index"              : "0",
          "startTime"          : "0.063",
          "endTime"            : "0.0835",
          "hotSpotStartX"      : "1420",
          "hotSpotStartY"      : "390",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "700",
        },
        {
          "id"                 : "3",  //shot 1 - top
          "hotSpotId"          : "2",
          "index"              : "0",
          "startTime"          : "0.063",
          "endTime"            : "0.0835",
          "hotSpotStartX"      : "1420",
          "hotSpotStartY"      : "160",
          "hotSpotStartWidth"  : "400",
          "hotSpotStartHeight" : "200",
        },
        {
          "id"                 : "2", //shot 2 - skirt
          "hotSpotId"          : "3",
          "index"              : "0",
          "startTime"          : "0.085",
          "endTime"            : "0.118",
          "hotSpotStartX"      : "900",
          "hotSpotStartY"      : "640",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "400",
        },
        {
          "id"                 : "3", //shot 2 - top
          "hotSpotId"          : "4",
          "index"              : "0",
          "startTime"          : "0.085",
          "endTime"            : "0.118",
          "hotSpotStartX"      : "900",
          "hotSpotStartY"      : "450",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "130",
        },
        {
          "id"                 : "2", //shot 3 - skirt
          "hotSpotId"          : "5",
          "index"              : "0",
          "startTime"          : "0.115",
          "endTime"            : "0.1679",
          "hotSpotStartX"      : "1100",
          "hotSpotStartY"      : "200",
          "hotSpotStartWidth"  : "900",
          "hotSpotStartHeight" : "800",
        },
        {
          "id"                 : "2", //shot 4 - skirt
          "hotSpotId"          : "6",
          "index"              : "0",
          "startTime"          : "0.2453",
          "endTime"            : "0.2669",
          "hotSpotStartX"      : "900",
          "hotSpotStartY"      : "640",
          "hotSpotStartWidth"  : "900",
          "hotSpotStartHeight" : "500",
        },
        {
          "id"                 : "3", //shot 4 - top
          "hotSpotId"          : "7",
          "index"              : "0",
          "startTime"          : "0.2453",
          "endTime"            : "0.2669",
          "hotSpotStartX"      : "1050",
          "hotSpotStartY"      : "300",
          "hotSpotStartWidth"  : "800",
          "hotSpotStartHeight" : "200",
        },
        {
          "id"                 : "2", //shot 5 - skirt
          "hotSpotId"          : "8",
          "index"              : "0",
          "startTime"          : "0.314",
          "endTime"            : "0.37",
          "hotSpotStartX"      : "650",
          "hotSpotStartY"      : "800",
          "hotSpotStartWidth"  : "900",
          "hotSpotStartHeight" : "400",
        },
        {
          "id"                 : "3", //shot 5 - top
          "hotSpotId"          : "9",
          "index"              : "0",
          "startTime"          : "0.314",
          "endTime"            : "0.37",
          "hotSpotStartX"      : "650",
          "hotSpotStartY"      : "360",
          "hotSpotStartWidth"  : "1000",
          "hotSpotStartHeight" : "350",
        },
        {
          "id"                 : "2", //shot 6 - skirt
          "hotSpotId"          : "10",
          "index"              : "0",
          "startTime"          : "0.403",
          "endTime"            : "0.448",
          "hotSpotStartX"      : "1050",
          "hotSpotStartY"      : "900",
          "hotSpotStartWidth"  : "700",
          "hotSpotStartHeight" : "400",
        },
        {
          "id"                 : "3", //shot 6 - top
          "hotSpotId"          : "11",
          "index"              : "0",
          "startTime"          : "0.403",
          "endTime"            : "0.448",
          "hotSpotStartX"      : "1050",
          "hotSpotStartY"      : "360",
          "hotSpotStartWidth"  : "450",
          "hotSpotStartHeight" : "400",
        },
        {
          "id"                 : "1", //shot 7 - necklace
          "hotSpotId"          : "12",
          "index"              : "0",
          "startTime"          : "0.451",
          "endTime"            : "0.5259",
          "hotSpotStartX"      : "650",
          "hotSpotStartY"      : "360",
          "hotSpotStartWidth"  : "600",
          "hotSpotStartHeight" : "600",
        },
        {
          "id"                 : "3", //shot 8 - top
          "hotSpotId"          : "13",
          "index"              : "0",
          "startTime"          : "0.56",
          "endTime"            : "0.596",
          "hotSpotStartX"      : "400",
          "hotSpotStartY"      : "200",
          "hotSpotStartWidth"  : "1400",
          "hotSpotStartHeight" : "1000",
        },
        {
          "id"                 : "2", //shot 9 - skirt
          "hotSpotId"          : "14",
          "index"              : "0",
          "startTime"          : "0.633",
          "endTime"            : "0.669",
          "hotSpotStartX"      : "800",
          "hotSpotStartY"      : "850",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "900",
        },
        {
          "id"                 : "3", //shot 9 - top
          "hotSpotId"          : "15",
          "index"              : "0",
          "startTime"          : "0.633",
          "endTime"            : "0.663",
          "hotSpotStartX"      : "650",
          "hotSpotStartY"      : "300",
          "hotSpotStartWidth"  : "1200",
          "hotSpotStartHeight" : "300",
        },
        {
          "id"                 : "3", //shot 10 - top
          "hotSpotId"          : "16",
          "index"              : "0",
          "startTime"          : "0.795",
          "endTime"            : "0.835",
          "hotSpotStartX"      : "650",
          "hotSpotStartY"      : "320",
          "hotSpotStartWidth"  : "800",
          "hotSpotStartHeight" : "400",
        },
        {
          "id"                 : "1", //shot 11 - necklace
          "hotSpotId"          : "17",
          "index"              : "0",
          "startTime"          : "0.838",
          "endTime"            : "0.891",
          "hotSpotStartX"      : "850",
          "hotSpotStartY"      : "100",
          "hotSpotStartWidth"  : "900",
          "hotSpotStartHeight" : "900",
        },
        {
          "id"                 : "2", //shot 9-2 - skirt
          "hotSpotId"          : "18",
          "index"              : "0",
          "startTime"          : "0.668",
          "endTime"            : "0.739",
          "hotSpotStartX"      : "800",
          "hotSpotStartY"      : "400",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "900",
        },
        {
          "id"                 : "3", //shot 9-2 - top
          "hotSpotId"          : "19",
          "index"              : "0",
          "animated"           : true,
          "startTime"          : "0.670",
          "endTime"            : "0.684",
          "hotSpotStartX"      : "650",
          "hotSpotStartY"      : "10",
          "hotSpotEndX"        : "650",
          "hotSpotEndY"        : "0",
          "hotSpotStartWidth"  : "1200",
          "hotSpotStartHeight" : "300",
          "animationTiming"    : '10000'
        },
        {
          "id"                 : "2", //shot 9-3 - skirt
          "hotSpotId"          : "20",
          "index"              : "0",
          "startTime"          : "0.65",
          "endTime"            : "0.684",
          "hotSpotStartX"      : "800",
          "hotSpotStartY"      : "300",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "900",
        },
        {
          "id"                 : "2", //shot 9-4 - skirt UGH
          "hotSpotId"          : "20",
          "index"              : "0",
          "startTime"          : "0.685",
          "endTime"            : "0.736",
          "hotSpotStartX"      : "800",
          "hotSpotStartY"      : "0",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "1200",
        },
      ],

      cartItems:[]
    };
  });

