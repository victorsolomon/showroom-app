define([
  'underscore',
  'backbone'
], function (_, Backbone) {

    window.playerConfig = {

      gaKey        : 'UA-55667188-1',
      gaVendorName : 'Zero UV',

      loaderStyle       : 'image',
      splashImage       : 'static/images/posterFrames/zerouv.gif',
      customSplashImage : null,

      mp4_video_src_med  : 'zerouv/zerouv_mp4.mp4',
      webm_video_src_med : 'zerouv/zerouv_webm.webm',

      baseVideoPath          : "static/movies/",
      baseProductImagePath   : "static/images/productImages/zerouv/",
      colorVariantsImagePath : "static/images/productImages/zerouv/optionVariants/",

      checkoutType : "shopify",
      checkoutUrl  : "http://www.shopzerouv.com/cart/",

      shareUrl          : "http://www.helloshowroom.co/zerouv",
      shareEmbedBaseUrl : "http://www.helloshowroom.co/zerouv/index.html?config=zeroUVConfig",

      hotspotColor    : '#101010',
      customFontSize  : null,
      customBoxSize   : null,
      beaconPlacement : null,

      recommended : [
        {
          "id"            : '1',
          "largeItemSrc1" : "01_blacksmoke.jpg",
        },
        {
          "id"            : '2',
          "largeItemSrc1" : "02_cateyes_womens.jpg",
        },
        {
          "id"            : '3',
          "largeItemSrc1" : "03_blacksilver_lavender.jpg",
        },
        {
          "id"            : '4',
          "largeItemSrc1" : "04_goldbrown.jpg",
        },
        {
          "id"            : '5',
          "largeItemSrc1" : "05_blackgoldsmoke_matte_women.jpg",
        },
        {
          "id"            : '6',
          "largeItemSrc1" : "06_whitesilversmoke_men.jpg",
        },
        {
          "id"            : '7',
          "largeItemSrc1" : "07_shinyblackgold.jpg",
        },
        {
          "id"            : '8',
          "largeItemSrc1" : "08_brown_retro.jpg",
        },
        {
          "id"            : '9',
          "largeItemSrc1" : "09_creme.jpg",
        },
        {
          "id"            : '10',
          "largeItemSrc1" : "10_blackgold.jpg",
        },
        {
          "id"            : '11',
          "largeItemSrc1" : '11_shinyblackgold_lavender_womens.jpg',
        },
        {
          "id"            : '12',
          "largeItemSrc1" : '11_blackgoldgreen_men.jpg',
        },
        {
          "id"            : '13',
          "largeItemSrc1" : '12_yellow_tortoise.jpg',
        },
        {
          "id"            : '14',
          "largeItemSrc1" : '13_silver.jpg',
        },
        {
          "id"            : '15',
          "largeItemSrc1" : '14_frost.jpg',
        },
        {
          "id"            : '16',
          "largeItemSrc1" : '15_whitesmoke.jpg',
        },
        {
          "id"            : '17',
          "largeItemSrc1" : '16_blackgold.jpg',
        },
        {
          "id"            : '18',
          "largeItemSrc1" : '17_shinyblack.jpg',
        },
        {
          "id"            : '19',
          "largeItemSrc1" : '18_blackclear.jpg',
        },
        {
          "id"            : '20',
          "largeItemSrc1" : '19_blacklavender.jpg',
        },
        {
          "id"            : '21',
          "largeItemSrc1" : '20_orange.jpg',
        },
        {
          "id"            : '22',
          "largeItemSrc1" : '22_black_classic.jpg',
        },
        {
          "id"            : '23',
          "largeItemSrc1" : '23_blackgoldgreen_womens.jpg',
        },
        {
          "id"            : '24',
          "largeItemSrc1" : '23_yellow_mens.jpg',
        },
        {
          "id"            : '25',
          "largeItemSrc1" : '24_black_indie.jpg',
        },
        {
          "id"            : '26',
          "largeItemSrc1" : '25_black.jpg',
        },
        {
          "id"            : '27',
          "largeItemSrc1" : '26_gold_nohat.jpg',
        },
        {
          "id"            : '28',
          "largeItemSrc1" : '26_matteblack_withhat.jpg',
        },
        {
          "id"            : '29',
          "largeItemSrc1" : '27_black_right.jpg',
        },
        {
          "id"            : '30',
          "largeItemSrc1" : '28_havana.jpg',
        },
        {
          "id"            : '31',
          "largeItemSrc1" : '29_black.jpg',
        },
        {
          "id"            : '32',
          "largeItemSrc1" : '30_shinyblackgold.jpg',
        },
        {
          "id"            : '33',
          "largeItemSrc1" : '31_blackgold.jpg',
        },
        {
          "id"            : '34',
          "largeItemSrc1" : '32_red.jpg',
        },
        {
          "id"            : '35',
          "largeItemSrc1" : '33_tortoisegold.jpg',
        },
      ],

      itemData: [
        {
          "id"                 : "1",
          "index"              : "0",
          "largeItemSrc1"      : "01_blacksmoke.jpg",
          "itemImageSrc"       : "01_blacksmoke.jpg",
          "itemTitle"          : "Metal Round Sunglasses",
          "artist"             : null,
          "itemDescription"    : 'Unique oversize metal circle sunglasses are the largest metal circle frame we have yet to carry! Made with a metal based frame, metal hinges and polycarbonate UV400 protected lenses.',
          "itemPrice"          : "$9.99",
          "hasSize"            : false,
          "hasColor"           : false,
          "colorBlockId"       : false,
          "variantOptionsId"   : 0,
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "soldOut"            : false,
          "isArt"              : false,
          "variants" : {
            "oneSize" : ['863679721']
          },
          "allImages" : ["01_blacksmoke.jpg"]
        },
        {
          "id"                 : "2",
          "index"              : "1",
          "largeItemSrc1"      : "02_cateyes_womens.jpg",
          "itemImageSrc"       : "02_cateyes_womens.jpg",
          "itemTitle"          : "Round Cat Eye Sunglasses",
          "artist"             : null,
          "itemDescription"    : "Thin metal cat eye silhouette that features a round cut-out frame inserted with rectangular lenses. Just look at all the neat shapes within this frame! This definitely a very unique piece for this seasons collection. Made with a metal based frame, metal hinges and UV400 protected lens.",
          "itemPrice"          : "$10.95",
          "hasSize"            : false,
          "hasColor"           : false,
          "colorBlockId"       : false,
          "variantOptionsId"   : 0,
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "soldOut"            : false,
          "isArt"              : false,
          "variants" : {
            "oneSize" : ['378808881']
          },
          "allImages" : ["02_cateyes_womens.jpg"]
        },
        {
          "id"                 : "3", //also shown with image 29
          "index"              : "2",
          "largeItemSrc1"      : "03_blacksilver_lavender.jpg",
          "itemImageSrc"       : "03_blacksilver_lavender.jpg",
          "itemTitle"          : "Butterfly Shape Sunglasses",
          "artist"             : null,
          "itemDescription"    : 'If you enjoy the elegant flare of the butterfly silhouette frame, then look no further. Elegant metal temples with beautiful sharp curves that maintains an elegant glam look for this season. Features an acetate frame, metal hinges and gradient UV protected polycarbonate lens.',
          "itemPrice"          : "$9.99",
          "hasSize"            : false,
          "hasColor"           : false,
          "colorBlockId"       : false,
          "variantOptionsId"   : 0,
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "soldOut"            : false,
          "isArt"              : false,
          "variants" : {
            "oneSize" : ['554154537']
          },
          "allImages" : ["03_blacksilver_lavender.jpg"]
        },
        {
          "id"                 : "4",
          "index"              : "3",
          "largeItemSrc1"      : "04_goldbrown.jpg",
          "itemImageSrc"       : "04_goldbrown.jpg",
          "itemTitle"          : "Vintage Metal Round",
          "artist"             : null,
          "itemDescription"    : 'Unique oversize metal circle sunglasses are the largest metal circle frame we have yet to carry! Made with a metal based frame, metal hinges and polycarbonate UV400 protected lenses.',
          "itemPrice"          : "$9.99",
          "hasSize"            : false,
          "hasColor"           : false,
          "colorBlockId"       : false,
          "variantOptionsId"   : 0,
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "soldOut"            : false,
          "isArt"              : false,
          "variants" : {
            "oneSize" : ['253625235']
          },
          "allImages" : ["04_goldbrown.jpg"]
        },
        {
          "id"                 : "5", //her
          "index"              : "4",
          "largeItemSrc1"      : "05_blackgoldsmoke_matte_women.jpg",
          "itemImageSrc"       : "05_blackgoldsmoke_matte_women.jpg",
          "itemTitle"          : "Round Fashion Designer",
          "artist"             : null,
          "itemDescription"    : 'Probably one of the most popular international designer round sunglasses available at the moment. Made famous by many top international fashion bloggers! Each pair is hand polished, inspected and provide 100% UVA and UVB protection.',
          "itemPrice"          : "$9.99",
          "hasSize"            : false,
          "hasColor"           : false,
          "colorBlockId"       : false,
          "variantOptionsId"   : 0,
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "soldOut"            : false,
          "isArt"              : false,
          "variants" : {
            "oneSize" : ['880561197']
          },
          "allImages" : ["05_blackgoldsmoke_matte_women.jpg"]
        },
        {
          "id"                 : "6",  //dapper
          "index"              : "5",
          "largeItemSrc1"      : "06_whitesilversmoke_men.jpg",
          "itemImageSrc"       : "06_whitesilversmoke_men.jpg",
          "itemTitle"          : "Dapper Spectacles",
          "artist"             : null,
          "itemDescription"    : 'Vintage inspired round metal sunglasses that feature a unique metal nose bridge and an exquisite two-toned colored frame. The Subtle and unique qualities presents a very stylish vintage inspired look this season. Made with a metal based frame, and metal hinges.',
          "itemPrice"          : "$9.99",
          "hasSize"            : false,
          "hasColor"           : false,
          "colorBlockId"       : false,
          "variantOptionsId"   : 0,
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "soldOut"            : false,
          "isArt"              : false,
          "variants" : {
            "oneSize" : ['378804289']
          },
          "allImages" : ["06_whitesilversmoke_men.jpg"]
        },
        {
          "id"                 : "7",
          "index"              : "6",
          "largeItemSrc1"      : "07_shinyblackgold.jpg",
          "itemImageSrc"       : "07_shinyblackgold.jpg",
          "itemTitle"          : "Round Horned Rim Frame Sunglasses",
          "artist"             : null,
          "itemDescription"    : 'Classy round p-3 shaped frame made from black acetate with a prominent metal nose bridge that projects in front of the frame. Features metal arms and metal hinges. Made with an acetate and polycarbonate UV protected lenses.',
          "itemPrice"          : "$9.99",
          "hasSize"            : false,
          "hasColor"           : false,
          "colorBlockId"       : false,
          "variantOptionsId"   : 0,
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "soldOut"            : false,
          "isArt"              : false,
          "variants" : {
            "oneSize" : ['254815510']
          },
          "allImages" : ["07_shinyblackgold.jpg"]
        },
        {
          "id"                 : "8", // also shown at 2:31
          "index"              : "7",
          "largeItemSrc1"      : "08_brown_retro.jpg",
          "itemImageSrc"       : "08_brown_retro.jpg",
          "itemTitle"          : "Round P3 Sunglasses",
          "artist"             : null,
          "itemDescription"    : 'Round and retro, these bold P-3 style frames feature a slightly classic round silhouette with keyhole bridge. The subtle retro features with simple lines present a stylish easy-to-wear piece if you are going for a round look this season. Made with a plastic based frame, metal hinges and UV protected polycarbonate lenses.',
          "itemPrice"          : "$9.99",
          "hasSize"            : false,
          "hasColor"           : false,
          "colorBlockId"       : false,
          "variantOptionsId"   : 0,
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "soldOut"            : false,
          "isArt"              : false,
          "variants" : {
            "oneSize" : ['572172457']
          },
          "allImages" : ["08_brown_retro.jpg"]
        },
        {
          "id"                 : "9",
          "index"              : "8",
          "largeItemSrc1"      : "09_creme.jpg",
          "itemImageSrc"       : "09_creme.jpg",
          "itemTitle"          : "Retro Round Cateye Sunglasses",
          "artist"             : null,
          "itemDescription"    : 'Chic round cat eye glamour sunglasses that feature high sitting temples with metal rivets on each corner. Feel free to carry them all the way through the year as these sassy cat eyes are fit for any season. Also available in a variety of fun colors! Made with a plastic based frame, metal hinges and UV protected polycarbonate lenses.',
          "itemPrice"          : "$9.99",
          "hasSize"            : false,
          "hasColor"           : false,
          "colorBlockId"       : false,
          "variantOptionsId"   : 0,
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "soldOut"            : true,
          "isArt"              : false,
          "variants" : {
            "oneSize" : ['367362399']
          },
          "allImages" : ["09_creme.jpg"]
        },
        {
          "id"                 : "10",
          "index"              : "9",
          "largeItemSrc1"      : "10_blackgold.jpg",
          "itemImageSrc"       : "10_blackgold.jpg",
          "itemTitle"          : "Classic Optical RX Sunglasses",
          "artist"             : null,
          "itemDescription"    : 'Vintage inspired horned rim half frame shape that stays true to the classic and iconic look. Frame is made with black acetate brow and arms, metal wire lens lining and metal nose bridge. Features metal hinges, English style nose pieces, and dark-tinted polycarbonate UV protected lenses.',
          "itemPrice"          : "$10.95",
          "hasSize"            : false,
          "hasColor"           : false,
          "colorBlockId"       : false,
          "variantOptionsId"   : 0,
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "soldOut"            : false,
          "isArt"              : false,
          "variants" : {
            "oneSize" : ['253128769']
          },
          "allImages" : ["10_blackgold.jpg"]
        },
        {
          "id"               : "11",
          "index"            : "10",
          "largeItemSrc1"    : '11_shinyblackgold_lavender_womens.jpg',
          "itemImageSrc"     : '11_shinyblackgold_lavender_womens.jpg',
          "itemTitle"        : "Round Sunglasses",
          "artist"           : null,
          "itemDescription"  : "Probably one of the most popular international designer round sunglasses available at the moment. Made famous by many top international fashion bloggers! Each pair is hand polished, inspected and provide 100% UVA and UVB protection.",
          "itemPrice"        : "$9.99",
          "hasSize"          : false,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants" : {
            "oneSize" : ['270043150']
           },
           "allImages" : ['11_shinyblackgold_lavender_womens.jpg']
        },
        {
          "id"               : "12",
          "index"            : "11",
          "largeItemSrc1"    : '11_blackgoldgreen_men.jpg',
          "itemImageSrc"     : '11_blackgoldgreen_men.jpg',
          "itemTitle"        : "Dapper Spectacles",
          "artist"           : null,
          "itemDescription"  : "Vintage inspired round metal sunglasses that feature a unique metal nose bridge and an exquisite two-toned colored frame. The Subtle and unique qualities presents a very stylish vintage inspired look this season. Made with a metal based frame, and metal hinges.",
          "itemPrice"        : "$9.99",
          "hasSize"          : false,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants" : {
            "oneSize" : ['378804285']
           },
           "allImages" : ['11_blackgoldgreen_men.jpg']
        },
        {
          "id"               : "13", //also shown at 2:44
          "index"            : "12",
          "largeItemSrc1"    : '12_yellow_tortoise.jpg',
          "itemImageSrc"     : '12_yellow_tortoise.jpg',
          "itemTitle"        : "Retro Clear Lens Oversize Glasses",
          "artist"           : null,
          "itemDescription"  : "This vintage inspired wayfarer frame exudes retro fashion with a stylish blend of plastic and metal and features a clear lens. Round glasses with a retro vibe that will are easy to wear with most of your wardrobe this season. Made with a plastic based frame, metal bridge, metal arms and hinges and UV protected polycarbonate lens.",
          "itemPrice"        : "$9.99",
          "hasSize"          : false,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : true,
          "variants" : {
            "oneSize" : ['791949537']
           },
           "allImages" : ['12_yellow_tortoise.jpg']
        },
        {
          "id"               : "14", //also shown after 20_orange
          "index"            : "13",
          "largeItemSrc1"    : '13_silver.jpg',
          "itemImageSrc"     : '13_silver.jpg',
          "itemTitle"        : "Round Cat Eye Sunglasses",
          "artist"           : null,
          "itemDescription"  : "Thin metal cat eye silhouette that features a round cut-out frame inserted with rectangular lenses. Just look at all the neat shapes within this frame! This definitely a very unique piece for this seasons collection. Made with a metal based frame, metal hinges and UV400 protected lens.",
          "itemPrice"        : "$6.95",
          "hasSize"          : false,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants" : {
            "oneSize" : ['378808881']
           },
           "allImages" : ['13_silver.jpg']
        },
        {
          "id"               : "15", //also shown with item 21 (20_orange)
          "index"            : "14",
          "largeItemSrc1"    : '14_frost.jpg',
          "itemImageSrc"     : '14_frost.jpg',
          "itemTitle"        : "Super Round Cat Eye Sunglasses",
          "artist"           : null,
          "itemDescription"  : "An amazing super retro style redesigned with a new touch of flare. Super round cat eye pointed tip fashion sunglasses will add a little sophistication to any outfit without looking boring or too over the top!",
          "itemPrice"        : "$9.99",
          "hasSize"          : false,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : true,
          "variants": {
            "oneSize" : ['264874872']
          },
          "allImages": ['14_frost.jpg']
        },
        {
          "id"               : "16",
          "index"            : "15",
          "largeItemSrc1"    : '15_whitesmoke.jpg',
          "itemImageSrc"     : '15_whitesmoke.jpg',
          "itemTitle"        : "Heart Shape Sunglasses",
          "artist"           : null,
          "itemDescription"  : "Super cute and super fun, these are sure to win over hearts on all you sunny days! Available in a variety of fun colors to match all your outfits. Made with an acetate based frame, metal hinges and gradient polycarbonate UV protected lenses.",
          "itemPrice"        : "$9.99",
          "hasSize"          : false,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            "oneSize" : ['863666877']
          },
          "allImages": ['15_whitesmoke.jpg']
        },
        {
          "id"               : "17",
          "index"            : "16",
          "largeItemSrc1"    : '16_blackgold.jpg',
          "itemImageSrc"     : '16_blackgold.jpg',
          "itemTitle"        : "Classic Square Frame Glasses",
          "artist"           : null,
          "itemDescription"  : "Classic square frame aviator frame that represents a traditional style and features elegant metal accented temples and clear lenses. Casual square glasses with a classic look that are easy-to-wear and will compliment your wardrobe this season. Made with a plastic based frame, metal hinges and clear UV protected polycarbonate lens.",
          "itemPrice"        : "$9.99",
          "hasSize"          : false,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'oneSize' : ['367351393']
          },
          "allImages": ['16_blackgold.jpg']
        },
        {
          "id"               : "18",
          "index"            : "17",
          "largeItemSrc1"    : '17_shinyblack.jpg',
          "itemImageSrc"     : '17_shinyblack.jpg',
          "itemTitle"        : "Round Horned Rim Glasses",
          "artist"           : null,
          "itemDescription"  : "Vintage inspired round horned rim style frames that features a key hole nose bridge and diamond studs on each corner.  Perfect for a stylish retro professional look.  Made with an acetate based frame, metal hinges, and clear UV protected polycarbonate lens.",
          "itemPrice"        : "$9.99",
          "hasSize"          : false,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'oneSize' : ['279519464']
          },
          "allImages": ['17_shinyblack.jpg']
        },
        {
          "id"               : "19",
          "index"            : "18",
          "largeItemSrc1"    : '18_blackclear.jpg',
          "itemImageSrc"     : '18_blackclear.jpg',
          "itemTitle"        : "Oversize Horned Rim Sunglasses",
          "artist"           : null,
          "itemDescription"  : "Designer inspired oversize thick frame womens horned rim sunglasses.  Very fashionable frame, and unique design that allows the owner to look fabulous no matter what they are wearing!  Each pair is hand polished, inspected and comes with 100% UV400 protection.",
          "itemPrice"        : "$9.99",
          "hasSize"          : false,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : true,
          "variants": {
            'oneSize' : ['274904596']
          },
          "allImages": ['18_blackclear.jpg']
        },
        {
          "id"               : "20", //also shown at 2:31
          "index"            : "19",
          "largeItemSrc1"    : '19_blacklavender.jpg',
          "itemImageSrc"     : '19_blacklavender.jpg',
          "itemTitle"        : "Round Oversize Retro Sunglasses",
          "artist"           : null,
          "itemDescription"  : "You get the best of both worlds with these bold oversized wayfarers with flat edges and super round lenses. A combination of classy and vintage style make these perfect for all the seasons. Made with an acetate based frame, metal hinges and polycarbonate UV protected lenses.",
          "itemPrice"        : "$9.99",
          "hasSize"          : false,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'oneSize' : ['258546732']
          },
          "allImages": ['19_blacklavender.jpg']
        },
        {
          "id"               : "21",
          "index"            : "20",
          "largeItemSrc1"    : '20_orange.jpg',
          "itemImageSrc"     : '20_orange.jpg',
          "itemTitle"        : "Round Cat Eye Sunglasses",
          "artist"           : null,
          "itemDescription"  : "An amazing super retro style redesigned with a new touch of flare. Super round cat eye pointed tip fashion sunglasses will add a little sophistication to any outfit without looking boring or too over the top!",
          "itemPrice"        : "$9.99",
          "hasSize"          : false,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            "oneSize" : ['727219969']
          },
          "allImages": ['20_orange.jpg']
        },
        {
          "id"               : "22",
          "index"            : "21",
          "largeItemSrc1"    : '22_black_classic.jpg',
          "itemImageSrc"     : '22_black_classic.jpg',
          "itemTitle"        : "Retro Polarized Sunglasses",
          "artist"           : null,
          "itemDescription"  : "A medium version of the timeless classic horned rim frame that offers style and superior protection with polarized lenses. Enjoy all your daily activities in full clarity by effectively reducing glare with polarized sunglasses. Made with an acetate based frame, metal hinges, and polycarbonate polarized lenses.",
          "itemPrice"        : "$10.95",
          "hasSize"          : false,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            "oneSize" : ['299737413']
          },
          "allImages": ['22_black_classic.jpg']
        },
        {
          "id"               : "23",
          "index"            : "22",
          "largeItemSrc1"    : '23_blackgoldgreen_womens.jpg',
          "itemImageSrc"     : '23_blackgoldgreen_womens.jpg',
          "itemTitle"        : "Oversize Round Sunglasses",
          "artist"           : null,
          "itemDescription"  : "An oversized round silhouette is trimmed in shiny metal and features cut-out arrows that point to the lenses. These sunnies are sure to be a hit this season with high fashion details with a mix of plastic and metal elements. Made with a plastic based frame, metal trim, reinforced metal hinges, and UV400 protected lenses.",
          "itemPrice"        : "$9.99",
          "hasSize"          : false,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'oneSize' : ['422396677']
          },
          "allImages": ['23_blackgoldgreen_womens.jpg']
        },
        {
          "id"               : "24",
          "index"            : "23",
          "largeItemSrc1"    : '23_yellow_mens.jpg',
          "itemImageSrc"     : '23_yellow_mens.jpg',
          "itemTitle"        : "1920's Dapper Round Sunglasses",
          "artist"           : null,
          "itemDescription"  : "Remarkable round p3 shape frame with a key hole nose bridge that offers a sophisticated vintage style look and is available in a variety of colors to fit your preference. Made with an acetate frame, metal hinges and gradient polycarbon UV protected lenses.",
          "itemPrice"        : "$9.99",
          "hasSize"          : false,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : true,
          "variants": {
            'oneSize' : ['270335328']
          },
          "allImages": ['23_yellow_mens.jpg']
        },
        {
          "id"               : "25",
          "index"            : "24",
          "largeItemSrc1"    : '24_black_indie.jpg',
          "itemImageSrc"     : '24_black_indie.jpg',
          "itemTitle"        : "Block Cut Cat Eye Sunglasses",
          "artist"           : null,
          "itemDescription"  : "Wonderfully designed block cut pattern sunglasses that features a stylish cat eye shaped frame. Each pair is designed with a unique flat pattern that almost looks as if the frames are drawn in! An extremely unique edition to this seasons collection. Made with a plastic based frame, reinforced metal hinges and UV400 protected lenses.",
          "itemPrice"        : "$10.95",
          "hasSize"          : false,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'oneSize' : ['405878981']
          },
          "allImages": ['24_black_indie.jpg']
        },
        {
          "id"               : "26",
          "index"            : "25",
          "largeItemSrc1"    : '25_black.jpg',
          "itemImageSrc"     : '25_black.jpg',
          "itemTitle"        : "Oversize Round Circle Sunglasses",
          "artist"           : null,
          "itemDescription"  : "Super round and oversized, these are the very definition of big and bold sunnies and even feature sleek arrow accents on the temples. No one will be able to ignore you this season in these bold beauties. Made with a plastic based frame, metal hinges and UV protected polycarbonate lens.",
          "itemPrice"        : "$9.99",
          "hasSize"          : false,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : true,
          "variants": {
            'oneSize' : ['378807275']
          },
          "allImages": ['25_black.jpg']
        },
        {
          "id"               : "27",
          "index"            : "26",
          "largeItemSrc1"    : '26_gold_nohat.jpg',
          "itemImageSrc"     : '26_gold_nohat.jpg',
          "itemTitle"        : "Womens Trendy Retro Octagon Metal Fashion Sunglasses 9127",
          "artist"           : null,
          "itemDescription"  : "Unique thin metal semi-rimless sunglasses that features eight geometric angles creating a octagonal shape. Break away from the traditional squares and circles this season with these super stylish octagonal sunglasses. Made with a metal based frame, English style nose pieces, metal hinges and polycarbonate lenses.",
          "itemPrice"        : "$10.95",
          "hasSize"          : false,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants"         : {
            'oneSize' : ['389153324']
          },
          "allImages": ['26_gold_nohat.jpg']
        },
        {
          "id"               : "28",
          "index"            : "27",
          "largeItemSrc1"    : '26_matteblack_withhat.jpg',
          "itemImageSrc"     : '26_matteblack_withhat.jpg',
          "itemTitle"        : "Retro Octagon Sunglasses",
          "artist"           : null,
          "itemDescription"  : "Retro P3 vintage inspired design that features a round frame straight angled horned rim top. The rounded frame with the flat horned rim offer a very stylish retro look this season. Made with a plastic based frame, metal hinges and UV400 protected lens.",
          "itemPrice"        : "$9.99",
          "hasSize"          : false,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'oneSize' : ['389137102']
          },
          "allImages": ['26_matteblack_withhat.jpg']
        },
        {
          "id"               : "29",
          "index"            : "28",
          "largeItemSrc1"    : '27_black_right.jpg',
          "itemImageSrc"     : '27_black_right.jpg',
          "itemTitle"        : "Oversize Round Sunglasses",
          "artist"           : null,
          "itemDescription"  : "If you enjoy the elegant flare of the butterfly silhouette frame, then look no further. Elegant metal temples with beautiful sharp curves that maintains an elegant glam look for this season. Features an acetate frame, metal hinges and gradient UV protected polycarbonate lens.",
          "itemPrice"        : "$9.99",
          "hasSize"          : false,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'oneSize' : ['263351256']
          },
          "allImages": ['27_black_right.jpg']
        },
        {
          "id"               : "30",
          "index"            : "29",
          "largeItemSrc1"    : '28_havana.jpg',
          "itemImageSrc"     : '28_havana.jpg',
          "itemTitle"        : "Oversize Round Sunglasses",
          "artist"           : null,
          "itemDescription"  : "Super round and oversized, these are the very definition of big and bold sunnies and even feature sleek arrow accents on the temples. No one will be able to ignore you this season in these bold beauties. Made with a plastic based frame, metal hinges and UV protected polycarbonate lens.",
          "itemPrice"        : "$9.99",
          "hasSize"          : false,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'oneSize' : ['378807271']
          },
          "allImages": ['28_havana.jpg']
        },
        {
          "id"               : "31",
          "index"            : "30",
          "largeItemSrc1"    : '29_black.jpg',
          "itemImageSrc"     : '29_black.jpg',
          "itemTitle"        : "1950's Dapper Cross Bar Sunglasses",
          "artist"           : null,
          "itemDescription"  : "A 1950's Vintage remake of a popular horned rim style frame from Europe.  Exquisite Dapper and sophisticated fashion for person who is concerned with their unique style.",
          "itemPrice"        : "$7.95",
          "hasSize"          : false,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'oneSize' : ['286990854']
          },
          "allImages": ['29_black.jpg']
        },
        {
          "id"               : "32",
          "index"            : "31",
          "largeItemSrc1"    : '30_shinyblackgold.jpg',
          "itemImageSrc"     : '30_shinyblackgold.jpg',
          "itemTitle"        : "Round Horned Sunglasses",
          "artist"           : null,
          "itemDescription"  : "Classy round p-3 shaped frame made from black acetate with a prominent metal nose bridge that projects in front of the frame. Features metal arms and metal hinges. Made with an acetate and polycarbonate UV protected lenses.",
          "itemPrice"        : "$9.99",
          "hasSize"          : false,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'oneSize' : ['254815510']
          },
          "allImages": ['30_shinyblackgold.jpg']
        },
        {
          "id"               : "33",
          "index"            : "32",
          "largeItemSrc1"    : '31_blackgold.jpg',
          "itemImageSrc"     : '31_blackgold.jpg',
          "itemTitle"        : "Oversize Square Sunglasses",
          "artist"           : null,
          "itemDescription"  : "Super big and super retro, these oversized square frames are the very definition of big square sunglasses. With stylish retro curves and high accented temples, these are sure to be fashionably noticeable wherever you might be. Made with a plastic based frame, metal hinges and smoke UV protected polycarbonate lenses.",
          "itemPrice"        : "$9.99",
          "hasSize"          : false,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'oneSize' : ['729890025']
          },
          "allImages": ['31_blackgold.jpg']
        },
        {
          "id"               : "34", //also shown at 2:27
          "index"            : "33",
          "largeItemSrc1"    : '32_red.jpg',
          "itemImageSrc"     : '32_red.jpg',
          "itemTitle"        : "Retro 1950s Round Sunglasses",
          "artist"           : null,
          "itemDescription"  : "Vintage inspired round circular frame that features a keyhole nose bridge and high pointed temples creating a unique cat eye silhouette. Made with an acetate based frame, metal hinges and polycarbonate UV protected lenses.",
          "itemPrice"        : "$9.99",
          "hasSize"          : false,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : true,
          "variants": {
            'oneSize' : ['256649352']
          },
          "allImages": ['32_red.jpg']
        },
        {
          "id"               : "35",
          "index"            : "34",
          "largeItemSrc1"    : '33_tortoisegold.jpg',
          "itemImageSrc"     : '33_tortoisegold.jpg',
          "itemTitle"        : "Half Frame Classic Sunglasses",
          "artist"           : null,
          "itemDescription"  : "Vintage inspired horned rim half frame shape that stays true to the classic and iconic look. Frame is made with black acetate brow and arms, metal wire lens lining and metal nose bridge. Features metal hinges, English style nose pieces, and dark-tinted polycarbonate UV protected lenses.",
          "itemPrice"        : "$10.95",
          "hasSize"          : false,
          "hasColor"         : false,
          "colorBlockId"     : false,
          "variantOptionsId" : null,
          "isArt"            : false,
          "soldOut"          : false,
          "variants": {
            'oneSize' : ['863696113']
          },
          "allImages": ['33_tortoisegold.jpg']
        },
      ],

      variantColors: [

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
          "id"                 : "1", // Black Smoke
          "hotSpotId"          : "1",
          "index"              : "0",
          "startTime"          : "0.00",
          "endTime"            : "0.014",
          "hotSpotStartX"      : "350",
          "hotSpotStartY"      : "75",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "500"
        },
        {
          "id"                 : "2", // Cat Eyes
          "hotSpotId"          : "2",
          "index"              : "0",
          "startTime"          : "0.015",
          "endTime"            : "0.058",
          "hotSpotStartX"      : "650",
          "hotSpotStartY"      : "75",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "500"
        },
        {
          "id"                 : "3", // Black Silver Lavender
          "hotSpotId"          : "3",
          "index"              : "0",
          "startTime"          : "0.060",
          "endTime"            : "0.08147",
          "hotSpotStartX"      : "650",
          "hotSpotStartY"      : "135",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "500"
        },
        {
          "id"                 : "4", // Black Silver Lavender
          "hotSpotId"          : "4",
          "index"              : "0",
          "startTime"          : "0.0825",
          "endTime"            : "0.092",
          "hotSpotStartX"      : "950",
          "hotSpotStartY"      : "235",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "250",
          "hotSpotStartHeight" : "250"
        },
        {
          "id"                 : "4", // Black Silver Lavender
          "hotSpotId"          : "5",
          "index"              : "0",
          "startTime"          : "0.107",
          "endTime"            : "0.113",
          "hotSpotStartX"      : "1000",
          "hotSpotStartY"      : "135",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "500"
        },
        {
          "id"                 : "5", // Black Silver Lavender
          "hotSpotId"          : "6",
          "index"              : "0",
          "startTime"          : "0.115",
          "endTime"            : "0.124",
          "hotSpotStartX"      : "650",
          "hotSpotStartY"      : "135",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "500"
        },
        {
          "id"                 : "5", // black glasses woman
          "hotSpotId"          : "7",
          "index"              : "0",
          "startTime"          : "0.125",
          "endTime"            : "0.138",
          "hotSpotStartX"      : "920",
          "hotSpotStartY"      : "200",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "150",
          "hotSpotStartHeight" : "150"
        },
        {
          "id"                 : "6", // dapper
          "hotSpotId"          : "8",
          "index"              : "0",
          "startTime"          : "0.125",
          "endTime"            : "0.138",
          "hotSpotStartX"      : "1150",
          "hotSpotStartY"      : "135",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "150",
          "hotSpotStartHeight" : "150"
        },
        {
          "id"                 : "5", // black glasses woman
          "hotSpotId"          : "9",
          "index"              : "0",
          "startTime"          : "0.139",
          "endTime"            : "0.145",
          "hotSpotStartX"      : "475",
          "hotSpotStartY"      : "100",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "500"
        },
        {
          "id"                 : "7", // shiny black gold
          "hotSpotId"          : "10",
          "index"              : "0",
          "startTime"          : "0.1979",
          "endTime"            : "0.2118",
          "hotSpotStartX"      : "800",
          "hotSpotStartY"      : "135",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "500"
        },
        {
          "id"                 : "8", // brown
          "hotSpotId"          : "11",
          "index"              : "0",
          "startTime"          : "0.2270",
          "endTime"            : "0.24537",
          "hotSpotStartX"      : "800",
          "hotSpotStartY"      : "110",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "500"
        },
        {
          "id"                 : "9", // creme
          "hotSpotId"          : "12",
          "index"              : "0",
          "startTime"          : "0.2454",
          "endTime"            : "0.25719",
          "hotSpotStartX"      : "800",
          "hotSpotStartY"      : "175",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "500"
        },
        {
          "id"                 : "10", // classic optical rx
          "hotSpotId"          : "13",
          "index"              : "0",
          "startTime"          : "0.26",
          "endTime"            : "0.2737",
          "hotSpotStartX"      : "240",
          "hotSpotStartY"      : "0",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "400",
          "hotSpotStartHeight" : "400"
        },
        {
          "id"                 : "12", // shiny black gold lavender
          "hotSpotId"          : "14",
          "index"              : "0",
          "startTime"          : "0.31812",
          "endTime"            : "0.326",
          "hotSpotStartX"      : "320",
          "hotSpotStartY"      : "130",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "200",
          "hotSpotStartHeight" : "200"
        },
        {
          "id"                 : "5", // black gold green
          "hotSpotId"          : "15",
          "index"              : "0",
          "startTime"          : "0.31812",
          "endTime"            : "0.326",
          "hotSpotStartX"      : "710",
          "hotSpotStartY"      : "250",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "200",
          "hotSpotStartHeight" : "200"
        },
        {
          "id"                 : "13", // yellow tortoise
          "hotSpotId"          : "16",
          "index"              : "0",
          "startTime"          : "0.335",
          "endTime"            : "0.351733",
          "hotSpotStartX"      : "800",
          "hotSpotStartY"      : "135",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "500"
        },
        {
          "id"                 : "2", // cat eyes again
          "hotSpotId"          : "17",
          "index"              : "0",
          "startTime"          : "0.351844",
          "endTime"            : "0.36355",
          "hotSpotStartX"      : "400",
          "hotSpotStartY"      : "0",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "300",
          "hotSpotStartHeight" : "300"
        },
        {
          "id"                 : "15", // frost
          "hotSpotId"          : "18",
          "index"              : "0",
          "startTime"          : "0.3699",
          "endTime"            : "0.38055",
          "hotSpotStartX"      : "450",
          "hotSpotStartY"      : "135",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "500"
        },
        {
          "id"                 : "16", // white smoke
          "hotSpotId"          : "19",
          "index"              : "0",
          "startTime"          : "0.3927",
          "endTime"            : "0.3974",
          "hotSpotStartX"      : "1200",
          "hotSpotStartY"      : "75",
          "hotSpotEndX"        : "1300",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "300",
          "hotSpotStartHeight" : "300"
        },
        {
          "id"                 : "17", // black gold
          "hotSpotId"          : "20",
          "index"              : "0",
          "startTime"          : "0.3976",
          "endTime"            : "0.4129",
          "hotSpotStartX"      : "810",
          "hotSpotStartY"      : "70",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "500"
        },
        {
          "id"                 : "18", // shiny black
          "hotSpotId"          : "21",
          "index"              : "0",
          "startTime"          : "0.4130",
          "endTime"            : "0.4245",
          "hotSpotStartX"      : "750",
          "hotSpotStartY"      : "300",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "500"
        },
        {
          "id"                 : "19", // black clear
          "hotSpotId"          : "22",
          "index"              : "0",
          "startTime"          : "0.4246",
          "endTime"            : "0.43657",
          "hotSpotStartX"      : "900",
          "hotSpotStartY"      : "0",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "300",
          "hotSpotStartHeight" : "150"
        },
        {
          "id"                 : "20", // black lavender
          "hotSpotId"          : "23",
          "index"              : "0",
          "startTime"          : "0.469",
          "endTime"            : "0.48061",
          "hotSpotStartX"      : "800",
          "hotSpotStartY"      : "0",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "300",
          "hotSpotStartHeight" : "300"
        },
        {
          "id"                 : "21", // orange
          "hotSpotId"          : "24",
          "index"              : "0",
          "startTime"          : "0.4830",
          "endTime"            : "0.49237",
          "hotSpotStartX"      : "1000",
          "hotSpotStartY"      : "400",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "400",
          "hotSpotStartHeight" : "400"
        },
        {
          "id"                 : "15", // frost
          "hotSpotId"          : "25",
          "index"              : "0",
          "startTime"          : "0.4830",
          "endTime"            : "0.49237",
          "hotSpotStartX"      : "500",
          "hotSpotStartY"      : "135",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "500"
        },
        {
          "id"                 : "2", // cat eyes again.
          "hotSpotId"          : "26",
          "index"              : "0",
          "startTime"          : "0.49248",
          "endTime"            : "0.49806",
          "hotSpotStartX"      : "250",
          "hotSpotStartY"      : "135",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "500"
        },
        {
          "id"                 : "22", // black wayfarer
          "hotSpotId"          : "27",
          "index"              : "0",
          "startTime"          : "0.51294",
          "endTime"            : "0.52994",
          "hotSpotStartX"      : "1200",
          "hotSpotStartY"      : "135",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "500"
        },
        {
          "id"                 : "23", // black gold green
          "hotSpotId"          : "28",
          "index"              : "0",
          "startTime"          : "0.547667",
          "endTime"            : "0.5645",
          "hotSpotStartX"      : "100",
          "hotSpotStartY"      : "135",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "500"
        },
        {
          "id"                 : "24", // yellow
          "hotSpotId"          : "29",
          "index"              : "0",
          "startTime"          : "0.5487",
          "endTime"            : "0.5645",
          "hotSpotStartX"      : "1300",
          "hotSpotStartY"      : "240",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "500"
        },
        {
          "id"                 : "25", // black indie
          "hotSpotId"          : "30",
          "index"              : "0",
          "startTime"          : "0.567",
          "endTime"            : "0.5973",
          "hotSpotStartX"      : "1200",
          "hotSpotStartY"      : "135",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "500"
        },
        {
          "id"                 : "26", // black
          "hotSpotId"          : "31",
          "index"              : "0",
          "startTime"          : "0.5989",
          "endTime"            : "0.61333",
          "hotSpotStartX"      : "800",
          "hotSpotStartY"      : "135",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "500"
        },
        {
          "id"                 : "27", // gold no hat
          "hotSpotId"          : "32",
          "index"              : "0",
          "startTime"          : "0.61344",
          "endTime"            : "0.6306",
          "hotSpotStartX"      : "1200",
          "hotSpotStartY"      : "400",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "500"
        },
        {
          "id"                 : "28", // black hat
          "hotSpotId"          : "33",
          "index"              : "0",
          "startTime"          : "0.61344",
          "endTime"            : "0.6306",
          "hotSpotStartX"      : "500",
          "hotSpotStartY"      : "135",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "500"
        },
        {
          "id"                 : "3", // black silver lavender - left
          "hotSpotId"          : "34",
          "index"              : "0",
          "startTime"          : "0.6306",
          "endTime"            : "0.6359",
          "hotSpotStartX"      : "1100",
          "hotSpotStartY"      : "50",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "500"
        },
        {
          "id"                 : "29", // oversize black - right
          "hotSpotId"          : "35",
          "index"              : "0",
          "startTime"          : "0.6306",
          "endTime"            : "0.6359",
          "hotSpotStartX"      : "400",
          "hotSpotStartY"      : "100",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "500"
        },
        {
          "id"                 : "30", // havaaanaaa
          "hotSpotId"          : "36",
          "index"              : "0",
          "startTime"          : "0.6360",
          "endTime"            : "0.64789",
          "hotSpotStartX"      : "500",
          "hotSpotStartY"      : "100",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "500"
        },
        {
          "id"                 : "31", // black somethign idno
          "hotSpotId"          : "37",
          "index"              : "0",
          "startTime"          : "0.6480",
          "endTime"            : "0.6590",
          "hotSpotStartX"      : "400",
          "hotSpotStartY"      : "130",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "500"
        },
        {
          "id"                 : "32", // shiny black gold steampunk thing
          "hotSpotId"          : "38",
          "index"              : "0",
          "startTime"          : "0.67448",
          "endTime"            : "0.6873",
          "hotSpotStartX"      : "1200",
          "hotSpotStartY"      : "135",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "500"
        },
        {
          "id"                 : "33", // black gold oversized square
          "hotSpotId"          : "39",
          "index"              : "0",
          "startTime"          : "0.7550",
          "endTime"            : "0.7927",
          "hotSpotStartX"      : "700",
          "hotSpotStartY"      : "135",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "500"
        },
        {
          "id"                 : "34", // red
          "hotSpotId"          : "40",
          "index"              : "0",
          "startTime"          : "0.81038",
          "endTime"            : "0.8158",
          "hotSpotStartX"      : "500",
          "hotSpotStartY"      : "135",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "500"
        },
        {
          "id"                 : "35", // tortoise gold
          "hotSpotId"          : "41",
          "index"              : "0",
          "startTime"          : "0.8159",
          "endTime"            : "0.82136",
          "hotSpotStartX"      : "500",
          "hotSpotStartY"      : "135",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "500"
        },
        {
          "id"                 : "34", // red
          "hotSpotId"          : "42",
          "index"              : "0",
          "startTime"          : "0.8225",
          "endTime"            : "0.8274",
          "hotSpotStartX"      : "1000",
          "hotSpotStartY"      : "135",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "500"
        },
        {
          "id"                 : "8", // brown retro
          "hotSpotId"          : "43",
          "index"              : "0",
          "startTime"          : "0.8445",
          "endTime"            : "0.8640",
          "hotSpotStartX"      : "800",
          "hotSpotStartY"      : "10",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "500"
        },
        {
          "id"                 : "13", // yellow tortoise
          "hotSpotId"          : "44",
          "index"              : "0",
          "startTime"          : "0.9160",
          "endTime"            : "0.9200",
          "hotSpotStartX"      : "400",
          "hotSpotStartY"      : "50",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "500"
        },
        {
          "id"                 : "20", // black lavender
          "hotSpotId"          : "45",
          "index"              : "0",
          "startTime"          : "0.9533",
          "endTime"            : "0.9812",
          "hotSpotStartX"      : "600",
          "hotSpotStartY"      : "135",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "500"
        },
        {
          "id"                 : "6", // dapper
          "hotSpotId"          : "46",
          "index"              : "0",
          "startTime"          : "0.139",
          "endTime"            : "0.145",
          "hotSpotStartX"      : "950",
          "hotSpotStartY"      : "100",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "500"
        },
        {
          "id"                 : "13", // yellow tortoise
          "hotSpotId"          : "47",
          "index"              : "0",
          "startTime"          : "0.9200",
          "endTime"            : "0.9250",
          "hotSpotStartX"      : "1000",
          "hotSpotStartY"      : "50",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "500"
        },
        {
          "id"                 : "13", // yellow tortoise
          "hotSpotId"          : "48",
          "index"              : "0",
          "startTime"          : "0.9250",
          "endTime"            : "0.9440",
          "hotSpotStartX"      : "600",
          "hotSpotStartY"      : "50",
          "hotSpotEndX"        : "1100",
          "hotSpotEndY"        : "600",
          "hotSpotStartWidth"  : "500",
          "hotSpotStartHeight" : "500"
        },
      ],

      cartItems:[]
    };
  });

