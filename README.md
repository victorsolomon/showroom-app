Showroom-App
============

#Setting up development environment

##Web

There are a few technologies that you will need to install in order to develop.  One is Compass which compiles all of our SASS into CSS for deployment and consumption by a browser.  The other is Node, for generating minimized/optimized builds that will be deployable to production

Install Compass (http://compass-style.org/install/)

There are a few ways to install compass.  This install assumes you will be using ruby gems for the install process (you should have this automatically on Mac machines).

###Setting up the ruby environment

- $ gem update --system
- $ gem install compass

Compass should now be installed.

In order to have SASS automatically compiled into CSS during development, we have a config.rb which specifies the SASS compilation configuration.  This file is located in /showroomApp/app/config.rb.

If you open terminal to this directory and run compass watch, all changes saved to a sass file will automatically generate css.

###Install node (for generating builds using r.js)

Very easy - head to http://nodejs.org/download/ and download the appropriate binary installer.  r.js is very stable and isn't dependent on a specific version of node.

For auto-reload on save, install Nodemon, using NPM.

```
npm install nodemon -g

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

node r.js -o buildConfigs/showroom-build.js

This will run through the optimizer and minimzer and create a fully deployable build into the specified directory.

###Note: There have been issues periodically where supporting libraries need to manually be copied over to the lib directory in the outputted build (specifically backbone and lodash).

##Deployment

Once this build has been created, it is fairly easy to deploy.  Within the build directory specifed, simply copy all of the files to a some hosting location.
Then you simply need to point to the index.html in this deployed location from an iframe (with the appropriate config query string variable).

