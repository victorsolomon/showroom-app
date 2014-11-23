define([
  'underscore',
  'backbone'
], function (_, Backbone) {

    window.playerConfig = {

      gaKey        : 'UA-55667188-1',
      gaVendorName : 'TeaCollection',

      loaderStyle : 'image',
      splashImage : 'static/images/posterFrames/teacollection.png',

      mp4_video_src_med  : 'teacollection/teacollection_mp4.mp4',
      webm_video_src_med : 'teacollection/teacollection-webm.webm',

      baseVideoPath          : "static/movies/",
      baseProductImagePath   : "static/images/productImages/teacollection/",

      checkoutType : "email",
      checkoutUrl  : "mailto:we@helloshowroom.co?subject=Showroom - Shop Video&body=Let's activate video.",

      shareUrl          : "http://www.helloshowroom.co/showroom/teacollection",
      shareEmbedBaseUrl : "http://www.helloshowroom.co/showroom/index.html?config=teaCollectionConfig",
      hotspotColor      : 'white',

      recommended : [
        {
          "id"            : '1',
          "largeItemSrc1" : 'scene_1_2_romper.png'
        },
        {
          "id"            : '2',
          "largeItemSrc1" : 'scene_3_4_shirt.png'
        },
        {
          "id"            : '3',
          "largeItemSrc1" : 'scene_3_4_sweater.png'
        },
        {
          "id"            : '4',
          "largeItemSrc1" : 'scene_5_9_shawl.png'
        },
        {
          "id"            : '5',
          "largeItemSrc1" : 'scene_10_11_dress.png'
        },
        {
          "id"            : '6',
          "largeItemSrc1" : 'scene_12_dress.png'
        },
        {
          "id"            : '7',
          "largeItemSrc1" : 'scene_13_dress_left.png'
        },
        {
          "id"            : '8',
          "largeItemSrc1" : 'scene_15_16_sweater.png'
        },
        {
          "id"            : '9',
          "largeItemSrc1" : 'scene_17_sweater_left.png'
        },
        {
          "id"            : '10',
          "largeItemSrc1" : 'scene_17_sweater_right.png'
        },
        {
          "id"            : '11',
          "largeItemSrc1" : 'scene_18_jeans.png'
        },
        {
          "id"            : '12',
          "largeItemSrc1" : 'scene_18_shoes.png'
        },
        {
          "id"            : '13',
          "largeItemSrc1" : 'scene_19_sweater.png'
        },
        {
          "id"            : '14',
          "largeItemSrc1" : 'scene_20_romper.png'
        }
      ],

      itemData: [
        {
          "id"                 : "1", //also in scene 21
          "index"              : "0",
          "largeItemSrc1"      : "scene_1_2_romper.png",
          "itemImageSrc"       : "scene_1_2_romper.png",
          "itemTitle"          : "Alpenblumen Romper",
          "itemDescription"    : "Alpenblumen (all-pen-bloom) means 'Alpine flower'. Diaper snaps and back keyhole detail for easy dressing. 100% cotton jersey. Machine wash. Imported.",
          "itemPrice"          : "$35",
          "hasSize"            : false,
          "colorBlockId"       : false,
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "allImages"          : ["scene_1_2_romper.png"],
          "soldOut"            : false,
          "variants" : {
            "oneSize" : ['1']
          }
        },
        {
          "id"                 : "2",
          "index"              : "1",
          "largeItemSrc1"      : "scene_3_4_shirt.png",
          "itemImageSrc"       : "scene_3_4_shirt.png",
          "itemTitle"          : "Kleiner Biber Graphic Tee",
          "itemDescription"    : "Kleiner biber (kline-a bee-ber) means 'little beaver'. The largest beaver populations are found in Bavaria, along the Danube River. Classic crew neck. Original screen print graphic. 100% cotton jersey. Machine wash. Imported.",
          "itemPrice"          : "$24.50",
          "hasSize"            : false,
          "colorBlockId"       : false,
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "allImages"          : ["scene_3_4_shirt.png"],
          "soldOut"            : false,
          "variants" : {
            "oneSize" : ['2']
          }
        },
        {
          "id"                 : "3",
          "index"              : "2",
          "largeItemSrc1"      : "scene_3_4_sweater.png", //same sweater as in scene 13
          "itemImageSrc"       : "scene_3_4_sweater.png",
          "itemTitle"          : "Murnau Stripe Cardigan",
          "itemDescription"    : "Mnnter-Haus is located in Murnau, a city in Germany that's on the edge of the Bavarian alps. Classic cardigan styling. Great for layering. Super soft to the touch. 100% cotton. Machine wash cold. Delicate cycle. Reshape and dry flat. Imported.",
          "itemPrice"          : "$49",
          "hasSize"            : false,
          "colorBlockId"       : false,
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "allImages"          : ["scene_3_4_sweater.png"],
          "soldOut"            : false,
          "variants" : {
            "oneSize" : ['3']
          }
        },
        {
          "id"                 : "4",
          "index"              : "3",
          "largeItemSrc1"      : "scene_5_9_shawl.png",
          "itemImageSrc"       : "scene_5_9_shawl.png",
          "itemTitle"          : "Winterberg Popover",
          "itemDescription"    : "This cozy popover is named for the winter wunderland (wonderland) of Winterberg (winter-borg), a town that is home to many sport resorts. Shawl collar. Brushed for extra softness. 100% French terry cotton. Machine wash. Imported.",
          "itemPrice"          : "$49",
          "hasSize"            : false,
          "colorBlockId"       : false,
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "allImages"          : ["scene_5_9_shawl.png"],
          "soldOut"            : false,
          "variants" : {
            "oneSize" : ['4']
          }
        },
        {
          "id"                 : "5",
          "index"              : "4",
          "largeItemSrc1"      : "scene_10_11_dress.png",
          "itemImageSrc"       : "scene_10_11_dress.png",
          "itemTitle"          : "Rapunzel Sweater Dress",
          "itemDescription"    : "This dress is named after one of the original Brothers Grimm's fairytales, which was first published in 1812. Mini length. Exposed zipper at shoulder. 100% cotton. Machine wash cold. Delicate cycle. Reshape and lay flat to dry. Imported.",
          "itemPrice"          : "$69",
          "hasSize"            : false,
          "colorBlockId"       : false,
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "allImages"          : ["scene_10_11_dress.png"],
          "soldOut"            : false,
          "variants" : {
            "oneSize" : ['5']
          }
        },
        {
          "id"                 : "6",
          "index"              : "5",
          "largeItemSrc1"      : "scene_12_dress.png",
          "itemImageSrc"       : "scene_12_dress.png",
          "itemTitle"          : "Waldland Double Decker Dress",
          "itemDescription"    : "Waldland means 'woodland'. Did you know a wolpertinger is a mythological animal in Bavarian folklore? It has wings, antlers and a rabbit's body and lives in the alpine forests. Mini length. Double-decker with flutter sleeve. Cosmic Berry trim. 100% cotton jersey. Machine wash. Imported.",
          "itemPrice"          : "$35",
          "hasSize"            : false,
          "colorBlockId"       : false,
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "allImages"          : ["scene_12_dress.png"],
          "soldOut"            : false,
          "variants" : {
            "oneSize" : ['6']
          }
        },
        {
          "id"                 : "7", //also dress in scene 14
          "index"              : "6",
          "largeItemSrc1"      : "scene_13_dress_left.png",
          "itemImageSrc"       : "scene_13_dress_left.png",
          "itemTitle"          : "Heidi Embroidered Jumper",
          "itemDescription"    : "Heidi is a German girl's name that means 'noble, kind'. This jumper is very Bavarian (and very Tea). Adjustable straps. Embroidery at center. Bloomer included. 100% cotton corduroy. Machine wash cold inside out. Imported.",
          "itemPrice"          : "$39",
          "hasSize"            : false,
          "colorBlockId"       : false,
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "allImages"          : ["scene_13_dress_left.png"],
          "soldOut"            : false,
          "variants" : {
            "oneSize" : ['7']
          }
        },
        {
          "id"                 : "8",
          "index"              : "7",
          "largeItemSrc1"      : "scene_15_16_sweater.png",
          "itemImageSrc"       : "scene_15_16_sweater.png",
          "itemTitle"          : "Schneereif Baby Sweater Set",
          "itemDescription"    : "Schneereif means 'snow frost'. Children are told the tale of Mother Frost, who shakes white feathers from her bed that fall as the winter frost and snow over Germany. Double-breasted styling with hood. Cozy and soft. 100% pima cotton. Machine wash, lay flat to dry. Imported.",
          "itemPrice"          : "$75",
          "hasSize"            : false,
          "colorBlockId"       : false,
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "allImages"          : ["scene_15_16_sweater.png"],
          "soldOut"            : false,
          "variants" : {
            "oneSize" : ['8']
          }
        },
        {
          "id"                 : "9",
          "index"              : "8",
          "largeItemSrc1"      : "scene_17_sweater_left.png",
          "itemImageSrc"       : "scene_17_sweater_left.png",
          "itemTitle"          : "Diamant Zip Cardigan",
          "itemDescription"    : "This sweater is decked out in diamanten (diamonds) and is a combination of Bavarian style meets skipiste (ski slope) style. Zip front. Front and back intarsia motif. 60% cotton, 40% acrylic. Machine wash. Delicate cycle. Reshape and lay flat to dry. Imported.",
          "itemPrice"          : "$59",
          "hasSize"            : false,
          "colorBlockId"       : false,
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "allImages"          : ["scene_17_sweater_left.png"],
          "soldOut"            : false,
          "variants" : {
            "oneSize" : ['9']
          }
        },
        {
          "id"                 : "10",
          "index"              : "9",
          "largeItemSrc1"      : "scene_17_sweater_right.png",
          "itemImageSrc"       : "scene_17_sweater_right.png",
          "itemTitle"          : "Diamant Baby Cardigan",
          "itemDescription"    : "Diamant (dia-mant) means diamond'. This Bavaria-inspired sweater is a jewel of a find for her winter wardrobe. Beautiful intarsia motif. Button front. 60% cotton, 40% acrylic. Machine wash (delicate cycle), reshape and lay flat to dry. Imported.",
          "itemPrice"          : "$59",
          "hasSize"            : false,
          "colorBlockId"       : false,
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "allImages"          : ["scene_17_sweater_right.png"],
          "soldOut"            : false,
          "variants" : {
            "oneSize" : ['10']
          }
        },
        {
          "id"                 : "11",
          "index"              : "10",
          "largeItemSrc1"      : "scene_18_jeans.png",
          "itemImageSrc"       : "scene_18_jeans.png",
          "itemTitle"          : "Daytripper Dark Jeans",
          "itemDescription"    : "Classic denim, washed for signature softness and comfort. Reinvented Daytripper with stretch and rinse wash. Five pocket styling. Sits just below the natural waist, straight leg. 99% cotton, 1% spandex. Machine wash.",
          "itemPrice"          : "$49",
          "hasSize"            : false,
          "colorBlockId"       : false,
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "allImages"          : ["scene_18_jeans.png"],
          "soldOut"            : false,
          "variants" : {
            "oneSize" : ['11']
          }
        },
        {
          "id"                 : "12",
          "index"              : "11",
          "largeItemSrc1"      : "scene_18_shoes.png",
          "itemImageSrc"       : "scene_18_shoes.png",
          "itemTitle"          : "Old Soles Sweep",
          "itemDescription"    : "These classic sneakers are easy to wear and even easier to match with Tea outfits. Hi-top styling with side zipper and laces. Cushioned leather insole with arch support and heel counter for stability. All-natural breathable leather. Leather upper and lining, rubber sole. Wipe with damp cloth to clean. Imported.",
          "itemPrice"          : "$65",
          "hasSize"            : false,
          "colorBlockId"       : false,
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "allImages"          : ["scene_18_shoes.png"],
          "soldOut"            : false,
          "variants" : {
            "oneSize" : ['12']
          }
        },
        {
          "id"                 : "13",
          "index"              : "12",
          "largeItemSrc1"      : "scene_19_sweater.png",
          "itemImageSrc"       : "scene_19_sweater.png",
          "itemTitle"          : "Bayern Blau Zip Cardigan",
          "itemDescription"    : "Bayern Blau means 'Bavarian Blue'. This cardigan is inspired by sweaters we saw on Bavarian ski slopes. Zip front. Front and back pattern. 100% cotton. Machine wash cold. Delicate cycle. Reshape and dry flat. Imported.",
          "itemPrice"          : "$69",
          "hasSize"            : false,
          "colorBlockId"       : false,
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "allImages"          : ["scene_19_sweater.png"],
          "soldOut"            : false,
          "variants" : {
            "oneSize" : ['13']
          }
        },
        {
          "id"                 : "14",
          "index"              : "13",
          "largeItemSrc1"      : "scene_20_romper.png",
          "itemImageSrc"       : "scene_20_romper.png",
          "itemTitle"          : "Kleine Eulen Footie",
          "itemDescription"    : "Kleine Eulen means 'owlets'. Did you know that snowy owlets in Germany actually have grey feathers a few days after birth, which don't turn to snow white until they get older. Classic wrap styling. Diaper snaps for easy dressing. 100% cotton interlock. Machine wash. Imported.",
          "itemPrice"          : "$35",
          "hasSize"            : false,
          "colorBlockId"       : false,
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "allImages"          : ["scene_20_romper.png"],
          "soldOut"            : false,
          "variants" : {
            "oneSize" : ['14']
          }
        },
      ],

      variantColors: [],

      hotSpots: [
        {
          "id"                 : "1",
          "hotSpotId"          : "1",
          "index"              : "0",
          "startTime"          : "0.01",
          "endTime"            : "0.1199",
          "hotSpotStartX"      : "1350",
          "hotSpotStartY"      : "200",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "500"
        },
        {
          "id"                 : "1",
          "hotSpotId"          : "2",
          "index"              : "0",
          "startTime"          : "0.12",
          "endTime"            : "0.16",
          "hotSpotStartX"      : "1150",
          "hotSpotStartY"      : "500",
          "hotSpotStartWidth"  : "700",
          "hotSpotStartHeight" : "700"
        },
        {
          "id"                 : "2",
          "hotSpotId"          : "3",
          "index"              : "0",
          "startTime"          : "0.1650",
          "endTime"            : "0.205",
          "hotSpotStartX"      : "800",
          "hotSpotStartY"      : "600",
          "hotSpotStartWidth"  : "400",
          "hotSpotStartHeight" : "400"
        },
        {
          "id"                 : "3",
          "hotSpotId"          : "4",
          "index"              : "0",
          "startTime"          : "0.206",
          "endTime"            : "0.23",
          "hotSpotStartX"      : "750",
          "hotSpotStartY"      : "550",
          "hotSpotStartWidth"  : "600",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "4",
          "hotSpotId"          : "5",
          "index"              : "0",
          "startTime"          : "0.235",
          "endTime"            : "0.26",
          "hotSpotStartX"      : "0",
          "hotSpotStartY"      : "200",
          "hotSpotStartWidth"  : "400",
          "hotSpotStartHeight" : "800"
        },
        {
          "id"                 : "4",
          "hotSpotId"          : "7",
          "index"              : "0",
          "startTime"          : "0.295",
          "endTime"            : "0.335",
          "hotSpotStartX"      : "900",
          "hotSpotStartY"      : "500",
          "hotSpotStartWidth"  : "600",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "5",
          "hotSpotId"          : "8",
          "index"              : "0",
          "startTime"          : "0.385",
          "endTime"            : "0.43",
          "hotSpotStartX"      : "900",
          "hotSpotStartY"      : "400",
          "hotSpotStartWidth"  : "600",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "6",
          "hotSpotId"          : "9",
          "index"              : "0",
          "startTime"          : "0.432",
          "endTime"            : "0.47",
          "hotSpotStartX"      : "425",
          "hotSpotStartY"      : "800",
          "hotSpotStartWidth"  : "800",
          "hotSpotStartHeight" : "300"
        },
        {
          "id"                 : "3",
          "hotSpotId"          : "10",
          "index"              : "0",
          "startTime"          : "0.475",
          "endTime"            : "0.52",
          "hotSpotStartX"      : "825",
          "hotSpotStartY"      : "800",
          "hotSpotStartWidth"  : "800",
          "hotSpotStartHeight" : "300"
        },
        {
          "id"                 : "6",
          "hotSpotId"          : "11",
          "index"              : "0",
          "startTime"          : "0.475",
          "endTime"            : "0.52",
          "hotSpotStartX"      : "300",
          "hotSpotStartY"      : "700",
          "hotSpotStartWidth"  : "400",
          "hotSpotStartHeight" : "400"
        },
        {
          "id"                 : "7",
          "hotSpotId"          : "13",
          "index"              : "0",
          "startTime"          : "0.52",
          "endTime"            : "0.56",
          "hotSpotStartX"      : "1300",
          "hotSpotStartY"      : "400",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "500"
        },
        {
          "id"                 : "8",
          "hotSpotId"          : "14",
          "index"              : "0",
          "startTime"          : "0.56",
          "endTime"            : "0.59",
          "hotSpotStartX"      : "800",
          "hotSpotStartY"      : "100",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "500"
        },
        {
          "id"                 : "8",
          "hotSpotId"          : "15",
          "index"              : "0",
          "startTime"          : "0.5899",
          "endTime"            : "0.605",
          "hotSpotStartX"      : "600",
          "hotSpotStartY"      : "300",
          "hotSpotStartWidth"  : "900",
          "hotSpotStartHeight" : "900"
        },
        {
          "id"                 : "9",
          "hotSpotId"          : "16",
          "index"              : "0",
          "startTime"          : "0.61",
          "endTime"            : "0.64",
          "hotSpotStartX"      : "300",
          "hotSpotStartY"      : "500",
          "hotSpotStartWidth"  : "600",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "11",
          "hotSpotId"          : "17",
          "index"              : "0",
          "startTime"          : "0.65",
          "endTime"            : "0.695",
          "hotSpotStartX"      : "700",
          "hotSpotStartY"      : "225",
          "hotSpotStartWidth"  : "225",
          "hotSpotStartHeight" : "225"
        },
        {
          "id"                 : "12",
          "hotSpotId"          : "18",
          "index"              : "0",
          "startTime"          : "0.65",
          "endTime"            : "0.695",
          "hotSpotStartX"      : "400",
          "hotSpotStartY"      : "650",
          "hotSpotStartWidth"  : "350",
          "hotSpotStartHeight" : "350"
        },
        {
          "id"                 : "13",
          "hotSpotId"          : "19",
          "index"              : "0",
          "startTime"          : "0.70",
          "endTime"            : "0.76",
          "hotSpotStartX"      : "400",
          "hotSpotStartY"      : "400",
          "hotSpotStartWidth"  : "600",
          "hotSpotStartHeight" : "690"
        },
        {
          "id"                 : "14",
          "hotSpotId"          : "20",
          "index"              : "0",
          "startTime"          : "0.79",
          "endTime"            : "0.855",
          "hotSpotStartX"      : "0",
          "hotSpotStartY"      : "200",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "900"
        },
        {
          "id"                 : "1",
          "hotSpotId"          : "21",
          "index"              : "0",
          "startTime"          : "0.86",
          "endTime"            : "0.89",
          "hotSpotStartX"      : "100",
          "hotSpotStartY"      : "200",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "500"
        },
        {
          "id"                 : "1",
          "hotSpotId"          : "22",
          "index"              : "0",
          "startTime"          : "0.895",
          "endTime"            : "0.92",
          "hotSpotStartX"      : "700",
          "hotSpotStartY"      : "200",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "500"
        },
        {
          "id"                 : "3",
          "hotSpotId"          : "23",
          "index"              : "0",
          "startTime"          : "0.1650",
          "endTime"            : "0.205",
          "hotSpotStartX"      : "500",
          "hotSpotStartY"      : "600",
          "hotSpotStartWidth"  : "250",
          "hotSpotStartHeight" : "250"
        },
        {
          "id"                 : "10",
          "hotSpotId"          : "24",
          "index"              : "0",
          "startTime"          : "0.61",
          "endTime"            : "0.64",
          "hotSpotStartX"      : "1400",
          "hotSpotStartY"      : "500",
          "hotSpotStartWidth"  : "600",
          "hotSpotStartHeight" : "600"
        },
      ],

      cartItems:[]
    };
  });

