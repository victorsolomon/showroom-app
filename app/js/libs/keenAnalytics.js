define([
  'underscore',
  'backbone'
], function(_, Backbone) {

  return {

    client: '',

    initKeen: function() {
      this.client = new Keen({
        projectId   : "551448e8e085573eb4fc10a1",   // String (required always)
        writeKey    : "ca5a5edb52e616f7a9df0e60f72755c83b4890ef3bd2c0996e65f661b6722a0aedaffa29b7515f3f8972b18f8a260adf2274a044e61e80d019ef3e0e13deaf11d4414fecc209d583e38d5fb3af4e4e463f736f93a58dacc33d76bb2e0be85c0c5664ec00988be7dc7c499df3e5ccb620",     // String (required for sending data)
        protocol    : "auto",              // String (optional: https | http | auto)
        host        : "api.keen.io/3.0",        // String (optional)
        requestType : "jsonp"            // String (optional: jsonp, xhr, beacon)
      })
    }
  }
});
