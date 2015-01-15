define([
  'underscore',
  'backbone'
], function (_, Backbone) {

    window.playerConfig = {

      gaKey        : 'UA-55667188-1',
      gaVendorName : 'Ball and Buck',

      loaderStyle       : 'image',
      splashImage       : 'static/images/posterFrames/ballandbuck.gif',
      customSplashImage : null,

      mp4_video_src_med  : 'ballandbuck/ballandbuck_mp4.mp4',
      webm_video_src_med : 'ballandbuck/ballandbuck_webm.webm',

      baseVideoPath          : "static/movies/",
      baseProductImagePath   : "static/images/productImages/ballandbuck/",
      colorVariantsImagePath : "static/images/productImages/ballandbuck/optionVariants/",

      checkoutType : "shopify",
      checkoutUrl  : "http://ballandbuck.com/cart/",

      shareUrl          : "http://www.helloshowroom.co/ballandbuck",
      shareEmbedBaseUrl : "http://www.helloshowroom.co/ballandbuck/index.html?config=ballAndBuckConfig",

      hotspotColor    : 'white',
      customFontSize  : null,
      customBoxSize   : null,
      beaconPlacement : null,

      recommended : [
        {
          "id"            : '1',
          "largeItemSrc1" : "duck_cotton_pant_1.png",
        },
        {
          "id"            : '2',
          "largeItemSrc1" : "scout_shirt_1.png",
        },
        {
          "id"            : '3',
          "largeItemSrc1" : "upland_hat_1.png",
        },
        {
          "id"            : '4',
          "largeItemSrc1" : "upland_jacket_1.png",
        },
        {
          "id"            : '5',
          "largeItemSrc1" : "crew_neck_1.png",
        },
        {
          "id"            : '6',
          "largeItemSrc1" : "deer_skin_gloves_1.png",
        },
        {
          "id"            : '7',
          "largeItemSrc1" : "roger_knit_1.png",
        },
      ],

      variantColors: [
      ],

      itemData: [
        {
          "id"               : "1",
          "index"            : "0",
          "largeItemSrc1"    : 'duck_cotton_pant_1.png',
          "itemImageSrc"     : 'duck_cotton_pant_1.png',
          "itemTitle"        : "Duck Cotton Pant",
          "artist"           : null,
          "itemDescription"  : "The material known as “Duck Cotton” (answering also to the inverse: “Cotton Duck,” or the colloquial: “Duck”) sauntered into the grain of American folklore back in the early 19th century, churning from the Eastern mills, feeding into town and valley in those condensed United States. It established itself as the practical fabric for hardworking Americans. The woven, leather-tough material clothed ranchers, metal-workers, soldiers, and frontiersmen—all those who put themselves out there, colliding with the titan force of the natural world.",
          "itemPrice"        : "$148.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            '28' : ['946953469'],
            '30' : ['946953473'],
            '32' : ['946953477'],
            '34' : ['946953481'],
            '36' : ['946966449']
          },
          "allImages": ['duck_cotton_pant_2.png', 'duck_cotton_pant_1.png']
        },
        {
          "id"               : "2",
          "index"            : "1",
          "largeItemSrc1"    : 'scout_shirt_1.png',
          "itemImageSrc"     : 'scout_shirt_1.png',
          "itemTitle"        : "Scout Shirt",
          "artist"           : null,
          "itemDescription"  : "When the Only Thing Planned is the Shirt On Your Back. The Scout Shirt, Buffalo Plaid is patterned in homage of the classic collars of old: the lumberjacks and woodsmen, the Paul Bunyans of American lore. When it comes to building a campfire, bringing down a tree, running with the buffalo, or taking on a black bear, no problem… this heavyweight flannel has seen it all before. ",
          "itemPrice"        : "$168.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'S'  : ['948957629'],
            'M'  : ['948957633'],
            'L'  : ['948957641'],
            'XL' : ['948957649']
          },
          "allImages": ['scout_shirt_2.png', 'scout_shirt_1.png']
        },
        {
          "id"               : "3",
          "index"            : "2",
          "largeItemSrc1"    : 'upland_hat_1.png',
          "itemImageSrc"     : 'upland_hat_1.png',
          "itemTitle"        : "The Upland Hat",
          "artist"           : null,
          "itemDescription"  : "So we won't beat around the bush: we know the type of gear it takes to bring down an animal. And a lot of the stuff being made out there just wasn't cutting it. So we set out to craft a series of products that would. The Upland Hat is part of our Premium Hunting Series and the best hunting cap a man could buy.",
          "itemPrice"        : "$48.00",
          "hasSize"          : false,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'oneSize' : ['403178597']
          },
          "allImages": ['upland_hat_2.png', 'upland_hat_1.png']
        },
        {
          "id"               : "4",
          "index"            : "3",
          "largeItemSrc1"    : 'upland_jacket_1.png',
          "itemImageSrc"     : 'upland_jacket_1.png',
          "itemTitle"        : "The Upland Jacket",
          "artist"           : null,
          "itemDescription"  : "Ball and Buck's Upland Jacket is just Something You Need to Experience\r\nOnly when you feel the weight of the Waxed Cotton Shell on your shoulders or the texture of the Whale Corduroy Collar on the back of your neck do you truly understand how special this garment is.\r\nThe Upland Jacket is the Ball and Buck philosophy manifest: American-Made, crafted with a marriage of function and timeless design, and created from quality material that guarantees use from generation to generation.",
          "itemPrice"        : "$598.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'S'  : ['445110721'],
            'M'  : ['445110725'],
            'L'  : ['445110729'],
            'XL' : ['445110733']
          },
          "allImages": ['upland_jacket_3.png', 'upland_jacket_2.png', 'upland_jacket_1.png']
        },
        {
          "id"               : "5",
          "index"            : "4",
          "largeItemSrc1"    : 'crew_neck_1.png',
          "itemImageSrc"     : 'crew_neck_1.png',
          "itemTitle"        : "Crew Neck Cotton Sweater",
          "artist"           : null,
          "itemDescription"  : "Made by the same people who produce outerwear for the United States Military and stamped with our signature shooting shoulder, this crew neck sweater is more than just after work clothing. Its heavy duty 12-Gauge 100% Cotton allows for optimal layering in the field or in the town. Ribbed collar, cuffs, and hem provide comfort and functionality.",
          "itemPrice"        : "$98.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'S'  : ['1011816380'],
            'M'  : ['1011816388'],
            'L'  : ['1011816400'],
            'XL' : ['1011816404']
          },
          "allImages": ['crew_neck_2.png', 'crew_neck_1.png']
        },
        {
          "id"               : "6",
          "index"            : "5",
          "largeItemSrc1"    : 'deer_skin_gloves_1.png',
          "itemImageSrc"     : 'deer_skin_gloves_1.png',
          "itemTitle"        : "Deerskin Leather Gloves Unlined, Saddle",
          "artist"           : null,
          "itemDescription"  : "Our Deerskin Leather Gloves, are the ideal mitts for a man who never stops working outdoors, even when the temperature drops. Always warm and never bulky, these soft leather gloves are tailor-made for splitting and carrying wood when your campfire needs fueling, but sleek enough to pair with your favorite peacoat when you're a man about town.",
          "itemPrice"        : "$62.00",
          "hasSize"          : true,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'L'  : ['995788540'],
            'XL' : ['995788544']
          },
          "allImages": ['deer_skin_gloves_1.png']
        },
        {
          "id"               : "7",
          "index"            : "6",
          "largeItemSrc1"    : 'roger_knit_1.png',
          "itemImageSrc"     : 'roger_knit_1.png',
          "itemTitle"        : "Roger Knit Hat",
          "artist"           : null,
          "itemDescription"  : "Made with quality Ragg wool, our Roger Knit Hat is a welcome addition to our collection of cold weather gear. This marbled look is ideal for wear on your daily commute and weekend outings, this hat will keep you warm while maintaining its tight knit construction throughout constant use. *Note these hats are lined in blaze orange which slightly shows through as you can see in the photos.  We love it, but just wanted to make sure you knew.",
          "itemPrice"        : "$38.00",
          "hasSize"          : false,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'oneSize' : ['1004783908']
          },
          "allImages": ['roger_knit_1.png']
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
          "id"                 : "1", //pants
          "hotSpotId"          : "1",
          "index"              : "0",
          "startTime"          : "0.095",
          "endTime"            : "0.19",
          "hotSpotStartX"      : "820",
          "hotSpotStartY"      : "675",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "300",
          "hotSpotStartHeight" : "300"
        },
        {
          "id"                 : "4", //jacket
          "hotSpotId"          : "2",
          "index"              : "0",
          "startTime"          : "0.095",
          "endTime"            : "0.19",
          "hotSpotStartX"      : "820",
          "hotSpotStartY"      : "300",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "300",
          "hotSpotStartHeight" : "300"
        },
        {
          "id"                 : "4", //jacket
          "hotSpotId"          : "3",
          "index"              : "0",
          "startTime"          : "0.23",
          "endTime"            : "0.29",
          "hotSpotStartX"      : "110",
          "hotSpotStartY"      : "300",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "300",
          "hotSpotStartHeight" : "300"
        },
        {
          "id"                 : "4", //jacket
          "hotSpotId"          : "4",
          "index"              : "0",
          "startTime"          : "0.30",
          "endTime"            : "0.336",
          "hotSpotStartX"      : "975",
          "hotSpotStartY"      : "500",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "300",
          "hotSpotStartHeight" : "300"
        },
        {
          "id"                 : "3", //hat
          "hotSpotId"          : "5",
          "index"              : "0",
          "startTime"          : "0.30",
          "endTime"            : "0.336",
          "hotSpotStartX"      : "975",
          "hotSpotStartY"      : "75",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "300",
          "hotSpotStartHeight" : "300"
        },
        {
          "id"                 : "4", //jacket
          "hotSpotId"          : "6",
          "index"              : "0",
          "startTime"          : "0.36",
          "endTime"            : "0.41",
          "hotSpotStartX"      : "300",
          "hotSpotStartY"      : "300",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "200",
          "hotSpotStartHeight" : "200"
        },
        {
          "id"                 : "2", //shirt
          "hotSpotId"          : "7",
          "index"              : "0",
          "startTime"          : "0.36",
          "endTime"            : "0.41",
          "hotSpotStartX"      : "600",
          "hotSpotStartY"      : "200",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "200",
          "hotSpotStartHeight" : "200"
        },
        {
          "id"                 : "4", //jacket
          "hotSpotId"          : "8",
          "index"              : "0",
          "startTime"          : "0.42",
          "endTime"            : "0.52",
          "hotSpotStartX"      : "1200",
          "hotSpotStartY"      : "500",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "200",
          "hotSpotStartHeight" : "200"
        },
        {
          "id"                 : "3", //hat
          "hotSpotId"          : "9",
          "index"              : "0",
          "startTime"          : "0.45",
          "endTime"            : "0.48",
          "hotSpotStartX"      : "1400",
          "hotSpotStartY"      : "30",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "300",
          "hotSpotStartHeight" : "300"
        },
        {
          "id"                 : "3", //hat
          "hotSpotId"          : "10",
          "index"              : "0",
          "startTime"          : "0.485",
          "endTime"            : "0.515",
          "hotSpotStartX"      : "1000",
          "hotSpotStartY"      : "300",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "300",
          "hotSpotStartHeight" : "300"
        },
        {
          "id"                 : "1", //pants
          "hotSpotId"          : "11",
          "index"              : "0",
          "startTime"          : "0.485",
          "endTime"            : "0.515",
          "hotSpotStartX"      : "1200",
          "hotSpotStartY"      : "675",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "300",
          "hotSpotStartHeight" : "300"
        },

        {
          "id"                 : "3", //hat
          "hotSpotId"          : "12",
          "index"              : "0",
          "startTime"          : "0.52",
          "endTime"            : "0.595",
          "hotSpotStartX"      : "175",
          "hotSpotStartY"      : "300",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "200",
          "hotSpotStartHeight" : "200"
        },
        {
          "id"                 : "4", //jacket
          "hotSpotId"          : "13",
          "index"              : "0",
          "startTime"          : "0.52",
          "endTime"            : "0.595",
          "hotSpotStartX"      : "175",
          "hotSpotStartY"      : "430",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "200",
          "hotSpotStartHeight" : "200"
        },
        {
          "id"                 : "1", //pants
          "hotSpotId"          : "14",
          "index"              : "0",
          "startTime"          : "0.52",
          "endTime"            : "0.595",
          "hotSpotStartX"      : "175",
          "hotSpotStartY"      : "650",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "200",
          "hotSpotStartHeight" : "200"
        },
        {
          "id"                 : "4", //jacket
          "hotSpotId"          : "15",
          "index"              : "0",
          "startTime"          : "0.71",
          "endTime"            : "0.75",
          "hotSpotStartX"      : "500",
          "hotSpotStartY"      : "450",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "100",
          "hotSpotStartHeight" : "100"
        },
        {
          "id"                 : "3", //hat
          "hotSpotId"          : "16",
          "index"              : "0",
          "startTime"          : "0.71",
          "endTime"            : "0.75",
          "hotSpotStartX"      : "450",
          "hotSpotStartY"      : "320",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "100",
          "hotSpotStartHeight" : "100"
        },
        {
          "id"                 : "1", //pants
          "hotSpotId"          : "17",
          "index"              : "0",
          "startTime"          : "0.71",
          "endTime"            : "0.75",
          "hotSpotStartX"      : "500",
          "hotSpotStartY"      : "550",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "100",
          "hotSpotStartHeight" : "100"
        },

        {
          "id"                 : "4", //jacket
          "hotSpotId"          : "18",
          "index"              : "0",
          "startTime"          : "0.78",
          "endTime"            : "0.89",
          "hotSpotStartX"      : "800",
          "hotSpotStartY"      : "700",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "200",
          "hotSpotStartHeight" : "200"
        },
        {
          "id"                 : "3", //hat
          "hotSpotId"          : "19",
          "index"              : "0",
          "startTime"          : "0.78",
          "endTime"            : "0.89",
          "hotSpotStartX"      : "800",
          "hotSpotStartY"      : "340",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "200",
          "hotSpotStartHeight" : "200"
        },
      ],

      cartItems:[]
    };
  });

