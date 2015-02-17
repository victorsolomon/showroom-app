define([
  'underscore',
  'backbone'
], function (_, Backbone) {

    window.playerConfig = {

      gaKey        : 'UA-55667188-1',
      gaVendorName : 'Jimmy Choo',

      loaderStyle       : 'image',
      splashImage       : 'static/images/posterFrames/jimmychoo.png',
      customSplashImage : null,

      mp4_video_src_med  : 'jimmychoo/jimmychoo_mp4.mp4',
      webm_video_src_med : 'jimmychoo/jimmychoo_webm.webm',
      iphone_video_src   : 'jimmychoo/jimmychoo_iphone.mpg',
      iphone_audio_src   : 'jimmychoo/jimmychoo_soundtrack.mp3',

      baseVideoPath          : "static/movies/",
      baseProductImagePath   : "static/images/productImages/jimmychoo/",
      colorVariantsImagePath : "static/images/productImages/jimmychoo/optionVariants/",

      checkoutType : "email",
      checkoutUrl  : "mailto:we@helloshowroom.co?subject=Showroom - Shop Video&body=Let's activate video.",

      shareUrl          : "http://www.helloshowroom.co/jimmychoo",
      shareEmbedBaseUrl : "http://www.helloshowroom.co/jimmychoo/index.html?config=jimmychooConfig",

      hotspotColor    : null,
      customFontSize  : null,
      customBoxSize   : null,
      beaconPlacement : null,

      recommended : [
        {
          "id"            : '1',
          "largeItemSrc1" : 'shot_1_shoe_01.jpg',
        },
        {
          "id"            : '2',
          "largeItemSrc1" : 'shot_2_white_bag_01.jpg',
        },
        {
          "id"            : '3',
          "largeItemSrc1" : 'shot_5_navy_shoe_01.jpg',
        },
        {
          "id"            : '4',
          "largeItemSrc1" : 'shot_6_blackbag_01.jpg',
        },
        {
          "id"            : '5',
          "largeItemSrc1" : 'shot_7_blackbag_01.jpg',
        },
        {
          "id"            : '6',
          "largeItemSrc1" : 'shot_9_glasses_01.jpg',
        },
        {
          "id"            : '7',
          "largeItemSrc1" : 'shot_10_boots_01.jpg',
        },
      ],

      variantColors: [],

      itemData: [
        {
          "id"               : "1",
          "index"            : "0",
          "largeItemSrc1"    : 'shot_1_shoe_01.jpg',
          "itemImageSrc"     : 'shot_1_shoe_01.jpg',
          "itemTitle"        : "Houry",
          "artist"           : null,
          "itemDescription"  : "A modern twist on the classic D’Orsay, this asymmetric pump keeps it simple, while bringing a fashionable edge. The bold upper follows the natural curves of the foot to create the perfect balance between exposing and covering. Heel measures 110mm/4.3 inches.",
          "itemPrice"        : "$448.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : null,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : true,
          "variants": {},
          "allImages": ['shot_1_shoe_03.jpg', 'shot_1_shoe_02.jpg', 'shot_1_shoe_01.jpg']
        },
        {
          "id"               : "2",
          "index"            : "1",
          "largeItemSrc1"    : 'shot_2_white_bag_01.jpg',
          "itemImageSrc"     : 'shot_2_white_bag_01.jpg',
          "itemTitle"        : "Alfie",
          "artist"           : null,
          "itemDescription"  : "A classic tote style reworked to create a modern day bag with unique detailing. Alfie S makes for the perfect small all day handbag, featuring a long detachable strap so can be worn on the shoulder, across the body or carried by in hand with the top handles. It also features two internal compartments separated by a large centralized zipped pocket for added security as well as two side slit pockets for storing your phone and other essentials.",
          "itemPrice"        : "$1895.00",
          "hasSize"          : false,
          "hasColor"         : false,
          "colorBlockId"     : null,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            "oneSize" : ['701731769'],
          },
          "allImages": ['shot_2_white_bag_03.jpg', 'shot_2_white_bag_02.jpg', 'shot_2_white_bag_01.jpg']
        },
        {
          "id"               : "3",
          "index"            : "2",
          "largeItemSrc1"    : 'shot_5_navy_shoe_01.jpg',
          "itemImageSrc"     : 'shot_5_navy_shoe_01.jpg',
          "itemTitle"        : "Vanish",
          "artist"           : null,
          "itemDescription"  : "A beautiful modern bootie, in luxurious suede teamed with calf leather, is set against a new and striking tower heel. Identified by its triangular shape, this avant-garde heel adds an unexpected twist. The shorter toe box, delicate ankle strap and tailored fitted body create a streamlined fit, evoking a modern sexy vibe. Heel measures 110mm/4.3 inches",
          "itemPrice"        : "$498.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : null,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            "36"   : ['701731769'],
            "37"   : ['701731769'],
            "39"   : ['701731769'],
            "39.5" : ['701731769']
          },
          "allImages": ['shot_5_navy_shoe_03.jpg', 'shot_5_navy_shoe_02.jpg', 'shot_5_navy_shoe_01.jpg']
        },
        {
          "id"               : "4",
          "index"            : "3",
          "largeItemSrc1"    : 'shot_6_blackbag_01.jpg',
          "itemImageSrc"     : 'shot_6_blackbag_01.jpg',
          "itemTitle"        : "Ava",
          "artist"           : null,
          "itemDescription"  : "Ava is a new compact clutch bag for Jimmy Choo. It can be carried neatly in your hand or on shoulder with the gold chain strap. Available here in a glamorous mix of rabbit fur and exotic python.",
          "itemPrice"        : "$725.00",
          "hasSize"          : false,
          "hasColor"         : false,
          "colorBlockId"     : null,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            "oneSize" : ['701731769']
          },
          "allImages": ['shot_6_blackbag_03.jpg', 'shot_6_blackbag_02.jpg', 'shot_6_blackbag_01.jpg']
        },
        {
          "id"               : "5",
          "index"            : "4",
          "largeItemSrc1"    : 'shot_7_blackbag_01.jpg',
          "itemImageSrc"     : 'shot_7_blackbag_01.jpg',
          "itemTitle"        : "Zoe",
          "artist"           : null,
          "itemDescription"  : "Zoe L is the new, larger version of the hobo bag for Jimmy Choo. A relaxed attitude and slouchy feel, this shoulder bag is perfect for everyday. Available here in this timeless and striking, intricately pleated coated fabric involving high levels of craftsmanship and skill.",
          "itemPrice"        : "$1795.00",
          "hasSize"          : false,
          "hasColor"         : false,
          "colorBlockId"     : null,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            "oneSize" : ['701731769']
          },
          "allImages": ['shot_7_blackbag_03.jpg', 'shot_7_blackbag_02.jpg', 'shot_7_blackbag_01.jpg']
        },
        {
          "id"               : "6",
          "index"            : "5",
          "largeItemSrc1"    : 'shot_9_glasses_01.jpg',
          "itemImageSrc"     : 'shot_9_glasses_01.jpg',
          "itemTitle"        : "Millie",
          "artist"           : null,
          "itemDescription"  : "These round oversized sunglasses have a retro vibe. The real python leather inserts at the sides simply add to the richness of the style. Sunglasses offer 100% UVA and UVB protection and come with a Jimmy Choo case and cloth.",
          "itemPrice"        : "$465.00",
          "hasSize"          : false,
          "hasColor"         : false,
          "colorBlockId"     : null,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            "oneSize"  : ['701731769']
          },
          "allImages": ['shot_9_glasses_03.jpg', 'shot_9_glasses_02.jpg', 'shot_9_glasses_01.jpg']
        },
        {
          "id"               : "7",
          "index"            : "6",
          "largeItemSrc1"    : 'shot_10_boots_01.jpg',
          "itemImageSrc"     : 'shot_10_boots_01.jpg',
          "itemTitle"        : "Derive",
          "artist"           : null,
          "itemDescription"  : "These boots are a triple threat with a powerful construction, architectural heel, and a stitch free upper. The heel is the stunning feature of the design. Set further back than our current heels, it is very straight and sleek, characterised by the cut out detailing on the breast of the heel. The upper and the heel have been designed in sync to completely compliment each other, resulting in a remarkable silhouette. Heel measures 120mm/4.7 inches.",
          "itemPrice"        : "$998.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : null,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            "36"   : ['701731769'],
            "37"   : ['701731769'],
            "39"   : ['701731769'],
            "39.5" : ['701731769'],
            "40"   : ['701731769'],
          },
          "allImages": ['shot_10_boots_03.jpg', 'shot_10_boots_02.jpg', 'shot_10_boots_01.jpg']
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
          "id"                 : "1", //pink shoes
          "hotSpotId"          : "1",
          "index"              : "0",
          "startTime"          : "0.1649",
          "endTime"            : "0.197",
          "hotSpotStartX"      : "500",
          "hotSpotStartY"      : "200",
          "hotSpotStartWidth"  : "600",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "2", //white bag
          "hotSpotId"          : "2",
          "index"              : "0",
          "startTime"          : "0.216",
          "endTime"            : "0.239",
          "hotSpotStartX"      : "650",
          "hotSpotStartY"      : "300",
          "hotSpotStartWidth"  : "600",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "1", //pink shoes
          "hotSpotId"          : "3",
          "index"              : "0",
          "startTime"          : "0.24",
          "endTime"            : "0.279",
          "hotSpotStartX"      : "350",
          "hotSpotStartY"      : "400",
          "hotSpotStartWidth"  : "600",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "2", //white bag
          "hotSpotId"          : "4",
          "index"              : "0",
          "startTime"          : "0.28",
          "endTime"            : "0.315",
          "hotSpotStartX"      : "450",
          "hotSpotStartY"      : "400",
          "hotSpotStartWidth"  : "600",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "3", //navy shoe
          "hotSpotId"          : "5",
          "index"              : "0",
          "startTime"          : "0.399",
          "endTime"            : "0.487",
          "hotSpotStartX"      : "450",
          "hotSpotStartY"      : "290",
          "hotSpotStartWidth"  : "600",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "4", //first black bag
          "hotSpotId"          : "6",
          "index"              : "0",
          "startTime"          : "0.49",
          "endTime"            : "0.514",
          "hotSpotStartX"      : "610",
          "hotSpotStartY"      : "200",
          "hotSpotStartWidth"  : "600",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "5", //pleated black bag
          "hotSpotId"          : "7",
          "index"              : "0",
          "startTime"          : "0.604",
          "endTime"            : "0.657",
          "hotSpotStartX"      : "290",
          "hotSpotStartY"      : "350",
          "hotSpotStartWidth"  : "600",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "4", //first black bag
          "hotSpotId"          : "8",
          "index"              : "0",
          "startTime"          : "0.659",
          "endTime"            : "0.689",
          "hotSpotStartX"      : "1050",
          "hotSpotStartY"      : "400",
          "hotSpotStartWidth"  : "600",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "6", //glasses
          "hotSpotId"          : "9",
          "index"              : "0",
          "startTime"          : "0.723",
          "endTime"            : "0.798",
          "hotSpotStartX"      : "800",
          "hotSpotStartY"      : "275",
          "hotSpotStartWidth"  : "600",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "7", //boots
          "hotSpotId"          : "10",
          "index"              : "0",
          "startTime"          : "0.827",
          "endTime"            : "0.877",
          "hotSpotStartX"      : "475",
          "hotSpotStartY"      : "400",
          "hotSpotStartWidth"  : "600",
          "hotSpotStartHeight" : "600"
        }
      ],

      cartItems:[]
    };
  });

