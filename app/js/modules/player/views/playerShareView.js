define([
  'marionette',
  'application',
  'hbs!modules/player/templates/playerShareView'
], function (Marionette, app, template) {

    return Marionette.ItemView.extend({
      template  : template,
      tagName   : 'div',
      className : 'share-menu',

      isOpen: false,

      animateOutTopValue      : '-55%',
      animateOutTopValueSmall : '-55%',

      events: {},

      initialize: function() {},

      onShow: function() {
        $("#share-region").attr('placeholder-top', $("#share-region").css('top'));
        $('.shareInput').val(app.config.shareUrl);
        var that = this;

        var iframeWidth      = '800';
        var iframeHeight     = '450';
        var outeriFrameWidth = '90%';
        var iframeCode       = '<div class="video-container" style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden;"><iframe width="' + iframeWidth +  '" height="' + iframeHeight + '" src="' + app.config.shareEmbedBaseUrl + '" style="position: absolute; top:0; left:0; width:100%; height:100%; border:0;" AllowFullScreen></iframe></div>';

        this.$('.shareTextArea').html(iframeCode);
        this.highlightEmbedCode();
        // app.bindClickTouch(this.$('.embedSelector > li'), function(event) {
        //   that.playerSizeSelected(event);
        // });
      },

      onRender: function() {
        setTimeout(function() {
          $('.six40').click()
        }, 10);
      },

      openShareMenu: function() {},

      closeShareMenu: function() {},

      playerSizeSelected: function(event){
        this.$('.embedSelector > li').removeClass('selected');
        $(event.currentTarget).addClass('selected');

        var iframeWidth  = '100%';
        var iframeHeight = 'auto';
        var iframeCode   = '<div id="iframe-container" style="max-width:' + iframeWidth + 'px"><div class="video-container" style="position:relative; padding-bottom:56.25%; padding-top:35px; height:0; overflow:hidden;"><iframe width=' + iframeWidth +  " height=" + iframeHeight + " src='" + app.config.shareEmbedBaseUrl + "' style='position: absolute; top:0; left:0; width:100%; height:100%;' AllowFullScreen></iframe></div></div>'";

        this.$('.shareTextArea').html(iframeCode);
        this.highlightEmbedCode();
      },

      highlightEmbedCode: function() {
        this.$('.shareTextArea')[0].select();
      },

      highlightShareCode: function(){
        this.$('.shareInput')[0].select();
      },

      animateIn: function() {
        $("#share-region").animate({ top: '0%' }, 500);
        this.isOpen = true;
      },

      animateOut: function() {
        this.isOpen = false;

        var hiddenTopValueToUse = (app.smallMode) ? this.animateOutTopValueSmall : this.animateOutTopValue;

        $("#share-region").animate({top: hiddenTopValueToUse}, 500);
      }
  });
});
