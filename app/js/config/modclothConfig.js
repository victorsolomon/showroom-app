define([
    'underscore',
    'backbone'
], function (_, Backbone ) {

    return {

    mp4_video_src_small : "movies/640ModCloth.mp4",
    mp4_video_src_med : "movies/1000ModCloth.mp4",
    mp4_video_src_lrg : "movies/1280ModCloth.mp4",
    webm_video_src_small : 'movies/640ModCloth.webm',
    webm_video_src_med : 'movies/1000ModCloth.webm',
    webm_video_src_lrg : 'movies/1280ModCloth.webm',

    baseVideoPath : "static/movies/",
    baseProductImagePath : "static/images/productImages/modcloth/",

    checkoutType : "email",
    checkoutUrl : "mailto:we@helloshowroom.co?subject=Showroom!%20Modcloth!&body=Welcome to the new Modcloth experience!",
    shareUrl : "http://www.helloshowroom.co/modcloth.html",
    shareEmbedBaseUrl : "http://www.helloshowroom.co/demo_v7/index.html",

    itemData : [
       {
        "id": "1",
        "index": "0",
        "largeItemSrc1":"Modcloth/Active/ApricotYourAttention_1_Active.png",
        "largeItemSrc2":"Modcloth/Active/ApricotYourAttention_2_Active.png",
        "recommendedItemSrc" : "Modcloth/Recommended/ApricotYourAttention_Recco.png",
        "cartItemSrc" : "Modcloth/Cart/ApricotYourAttention_Cart.png",
        "itemImageSrc":"Modcloth/ApricotYourAttention_1.png",
        "itemTitle":"Apricot Dress",
        "itemDescription":"You'll be the most talked about stylista in the room when you waltz in wearing this textured fit-and-flare dress! Featuring a lovely apricot hue flecked with subtle metallic shimmer, this fab frock is sure to steal every eye in the room with its puffed, 3/4-length princess sleeves, V-cut back, and waist-cinching, faux-patent belt. Today, you've paired it with floral kitten heels, opaque tights, and a slouchy satchel for a look that will linger on everyone's mind, long after you've left!",
        "itemPrice":"$84.99",
          "hasSize" : true
      },
      {
        "id": "2",
        "index": "1",
        "largeItemSrc1":"Modcloth/BeadStill_1.png",
        "largeItemSrc2":"Modcloth/BeadStill_2.png",
        "recommendedItemSrc" : "Modcloth/Recommended/BeadStill_Recco.png",
        "cartItemSrc" : "Modcloth/Cart/BeadStill_Cart.png",
        "itemImageSrc":"Modcloth/BeadStill_1.png",
        "itemTitle":"Still Heart Necklace",
        "itemDescription":"This intricate statement necklace instantly dazzles! You're in love with its multicolored twists of cord, radiant rhinestones, gold sheen, and cobalt beads. This necklace's mix of cool blues and greens alongside warm orange and gold creates a look of true originality when worn above your LBD and gold-tipped booties!",
        "itemPrice":"$36.99",
          "hasSize" : false
      },
      {
        "id": "3",
        "index": "2",
        "largeItemSrc1":"Modcloth/CharterSchoolCardigan_1.png",
        "largeItemSrc2":"Modcloth/CharterSchoolCardigan_2.png",
        "recommendedItemSrc" : "Modcloth/Recommended/CharterSchoolCardigan_Recco.png",
        "cartItemSrc" : "Modcloth/Cart/CharterSchoolCardigan_Cart.png",
        "itemImageSrc":"Modcloth/CharterSchoolCardigan_1.png",
        "itemTitle":"Charter Cardigan",
        "itemDescription":"Show your style smarts in this all-purpose cardigan! Whether you're headed to class in a T-shirt and skirt, or out for dinner in a dress and wedges, this versatile, kelly green sweater is a perfect companion for any outfit. With a V-neck, button-down front, 3/4 sleeves, and a fine, soft knit with ribbed edges, this sweater will become your favorite wardrobe staple. No matter how you wear it, this item is always sure to give you an A+ look.",
        "itemPrice":"$34.99",
          "hasSize" : true
      },
      {
        "id": "4",
        "index": "3",
        "largeItemSrc1":"Modcloth/GolaThrowbackSneaker_1.png",
        "largeItemSrc2":"Modcloth/GolaThrowbackSneaker_2.png",
        "recommendedItemSrc" : "Modcloth/Recommended/GolaThrowbackSneaker_Recco.png",
        "cartItemSrc" : "Modcloth/Cart/GolaThrowbackSneaker_Cart.png",
        "itemImageSrc":"Modcloth/GolaThrowbackSneaker_1.png",
        "itemTitle":"Gola Sneaker",
        "itemDescription":"You're off to a retro start in these super cool and colorful sneakers by Gola! This year's schedule is looking just as bright as this kick's vivid yellow stripes and matching sole, which stand out against its tan panels and velvety navy accents. Lace up these smart tennis shoes with textured tights and a jersey knit dress for a look that mixes casual with the classics!",
        "itemPrice":"$79.99",
          "hasSize" : false
      },
      {
        "id": "5",
        "index": "4",
        "largeItemSrc1":"Modcloth/LiteraryLuckHeel_1.png",
        "largeItemSrc2":"Modcloth/LiteraryLuckHeel_2.png",
        "recommendedItemSrc" : "Modcloth/Recommended/LiteraryLuckHeel_Recco.png",
        "cartItemSrc" : "Modcloth/Cart/LiteraryLuckHeel_Cart.png",
        "itemImageSrc":"Modcloth/LiteraryLuckHeel_1.png",
        "itemTitle":"Literary Heel",
        "itemDescription":"Whether it's snagging a seat in the front row of a reading or getting pieces picked up for publication, you always seem to have serendipitous successes in your literary life. You're also lucky enough to have a trusty pair of shoes to take you from reading to residency - these shiny, blue heels, available for purchase in February! These stacked-heel shoes coordinate perfectly with a grey sheath and statement necklace, which you've donned for your award acceptance speech tonight. Whether you're heading to a craft class or out to sign a contract, these buckled beauties will take you anywhere!",
        "itemPrice":"$34.99",
          "hasSize" : false
      },
      {
        "id": "6",
        "index": "5",
        "largeItemSrc1":"Modcloth/MyFairFestival_1.png",
        "largeItemSrc2":"Modcloth/MyFairFestival_2.png",
        "recommendedItemSrc" : "Modcloth/Recommended/MyFairFestival_Recco.png",
        "cartItemSrc" : "Modcloth/Cart/MyFairFestival_Cart.png",
        "itemImageSrc":"Modcloth/MyFairFestival_1.png",
        "itemTitle":"Festival Raincoat",
        "itemDescription":"When dark clouds threaten a long-awaited music fest, this clear raincoat from Motel means that you can stay dry and still show off your vintage vest, plaid top, and cutoff denim! Self-proclaimed British cult brand Motel is dedicated to decking ladies out in vintage-inspired, bold designs that are nothing short of spellbinding. Completely transparent save for its white trim, this hooded coat proves a slick way to show off your style, allowing your outlook to stay fair, regardless of the forecast!",
        "itemPrice":"$89.99",
          "hasSize" : true
      },
      {
        "id": "7",
        "index": "6",
        "largeItemSrc1":"Modcloth/PuddleOfFun_1.png",
        "largeItemSrc2":"Modcloth/PuddleOfFun_2.png",
        "recommendedItemSrc" : "Modcloth/Recommended/PuddleOfFun_Recco.png",
        "cartItemSrc" : "Modcloth/Cart/PuddleOfFun_Cart.png",
        "itemImageSrc":"Modcloth/PuddleOfFun_1.png",
        "itemTitle":"Puddle Rainboot",
        "itemDescription":"When clouds roll in, you're quick to slip on these black rain boots and embark on a puddle-jumping adventure! You relish the opportunity to show off these zip-up galoshes, which feature a sleek silhouette, treaded sole, and snap-button accent. Wear these boots with a striped dress, sparkly tights, and a neon rain slicker, and your cheerful ensemble will steal the sunny spotlight, even when skies are grey!",
        "itemPrice":"$61.99",
          "hasSize" : false
      },
      {
        "id": "8",
        "index": "7",
        "largeItemSrc1":"Modcloth/RainyDaisyUmbrella_1.png",
        "largeItemSrc2":"Modcloth/RainyDaisyUmbrella_2.png",
        "recommendedItemSrc" : "Modcloth/Recommended/RainyDaisyUmbrella_Recco.png",
        "cartItemSrc" : "Modcloth/Cart/RainyDaisyUmbrella_Cart.png",
        "itemImageSrc":"Modcloth/RainyDaisyUmbrella_1.png",
        "itemTitle":"Rainy Daisy Umbrella",
        "itemDescription":"You'll skip through rainy mornings in sunny style with this floral umbrella as your wet-weather companion! Let this translucent, silver-accented accessory keep you blissfully dry as you watch its golden blooms get sprinkled with morning raindrops on your stroll to work. Matching this delightful umbrella with your button-up raincoat and patterned galoshes, you can look forward to a cheerful day, no matter what the forecast may hold!",
        "itemPrice":"$29.99",
          "hasSize" : false
      },
      {
        "id": "9",
        "index": "8",
        "largeItemSrc1":"Modcloth/StunInAMillion_1.png",
        "largeItemSrc2":"Modcloth/StunInAMillion_2.png",
        "recommendedItemSrc" : "Modcloth/Recommended/StunInAMillion_Recco.png",
        "cartItemSrc" : "Modcloth/Cart/StunInAMillion_Cart.png",
        "itemImageSrc":"Modcloth/StunInAMillion_1.png",
        "itemTitle":"Million Necklace",
        "itemDescription":"Dress up any ensemble by clasping this statement-making bib necklace above a V-neck frock or sweater. Upon linked, peach acrylic pieces, dazzles an opulent array of crystalline stones. Adjust the gold chain to the perfect length, then accessorize with simple pumps and an unfettered clutch, allowing this brilliant necklace to shine brightest, and you along with it!",
        "itemPrice":"$29.99",
          "hasSize" : false
      },
      {
        "id": "10",
        "index": "9",
        "largeItemSrc1":"Modcloth/TideAndJoy_1.png",
        "largeItemSrc2":"Modcloth/TideAndJoy_2.png",
        "recommendedItemSrc" : "Modcloth/Recommended/TideAndJoy_Recco.png",
        "cartItemSrc" : "Modcloth/Cart/TideAndJoy_Cart.png",
        "itemImageSrc":"Modcloth/TideAndJoy_1.png",
        "itemTitle":"Tide And Joy Dress",
        "itemDescription":"You add a thin belt to the fitted waist of this floral dress, then step into black opaque tights and glossy beige heels. With such lovely finishing touches to your look, all stress evaporates and you start toward the door with the cap sleeves of this lined dress framing your smile. The bright, blooming print in lemon, tangerine, lime, and grapefruit, washes over this open-back dress, while dual bows give it a darling feel. You're ready to take on tonight with a fresh wave of enthusiasm!",
        "itemPrice":"$57.99",
          "hasSize" : true
      }
    ],

    hotSpots : [
      {
        "id": "10",
        "hotSpotId":"1",
        "index": "0",
        "startTime":"0.0",
        "endTime":"0.114",
        "hotSpotStartX":"312",
        "hotSpotStartY":"411",
        "hotSpotStartWidth":"597",
        "hotSpotStartHeight":"669"
      },
      {
        "id": "2",
        "hotSpotId":"2",
        "index": "1",
        "startTime":"0.0",
        "endTime":"0.114",
        "hotSpotStartX":"544.5",
        "hotSpotStartY":"370.5",
        "hotSpotStartWidth":"211.5",
        "hotSpotStartHeight":"202.5"
      },
      {
        "id": "1",
        "hotSpotId":"3",
        "index": "0",
        "startTime":"0.0",
        "endTime":"0.114",
        "hotSpotStartX":"1084.5",
        "hotSpotStartY":"346.5",
        "hotSpotStartWidth":"625.5",
        "hotSpotStartHeight":"733.5"
      },
      //shot 2
      {
        "id": "1",
        "hotSpotId":"4",
        "index": "0",
        "startTime":"0.115",
        "endTime":"0.144",
        "hotSpotStartX":"259.5",
        "hotSpotStartY":"0",
        "hotSpotStartWidth":"750",
        "hotSpotStartHeight":"1080"
      },
      {
        "id": "10",
        "hotSpotId":"5",
        "index": "0",
        "startTime":"0.115",
        "endTime":"0.144",
        "hotSpotStartX":"1008",
        "hotSpotStartY":"0",
        "hotSpotStartWidth":"912",
        "hotSpotStartHeight":"1080"
      },
      //shot 3
      {
        "id": "1",
        "hotSpotId":"6",
        "index": "0",
        "startTime":"0.144",
        "endTime":"0.183",
        "hotSpotStartX":"508.5",
        "hotSpotStartY":"241.5",
        "hotSpotStartWidth":"1074",
        "hotSpotStartHeight":"838.5"
      },
      {
        "id": "10",
        "hotSpotId":"7",
        "index": "0",
        "startTime":"0.144",
        "endTime":"0.183",
        "hotSpotStartX":"1303.5",
        "hotSpotStartY":"553.5",
        "hotSpotStartWidth":"616.5",
        "hotSpotStartHeight":"526.5"
      },
      //shot 4
      {
        "id": "10",
        "hotSpotId":"8",
        "index": "0",
        "startTime":"0.184",
        "endTime":"0.203",
        "hotSpotStartX":"325.5",
        "hotSpotStartY":"424.5",
        "hotSpotStartWidth":"541.5",
        "hotSpotStartHeight":"655.5"
      },
      {
        "id": "2",
        "hotSpotId":"9",
        "index": "0",
        "startTime":"0.184",
        "endTime":"0.203",
        "hotSpotStartX":"472.5",
        "hotSpotStartY":"385.5",
        "hotSpotStartWidth":"258",
        "hotSpotStartHeight":"201"
      },
      {
        "id": "1",
        "hotSpotId":"10",
        "index": "0",
        "startTime":"0.184",
        "endTime":"0.203",
        "hotSpotStartX":"1089",
        "hotSpotStartY":"316.5",
        "hotSpotStartWidth":"646.5",
        "hotSpotStartHeight":"763.5"
      },
      //shot 5
      {
        "id": "10",
        "hotSpotId":"11",
        "index": "0",
        "startTime":"0.203",
        "endTime":"0.232",
        "hotSpotStartX":"232.5",
        "hotSpotStartY":"0",
        "hotSpotStartWidth":"841.5",
        "hotSpotStartHeight":"1080"
      },
      //shot 6
      {
        "id": "4",
        "hotSpotId":"12",
        "index": "0",
        "startTime":"0.232",
        "endTime":"0.269",
        "hotSpotStartX":"27",
        "hotSpotStartY":"22.5",
        "hotSpotStartWidth":"1720.5",
        "hotSpotStartHeight":"1057.5"
      },
      //shot 7
      {
        "id": "10",
        "hotSpotId":"13",
        "index": "0",
        "startTime":"0.269",
        "endTime":"0.324",
        "hotSpotStartX":"769.5",
        "hotSpotStartY":"273",
        "hotSpotStartWidth":"333",
        "hotSpotStartHeight":"404"
      },
      {
        "id": "2",
        "hotSpotId":"14",
        "index": "0",
        "startTime":"0.269",
        "endTime":"0.324",
        "hotSpotStartX":"859",
        "hotSpotStartY":"169",
        "hotSpotStartWidth":"225",
        "hotSpotStartHeight":"105"
      },
      {
        "id": "4",
        "hotSpotId":"15",
        "index": "0",
        "startTime":"0.269",
        "endTime":"0.324",
        "hotSpotStartX":"812",
        "hotSpotStartY":"853",
        "hotSpotStartWidth":"348",
        "hotSpotStartHeight":"185"
      },
      //shot 8
      {
        "id": "10",
        "hotSpotId":"17",
        "index": "0",
        "startTime":"0.324",
        "endTime":"0.335",
        "hotSpotStartX":"110",
        "hotSpotStartY":"469",
        "hotSpotStartWidth":"662",
        "hotSpotStartHeight":"611"
      },
      {
        "id": "2",
        "hotSpotId":"16",
        "index": "0",
        "startTime":"0.324",
        "endTime":"0.335",
        "hotSpotStartX":"405",
        "hotSpotStartY":"426",
        "hotSpotStartWidth":"273",
        "hotSpotStartHeight":"231"
      },
      {
        "id": "1",
        "hotSpotId":"18",
        "index": "0",
        "startTime":"0.324",
        "endTime":"0.335",
        "hotSpotStartX":"1063",
        "hotSpotStartY":"436",
        "hotSpotStartWidth":"660", "hotSpotStartHeight":"644"
      },
      //shot 9
      {
        "id": "9",
        "hotSpotId":"21",
        "index": "0",
        "startTime":"0.335",
        "endTime":"0.3628",
        "hotSpotStartX":"285",
        "hotSpotStartY":"477",
        "hotSpotStartWidth":"446",
        "hotSpotStartHeight":"266"
      },
      {
        "id": "3",
        "hotSpotId":"19",
        "index": "0",
        "startTime":"0.335",
        "endTime":"0.3628",
        "hotSpotStartX":"0",
        "hotSpotStartY":"520",
        "hotSpotStartWidth":"1022",
        "hotSpotStartHeight":"560"
      },
      {
        "id": "10",
        "hotSpotId":"20",
        "index": "0",
        "startTime":"0.335",
        "endTime":"0.3628",
        "hotSpotStartX":"128",
        "hotSpotStartY":"660",
        "hotSpotStartWidth":"630",
        "hotSpotStartHeight":"420"
      },
      {
        "id": "1",
        "hotSpotId":"22",
        "index": "0",
        "startTime":"0.335",
        "endTime":"0.3628",
        "hotSpotStartX":"1023",
        "hotSpotStartY":"397",
        "hotSpotStartWidth":"897",
        "hotSpotStartHeight":"683"
      },
      //shot 10
      {
        "id": "3",
        "hotSpotId":"23",
        "index": "0",
        "startTime":"0.3628",
        "endTime":"0.3920",
        "hotSpotStartX":"408",
        "hotSpotStartY":"421",
        "hotSpotStartWidth":"540",
        "hotSpotStartHeight":"659"
      },
      {
        "id": "10",
        "hotSpotId":"24",
        "index": "0",
        "startTime":"0.3628",
        "endTime":"0.3920",
        "hotSpotStartX":"552",
        "hotSpotStartY":"630",
        "hotSpotStartWidth":"305",
        "hotSpotStartHeight":"450"
      },
      {
        "id": "1",
        "hotSpotId":"25",
        "index": "0",
        "startTime":"0.3628",
        "endTime":"0.3920",
        "hotSpotStartX":"1129",
        "hotSpotStartY":"339",
        "hotSpotStartWidth":"617",
        "hotSpotStartHeight":"741"
      },
      {
        "id": "9",
        "hotSpotId":"26",
        "index": "0",
        "startTime":"0.3628",
        "endTime":"0.3920",
        "hotSpotStartX":"580",
        "hotSpotStartY":"384",
        "hotSpotStartWidth":"230",
        "hotSpotStartHeight":"245"
      },
      //shot 11
      {
        "id": "10",
        "hotSpotId":"27",
        "index": "0",
        "startTime":"0.398",
        "endTime":"0.431",
        "hotSpotStartX":"0",
        "hotSpotStartY":"0",
        "hotSpotStartWidth":"836",
        "hotSpotStartHeight":"1080"
      },
      {
        "id": "3",
        "hotSpotId":"28",
        "index": "0",
        "startTime":"0.398",
        "endTime":"0.431",
        "hotSpotStartX":"433",
        "hotSpotStartY":"0",
        "hotSpotStartWidth":"726",
        "hotSpotStartHeight":"987"
      },
      {
        "id": "1",
        "hotSpotId":"29",
        "index": "0",
        "startTime":"0.398",
        "endTime":"0.431",
        "hotSpotStartX":"1167",
        "hotSpotStartY":"0",
        "hotSpotStartWidth":"753",
        "hotSpotStartHeight":"1080"
      },
      //shot 12
      {
        "id": "9",
        "hotSpotId":"32",
        "index": "0",
        "startTime":"0.431",
        "endTime":"0.451",
        "hotSpotStartX":"238",
        "hotSpotStartY":"454",
        "hotSpotStartWidth":"446",
        "hotSpotStartHeight":"584"
      },
      {
        "id": "10",
        "hotSpotId":"31",
        "index": "0",
        "startTime":"0.431",
        "endTime":"0.451",
        "hotSpotStartX":"187",
        "hotSpotStartY":"675",
        "hotSpotStartWidth":"585",
        "hotSpotStartHeight":"405"
      },
      {
        "id": "1",
        "hotSpotId":"33",
        "index": "0",
        "startTime":"0.431",
        "endTime":"0.451",
        "hotSpotStartX":"979",
        "hotSpotStartY":"345",
        "hotSpotStartWidth":"909",
        "hotSpotStartHeight":"735"
      },
      {
        "id": "3",
        "hotSpotId":"30",
        "index": "0",
        "startTime":"0.431",
        "endTime":"0.451",
        "hotSpotStartX":"0",
        "hotSpotStartY":"496",
        "hotSpotStartWidth":"911",
        "hotSpotStartHeight":"584"
      },
      //shot 13
      {
        "id": "9",
        "hotSpotId":"34",
        "index": "0",
        "startTime":"0.451",
        "endTime":"0.5152",
        "hotSpotStartX":"528",
        "hotSpotStartY":"381",
        "hotSpotStartWidth":"212",
        "hotSpotStartHeight":"245"
      },
      {
        "id": "10",
        "hotSpotId":"36",
        "index": "0",
        "startTime":"0.451",
        "endTime":"0.5152",
        "hotSpotStartX":"358",
        "hotSpotStartY":"618",
        "hotSpotStartWidth":"432",
        "hotSpotStartHeight":"462"
      },
      {
        "id": "1",
        "hotSpotId":"37",
        "index": "0",
        "startTime":"0.451",
        "endTime":"0.5152",
        "hotSpotStartX":"1048",
        "hotSpotStartY":"372",
        "hotSpotStartWidth":"653",
        "hotSpotStartHeight":"708"
      },
      {
        "id": "3",
        "hotSpotId":"35",
        "index": "0",
        "startTime":"0.451",
        "endTime":"0.5152",
        "hotSpotStartX":"144",
        "hotSpotStartY":"400",
        "hotSpotStartWidth":"773",
        "hotSpotStartHeight":"680"
      },
      //shot 14
      {
        "id": "3",
        "hotSpotId":"38",
        "index": "0",
        "startTime":"0.5152",
        "endTime":"0.5445",
        "hotSpotStartX":"0",
        "hotSpotStartY":"441",
        "hotSpotStartWidth":"1196",
        "hotSpotStartHeight":"669"
      },
      {
        "id": "10",
        "hotSpotId":"39",
        "index": "0",
        "startTime":"0.5152",
        "endTime":"0.5445",
        "hotSpotStartX":"148",
        "hotSpotStartY":"528",
        "hotSpotStartWidth":"617",
        "hotSpotStartHeight":"552"
      },
      {
        "id": "9",
        "hotSpotId":"40",
        "index": "0",
        "startTime":"0.5152",
        "endTime":"0.5445",
        "hotSpotStartX":"292",
        "hotSpotStartY":"316",
        "hotSpotStartWidth":"537",
        "hotSpotStartHeight":"633"
      },
      {
        "id": "1",
        "hotSpotId":"41",
        "index": "0",
        "startTime":"0.5152",
        "endTime":"0.5445",
        "hotSpotStartX":"1023",
        "hotSpotStartY":"147",
        "hotSpotStartWidth":"897",
        "hotSpotStartHeight":"933"
      },
      //shot 15
      {
        "id": "9",
        "hotSpotId":"42",
        "index": "0",
        "startTime":"0.5445",
        "endTime":"0.568",
        "hotSpotStartX":"10",
        "hotSpotStartY":"34",
        "hotSpotStartWidth":"963",
        "hotSpotStartHeight":"920"
      },
      {
        "id": "10",
        "hotSpotId":"43",
        "index": "0",
        "startTime":"0.5445",
        "endTime":"0.568",
        "hotSpotStartX":"1",
        "hotSpotStartY":"954",
        "hotSpotStartWidth":"965",
        "hotSpotStartHeight":"126"
      },
      {
        "id": "3",
        "hotSpotId":"44",
        "index": "0",
        "startTime":"0.5445",
        "endTime":"0.568",
        "hotSpotStartX":"970",
        "hotSpotStartY":"225",
        "hotSpotStartWidth":"579",
        "hotSpotStartHeight":"855"
      },
      {
        "id": "1",
        "hotSpotId":"45",
        "index": "0",
        "startTime":"0.5445",
        "endTime":"0.568",
        "hotSpotStartX":"988",
        "hotSpotStartY":"0",
        "hotSpotStartWidth":"932",
        "hotSpotStartHeight":"1080"
      },
      //shot 16
      {
        "id": "5",
        "hotSpotId":"46",
        "index": "0",
        "startTime":"0.568",
        "endTime":"0.610",
        "hotSpotStartX":"460",
        "hotSpotStartY":"16",
        "hotSpotStartWidth":"1436",
        "hotSpotStartHeight":"983"
      },
      //shot 17
      {
        "id": "6",
        "hotSpotId":"47",
        "index": "0",
        "startTime":"0.610",
        "endTime":"0.6595",
        "hotSpotStartX":"783",
        "hotSpotStartY":"168",
        "hotSpotStartWidth":"375",
        "hotSpotStartHeight":"384"
      },
      {
        "id": "10",
        "hotSpotId":"48",
        "index": "0",
        "startTime":"0.619",
        "endTime":"0.6595",
        "hotSpotStartX":"847",
        "hotSpotStartY":"165",
        "hotSpotStartWidth":"291",
        "hotSpotStartHeight":"384"
      },
      {
        "id": "5",
        "hotSpotId":"49",
        "index": "0",
        "startTime":"0.619",
        "endTime":"0.6595",
        "hotSpotStartX":"820",
        "hotSpotStartY":"784",
        "hotSpotStartWidth":"375",
        "hotSpotStartHeight":"273"
      },
      //shot 18
      {
        "id": "9",
        "hotSpotId":"50",
        "index": "0",
        "startTime":"0.6595",
        "endTime":"0.6738",
        "hotSpotStartX":"532",
        "hotSpotStartY":"441",
        "hotSpotStartWidth":"222",
        "hotSpotStartHeight":"336"
      },
      {
        "id": "6",
        "hotSpotId":"51",
        "index": "0",
        "startTime":"0.6595",
        "endTime":"0.6738",
        "hotSpotStartX":"216",
        "hotSpotStartY":"441",
        "hotSpotStartWidth":"869",
        "hotSpotStartHeight":"639"
      },
      {
        "id": "10",
        "hotSpotId":"52",
        "index": "0",
        "startTime":"0.6595",
        "endTime":"0.6738",
        "hotSpotStartX":"529",
        "hotSpotStartY":"780",
        "hotSpotStartWidth":"225",
        "hotSpotStartHeight":"299"
      },
      {
        "id": "1",
        "hotSpotId":"53",
        "index": "0",
        "startTime":"0.6595",
        "endTime":"0.6738",
        "hotSpotStartX":"1083",
        "hotSpotStartY":"385",
        "hotSpotStartWidth":"690",
        "hotSpotStartHeight":"695"
      },
      //shot 19
      {
        "id": "1",
        "hotSpotId":"54",
        "index": "0",
        "startTime":"0.6738",
        "endTime":"0.7003",
        "hotSpotStartX":"0",
        "hotSpotStartY":"0",
        "hotSpotStartWidth":"549",
        "hotSpotStartHeight":"1080"
      },
      {
        "id": "6",
        "hotSpotId":"55",
        "index": "0",
        "startTime":"0.6738",
        "endTime":"0.7003",
        "hotSpotStartX":"559",
        "hotSpotStartY":"0",
        "hotSpotStartWidth":"944",
        "hotSpotStartHeight":"1080"
      },
      {
        "id": "10",
        "hotSpotId":"56",
        "index": "0",
        "startTime":"0.6738",
        "endTime":"0.7003",
        "hotSpotStartX":"838",
        "hotSpotStartY":"417",
        "hotSpotStartWidth":"138",
        "hotSpotStartHeight":"663"
      },
      {
        "id": "9",
        "hotSpotId":"57",
        "index": "0",
        "startTime":"0.6738",
        "endTime":"0.7003",
        "hotSpotStartX":"837",
        "hotSpotStartY":"66",
        "hotSpotStartWidth":"141",
        "hotSpotStartHeight":"350"
      },
      //shot 20
      {
        "id": "10",
        "hotSpotId":"58",
        "index": "0",
        "startTime":"0.7003",
        "endTime":"0.7301",
        "hotSpotStartX":"0",
        "hotSpotStartY":"0",
        "hotSpotStartWidth":"494",
        "hotSpotStartHeight":"1080"
      },
      {
        "id": "6",
        "hotSpotId":"59",
        "index": "0",
        "startTime":"0.7003",
        "endTime":"0.7301",
        "hotSpotStartX":"492",
        "hotSpotStartY":"0",
        "hotSpotStartWidth":"890",
        "hotSpotStartHeight":"1080"
      },
      {
        "id": "1",
        "hotSpotId":"60",
        "index": "0",
        "startTime":"0.7003",
        "endTime":"0.7301",
        "hotSpotStartX":"1380",
        "hotSpotStartY":"0",
        "hotSpotStartWidth":"540",
        "hotSpotStartHeight":"1080"
      },
      //shot 21
      {
        "id": "9",
        "hotSpotId":"62",
        "index": "0",
        "startTime":"0.7301",
        "endTime":"0.771",
        "hotSpotStartX":"489",
        "hotSpotStartY":"384",
        "hotSpotStartWidth":"254",
        "hotSpotStartHeight":"269"
      },
      {
        "id": "6",
        "hotSpotId":"63",
        "index": "0",
        "startTime":"0.7301",
        "endTime":"0.7590",
        "hotSpotStartX":"255",
        "hotSpotStartY":"406",
        "hotSpotStartWidth":"659",
        "hotSpotStartHeight":"674"
      },
      {
        "id": "10",
        "hotSpotId":"64",
        "index": "0",
        "startTime":"0.7301",
        "endTime":"0.7590",
        "hotSpotStartX":"541",
        "hotSpotStartY":"642",
        "hotSpotStartWidth":"224",
        "hotSpotStartHeight":"438"
      },
      {
        "id": "1",
        "hotSpotId":"65",
        "index": "0",
        "startTime":"0.7301",
        "endTime":"0.7590",
        "hotSpotStartX":"1024",
        "hotSpotStartY":"352",
        "hotSpotStartWidth":"606",
        "hotSpotStartHeight":"728"
      },
      //shot 22
      {
        "id": "7",
        "hotSpotId":"66",
        "index": "0",
        "startTime":"0.7590",
        "endTime":"0.8083",
        "hotSpotStartX":"837",
        "hotSpotStartY":"892",
        "hotSpotStartWidth":"243",
        "hotSpotStartHeight":"338"
      },
      {
        "id": "10",
        "hotSpotId":"67",
        "index": "0",
        "startTime":"0.7590",
        "endTime":"0.8083",
        "hotSpotStartX":"871",
        "hotSpotStartY":"243",
        "hotSpotStartWidth":"204",
        "hotSpotStartHeight":"500"
      },
      {
        "id": "6",
        "hotSpotId":"68",
        "index": "0",
        "startTime":"0.7590",
        "endTime":"0.8083",
        "hotSpotStartX":"987",
        "hotSpotStartY":"193",
        "hotSpotStartWidth":"245",
        "hotSpotStartHeight":"455"
      },
      {
        "id": "8",
        "hotSpotId":"69",
        "index": "0",
        "startTime":"0.7590",
        "endTime":"0.8083",
        "hotSpotStartX":"",
        "hotSpotStartY":"",
        "hotSpotStartWidth":"",
        "hotSpotStartHeight":""
      },
      //shot 23
      {
        "id": "9",
        "hotSpotId":"70",
        "index": "0",
        "startTime":"0.8083",
        "endTime":"0.914",
        "hotSpotStartX":"489",
        "hotSpotStartY":"384",
        "hotSpotStartWidth":"254",
        "hotSpotStartHeight":"269"
      },
      {
        "id": "6",
        "hotSpotId":"71",
        "index": "0",
        "startTime":"0.8083",
        "endTime":"0.914",
        "hotSpotStartX":"255",
        "hotSpotStartY":"406",
        "hotSpotStartWidth":"659",
        "hotSpotStartHeight":"674"
      },
      {
        "id": "10",
        "hotSpotId":"72",
        "index": "0",
        "startTime":"0.8083",
        "endTime":"0.914",
        "hotSpotStartX":"541",
        "hotSpotStartY":"642",
        "hotSpotStartWidth":"224",
        "hotSpotStartHeight":"438"
      },
      {
        "id": "1",
        "hotSpotId":"73",
        "index": "0",
        "startTime":"0.8083",
        "endTime":"0.914",
        "hotSpotStartX":"1024",
        "hotSpotStartY":"352",
        "hotSpotStartWidth":"606",
        "hotSpotStartHeight":"728"
      },
    ],

    cartItems:[]
  };

});
