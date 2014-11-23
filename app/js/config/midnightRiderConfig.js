define([
  'underscore',
  'backbone'
], function (_, Backbone) {

    window.playerConfig = {

      gaKey        : 'UA-55667188-1',
      gaVendorName : 'MidnightRider',

      loaderStyle : 'image',
      splashImage : 'static/images/posterFrames/midnightrider.gif',

      mp4_video_src_med  : 'midnightrider/midnightrider_mp4.mp4',
      webm_video_src_med : 'midnightrider/midnightrider-webm.webm',

      baseVideoPath          : "static/movies/",
      baseProductImagePath   : "static/images/productImages/midnightrider/",

      checkoutType : "shopify",
      checkoutUrl  : "http://www.shopmidnightrider.com/cart/",

      shareUrl          : "http://www.helloshowroom.co/midnightrider",
      shareEmbedBaseUrl : "http://www.helloshowroom.co/midnightrider/index.html?config=midnightRiderConfig",
      hotspotColor      : 'white',

      recommended : [
        {
          "id"            : '1',
          "largeItemSrc1" : "man_listen_to_shirt.jpg"
        },
        {
          "id"            : '2',
          "largeItemSrc1" : "woman_ftw_shirt.jpg"
        },
        {
          "id"            : '3',
          "largeItemSrc1" : "woman_waylon_shirt.jpg"
        },
        {
          "id"            : '4',
          "largeItemSrc1" : "man_outlaw_76_shirt.jpg"
        },
        {
          "id"            : '5',
          "largeItemSrc1" : "man_our_mother_back.jpg"
        },
        {
          "id"            : '6',
          "largeItemSrc1" : "woman_nudies_shirt.jpg"
        },
        {
          "id"            : '7',
          "largeItemSrc1" : "man_gilded_palace_shirt.jpg"
        },
        {
          "id"            : '8',
          "largeItemSrc1" : "woman_gilded_palace_dress.jpg"
        }
      ],

      itemData: [
        {
          "id"                 : "1",
          "index"              : "0",
          "largeItemSrc1"      : "man_listen_to_shirt.jpg",
          "itemImageSrc"       : "man_listen_to_shirt.jpg",
          "itemTitle"          : "Listen to Townes Van Zandt",
          "itemDescription"    : "Listen to Townes Van Zandt distressed graphic on a vintage washed men's crewneck. Enzyme washed and super soft. 100% cotton and distressed hems. Made in the USA. By Midnight Rider.",
          "itemPrice"          : "$52",
          "hasSize"            : true,
          "colorBlockId"       : false,
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "allImages"          : ["man_listen_to_shirt.jpg"],
          "soldOut"            : false,
          "variants" : {
            "xsmall" : ["327437409"],
            "small"  : ["327437411"]
          }
        },
        {
          "id"                 : "2",
          "index"              : "1",
          "largeItemSrc1"      : "woman_ftw_shirt.jpg",
          "itemImageSrc"       : "woman_ftw_shirt.jpg",
          "itemTitle"          : "FTW Muscle Tee",
          "itemDescription"    : "Hand drawn FTW graphic printed on a vintage washed women's muscle tee. Cut sleeves and hem, distressed collar. 100% cotton and so soft. Made in the USA. By Midnight Rider.",
          "itemPrice"          : "$52",
          "hasSize"            : true,
          "colorBlockId"       : false,
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "allImages"          : ["woman_ftw_shirt.jpg"],
          "soldOut"            : false,
          "variants" : {
            "xsmall" : ["949118181"],
            "small"  : ["443192309"],
            "medium" : ["443192313"],
            "large"  : ["443192317"]
          }
        },
        {
          "id"                 : "3",
          "index"              : "2",
          "largeItemSrc1"      : "woman_waylon_shirt.jpg",
          "itemImageSrc"       : "woman_waylon_shirt.jpg",
          "itemTitle"          : "This Gets Your Ass In Free Racerback Tank",
          "itemDescription"    : "This gets your ass in free. Distressed graphic based on a classic Waylon Jennings backstage pass  on a racerback tank. Contrast stitched hems. 100% cotton and so soft. Made in the USA. By Midnight Rider. This guy's running a little big, order one size smaller than usual.",
          "itemPrice"          : "$34.99",
          "hasSize"            : true,
          "colorBlockId"       : false,
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "allImages"          : ["woman_waylon_shirt.jpg"],
          "soldOut"            : true,
          "variants" : {}
        },
        {
          "id"                 : "4",
          "index"              : "3",
          "largeItemSrc1"      : "man_outlaw_76_shirt.jpg",
          "itemImageSrc"       : "man_outlaw_76_shirt.jpg",
          "itemTitle"          : "Outlaw 76",
          "itemDescription"    : "Hand drawn Outlaw 76 graphic on our vintage washed graphic on a vintage washed men's crewneck tee shirt. Contrast stitching on hems. 100% cotton and so soft. Made in the USA. By Midnight Rider.",
          "itemPrice"          : "$32",
          "hasSize"            : true,
          "colorBlockId"       : false,
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "allImages"          : ["man_outlaw_76_shirt.jpg"],
          "soldOut"            : false,
          "variants" : {
            "xsmall" : ["327390533"],
            "small"  : ["327390535"],
            "medium" : ["327390537"],
            "large"  : ["327390539"],
            "xlarge" : ["327392755"]
          }
        },
        {
          "id"                 : "5",
          "index"              : "4",
          "largeItemSrc1"      : "man_our_mother_back.jpg",
          "itemImageSrc"       : "man_our_mother_back.jpg",
          "itemTitle"          : "Our Mother The Mountain",
          "itemDescription"    : "Hand drawn graphic inspired by the Our Mother the Mountain album cover. Distressed graphic on a vintage washed men's pocket tee. Distressed collar, hems, and contrast stitching down spine, shoulders, and hems. 100% cotton and so soft. Made in the USA. By Midnight Rider.",
          "itemPrice"          : "$29.99",
          "hasSize"            : true,
          "colorBlockId"       : false,
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "allImages"          : ["man_our_mother_back.jpg"],
          "soldOut"            : true,
          "variants" : {}
        },
        {
          "id"                 : "6",
          "index"              : "5",
          "largeItemSrc1"      : "woman_nudies_shirt.jpg",
          "itemImageSrc"       : "woman_nudies_shirt.jpg",
          "itemTitle"          : "Nudie's Western Roundup Boyfriend Tee",
          "itemDescription"    : "Inspired by a vintage Nudie's Rodeo Tailors advertisement this hand drawn graphic is printed on a vintage black boyfriend tee tee. Exclusively licensed to Midnight Rider by the Nudie's Rodeo Tailors Estate. One size fits most slouchy oversized tee. 100% cotton and so soft. Made in the USA.",
          "itemPrice"          : "$56",
          "hasSize"            : false,
          "colorBlockId"       : false,
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "allImages"          : ["woman_nudies_shirt.jpg"],
          "soldOut"            : false,
          "variants" : {
            "oneSize" : ["511716733"]
          }
        },
        {
          "id"                 : "7",
          "index"              : "6",
          "largeItemSrc1"      : "man_gilded_palace_shirt.jpg",
          "itemImageSrc"       : "man_gilded_palace_shirt.jpg",
          "itemTitle"          : "Gilded Palace of Sin Men's Crew",
          "itemDescription"    : "This tee is everything you expect it to be. Our take off of Nudie's Rodeo Tailors famous suit made for Gram Parsons. This screenprinted tee shirt features front and back detailing including pills on the sleeves. 100% cotton, overdyed, pre-shrunk tee with contrast stitching. Super soft and amazing.",
          "itemPrice"          : "$90",
          "hasSize"            : true,
          "colorBlockId"       : false,
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "allImages"          : ["man_gilded_palace_shirt.jpg"],
          "soldOut"            : false,
          "variants" : {
            "small"  : ["443255353"],
            "large"  : ["443255361"],
            "xlarge" : ["443255365"]
          }
        },
        {
          "id"                 : "8",
          "index"              : "7",
          "largeItemSrc1"      : "woman_gilded_palace_dress.jpg",
          "itemImageSrc"       : "woman_gilded_palace_dress.jpg",
          "itemTitle"          : "Gilded Palace of Sin Dress",
          "itemDescription"    : "This dress is everything you expect it to be. Our take off of Nudie's Rodeo Tailors famous suit made for Gram Parsons. This screenprinted dress features front and back detailing including poppy blossoms on your cheeks. 100% cotton, overdyed, pre-shrunk dress with contrast stitching. Super soft and amazing.",
          "itemPrice"          : "$150",
          "hasSize"            : false,
          "colorBlockId"       : false,
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "allImages"          : ["woman_gilded_palace_dress.jpg"],
          "soldOut"            : true,
          "variants" : {}
        }
      ],

      variantColors: [],

      hotSpots: [
        {
          "id"                 : "1",
          "hotSpotId"          : "1",
          "index"              : "0",
          "startTime"          : "0.14",
          "endTime"            : "0.16",
          "hotSpotStartX"      : "800",
          "hotSpotStartY"      : "500",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "500",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "500"
        },
        {
          "id"                 : "1",
          "hotSpotId"          : "2",
          "index"              : "0",
          "startTime"          : "0.17",
          "endTime"            : "0.19",
          "hotSpotStartX"      : "650",
          "hotSpotStartY"      : "400",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "500"
        },
        {
          "id"                 : "2",
          "hotSpotId"          : "3",
          "index"              : "0",
          "startTime"          : "0.22",
          "endTime"            : "0.24",
          "hotSpotStartX"      : "675",
          "hotSpotStartY"      : "700",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "500"
        },
        {
          "id"                 : "2",
          "hotSpotId"          : "4",
          "index"              : "0",
          "startTime"          : "0.25",
          "endTime"            : "0.275",
          "hotSpotStartX"      : "940",
          "hotSpotStartY"      : "700",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "500"
        },
        {
          "id"                 : "2",
          "hotSpotId"          : "5",
          "index"              : "0",
          "startTime"          : "0.28",
          "endTime"            : "0.31",
          "hotSpotStartX"      : "920",
          "hotSpotStartY"      : "400",
          "hotSpotStartWidth"  : "400",
          "hotSpotStartHeight" : "400"
        },
        {
          "id"                 : "3",
          "hotSpotId"          : "6",
          "index"              : "0",
          "startTime"          : "0.32",
          "endTime"            : "0.351",
          "hotSpotStartX"      : "975",
          "hotSpotStartY"      : "500",
          "hotSpotStartWidth"  : "400",
          "hotSpotStartHeight" : "400"
        },
        {
          "id"                 : "1",
          "hotSpotId"          : "7",
          "index"              : "0",
          "startTime"          : "0.381",
          "endTime"            : "0.41",
          "hotSpotStartX"      : "900",
          "hotSpotStartY"      : "300",
          "hotSpotStartWidth"  : "400",
          "hotSpotStartHeight" : "400"
        },
        {
          "id"                 : "4",
          "hotSpotId"          : "8",
          "index"              : "0",
          "startTime"          : "0.41",
          "endTime"            : "0.44",
          "hotSpotStartX"      : "550",
          "hotSpotStartY"      : "300",
          "hotSpotStartWidth"  : "400",
          "hotSpotStartHeight" : "400"
        },
        {
          "id"                 : "4",
          "hotSpotId"          : "9",
          "index"              : "0",
          "startTime"          : "0.44",
          "endTime"            : "0.45",
          "hotSpotStartX"      : "925",
          "hotSpotStartY"      : "250",
          "hotSpotStartWidth"  : "400",
          "hotSpotStartHeight" : "400"
        },
        {
          "id"                 : "5",
          "hotSpotId"          : "10",
          "index"              : "0",
          "startTime"          : "0.45",
          "endTime"            : "0.47",
          "hotSpotStartX"      : "1000",
          "hotSpotStartY"      : "0",
          "hotSpotStartWidth"  : "400",
          "hotSpotStartHeight" : "400"
        },
        {
          "id"                 : "6",
          "hotSpotId"          : "11",
          "index"              : "0",
          "startTime"          : "0.47",
          "endTime"            : "0.48",
          "hotSpotStartX"      : "1500",
          "hotSpotStartY"      : "50",
          "hotSpotStartWidth"  : "400",
          "hotSpotStartHeight" : "400"
        },
        {
          "id"                 : "5",
          "hotSpotId"          : "12",
          "index"              : "0",
          "startTime"          : "0.49",
          "endTime"            : "0.505",
          "hotSpotStartX"      : "750",
          "hotSpotStartY"      : "50",
          "hotSpotStartWidth"  : "900",
          "hotSpotStartHeight" : "400"
        },
        {
          "id"                 : "6",
          "hotSpotId"          : "13",
          "index"              : "0",
          "startTime"          : "0.609",
          "endTime"            : "0.635",
          "hotSpotStartX"      : "125",
          "hotSpotStartY"      : "200",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "500"
        },
        {
          "id"                 : "6",
          "hotSpotId"          : "14",
          "index"              : "0",
          "startTime"          : "0.65",
          "endTime"            : "0.785",
          "hotSpotStartX"      : "600",
          "hotSpotStartY"      : "500",
          "hotSpotStartWidth"  : "800",
          "hotSpotStartHeight" : "800"
        },
        {
          "id"                 : "7",
          "hotSpotId"          : "15",
          "index"              : "0",
          "startTime"          : "0.79",
          "endTime"            : "0.815",
          "hotSpotStartX"      : "600",
          "hotSpotStartY"      : "300",
          "hotSpotStartWidth"  : "800",
          "hotSpotStartHeight" : "800"
        },
        {
          "id"                 : "7",
          "hotSpotId"          : "16",
          "index"              : "0",
          "startTime"          : "0.79",
          "endTime"            : "0.815",
          "hotSpotStartX"      : "600",
          "hotSpotStartY"      : "300",
          "hotSpotStartWidth"  : "800",
          "hotSpotStartHeight" : "800"
        },
        {
          "id"                 : "8",
          "hotSpotId"          : "17",
          "index"              : "0",
          "startTime"          : "0.818",
          "endTime"            : "0.835",
          "hotSpotStartX"      : "1000",
          "hotSpotStartY"      : "200",
          "hotSpotStartWidth"  : "650",
          "hotSpotStartHeight" : "650"
        },
        {
          "id"                 : "8",
          "hotSpotId"          : "18",
          "index"              : "0",
          "startTime"          : "0.839",
          "endTime"            : "0.86",
          "hotSpotStartX"      : "600",
          "hotSpotStartY"      : "200",
          "hotSpotStartWidth"  : "650",
          "hotSpotStartHeight" : "650"
        },
        {
          "id"                 : "6",
          "hotSpotId"          : "19",
          "index"              : "0",
          "startTime"          : "0.859",
          "endTime"            : "0.875",
          "hotSpotStartX"      : "450",
          "hotSpotStartY"      : "350",
          "hotSpotStartWidth"  : "650",
          "hotSpotStartHeight" : "650"
        }
      ],

      cartItems:[]
    };
  });

