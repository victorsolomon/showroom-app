define([
  'underscore',
  'backbone'
], function (_, Backbone) {

    window.playerConfig = {

      gaKey : 'UA-55667188-1',

      mp4_video_src_med  : "revolverDemo1.mp4",
      webm_video_src_med : 'revolverDemo.webm',

      loaderStyle: 'image',

      baseVideoPath        : "static/movies/",
      baseProductImagePath : "static/images/productImages/revolver/",

      checkoutUrl          : "http://www.revolveronline.com/cart/",
      checkoutCartAddPath  : "http://www.revolveronline.com/cart/add",
      checkoutCartLocation : "http://www.revolveronline.com/cart",

      checkoutType      : "shopify",
      shareUrl          : "http://www.helloshowroom.co/revolver/index.html",
      shareEmbedBaseUrl : "http://www.helloshowroom.co/revolver/index.html?config=revolverConfig",
      splashImage       : 'static/images/posterFrames/revolver-overlay.gif',

      recommended: [
        {
          "id"            : 1,
          "largeItemSrc1" : "Shot_1_Man_1.jpg"
        },
        {
          "id"            : 4,
          "largeItemSrc1" : "Shot_1_Woman_1.jpg"
        },
        {
          "id"            : 7,
          "largeItemSrc1" : "Shot_2_Man_1.jpg"
        },
        {
          "id"            : 10,
          "largeItemSrc1" : "Shot_2_Woman_1.jpg"
        },
        {
          "id"            : 13,
          "largeItemSrc1" : "Shot_3_Centerman_1_1.jpg"
        },
        {
          "id"            : 16,
          "largeItemSrc1" : "Shot_3_Centerman_2_1.jpg"
        },
        {
          "id"            : 19,
          "largeItemSrc1" : "Shot_3_RightMan_1.jpg"
        },
        {
          "id"            : 22,
          "largeItemSrc1" : "Shot_3_Woman_1.jpg"
        },
        {
          "id"            : 25,
          "largeItemSrc1" : "Shot_5_Man_1.jpg"
        }
      ],

      itemData: [
        {
          "id"                 : "1",
          "index"              : "0",
          "largeItemSrc1"      : "Shot_1_Man_1.jpg",
          "itemImageSrc"       : "Shot_1_Man_1.jpg",
          "itemTitle"          : "Won Hundred Knit",
          "itemDescription"    : "Masculine waffle knit with a scoop neck and fine tailoring. A perfect layer over a slim collared shirt.",
          "itemPrice"          : "$165",
          "hasSize"            : true,
          "sizes"              : [ 36, 38, 40, 42 ],
          "allImages"          : ["Shot_1_Man_3.jpg", "Shot_1_Man_2.jpg", "Shot_1_Man_1.jpg"],
          "variants"           : {
            small  : ['858482529'],
            medium : ['858482533'],
            large  : ['858482537']
          }
        },
        {
          "id"                 : "2",
          "index"              : "1",
          "largeItemSrc1"      : "Shot_1_Man_2.jpg",
          "itemImageSrc"       : "Shot_1_Man_2.jpg",
          "itemTitle"          : "Won Hundred Knit",
          "itemDescription"    : "Masculine waffle knit with a scoop neck and fine tailoring. A perfect layer over a slim collared shirt.",
          "itemPrice"          : "$165",
          "hasSize"            : true,
          "sizes"              : [ 36, 38, 40, 42 ]
        },
        {
          "id"                 : "3",
          "index"              : "2",
          "largeItemSrc1"      : "Shot_1_Man_3.jpg",
          "itemImageSrc"       : "Shot_1_Man_3.jpg",
          "itemTitle"          : "Won Hundred Knit",
          "itemDescription"    : "Masculine waffle knit with a scoop neck and fine tailoring. A perfect layer over a slim collared shirt.",
          "itemPrice"          : "$165",
          "hasSize"            : true,
          "sizes"              : [ 36, 38, 40, 42 ]
        },
        {
          "id"                 : "4",
          "index"              : "3",
          "largeItemSrc1"      : "Shot_1_Woman_1.jpg",
          "itemImageSrc"       : "Shot_1_Woman_1.jpg",
          "itemTitle"          : "First Rite Roll Tunic",
          "itemDescription"    : "The one size roll tunic was cut with an easy, oversize fit to be comfortable, versatile, and perfect for year round wear. It is cut from 100% cotton gauze with a slightly crinkled texture which has been washed and dried. The interior is finished with french seams for a clean roll at the sleeve.",
          "itemPrice"          : "$140",
          "hasSize"            : false,
          "soldOut"            : true,
          "sizes"              : [],
          "allImages"          : ["Shot_1_Woman_3.jpg", "Shot_1_Woman_2.jpg", "Shot_1_Woman_1.jpg"],
          "variants"           : {
            oneSize: ['894150389', 'white']
          }
        },
        {
          "id"                 : "5",
          "index"              : "4",
          "largeItemSrc1"      : "Shot_1_Woman_2.jpg",
          "itemImageSrc"       : "Shot_1_Woman_2.jpg",
          "itemTitle"          : "First Rite Roll Tunic",
          "itemDescription"    : "The one size roll tunic was cut with an easy, oversize fit to be comfortable, versatile, and perfect for year round wear. It is cut from 100% cotton gauze with a slightly crinkled texture which has been washed and dried. The interior is finished with french seams for a clean roll at the sleeve.",
          "itemPrice"          : "$140",
          "hasSize"            : false,
          "sizes"              : []
        },
        {
          "id"                 : "6",
          "index"              : "5",
          "largeItemSrc1"      : "Shot_1_Woman_3.jpg",
          "itemImageSrc"       : "Shot_1_Woman_3.jpg",
          "itemTitle"          : "First Rite Roll Tunic",
          "itemDescription"    : "The one size roll tunic was cut with an easy, oversize fit to be comfortable, versatile, and perfect for year round wear. It is cut from 100% cotton gauze with a slightly crinkled texture which has been washed and dried. The interior is finished with french seams for a clean roll at the sleeve.",
          "itemPrice"          : "$140",
          "hasSize"            : false,
          "sizes"              : []
        },
        {
          "id"                 : "7",
          "index"              : "6",
          "largeItemSrc1"      : "Shot_2_Man_1.jpg",
          "itemImageSrc"       : "Shot_2_Man_1.jpg",
          "itemTitle"          : "Won Hundred Leroy Winter",
          "itemDescription"    : "Our favorite wooly bomber jacket by Won Hundred. Zip front closure. Side pockets. Ribbed collar, cuffs, and hem black contrast elbow patch detail. 78% virgin wool, 22% polyester.",
          "itemPrice"          : "$350",
          "hasSize"            : true,
          "sizes"              : [ 36, 38 ],
          "allImages"          : ["Shot_2_Man_3.jpg", "Shot_2_Man_2.jpg", "Shot_2_Man_1.jpg"],
          "variants"           : {
            small  : ['894202365'],
            medium : ['894202369']
          }
        },
        {
          "id"                 : "8",
          "index"              : "7",
          "largeItemSrc1"      : "Shot_2_Man_2.jpg",
          "itemImageSrc"       : "Shot_2_Man_2.jpg",
          "itemTitle"          : "Won Hundred Leroy Winter",
          "itemDescription"    : "Our favorite wooly bomber jacket by Won Hundred. Zip front closure. Side pockets. Ribbed collar, cuffs, and hem black contrast elbow patch detail. 78% virgin wool, 22% polyester.",
          "itemPrice"          : "$350",
          "hasSize"            : true,
          "sizes"              : [ 36, 38 ]
        },
       {
          "id"                 : "9",
          "index"              : "8",
          "largeItemSrc1"      : "Shot_2_Man_3.jpg",
          "itemImageSrc"       : "Shot_2_Man_3.jpg",
          "itemTitle"          : "Won Hundred Leroy Winter",
          "itemDescription"    : "Our favorite wooly bomber jacket by Won Hundred. Zip front closure. Side pockets. Ribbed collar, cuffs, and hem black contrast elbow patch detail. 78% virgin wool, 22% polyester.",
          "itemPrice"          : "$350",
          "hasSize"            : true,
          "sizes"              : [ 36, 38 ],
        },
        {
          "id"                 : "10",
          "index"              : "9",
          "largeItemSrc1"      : "Shot_2_Woman_1.jpg",
          "itemImageSrc"       : "Shot_2_Woman_1.jpg",
          "itemTitle"          : "Kaarem Cat Lan Tops",
          "itemDescription"    : "Feather light sleeveless blouse with a loose, easy fit. Features a delicate silk fabric refined scoop collar. Rounded neckline. Asymmetrical bottom hem. Clean hem finishing. 100% silk.",
          "itemPrice"          : "$94",
          "hasSize"            : true,
          "soldOut"            : true,
          "sizes"              : [ 36, 38, 40, 42 ],
          "allImages"          : ["Shot_2_Woman_3.jpg", "Shot_2_Woman_2.jpg", "Shot_2_Woman_1.jpg"]
        },
        {
          "id"                 : "11",
          "index"              : "10",
          "largeItemSrc1"      : "Shot_2_Woman_2.jpg",
          "itemImageSrc"       : "Shot_2_Woman_2.jpg",
          "itemTitle"          : "Kaarem Cat Lan Tops",
          "itemDescription"    : "Feather light sleeveless blouse with a loose, easy fit. Features a delicate silk fabric refined scoop collar. Rounded neckline. Asymmetrical bottom hem. Clean hem finishing. 100% silk.",
          "itemPrice"          : "$94",
          "hasSize"            : true,
          "sizes"              : [ 36, 38, 40, 42 ]
        },
        {
          "id"                 : "12",
          "index"              : "11",
          "largeItemSrc1"      : "Shot_2_Woman_3.jpg",
          "itemImageSrc"       : "Shot_2_Woman_3.jpg",
          "itemTitle"          : "Kaarem Cat Lan Tops",
          "itemDescription"    : "Feather light sleeveless blouse with a loose, easy fit. Features a delicate silk fabric refined scoop collar. Rounded neckline. Asymmetrical bottom hem. Clean hem finishing. 100% silk.",
          "itemPrice"          : "$94",
          "hasSize"            : true,
          "sizes"              : [ 36, 38, 40, 42 ]
        },
        {
          "id"                 : "13",
          "index"              : "12",
          "largeItemSrc1"      : "Shot_3_Centerman_1_1.jpg",
          "itemImageSrc"       : "Shot_3_Centerman_1_1.jpg",
          "itemTitle"          : "Denham Advisor Parka",
          "itemDescription"    : "Soft hand feel stretch fabric garment dyed to achieve a perfect color saturation enriched with a soft brush effect. Full removable hood. Side flap pockets. Single vertical chest pocket. Hidden zip snap closure down the front.",
          "itemPrice"          : "$199",
          "hasSize"            : true,
          "sizes"              : [ 36, 38, 40, 42 ],
          "allImages"          : ["Shot_3_Centerman_1_3.jpg", "Shot_3_Centerman_1_2.jpg", "Shot_3_Centerman_1_1.jpg"],
          "variants"           : {
            medium : ['542750845'],
            large  : ['542750849']
          }
        },
        {
          "id"                 : "14",
          "index"              : "13",
          "largeItemSrc1"      : "Shot_3_Centerman_1_2.jpg",
          "itemImageSrc"       : "Shot_3_Centerman_1_2.jpg",
          "itemTitle"          : "Denham Advisor Parka",
          "itemDescription"    : "Soft hand feel stretch fabric garment dyed to achieve a perfect color saturation enriched with a soft brush effect. Full removable hood. Side flap pockets. Single vertical chest pocket. Hidden zip snap closure down the front.",
          "itemPrice"          : "$199",
          "hasSize"            : true,
          "sizes"              : [ 36, 38, 40, 42 ]
        },
        {
          "id"                 : "15",
          "index"              : "14",
          "largeItemSrc1"      : "Shot_3_Centerman_1_3.jpg",
          "itemImageSrc"       : "Shot_3_Centerman_1_3.jpg",
          "itemTitle"          : "Denham Advisor Parka",
          "itemDescription"    : "Soft hand feel stretch fabric garment dyed to achieve a perfect color saturation enriched with a soft brush effect. Full removable hood. Side flap pockets. Single vertical chest pocket. Hidden zip snap closure down the front.",
          "itemPrice"          : "$199",
          "hasSize"            : true,
          "sizes"              : [ 36, 38, 40, 42 ]
        },
        {
          "id"                 : "16",
          "index"              : "15",
          "largeItemSrc1"      : "Shot_3_Centerman_2_1.jpg",
          "itemImageSrc"       : "Shot_3_Centerman_2_1.jpg",
          "itemTitle"          : "Denham Simpler SCC",
          "itemDescription"    : "Denham is a label built on experimentation and resourceful innovation. This shirt is a versatile dress shirt with modernized military detailing. Stitched dart detailing to the chest and the back. A discrete leather Denham Logo tag on the seam. Full branded button fastening.",
          "itemPrice"          : "$169",
          "hasSize"            : true,
          "sizes"              : [ 36, 38, 40, 42 ],
          "allImages"          : ["Shot_3_Centerman_2_3.jpg", "Shot_3_Centerman_2_2.jpg", "Shot_3_Centerman_2_1.jpg"],
          "variants"           : {
            large  : ['701830641']
          }
        },
        {
          "id"                 : "17",
          "index"              : "16",
          "largeItemSrc1"      : "Shot_3_Centerman_2_2.jpg",
          "itemImageSrc"       : "Shot_3_Centerman_2_2.jpg",
          "itemTitle"          : "Denham Simpler SCC",
          "itemDescription"    : "Denham is a label built on experimentation and resourceful innovation. This shirt is a versatile dress shirt with modernized military detailing. Stitched dart detailing to the chest and the back. A discrete leather Denham Logo tag on the seam. Full branded button fastening.",
          "itemPrice"          : "$169",
          "hasSize"            : true,
          "sizes"              : [ 36, 38, 40, 42 ]
        },
        {
          "id"                 : "18",
          "index"              : "17",
          "largeItemSrc1"      : "Shot_3_Centerman_2_3.jpg",
          "itemImageSrc"       : "Shot_3_Centerman_2_3.jpg",
          "itemTitle"          : "Denham Simpler SCC",
          "itemDescription"    : "Denham is a label built on experimentation and resourceful innovation. This shirt is a versatile dress shirt with modernized military detailing. Stitched dart detailing to the chest and the back. A discrete leather Denham Logo tag on the seam. Full branded button fastening.",
          "itemPrice"          : "$169",
          "hasSize"            : true,
          "sizes"              : [ 36, 38, 40, 42 ]
        },
        {
          "id"                 : "19",
          "index"              : "18",
          "largeItemSrc1"      : "Shot_3_RightMan_1.jpg",
          "itemImageSrc"       : "Shot_3_RightMan_1.jpg",
          "itemTitle"          : "Denham Tailor - SG Jacket",
          "itemDescription"    : "The new SG is a 2-button sport coat with unique radial seam construction combining an artisan feel with a subtly anatomical silhouette. Tailored in stretch cotton gaberdine and garment-dyed, the touch and tone are natural and the movement and comfort are modern. Spread collar. 2 button closure. Side slash pockets.",
          "itemPrice"          : "$275",
          "hasSize"            : true,
          "sizes"              : [ 36, 38, 40, 42 ],
          "allImages"          : ["Shot_3_RightMan_3.jpg", "Shot_3_RightMan_2.jpg", "Shot_3_RightMan_1.jpg"],
          "variants"           : {
            small  : ['542749133'],
            large  : ['542749141']
          }
        },
        {
          "id"                 : "20",
          "index"              : "19",
          "largeItemSrc1"      : "Shot_3_RightMan_2.jpg",
          "itemImageSrc"       : "Shot_3_RightMan_2.jpg",
          "itemTitle"          : "Denham Tailor - SG Jacket",
          "itemDescription"    : "The new SG is a 2-button sport coat with unique radial seam construction combining an artisan feel with a subtly anatomical silhouette. Tailored in stretch cotton gaberdine and garment-dyed, the touch and tone are natural and the movement and comfort are modern. Spread collar. 2 button closure. Side slash pockets.",
          "itemPrice"          : "$275",
          "hasSize"            : true,
          "sizes"              : [ 36, 38, 40, 42 ]
        },
        {
          "id"                 : "21",
          "index"              : "20",
          "largeItemSrc1"      : "Shot_3_RightMan_3.jpg",
          "itemImageSrc"       : "Shot_3_RightMan_3.jpg",
          "itemTitle"          : "Denham Tailor - SG Jacket",
          "itemDescription"    : "The new SG is a 2-button sport coat with unique radial seam construction combining an artisan feel with a subtly anatomical silhouette. Tailored in stretch cotton gaberdine and garment-dyed, the touch and tone are natural and the movement and comfort are modern. Spread collar. 2 button closure. Side slash pockets.",
          "itemPrice"          : "$275",
          "hasSize"            : true,
          "sizes"              : [ 36, 38, 40, 42 ]
        },
        {
          "id"                 : "22",
          "index"              : "21",
          "largeItemSrc1"      : "Shot_3_Woman_1.jpg",
          "itemImageSrc"       : "Shot_3_Woman_1.jpg",
          "itemTitle"          : "Samsoe Waddi SS Shirt",
          "itemDescription"    : "Waddi's baby sister shirt in a summer sleeveless style. Lovely loose fitting silk pullover blouse in a rich navy. Monk collar and clean neckline. Invisible button placket which continues into a pleat. Curved hem. Button barrel cuffs. 100% silk.",
          "itemPrice"          : "$150",
          "hasSize"            : true,
          "soldOut"            : true,
          "sizes"              : [ 36, 38, 40, 42 ],
          "allImages"          : ["Shot_3_Woman_3.jpg", "Shot_3_Woman_2.jpg", "Shot_3_Woman_1.jpg"]
        },
        {
          "id"                 : "23",
          "index"              : "22",
          "largeItemSrc1"      : "Shot_3_Woman_2.jpg",
          "itemImageSrc"       : "Shot_3_Woman_2.jpg",
          "itemTitle"          : "Samsoe Waddi SS Shirt",
          "itemDescription"    : "Waddi's baby sister shirt in a summer sleeveless style. Lovely loose fitting silk pullover blouse in a rich navy. Monk collar and clean neckline. Invisible button placket which continues into a pleat. Curved hem. Button barrel cuffs. 100% silk.",
          "itemPrice"          : "$150",
          "hasSize"            : true,
          "sizes"              : [ 36, 38, 40, 42 ]
        },
        {
          "id"                 : "24",
          "index"              : "23",
          "largeItemSrc1"      : "Shot_3_Woman_3.jpg",
          "itemImageSrc"       : "Shot_3_Woman_3.jpg",
          "itemTitle"          : "Samsoe Waddi SS Shirt",
          "itemDescription"    : "Waddi's baby sister shirt in a summer sleeveless style. Lovely loose fitting silk pullover blouse in a rich navy. Monk collar and clean neckline. Invisible button placket which continues into a pleat. Curved hem. Button barrel cuffs. 100% silk.",
          "itemPrice"          : "$150",
          "hasSize"            : true,
          "sizes"              : [ 36, 38, 40, 42 ]
        },
        {
          "id"                 : "25",
          "index"              : "24",
          "largeItemSrc1"      : "Shot_5_Man_1.jpg",
          "itemImageSrc"       : "Shot_5_Man_1.jpg",
          "itemTitle"          : "Zanerobe Seven Fit LS Shirt",
          "itemDescription"    : "Streamlined shirt tailored in a classic long-sleeve, button-up style. Featured in an acid black denim wash. Button down collar. Contrast button closure down the placket and cuffs. Single patch pocket with button detail on the chest. 100% cotton.",
          "itemPrice"          : "$119",
          "hasSize"            : true,
          "sizes"              : [ 36, 38, 40, 42 ],
          "allImages"          : ["Shot_5_Man_3.jpg", "Shot_5_Man_2.jpg", "Shot_5_Man_1.jpg"],
          "variants"           : {
            small  : ['894251473'],
            medium : ['894251477'],
            large  : ['894251481']
          }
        },
        {
          "id"                 : "26",
          "index"              : "25",
          "largeItemSrc1"      : "Shot_5_Man_2.jpg",
          "itemImageSrc"       : "Shot_5_Man_2.jpg",
          "itemTitle"          : "Zanerobe Seven Fit LS Shirt",
          "itemDescription"    : "Streamlined shirt tailored in a classic long-sleeve, button-up style. Featured in an acid black denim wash. Button down collar. Contrast button closure down the placket and cuffs. Single patch pocket with button detail on the chest. 100% cotton.",
          "itemPrice"          : "$119",
          "hasSize"            : true,
          "sizes"              : [ 36, 38, 40, 42 ]
        },
        {
          "id"                 : "27",
          "index"              : "26",
          "largeItemSrc1"      : "Shot_5_Man_3.jpg",
          "itemImageSrc"       : "Shot_5_Man_3.jpg",
          "itemTitle"          : "Zanerobe Seven Fit LS Shirt",
          "itemDescription"    : "Streamlined shirt tailored in a classic long-sleeve, button-up style. Featured in an acid black denim wash. Button down collar. Contrast button closure down the placket and cuffs. Single patch pocket with button detail on the chest. 100% cotton.",
          "itemPrice"          : "$119",
          "hasSize"            : true,
          "sizes"              : [ 36, 38, 40, 42 ]
        },
        {
          "id"                 : "28",
          "index"              : "27",
          "largeItemSrc1"      : "diamond_ring_1.jpg",
          "itemImageSrc"       : "diamond_ring_1.jpg",
          "itemTitle"          : "Alexes Bowyer Diamond Top Ring",
          "itemDescription"    : "Hand carved and cast ring in sterling silver. Ring features an open design and is somewhat adjustable in size.",
          "itemPrice"          : "$128",
          "hasSize"            : false,
          "sizes"              : [],
          "allImages"          : ['diamond_ring_3.jpg', 'diamond_ring_2.jpg', 'diamond_ring_1.jpg']
        },
        {
          "id"                 : "29",
          "index"              : "28",
          "largeItemSrc1"      : "diamond_ring_2.jpg",
          "itemImageSrc"       : "diamond_ring_2.jpg",
          "itemTitle"          : "Alexes Bowyer Diamond Top Ring",
          "itemDescription"    : "Hand carved and cast ring in sterling silver. Ring features an open design and is somewhat adjustable in size.",
          "itemPrice"          : "$128",
          "hasSize"            : false,
          "sizes"              : []
        },
        {
          "id"                 : "30",
          "index"              : "29",
          "largeItemSrc1"      : "diamond_ring_3.jpg",
          "itemImageSrc"       : "diamond_ring_3.jpg",
          "itemTitle"          : "Alexes Bowyer Diamond Top Ring",
          "itemDescription"    : "Hand carved and cast ring in sterling silver. Ring features an open design and is somewhat adjustable in size.",
          "itemPrice"          : "$128",
          "hasSize"            : false,
          "sizes"              : []
        },
        {
          "id"                 : "31",
          "index"              : "30",
          "largeItemSrc1"      : "selene_ring_1.jpg",
          "itemImageSrc"       : "selene_ring_1.jpg",
          "itemTitle"          : "Alexes Bowyer Selene Ring",
          "itemDescription"    : "Sleek twisted barbell design. Polished to a mirror finish. Hand sculpted and cast. Each ring is twisted into shape by hand. Ring size is somewhat adjustable.",
          "itemPrice"          : "$88",
          "hasSize"            : false,
          "sizes"              : [],
          "allImages"          : ['selene_ring_2.jpg', 'selene_ring_1.jpg']
        },
        {
          "id"                 : "32",
          "index"              : "31",
          "largeItemSrc1"      : "selene_ring_2.jpg",
          "itemImageSrc"       : "selene_ring_2.jpg",
          "itemTitle"          : "Alexes Bowyer Selene Ring",
          "itemDescription"    : "Sleek twisted barbell design. Polished to a mirror finish. Hand sculpted and cast. Each ring is twisted into shape by hand. Ring size is somewhat adjustable.",
          "itemPrice"          : "$88",
          "hasSize"            : false,
          "sizes"              : []
        },
        {
          "id"                 : "33",
          "index"              : "32",
          "largeItemSrc1"      : "seashell_glasses_1.jpg",
          "itemImageSrc"       : "seashell_glasses_1.jpg",
          "itemTitle"          : "R.T.Co Sparrow Seashell",
          "itemDescription"    : "Optics are anti-scratch polymere lenses provided by Carl Zeiss Vision Sunlens®, offering 100% UV protection. All components of R.T.CO sunglasses are produced and assembled in Italy.",
          "itemPrice"          : "$195",
          "hasSize"            : false,
          "sizes"              : [],
          "allImages"          : ['seashell_glasses_2.jpg', 'seashell_glasses_1.jpg']
        },
        {
          "id"                 : "34",
          "index"              : "33",
          "largeItemSrc1"      : "seashell_glasses_2.jpg",
          "itemImageSrc"       : "seashell_glasses_2.jpg",
          "itemTitle"          : "R.T.Co Sparrow Seashell",
          "itemDescription"    : "Optics are anti-scratch polymere lenses provided by Carl Zeiss Vision Sunlens®, offering 100% UV protection. All components of R.T.CO sunglasses are produced and assembled in Italy.",
          "itemPrice"          : "$195",
          "hasSize"            : false,
          "sizes"              : []
        },
        {
          "id"                 : "35",
          "index"              : "34",
          "largeItemSrc1"      : "seashell_glasses_3.jpg",
          "itemImageSrc"       : "seashell_glasses_3.jpg",
          "itemTitle"          : "R.T.Co Sparrow Seashell",
          "itemDescription"    : "Optics are anti-scratch polymere lenses provided by Carl Zeiss Vision Sunlens®, offering 100% UV protection. All components of R.T.CO sunglasses are produced and assembled in Italy.",
          "itemPrice"          : "$195",
          "hasSize"            : false,
          "sizes"              : []
        },
        {
          "id"                 : "36",
          "index"              : "35",
          "largeItemSrc1"      : "blazer_1.jpg",
          "itemImageSrc"       : "blazer_1.jpg",
          "itemTitle"          : "Shades of Grey Knit Blazer",
          "itemDescription"    : "Shades of Grey Knit Blazer",
          "itemPrice"          : "$179",
          "hasSize"            : true,
          "sizes"              : [ 36, 38, 40, 42 ],
          "allImages"          : ['blazer_3.jpg', 'blazer_2.jpg', 'blazer_1.jpg'],
          "variants"           : {
            small: ['609719081'],
            large: ['609719089']
          }
        },
        {
          "id"                 : "37",
          "index"              : "36",
          "largeItemSrc1"      : "blazer_2.jpg",
          "itemImageSrc"       : "blazer_2.jpg",
          "itemTitle"          : "Shades of Grey Knit Blazer",
          "itemDescription"    : "Shades of Grey Knit Blazer",
          "itemPrice"          : "$179",
          "hasSize"            : true,
          "sizes"              : [ 36, 38, 40, 42 ]
        },
        {
          "id"                 : "38",
          "index"              : "37",
          "largeItemSrc1"      : "blazer_3.jpg",
          "itemImageSrc"       : "blazer_3.jpg",
          "itemTitle"          : "Shades of Grey Knit Blazer",
          "itemDescription"    : "Shades of Grey Knit Blazer",
          "itemPrice"          : "$179",
          "hasSize"            : true,
          "sizes"              : [ 36, 38, 40, 42 ]
        }
      ],
      hotSpots: [
        {
          "id"                 : "1", //shot 1 man
          "hotSpotId"          : "1",
          "index"              : "0",
          "startTime"          : "0.00",
          "endTime"            : "0.09",
          "hotSpotStartX"      : "100",
          "hotSpotStartY"      : "545",
          "hotSpotStartWidth"  : "600",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "4", // shot 1 woman
          "hotSpotId"          : "2",
          "index"              : "0",
          "startTime"          : "0.00",
          "endTime"            : "0.09",
          "hotSpotStartX"      : "1200",
          "hotSpotStartY"      : "900",
          "hotSpotStartWidth"  : "550",
          "hotSpotStartHeight" : "200"
        },
        {
          "id"                 : "7", // shot 2 man
          "hotSpotId"          : "3",
          "index"              : "0",
          "startTime"          : "0.095",
          "endTime"            : "0.20",
          "hotSpotStartX"      : "100",
          "hotSpotStartY"      : "545",
          "hotSpotStartWidth"  : "600",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "10", // shot 2 woman
          "hotSpotId"          : "4",
          "index"              : "0",
          "startTime"          : "0.095",
          "endTime"            : "0.20",
          "hotSpotStartX"      : "1200",
          "hotSpotStartY"      : "400",
          "hotSpotStartWidth"  : "600",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "13", // shot 3 centerman jacket
          "hotSpotId"          : "5",
          "index"              : "0",
          "startTime"          : "0.21",
          "endTime"            : "0.26",
          "hotSpotStartX"      : "900",
          "hotSpotStartY"      : "600",
          "hotSpotStartWidth"  : "300",
          "hotSpotStartHeight" : "500"
        },
        {
          "id"                 : "16", // shot 3 centerman shirt
          "hotSpotId"          : "6",
          "index"              : "0",
          "startTime"          : "0.21",
          "endTime"            : "0.26",
          "hotSpotStartX"      : "700",
          "hotSpotStartY"      : "545",
          "hotSpotStartWidth"  : "200",
          "hotSpotStartHeight" : "500"
        },
        {
          "id"                 : "19", //shot 3 right man
          "hotSpotId"          : "7",
          "index"              : "0",
          "startTime"          : "0.21",
          "endTime"            : "0.26",
          "hotSpotStartX"      : "1300",
          "hotSpotStartY"      : "400",
          "hotSpotStartWidth"  : "300",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "22", // shot 3 left woman
          "hotSpotId"          : "8",
          "index"              : "0",
          "startTime"          : "0.21",
          "endTime"            : "0.26",
          "hotSpotStartX"      : "100",
          "hotSpotStartY"      : "545",
          "hotSpotStartWidth"  : "300",
          "hotSpotStartHeight" : "500"
        },
        {
          "id"                 : "13", // shot 4 centerman jacket
          "hotSpotId"          : "9",
          "index"              : "0",
          "startTime"          : "0.26",
          "endTime"            : "0.31",
          "hotSpotStartX"      : "1100",
          "hotSpotStartY"      : "700",
          "hotSpotStartWidth"  : "300",
          "hotSpotStartHeight" : "400"
        },
        {
          "id"                 : "16", // shot 4 centerman shirt
          "hotSpotId"          : "10",
          "index"              : "0",
          "startTime"          : "0.26",
          "endTime"            : "0.31",
          "hotSpotStartX"      : "500",
          "hotSpotStartY"      : "900",
          "hotSpotStartWidth"  : "300",
          "hotSpotStartHeight" : "200"
        },
        {
          "id"                 : "25", // shot 5 man 1
          "hotSpotId"          : "11",
          "index"              : "0",
          "startTime"          : "0.32",
          "endTime"            : "0.37",
          "hotSpotStartX"      : "0",
          "hotSpotStartY"      : "900",
          "hotSpotStartWidth"  : "1920",
          "hotSpotStartHeight" : "175"
        },
        {
          "id"                 : "25", // shot 6 man 1 (shot 5 image)
          "hotSpotId"          : "12",
          "index"              : "0",
          "startTime"          : "0.375",
          "endTime"            : "0.43",
          "hotSpotStartX"      : "650",
          "hotSpotStartY"      : "450",
          "hotSpotStartWidth"  : "600",
          "hotSpotStartHeight" : "650"
        },
        {
          "id"                 : "13", // (same as shot 3) shot 7 centerman jacket right side
          "hotSpotId"          : "13",
          "index"              : "0",
          "startTime"          : "0.44",
          "endTime"            : "0.485",
          "hotSpotStartX"      : "1000",
          "hotSpotStartY"      : "600",
          "hotSpotStartWidth"  : "50",
          "hotSpotStartHeight" : "500"
        },
        {
          "id"                 : "13", // (same as shot 3) shot 7 centerman jacket left side
          "hotSpotId"          : "14",
          "index"              : "0",
          "startTime"          : "0.44",
          "endTime"            : "0.485",
          "hotSpotStartX"      : "800",
          "hotSpotStartY"      : "600",
          "hotSpotStartWidth"  : "50",
          "hotSpotStartHeight" : "500"
        },
        {
          "id"                 : "16", // (same as shot 3) shot 7 centerman shirt
          "hotSpotId"          : "15",
          "index"              : "0",
          "startTime"          : "0.44",
          "endTime"            : "0.485",
          "hotSpotStartX"      : "900",
          "hotSpotStartY"      : "545",
          "hotSpotStartWidth"  : "50",
          "hotSpotStartHeight" : "500"
        },
        {
          "id"                 : "19", //(same as shot 3) shot 7 right man
          "hotSpotId"          : "16",
          "index"              : "0",
          "startTime"          : "0.44",
          "endTime"            : "0.485",
          "hotSpotStartX"      : "1200",
          "hotSpotStartY"      : "400",
          "hotSpotStartWidth"  : "250",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "22", // (same as shot 3) shot 7 left woman
          "hotSpotId"          : "17",
          "index"              : "0",
          "startTime"          : "0.44",
          "endTime"            : "0.485",
          "hotSpotStartX"      : "500",
          "hotSpotStartY"      : "500",
          "hotSpotStartWidth"  : "245",
          "hotSpotStartHeight" : "700"
        },
        {
          "id"                 : "7", // shot 9 man (same as shot 2)
          "hotSpotId"          : "18",
          "index"              : "0",
          "startTime"          : "0.54",
          "endTime"            : "0.595",
          "hotSpotStartX"      : "100",
          "hotSpotStartY"      : "545",
          "hotSpotStartWidth"  : "600",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "10", // shot 9 woman (same as shot 2)
          "hotSpotId"          : "19",
          "index"              : "0",
          "startTime"          : "0.54",
          "endTime"            : "0.595",
          "hotSpotStartX"      : "1200",
          "hotSpotStartY"      : "400",
          "hotSpotStartWidth"  : "600",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "13", // shot 11 centerman jacket (same as shot 4)
          "hotSpotId"          : "20",
          "index"              : "0",
          "startTime"          : "0.655",
          "endTime"            : "0.71",
          "hotSpotStartX"      : "1300",
          "hotSpotStartY"      : "700",
          "hotSpotStartWidth"  : "300",
          "hotSpotStartHeight" : "400"
        },
        {
          "id"                 : "16", // shot 11 centerman shirt (same as shot 4)
          "hotSpotId"          : "21",
          "index"              : "0",
          "startTime"          : "0.655",
          "endTime"            : "0.71",
          "hotSpotStartX"      : "850",
          "hotSpotStartY"      : "900",
          "hotSpotStartWidth"  : "200",
          "hotSpotStartHeight" : "200"
        },
        {
          "id"                 : "1", //shot 12 man
          "hotSpotId"          : "22",
          "index"              : "0",
          "startTime"          : "0.715",
          "endTime"            : "0.765",
          "hotSpotStartX"      : "1200",
          "hotSpotStartY"      : "545",
          "hotSpotStartWidth"  : "600",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "4", // shot 12 woman
          "hotSpotId"          : "23",
          "index"              : "0",
          "startTime"          : "0.715",
          "endTime"            : "0.765",
          "hotSpotStartX"      : "550",
          "hotSpotStartY"      : "900",
          "hotSpotStartWidth"  : "550",
          "hotSpotStartHeight" : "200"
        },
        {
          "id"                 : "1", //shot 14 man
          "hotSpotId"          : "24",
          "index"              : "0",
          "startTime"          : "0.82",
          "endTime"            : "0.875",
          "hotSpotStartX"      : "1200",
          "hotSpotStartY"      : "545",
          "hotSpotStartWidth"  : "600",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "4", // shot 14 woman
          "hotSpotId"          : "25",
          "index"              : "0",
          "startTime"          : "0.82",
          "endTime"            : "0.875",
          "hotSpotStartX"      : "100",
          "hotSpotStartY"      : "575",
          "hotSpotStartWidth"  : "550",
          "hotSpotStartHeight" : "500"
        },
        {
          "id"                 : "1", //shot 15 man
          "hotSpotId"          : "26",
          "index"              : "0",
          "startTime"          : "0.88",
          "endTime"            : "0.96",
          "hotSpotStartX"      : "1200",
          "hotSpotStartY"      : "545",
          "hotSpotStartWidth"  : "600",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "4", // shot 15 woman
          "hotSpotId"          : "27",
          "index"              : "0",
          "startTime"          : "0.88",
          "endTime"            : "0.96",
          "hotSpotStartX"      : "550",
          "hotSpotStartY"      : "800",
          "hotSpotStartWidth"  : "550",
          "hotSpotStartHeight" : "350"
        },
        {
          "id"                 : "28", // diamond ring
          "hotSpotId"          : "28",
          "index"              : "0",
          "startTime"          : "0.765",
          "endTime"            : "0.82",
          "hotSpotStartX"      : "850",
          "hotSpotStartY"      : "500",
          "hotSpotStartWidth"  : "550",
          "hotSpotStartHeight" : "350"
        },
        {
          "id"                 : "31", // selene ring
          "hotSpotId"          : "29",
          "index"              : "0",
          "startTime"          : "0.69",
          "endTime"            : "0.71",
          "hotSpotStartX"      : "425",
          "hotSpotStartY"      : "800",
          "hotSpotStartWidth"  : "200",
          "hotSpotStartHeight" : "300"
        },
        {
          "id"                 : "31", // selene ring
          "hotSpotId"          : "30",
          "index"              : "0",
          "startTime"          : "0.21",
          "endTime"            : "0.26",
          "hotSpotStartX"      : "425",
          "hotSpotStartY"      : "510",
          "hotSpotStartWidth"  : "100",
          "hotSpotStartHeight" : "100"
        },
        {
          "id"                 : "33", // seashell glasses
          "hotSpotId"          : "31",
          "index"              : "0",
          "startTime"          : "0.44",
          "endTime"            : "0.485",
          "hotSpotStartX"      : "1650",
          "hotSpotStartY"      : "250",
          "hotSpotStartWidth"  : "200",
          "hotSpotStartHeight" : "200"
        },
        {
          "id"                 : "36", // blazer
          "hotSpotId"          : "32",
          "index"              : "0",
          "startTime"          : "0.655",
          "endTime"            : "0.71",
          "hotSpotStartX"      : "1050",
          "hotSpotStartY"      : "900",
          "hotSpotStartWidth"  : "200",
          "hotSpotStartHeight" : "200"
        }
      ],

    cartItems : []
  };
});
