define([
  'underscore',
  'backbone'
], function (_, Backbone) {

    window.playerConfig = {

      mp4_video_src_small  : "revolverDemo1.mp4",
      mp4_video_src_med    : "revolverDemo2.mp4",
      mp4_video_src_lrg    : "091414_Demo_5.mp4",

      baseVideoPath        : "static/movies/",
      baseProductImagePath : "static/images/productImages/revolver/",

      checkoutType      : "shopify",
      checkoutUrl       : "mailto:we@helloshowroom.co?subject=Showroom! Showroom!&body=Tell me more!",
      shareUrl          : "http://www.helloshowroom.co",
      shareEmbedBaseUrl : "http://www.helloshowroom.co/player/showroom/index.html?config=revolverConfig",
      splashImage       : '',

      itemData: [
        {
          "id"              : "1",
          "index"           : "0",
          "largeItemSrc1"   : "Shot_1_Man_1.jpg",
          "itemImageSrc"    : "Shot_1_Man_2.jpg",
          "itemTitle"       : "WON HUNDRED KNIT GREY",
          "itemDescription" : "Masculine waffle knit with a scoop neck and fine tailoring. A perfect layer over a slim collared shirt.",
          "itemPrice"       : "$165",
          "hasSize"         : true,
          "sizes"           : [ 36, 38, 40, 42 ]
        },
        {
          "id"              : "2",
          "index"           : "1",
          "largeItemSrc1"   : "Shot_1_Woman_1.jpg",
          "itemImageSrc"    : "Shot_1_Woman_1.jpg",
          "itemTitle"       : "FIRST RITE ROLL TUNIC",
          "itemDescription" : "The one size roll tunic was cut with an easy, oversize fit to be comfortable, versatile, and perfect for year round wear. It is cut from 100% cotton gauze with a slightly crinkled texture which has been washed and dried. The interior is finished with french seams for a clean roll at the sleeve.",
          "itemPrice"       : "$140",
          "hasSize"         : true,
          "sizes"           : [ 36, 38, 40, 42 ]
        }
      ],

      hotSpots: [
        {
        "id": "3",
        "hotSpotId":"1",
        "index": "0",
        "startTime":"0.08",
        "endTime":"0.22",
        "hotSpotStartX":"0",
        "hotSpotStartY":"545",
        "hotSpotStartWidth":"506",
        "hotSpotStartHeight":"535"
      },
      {
        "id": "2",
        "hotSpotId":"2",
        "index": "0",
        "startTime":"0.08",
        "endTime":"0.122",
        "hotSpotStartX":"506",
        "hotSpotStartY":"568",
        "hotSpotStartWidth":"387",
        "hotSpotStartHeight":"512"
      },
      ]
    }
});
