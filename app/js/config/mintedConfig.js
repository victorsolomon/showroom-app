define([
  'underscore',
  'backbone'
], function (_, Backbone) {

    window.playerConfig = {

      gaKey        : 'UA-55667188-1',
      gaVendorName : 'Minted',

      loaderStyle       : 'image',
      splashImage       : 'static/images/posterFrames/minted.gif',
      customSplashImage : 'static/images/posterFrames/minted-ios.png',

      mp4_video_src_med  : 'minted/minted_mp4.mp4',
      webm_video_src_med : 'minted/minted_webm.webm',

      baseVideoPath          : "static/movies/",
      baseProductImagePath   : "static/images/productImages/minted/",
      colorVariantsImagePath : "static/images/productImages/minted/optionVariants/",

      checkoutType : "minted",

      shareUrl          : "http://www.helloshowroom.co/minted",
      shareEmbedBaseUrl : "http://www.helloshowroom.co/minted/index.html?config=mintedConfig",

      hotspotColor    : 'black',
      customFontSize  : '1.2em',
      customBoxSize   : '21%',
      beaconPlacement : 'top',

      recommended : [
        {
          "id"            : '1',
          "largeItemSrc1" : "California_noframe.png",
        },
        {
          "id"            : '2',
          "largeItemSrc1" : "Magnifique_noframe.png",
        },
        {
          "id"            : '3',
          "largeItemSrc1" : "Wonderful_noframe.png"
        },
        {
          "id"            : '4',
          "largeItemSrc1" : "Tapestry_noframe.png"
        },
        {
          "id"            : '5',
          "largeItemSrc1" : "PalmTrees_noframe.png"
        },
        {
          "id"            : '6',
          "largeItemSrc1" : "Triangles_noframe.png"
        },
        {
          "id"            : '7',
          "largeItemSrc1" : "Deer_noframe.png"
        },
        {
          "id"            : '8',
          "largeItemSrc1" : "Birch_noframe.png"
        },
        {
          "id"            : '9',
          "largeItemSrc1" : 'Aeonium_noframe.png'
        }
      ],

      itemData: [
        {
          "id"                 : "1", // ID for California Art Print to be loaded
          "index"              : "0",
          "largeItemSrc1"      : "California_noframe.png",
          "itemImageSrc"       : "California_noframe.png",
          "itemTitle"          : "California Map Filled",
          "artist"             : "GeekInk Design",
          "itemDescription"    : null,
          "itemPrice"          : "$32",
          "hasSize"            : true,
          "hasColor"           : false,
          "colorBlockId"       : false,
          "variantOptionsId"   : 0,
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "soldOut"            : false,
          "isArt"              : true,
          "variants" : {
            '8" x 10" Unframed'  : ["MIN-1M1-GFA", "$32"],
            '8" x 10" Framed'    : ["MIN-1M1-GFA", "$58"],
            '11" x 14" Unframed' : ["MIN-1M2-GFA", "$48"],
            '11" x 14" Framed'   : ["MIN-1M2-GFA", "$98"]
          },
          "allImages" : {
            1  : "California_blackframe.png",
            2  : "California_whiteframe.png",
            3  : "California_naturalwoodframe.png",
            4  : "California_naturalfarmhouse.png",
            5  : "California_whitefarmhouse.png",
            6  : "California_distressedcharcoal.png",
            7  : "California_distressedwhite.png",
            8  : "California_distressedindigo.png",
            9  : "California_reclaimedbarn.png",
            10 : "California_antiquefiligree.png",
          }
        },
        {
          "id"                 : "2",  // ID for Magnifique Art Print to be loaded
          "index"              : "1",
          "largeItemSrc1"      : "Magnifique_noframe.png",
          "itemImageSrc"       : "Magnifique_noframe.png",
          "itemTitle"          : "Magnifique",
          "artist"             : "Marabou Design",
          "itemDescription"    : null,
          "itemPrice"          : "$32",
          "hasSize"            : true,
          "hasColor"           : false,
          "colorBlockId"       : false,
          "variantOptionsId"   : 0,
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "soldOut"            : false,
          "isArt"              : true,
          "variants" : {
            '8" x 10" Unframed'  : ["MIN-012-GFA", "$32"],
            '8" x 10" Framed'    : ["MIN-012-GFA", "$58"],
            '11" x 14" Unframed' : ["MIN-013-GFA", "$48"],
            '11" x 14" Framed'   : ["MIN-013-GFA", "$98"]
          },
          "allImages" : {
            1  : "Magnifique_blackframe.png",
            2  : "Magnifique_whiteframe.png",
            3  : "Magnifique_naturalwood.png",
            4  : "Magnifique_naturalfarmhouse.png",
            5  : "Magnifique_whitefarmhouse.png",
            6  : "Magnifique_distressedcharcoal.png",
            7  : "Magnifique_distressedwhite.png",
            8  : "Magnifique_distressedindigo.png",
            9  : "Magnifique_reclaimedbarn.png",
            10 : "Magnifique_antiquefiligree.png",
          }
        },
        {
          "id"                 : "3",  // ID for Wonderful Art Print to be loaded
          "index"              : "2",
          "largeItemSrc1"      : "Wonderful_noframe.png",
          "itemImageSrc"       : "Wonderful_noframe.png",
          "itemTitle"          : "Most Wonderful Time",
          "artist"             : "Alethea and Ruth",
          "itemDescription"    : null,
          "itemPrice"          : "$32",
          "hasSize"            : true,
          "hasColor"           : false,
          "colorBlockId"       : false,
          "variantOptionsId"   : 0,
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "soldOut"            : false,
          "isArt"              : true,
          "variants" : {
            '8" x 10" Unframed'  : ["MIN-AI8-GFA", "$32"],
            '8" x 10" Framed'    : ["MIN-AI8-GFA", "$58"],
            '11" x 14" Unframed' : ["MIN-AI9-GFA", "$48"],
            '11" x 14" Framed'   : ["MIN-AI9-GFA", "$98"]
          },
          "allImages" : {
            1  : "Wonderful_blackframe.png",
            2  : "Wonderful_whiteframe.png",
            3  : "Wonderful_naturalframe.png",
            4  : "Wonderful_naturalfarmhouse.png",
            5  : "Wonderful_whitefarmhouse.png",
            6  : "Wonderful_distressedcharcoal.png",
            7  : "Wonderful_distressedwhite.png",
            8  : "Wonderful_distressedindigo.png",
            9  : "Wonderful_reclaimedbarn.png",
            10 : "Wonderful_antiquefiligree.png",
          },
        },
        {
          "id"                 : "4",  // ID for Tapestry Art Print to be loaded
          "index"              : "3",
          "largeItemSrc1"      : "Tapestry_noframe.png",
          "itemImageSrc"       : "Tapestry_noframe.png",
          "itemTitle"          : "Tapestry",
          "artist"             : "Griffinbell Paper Co.",
          "itemDescription"    : null,
          "itemPrice"          : "$24",
          "hasSize"            : true,
          "hasColor"           : false,
          "colorBlockId"       : false,
          "variantOptionsId"   : 0,
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "soldOut"            : false,
          "isArt"              : true,
          "variants" : {
            '8" x 10" Unframed'  : ["MIN-KE2-GNA", "$24"],
            '8" x 10" Framed'    : ["MIN-KE2-GNA", "$46"],
            '11" x 14" Unframed' : ["MIN-KE3-GNA", "$42"],
            '11" x 14" Framed'   : ["MIN-KE3-GNA", "$89"]
          },
          "allImages" : {
            1  : "Tapestry_blackframe.png",
            2  : "Tapestry_whiteframe.png",
            3  : "Tapestry_naturalframe.png",
            4  : "Tapestry_naturalfarmhouse.png",
            5  : "Tapestry_whitefarmhouse.png",
            6  : "Tapestry_distressedcharcoal.png",
            7  : "Tapestry_distressedwhite.png",
            8  : "Tapestry_distressedindigo.png",
            9  : "Tapestry_reclaimedbarn.png",
            10 : "Tapestry_antiquefiligree.png",
          }
        },
        {
          "id"                 : "5",  // ID for Palm Trees Art Print to be loaded
          "index"              : "4",
          "largeItemSrc1"      : "PalmTrees_noframe.png",
          "itemImageSrc"       : "PalmTrees_noframe.png",
          "itemTitle"          : "Palm Trees in the Wind",
          "artist"             : "Simone Klein",
          "itemDescription"    : null,
          "itemPrice"          : "$24",
          "hasSize"            : true,
          "hasColor"           : false,
          "colorBlockId"       : false,
          "variantOptionsId"   : 0,
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "soldOut"            : false,
          "isArt"              : true,
          "variants" : {
            '10" x 8" Unframed'  : ["MIN-19I-GNA", "$24"],
            '10" x 8" Framed'    : ["MIN-19I-GNA", "$46"],
            '14" x 11" Unframed' : ["MIN-19J-GNA", "$42"],
            '14" x 11" Framed'   : ["MIN-19J-GNA", "$89"]
          },
          "allImages" : {
            1  : "PalmTrees_blackframe.png",
            2  : "PalmTrees_whiteframe.png",
            4  : "PalmTrees_naturalfarmhouse.png",
            5  : "PalmTrees_whitefarmhouse.png",
            6  : "PalmTrees_distressedcharcoal.png",
            7  : "PalmTrees_distressedwhite.png",
            8  : "PalmTrees_distressedindigo.png",
            9  : "PalmTrees_reclaimedbarn.png",
            10 : "PalmTrees_antiquefiligree.png"
          }
        },
        {
          "id"                 : "6",  // ID for Triangles Art Print to be loaded
          "index"              : "5",
          "largeItemSrc1"      : "Triangles_noframe.png",
          "itemImageSrc"       : "Triangles_noframe.png",
          "itemTitle"          : "Landscape of Triangles and Dots",
          "artist"             : "Yao Cheng",
          "itemDescription"    : null,
          "itemPrice"          : "$24",
          "hasSize"            : true,
          "hasColor"           : false,
          "colorBlockId"       : false,
          "variantOptionsId"   : 0,
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "soldOut"            : false,
          "isArt"              : true,
          "variants" : {
            '8" x 10" Unframed'  : ["MIN-AZ0-GNA", "$24"],
            '8" x 10" Framed'    : ["MIN-AZ0-GNA", "$46"],
            '11" x 14" Unframed' : ["MIN-AZ1-GNA", "$42"],
            '11" x 14" Framed'   : ["MIN-AZ1-GNA", "$89"]
          },
          "allImages" : {
            1  : "Triangles_blackframe.png",
            2  : "Triangles_whiteframe.png",
            3  : "Triangles_naturalframe.png",
            4  : "Triangles_naturalfarmhouse.png",
            5  : "Triangles_whitefarmhouse.png",
            6  : "Triangles_distressedcharcoal.png",
            7  : "Triangles_distressedwhite.png",
            8  : "Triangles_distressedindigo.png",
            9  : "Triangles_reclaimedbarn.png",
            10 : "Triangles_antiquefiligree.png"
          }
        },
        {
          "id"                 : "7",  // ID for Deer Art Print to be loaded
          "index"              : "6",
          "largeItemSrc1"      : "Deer_noframe.png",
          "itemImageSrc"       : "Deer_noframe.png",
          "itemTitle"          : "Deer Mr. Buck",
          "artist"             : "Natalie Groves",
          "itemDescription"    : null,
          "itemPrice"          : "$24",
          "hasSize"            : true,
          "hasColor"           : false,
          "colorBlockId"       : false,
          "variantOptionsId"   : 0,
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "soldOut"            : false,
          "isArt"              : true,
          "variants" : {
            '8" x 10" Unframed'  : ["MIN-51W-GNA", "$24"],
            '8" x 10" Framed'    : ["MIN-51W-GNA", "$46"],
            '11" x 14" Unframed' : ["MIN-51X-GNA", "$42"],
            '11" x 14" Framed'   : ["MIN-51X-GNA", "$89"]
          },
          "allImages" : {
            1  : "Deer_blackframe.png",
            2  : "Deer_whiteframe.png",
            3  : "Deer_naturalframe.png",
            4  : "Deer_naturalfarmhouse.png",
            5  : "Deer_whitefarmhouse.png",
            6  : "Deer_distressedcharcoal.png",
            7  : "Deer_distressedwhite.png",
            8  : "Deer_distressedindigo.png",
            9  : "Deer_reclaimedbarn.png",
            10 : "Deer_antiquefiligree.png"
          }
        },
        {
          "id"                 : "8",  // ID for Birch Art Print to be loaded
          "index"              : "7",
          "largeItemSrc1"      : "Birch_noframe.png",
          "itemImageSrc"       : "Birch_noframe.png",
          "itemTitle"          : "Birch Woods in Winter",
          "artist"             : "Four Wet Feet Studio",
          "itemDescription"    : null,
          "itemPrice"          : "$24",
          "hasSize"            : true,
          "hasColor"           : false,
          "colorBlockId"       : false,
          "variantOptionsId"   : 0,
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "soldOut"            : false,
          "isArt"              : true,
          "variants" : {
            '8" x 10" Unframed'  : ["MIN-L45-GNA", "$24"],
            '8" x 10" Framed'    : ["MIN-L45-GNA", "$46"],
            '11" x 14" Unframed' : ["MIN-L46-GNA", "$42"],
            '11" x 14" Framed'   : ["MIN-L46-GNA", "$89"]
          },
          "allImages" : {
            1  : "Birch_blackframe.png",
            2  : "Birch_whiteframe.png",
            3  : "Birch_naturalframe.png",
            4  : "Birch_naturalfarmhouse.png",
            5  : "Birch_whitefarmhouse.png",
            6  : "Birch_distressedcharcoal.png",
            7  : "Birch_distressedwhite.png",
            8  : "Birch_distressedindigo.png",
            9  : "Birch_reclaimedbarn.png",
            10 : "Birch_antiquefiligree.png"
          }
        },
        {
          "id"                 : "9",  // ID for Tapestry Art Print to be loaded
          "index"              : "8",
          "largeItemSrc1"      : "Aeonium_noframe.png",
          "itemImageSrc"       : "Aeonium_noframe.png",
          "itemTitle"          : "Aeonium",
          "artist"             : "Erin Deegan",
          "itemDescription"    : null,
          "itemPrice"          : "$22",
          "hasSize"            : true,
          "hasColor"           : false,
          "colorBlockId"       : false,
          "variantOptionsId"   : 0,
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "soldOut"            : false,
          "isArt"              : true,
          "variants" : {
            '8" x 8" Unframed'   : ["MIN-HF7-GNA", "$22"],
            '8" x 8" Framed'     : ["MIN-HF7-GNA", "$42"],
            '11" x 11" Unframed' : ["MIN-HF8-GNA", "$39"],
            '11" x 11" Framed'   : ["MIN-HF8-GNA", "$68"]
          },
          "allImages" : {
            1  : "Aeonium_blackframe.png",
            2  : "Aeonium_whiteframe.png",
            4  : "Aeonium_naturalfarmhouse.png",
            5  : "Aeonium_whitefarmhouse.png",
            6  : "Aeonium_distressedcharcoal.png",
            7  : "Aeonium_distressedwhite.png",
            8  : "Aeonium_distressedindigo.png",
            9  : "Aeonium_reclaimedbarn.png",
            10 : "Aeonium_antiquefiligree.png"
          }
        }
      ],

      variantColors: [

      ],

      variantOptions: [
        {
          'id'               : 1,
          'variantOptionsId' : 2,
          'mintedFrameColor' : 1,
          "isImage"          : true,
          "optionTitle"      : "Black Premium Wood",
          "optionType"       : 'Frame',
          'options'          : 'black-premium-wood.png',
        },
        {
          'id'               : 2,
          'variantOptionsId' : 3,
          'mintedFrameColor' : 2,
          "isImage"          : true,
          "optionTitle"      : "White Premium Wood",
          "optionType"       : 'Frame',
          'options'          : 'white-premium-wood.png',
        },
        {
          'id'               : 3,
          'variantOptionsId' : 4,
          'mintedFrameColor' : 3,
          "isImage"          : true,
          "optionTitle"      : "Natural Premium Wood",
          "optionType"       : 'Frame',
          'options'          : 'natural-premium-wood.png',
        },
        {
          'id'               : 4,
          'variantOptionsId' : 5,
          'mintedFrameColor' : 10,
          "isImage"          : true,
          "optionTitle"      : "Natural French Farmhouse",
          "optionType"       : 'Frame',
          'options'          : 'natural-french-farmhouse.png',
        },
        {
          'id'               : 5,
          'variantOptionsId' : 6,
          'mintedFrameColor' : 11,
          "isImage"          : true,
          "optionTitle"      : "Whitewashed French Farmhouse",
          "optionType"       : 'Frame',
          'options'          : 'whitewashed-french-farmhouse.png',
        },
        {
          'id'               : 6,
          'variantOptionsId' : 7,
          'mintedFrameColor' : 7,
          "isImage"          : true,
          "optionTitle"      : "Distressed Charcoal Stain",
          "optionType"       : 'Frame',
          'options'          : 'distressed-charcoal-stain.png',
        },
        {
          'id'               : 7,
          'variantOptionsId' : 8,
          'mintedFrameColor' : 8,
          "isImage"          : true,
          "optionTitle"      : "Distressed Cottage White",
          "optionType"       : 'Frame',
          'options'          : 'distressed-cottage-white.png',
        },
        {
          'id'               : 8,
          'variantOptionsId' : 9,
          'mintedFrameColor' : 9,
          "isImage"          : true,
          "optionTitle"      : "Distressed Indigo Stain",
          "optionType"       : 'Frame',
          'options'          : 'distressed-indigo-stain.png',
        },
        {
          'id'               : 9,
          'variantOptionsId' : 10,
          'mintedFrameColor' : 6,
          "isImage"          : true,
          "optionTitle"      : "Reclaimed Barn Wood",
          "optionType"       : 'Frame',
          'options'          : 'reclaimed-barn-wood.png',
        },
        {
          'id'               : 10,
          'variantOptionsId' : 11,
          'mintedFrameColor' : 13,
          "isImage"          : true,
          "optionTitle"      : "Antique Filigree",
          "optionType"       : 'Frame',
          'options'          : 'antique-filigree.png'
        }
      ],

      hotSpots: [
        {
          "id"                 : "1", // California
          "hotSpotId"          : "1",
          "index"              : "0",
          "startTime"          : "0.47",
          "endTime"            : "0.50",
          "hotSpotStartX"      : "650",
          "hotSpotStartY"      : "200",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "700",
          "hotSpotStartHeight" : "700"
        },
        {
          "id"                 : "1", // California
          "hotSpotId"          : "2",
          "index"              : "0",
          "startTime"          : "0.535",
          "endTime"            : "0.565",
          "hotSpotStartX"      : "500",
          "hotSpotStartY"      : "300",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "500",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "500"
        },
        {
          "id"                 : "5", // Palm Trees
          "hotSpotId"          : "3",
          "index"              : "0",
          "startTime"          : "0.51",
          "endTime"            : "0.565",
          "hotSpotStartX"      : "1200",
          "hotSpotStartY"      : "650",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "500",
          "hotSpotStartWidth"  : "300",
          "hotSpotStartHeight" : "300"
        },
        {
          "id"                 : "9", // Aenoium
          "hotSpotId"          : "4",
          "index"              : "0",
          "startTime"          : "0.51",
          "endTime"            : "0.565",
          "hotSpotStartX"      : "1250",
          "hotSpotStartY"      : "100",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "500",
          "hotSpotStartWidth"  : "400",
          "hotSpotStartHeight" : "400"
        },
        {
          "id"                 : "3", // Wonderful
          "hotSpotId"          : "5",
          "index"              : "0",
          "startTime"          : "0.568",
          "endTime"            : "0.606",
          "hotSpotStartX"      : "575",
          "hotSpotStartY"      : "200",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "700",
          "hotSpotStartHeight" : "700"
        },
        {
          "id"                 : "3", // Wonderful
          "hotSpotId"          : "6",
          "index"              : "0",
          "startTime"          : "0.613",
          "endTime"            : "0.695",
          "hotSpotStartX"      : "75",
          "hotSpotStartY"      : "100",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "675",
          "hotSpotStartHeight" : "700"
        },
        {
          "id"                 : "6", // Triangles
          "hotSpotId"          : "7",
          "index"              : "0",
          "startTime"          : "0.627",
          "endTime"            : "0.695",
          "hotSpotStartX"      : "1225",
          "hotSpotStartY"      : "175",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "400",
          "hotSpotStartHeight" : "500"
        },
        {
          "id"                 : "4", // Tapestry
          "hotSpotId"          : "8",
          "index"              : "0",
          "startTime"          : "0.65",
          "endTime"            : "0.695",
          "hotSpotStartX"      : "1315",
          "hotSpotStartY"      : "850",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "400",
          "hotSpotStartHeight" : "200"
        },
        {
          "id"                 : "7", // Deer #1
          "hotSpotId"          : "9",
          "index"              : "0",
          "startTime"          : "0.732",
          "endTime"            : "0.755",
          "hotSpotStartX"      : "210",
          "hotSpotStartY"      : "100",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "250",
          "hotSpotStartHeight" : "350"
        },
        {
          "id"                 : "7", // Deer #2
          "hotSpotId"          : "10",
          "index"              : "0",
          "startTime"          : "0.757",
          "endTime"            : "0.82",
          "hotSpotStartX"      : "900",
          "hotSpotStartY"      : "600",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "250",
          "hotSpotStartHeight" : "350"
        },
        {
          "id"                 : "8", // Birch
          "hotSpotId"          : "11",
          "index"              : "0",
          "startTime"          : "0.635",
          "endTime"            : "0.695",
          "hotSpotStartX"      : "810",
          "hotSpotStartY"      : "625",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "250",
          "hotSpotStartHeight" : "350"
        },
        {
          "id"                 : "2", // Magnifique
          "hotSpotId"          : "12",
          "index"              : "0",
          "startTime"          : "0.825",
          "endTime"            : "0.885",
          "hotSpotStartX"      : "1150",
          "hotSpotStartY"      : "400",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "250",
          "hotSpotStartHeight" : "350"
        },
        {
          "id"                 : "2", // Magnifique
          "hotSpotId"          : "13",
          "index"              : "0",
          "startTime"          : "0.90",
          "endTime"            : "0.93",
          "hotSpotStartX"      : "1000",
          "hotSpotStartY"      : "50",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "250",
          "hotSpotStartHeight" : "320"
        },
      ],

      cartItems:[]
    };
  });

