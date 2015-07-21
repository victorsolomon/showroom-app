Showroom-App
============

#Setting up development environment

##Web

There are a few technologies that you will need to install in order to develop.  One is Compass which compiles all of our SASS into CSS for deployment and consumption by a browser.  The other is Node, for generating minimized/optimized builds that will be deployable to production

Install Compass (http://compass-style.org/install/)

There are a few ways to install compass.  This install assumes you will be using ruby gems for the install process (you should have this automatically on Mac machines).

###Setting up the ruby environment

- $ `gem update --system`
- $ `gem install compass`

Compass should now be installed.

In order to have SASS automatically compiled into CSS during development, we have a config.rb which specifies the SASS compilation configuration.  This file is located in `/showroomApp/app/config.rb`.

If you open terminal to this directory and run compass watch, all changes saved to a sass file will automatically generate css.

###Install node (for generating builds using r.js)

Very easy - head to [http://nodejs.org/download/](http://nodejs.org/download/) and download the appropriate binary installer or use `brew install node`.  r.js is very stable and isn't dependent on a specific version of node.

For auto-reload on save, install Nodemon, using NPM:

`npm install nodemon -g`

#Build and Deployment

This outlines the build, optimization and deployment methods that Showroom uses.

Showroom uses the r.js optimizer for generating builds (For more information see http://requirejs.org/docs/optimization.html)

Every individual deployable shoppable video has a configuration file associated with it.  This is to generate a deployable package that is production ready and optimized with only the files that are required for that specific video.

These configuration files can be found in /showroomApp/buildConfigs

Example - Let's take the configuration for the showroom demo video which is located at /showroomApp/buildConfigs/showroom-build.js
```
({
    //- paths are relative to this app.build.js file
    appDir: "../app",
    baseUrl: "js/",
    removeCombined: true,
    //- this is the directory that the new files will be. it will be created if it doesn't exist
    dir: "../../builds/showroom-build",
    paths: {
        'jquery': 'libs/jquery-2.0.3',
        'underscore': 'libs/lodash-1.3.1',
        'backbone': 'libs/backbone-1.1.0',
        'hbs': 'libs/hbs',
        'Handlebars' : 'libs/Handlebars',
        'marionette': 'libs/backbone.marionette',
        'serializeObject': 'libs/serializeObject',
        'i18nprecompile' : 'libs/hbs/i18nprecompile',
        'json2' : 'libs/hbs/json2',
        'backbone.wreqr': 'libs/backbone.wreqr',
        'backbone.eventbinder': 'libs/backbone.eventbinder',
        'backbone.babysitter': 'libs/backbone.babysitter'
    },

    shim: {
        backbone: {
            exports: 'Backbone',
            deps: ['jquery', 'underscore']
        },
        marionette: {
            deps: ['backbone']
        }
    },

    optimizeCss: "standard",
    modules: [
        {
            name: "modules/player/app"
        }
    ],

    fileExclusionRegExp: /\.git|.sass-cache|tool|component|sass|SquareBoba|boba|modcloth|taylor|square|config.rb|docs|index.js/
})
```

There are a few key things to point out (which are also better documented at the r.js optimization page - http://requirejs.org/docs/optimization.html):

- appDir is the root directory in which r.js begins to optimize files for
- baseUrl is the inclusion file base location for all requirejs includes
- dir is the output directory the build will be created in
- paths specifies where supporting files are located
- shim is an object to specify how the build should be generated so that dependencies are maintained, for instance backbone requires jquery prior to to it being initialized
- fileExclusionRegExp specifies what not to include in this build, this is how we can exclude all of the image and video files (among others) for a separate shoppable video

Once the configuration file is created we simply run this command:

`nodemon r.js -o buildConfigs/showroomBuild.js`

This will run through the optimizer and minimzer and create a fully deployable build into the specified directory.

###Note: There have been issues periodically where supporting libraries need to manually be copied over to the lib directory in the outputted build (specifically backbone and lodash).

##Deployment

Once this build has been created, it is fairly easy to deploy.  Within the build directory specifed, simply copy all of the files to a some hosting location.
Then you simply need to point to the index.html in this deployed location from an iframe (with the appropriate config query string variable).

#Config File

All files were hosted in an S3 bucket, housed within it's own appropriate folder. Because of this, a proper DB/API was never set up or even needed. Instead, we used a large config file, as detailed below:

```
define([
  'underscore',
  'backbone'
], function (_, Backbone) {

    window.playerConfig = {

      ************
        gaKey houses your Google Analytics and is referenced throughout
        the file. gaVendorName and videoName were used primarily for
        analytics tracking, to allow us to drive data down to the specific
        vendor, and then the specific video (as a vendor can have many videos). setting devmode to true will display the hotspots, which would otherwise be transparent.
      ************
      gaKey        : '',
      gaVendorName : 'Showroom',
      videoName    : 'showroom_1',
      devMode      : false

      ************
        baseVideoPath is the path from the /app folder which houses
        the videos. likewise for baseProductImagePath for any product
        images. colorVariantsImagePath was used if the product's colors
        were displayed by using an image (rare).
      ************
      baseVideoPath          : "static/movies/",
      baseProductImagePath   : "static/images/productImages/showroom/",
      colorVariantsImagePath : 'static/images/productImages/showroom/colorVariants/',

      ************
        mp4 and webm_video_src_med were folder paths for the basic
        videos needed for web, based off the previously mentioned
        baseVideoPath value. iphone_video_src and iphone_audio_src
        were the two files referenced when loading the videos on
        an iPhone. the two beacon_video files were the secondary
        overlay video with the beacons baked into it.
      ************
      mp4_video_src_med  : 'showroom/showroom.mp4',
      webm_video_src_med : 'showroom/showroom-webm.webm',
      iphone_video_src   : 'showroom/showroom.mpg',
      iphone_audio_src   : 'showroom/soundtrack.mp3',
      beacon_video_mp4   : 'showroom/showroomBeacon.mp4',
      beacon_video_webm  : 'showroom/showroomBeacon.webm',
      loaderStyle        : 'image',

      ************
        checkoutUrl could either be a mailto link or shopify checkout
        URL.
      ************
      checkoutUrl : "mailto:we@helloshowroom.co?subject=Showroom - Shop Video&body=Let's make video shoppable.",

      ************
        beaconColor and hotspotColor are kind of deprecated, since the
        push went towards having an overlay video with baked in beacons.
        checkoutType dictates if you'll be using a mailto link or shopify
        or some other kind of checkout process.

        shareUrl and shareEmbedUrl are used for sharing/embedding and are
        based off of what S3 bucket/folder you place the files into.
        splashImage is the posterFrame shown for the video and spinnerColor
        can take any CSS color property to re-color the spinner on an
        iPhone video.
      ************
      beaconColor       : '',
      checkoutType      : "email",
      shareUrl          : "http://www.helloshowroom.co/showroom/index.html",
      shareEmbedBaseUrl : "http://www.helloshowroom.co/showroom/index.html?config=showroomConfig",
      splashImage       : 'static/images/posterFrames/showroom.png',
      hotspotColor      : 'white',
      spinnerColor      : null,

      ************
        recommended is an array, which takes any amount of objects. This
        housed the recommended items show in the product panel.

        id references the item id chosen in the itemData array.
        itemImageSrc references the item itemImageSrc path
        chosen in the itemData array.
      ************
      recommended : [
        {
          "id"            : '4',
          "itemImageSrc" : 'denim_glacier_1.jpg'
        },
        {
          "id"            : '5',
          "itemImageSrc" : 'twill_glacier_1.jpg'
        },
        {
          "id"            : '1',
          "itemImageSrc" : "Blue_1.jpg"
        },
        {
          "id"            : '2',
          "itemImageSrc" : "White_1.jpg"
        },
        {
          "id"            : '3',
          "itemImageSrc" : "Charcoal_1.jpg"
        }
      ],

      ************
        The extraOptions array takes objects for any extraneous
        product options, outside of the typical color/size options.

        Each object starts with an id which references the otherOptionId
        value in an itemData object. It can then have multiple options,
        as shown by the option1, option2, and option 3 objects. They each
        contain a title, and variant array. The variant array expects object
        keys to have an array with value(s).
      ************

      // extraOptions: [
      //   {
      //     id: 1,
      //     option1: {
      //       title: 'something',
      //       variants: {
      //         XS : ['812187233'],
      //         S  : ['812187237'],
      //         M  : ['812187241'],
      //         L  : ['812187245'],
      //         XL : ['812187249']
      //       }
      //     },
      //     option2: {
      //       title: 'something else',
      //       variants: {
      //         1 : ['812187233'],
      //         4 : ['812187245'],
      //         5 : ['812187249'],
      //         10: ['304872390847']
      //       }
      //     },
      //     option3: {
      //       title: 'lalalalala',
      //       variants : {
      //         'do' : ['fsdfsdf'],
      //         're' : ['asfasd']
      //       }
      //     }
      //   },
      //   {
      //     id: 2,
      //     option1: {
      //       title: 'second option',
      //       variants: {
      //         XS : ['812187233'],
      //         S  : ['812187237'],
      //         M  : ['812187241'],
      //         L  : ['812187245'],
      //         XL : ['812187249']
      //       }
      //     }
      //   }
      // ],

      ************
        The itemData array is where all of the product information resides.
        It expects objects with the following key/value pairs:

        id - the id chosen for this item. since this is manually generated
        you can have it be any arbitrary number.

        itemImageSrc - the primary image used for the product, with the root of the url being referenced by the baseProductImagePath value dictated above.

        itemTitle - the item title, shown in product panel

        itemDescription - the item description, show in the product slider. Use an empty string if the item does not have a description.

        itemPrice - the item price, shown in the product panel

        hasSize - takes a boolean (true/false) and dictates whether size options should be displayed for the item

        colorBlockId - if the item has color options, give it an id which will be later be referenced by the variantColors model.

        sizes - this is now deprecated

        allImages - all images for the product, including the primary image, with the root of the url being referenced by the baseProductImagePath value dictated above.

        variants - primarily used for sizes, this is an object with key/value pairs. the key is the text used in the option button. the value is an array which takes the product id, for checkout processes.

        otherOptionId - references the option id from the extraOptions model
      ************
      itemData: [
        {
          "id"                 : "1",
          "index"              : "0",
          "itemImageSrc"       : "Blue_1.jpg",
          "itemTitle"          : "The Blue Everyday Oxford Jack",
          "itemDescription"    : "The Everyday Oxford is our calling card. If you could only own one shirt, this would be it. At any given day at the shop, at least one of us has one on. It is never overdressed or underdressed, and it looks perfectly fine with a few wrinkles.",
          "itemPrice"          : "$98",
          "hasSize"            : true,
          "colorBlockId"       : '1',
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "allImages"          : ["Blue_2.jpg", "Blue_1.jpg"],
          "variants" : {
            XS : ['812187233'],
            S  : ['812187237'],
            M  : ['812187241'],
            L  : ['812187245'],
            XL : ['812187249']
          },
          otherOptionId : 1
        },
        {
          "id"                 : "2",
          "index"              : "1",
          "itemImageSrc"       : "White_1.jpg",
          "itemTitle"          : "The White Everyday Oxford Jack",
          "itemDescription"    : "The Everyday Oxford is our calling card. If you could only own one shirt, this would be it. At any given day at the shop, at least one of us has one on. It is never overdressed or underdressed, and it looks perfectly fine with a few wrinkles.",
          "itemPrice"          : "$98",
          "hasSize"            : true,
          "colorBlockId"       : '1',
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "allImages"          : ["White_2.jpg", "White_1.jpg"],
          "variants" : {
            XS : ['812192337'],
            S  : ['812192369'],
            M  : ['812192737'],
            L  : ['812192741'],
            XL : ['812192745']
          },
          otherOptionId : 2
        },
        {
          "id"                 : "3",
          "index"              : "2",
          "itemImageSrc"       : "Charcoal_1.jpg",
          "itemTitle"          : "The Charcoal Everyday Oxford Jack",
          "itemDescription"    : "The Everyday Oxford is our calling card. If you could only own one shirt, this would be it. At any given day at the shop, at least one of us has one on. It is never overdressed or underdressed, and it looks perfectly fine with a few wrinkles.",
          "itemPrice"          : "$98",
          "hasSize"            : true,
          "colorBlockId"       : '1',
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "allImages"          : ["Charcoal_2.jpg", "Charcoal_1.jpg"],
          "variants" : {
            XS : ['812189549'],
            S  : ['812189829'],
            M  : ['812189833'],
            L  : ['812189837'],
            XL : ['812189841']
          }
        },
        {
          "id"                 : "4",
          "index"              : "3",
          "itemImageSrc"       : "denim_glacier_1.jpg",
          "itemTitle"          : "Denim Glacier Shirt",
          "itemDescription"    : "The Glacier Shirt is a collaboration with our favorite hat makers, FairEnds. A modern take on the western classic, the inspiration behind this shirt is Glacier National Park. It is equally at home casting dry flies from an empty bank as it is on a hike under the big sky.",
          "itemPrice"          : "$125",
          "hasSize"            : true,
          "hasColor"           : true,
          "colorBlockId"       : '2',
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "allImages"          : ["denim_glacier_2.jpg", "denim_glacier_1.jpg"],
          "variants"           : {
            XS : ['986914052'],
            S  : ['986914056'],
            M  : ['986914060'],
            L  : ['986914064'],
            XL : ['986914068']
          }
        },
        {
          "id"                 : "5",
          "index"              : "4",
          "itemImageSrc"       : "twill_glacier_1.jpg",
          "itemTitle"          : "Twill Glacier Shirt",
          "itemDescription"    : "The Glacier Shirt is a collaboration with our favorite hat makers, FairEnds. A modern take on the western classic, the inspiration behind this shirt is Glacier National Park. It is equally at home casting dry flies from an empty bank as it is on a hike under the big sky.",
          "itemPrice"          : "$125",
          "hasSize"            : true,
          "hasColor"           : true,
          "colorBlockId"       : '2',
          "sizes"              : [ 36, 38, 40, 42, 44 ],
          "allImages"          : ["twill_glacier_2.jpg", "twill_glacier_1.jpg"],
          "variants"           : {
            XS : ['986909080'],
            S  : ['986909084'],
            M  : ['986909088'],
            L  : ['986909092'],
            XL : ['986909096']
          }
        },

      ],

      ************
        This dictates the color variants for a product.

        id - references the id of the item stored in itemData

        colorSrc - can take any CSS color property

        colorBlockId - references the colorBlockId of the item stored in itemData
      ************
      variantColors: [
        {
          "id"           : "1",
          "colorSrc"     : "#b0b6cf",
          "colorBlockId" : '1'
        },
        {
          "id"           : "3",
          "colorSrc"     : "#ababb0",
          "colorBlockId" : '1'
        },
        {
          "id"           : "2",
          "colorSrc"     : "#FFF",
          "colorBlockId" : '1'
        },
        {
          "id"           : '4',
          "colorSrc"     : "#272a3d",
          "colorBlockId" : '2'
        },
        {
          "id"           : '5',
          "colorSrc"     : "#3b3b2f",
          "colorBlockId" : '2'
        },
      ],

      ************
        This object dictates the id, startTime/endTime (for when it would be displayed in the video), and width/height of the hotspot.

        If using an overlay with baked in beacons, you'll still have to use
        the following values:

        hotSpotId - a unique id for each hotspot

        startTime - when the hotspot is first created

        endTime - when the hotspot should be done

        hotSpotStartX - X coordinate of where in the video the hotspot should start

        hotSpotStartY - Y coordinate of where in the video the hotspot should start

        hotSpotStartWidth - the width of the hotspot box

        hotSpotStartHeight - the height of the hotspot box
      ************
      hotSpots: [
        {
          "id"                 : "1",
          "hotSpotId"          : "1",
          "index"              : "0",
          "startTime"          : "0.02",
          "endTime"            : "0.13",
          "hotSpotStartX"      : "1100",
          "hotSpotStartY"      : "250",
          "hotSpotStartWidth"  : "300",
          "hotSpotStartHeight" : "300",
        },
        {
          "id"                 : "1",
          "hotSpotId"          : "2",
          "index"              : "0",
          "startTime"          : "0.13",
          "endTime"            : "0.235",
          "hotSpotStartX"      : "1155",
          "hotSpotStartY"      : "275",
          "hotSpotEndX"        : "1300",
          "hotSpotEndY"        : "200",
          "hotSpotStartWidth"  : "300",
          "hotSpotStartHeight" : "300",
        },
        {
          "id"                 : "1",
          "hotSpotId"          : "3",
          "index"              : "0",
          "startTime"          : "0.239",
          "endTime"            : "0.31",
          "hotSpotStartX"      : "100",
          "hotSpotStartY"      : "200",
          "hotSpotStartWidth"  : "1300",
          "hotSpotStartHeight" : "900",
        },
        {
          "id"                 : "1",
          "hotSpotId"          : "4",
          "index"              : "0",
          "startTime"          : "0.31",
          "endTime"            : "0.39",
          "hotSpotStartX"      : "1370",
          "hotSpotStartY"      : "240",
          "hotSpotStartWidth"  : "400",
          "hotSpotStartHeight" : "200",
        },
        {
          "id"                 : "1",
          "hotSpotId"          : "5",
          "index"              : "0",
          "startTime"          : "0.393",
          "endTime"            : "0.56",
          "hotSpotStartX"      : "900",
          "hotSpotStartY"      : "300",
          "hotSpotStartWidth"  : "550",
          "hotSpotStartHeight" : "300",
        },
        {
          "id"                 : "1",
          "hotSpotId"          : "6",
          "index"              : "0",
          "startTime"          : "0.566",
          "endTime"            : "0.675",
          "hotSpotStartX"      : "100",
          "hotSpotStartY"      : "0",
          "hotSpotStartWidth"  : "550",
          "hotSpotStartHeight" : "600"
        },
        {
          "id"                 : "1",
          "hotSpotId"          : "7",
          "index"              : "0",
          "startTime"          : "0.675",
          "endTime"            : "0.785",
          "hotSpotStartX"      : "1400",
          "hotSpotStartY"      : "200",
          "hotSpotStartWidth"  : "400",
          "hotSpotStartHeight" : "400"
        },
        {
          "id"                 : "1",
          "hotSpotId"          : "8",
          "index"              : "0",
          "startTime"          : "0.788",
          "endTime"            : "0.89",
          "hotSpotStartX"      : "450",
          "hotSpotStartY"      : "100",
          "hotSpotStartWidth"  : "400",
          "hotSpotStartHeight" : "400"
        }
      ],

      // cartItems is deprecated
      cartItems:[]
    };
  });
```

#FFMPEG Settings to create an iPhone ready video

I forked [JSMPEG](https://github.com/phoboslab/jsmpeg) and integrated [BuffAudio.js](https://github.com/eipark/buffaudio) into it in order to sync MPEG videos and their appropriate MP3 file. This allowed us to bypass the typical Quicktime behavior of iPhone video. The subsequent quality is not perfect, but it's what worked for the time being. Using something like [Ogv.js](https://github.com/brion/ogv.js/) could help make the video better quality (and also eliminate the need of creating an audio file and/or using the jsmpeg/buffaudio cocktail).

When running the below commands, simply remember to change the third argument to your video folder path. The final argument is the output name of the file.

Make sure you have FFMPEG installed first:

`brew install ffmpeg` or visit [https://ffmpeg.org/](https://ffmpeg.org/)

For Audio
----
`ffmpeg -i /Users/davidgonzalez/Showroom/showroom/showroom-app/app/static/movies/showroom/showroomMobile.mp4 -codec:a libmp3lame -qscale:a 2 showroom-soundtrack.mp3`

For Video
----
`ffmpeg -i /Users/davidgonzalez/Showroom/showroom/showroom-app/app/static/movies/showroom/showroomMobile.mp4 -f mpeg1video -vf scale=720:-1 -b 0 showroom.mpg`

