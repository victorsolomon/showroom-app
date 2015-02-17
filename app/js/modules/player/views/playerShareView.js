define([
  'marionette',
  'application',
  'hbs!modules/player/templates/playerShareView'
], function (Marionette, app, template) {

    return Marionette.ItemView.extend({
      template  : template,
      tagName   : 'div',
      className : 'showroom-share-menu',

      isOpen: false,

      events: {},

      initialize: function() {

      },

      onShow: function() {
        $('.shareInput').val(app.config.shareUrl);
        var that = this;

        var iframeWidth      = '800';
        var iframeHeight     = '450';
        var outeriFrameWidth = '90%';
        var iframeCode       = '<div class="video-container" style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden;"><iframe width="' + iframeWidth +  '" height="' + iframeHeight + '" src="' + app.config.shareEmbedBaseUrl + '" style="position: absolute; top:0; left:0; width:100%; height:100%; border:0;" AllowFullScreen></iframe></div>';

        this.$('.shareTextArea').val(iframeCode);

        app.bindClickTouch($('.close-share-panel'), function(event) {
          this.animateOut();
        }.bind(this));
      },

      highlightEmbedCode: function() {
        this.$('.shareTextArea')[0].select();
      },

      highlightShareCode: function(){
        this.$('.shareInput')[0].select();
      },

      animateIn: function() {
        if (event.target.classList[0] === 'share-icon-path') {
          $('.showroom-share-panel').show();
          $('.showroom-embed-panel').hide();
          this.highlightShareCode();
        } else if (event.target.classList[0] === 'embed-icon-path') {
          $('.showroom-share-panel').hide();
          $('.showroom-embed-panel').show();
          this.highlightEmbedCode();
        }

        $("#share-region").animate({ top: '0%' }, 250);
        this.isOpen = true;
      },

      animateOut: function() {
        this.isOpen = false;
        $("#share-region").animate({top: '-55%'}, 250);
      }
  });
 });
