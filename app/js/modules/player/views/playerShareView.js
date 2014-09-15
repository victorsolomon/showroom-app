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

      events: {
      },

      initialize: function() {
      },

      onShow: function() {
        $('.shareInput').val(app.config.shareUrl);
        var that = this;
        app.bindClickTouch($('.embedSelector > li'), function(event) {
          that.playerSizeSelected(event);
        });
      },

      onRender: function() {
        // TODO: what is .six40 doing?
        setTimeout(function() {
          $('.six40').click()
        }, 10);
      },

      openShareMenu: function() {
      },

      closeShareMenu: function() {
      },

      playerSizeSelected: function(event){
        $('.embedSelector > li').removeClass('selected');
        $(event.currentTarget).addClass('selected');

        var iframeWidth  = $(event.currentTarget).attr('data-width');
        var iframeHeight = $(event.currentTarget).attr('data-height');
        var iframeCode   = "&lt;iframe width=" + iframeWidth + " height=" + iframeHeight + " src='" + app.config.shareEmbedBaseUrl + "'&gt;&lt;/iframe&gt;"

        $('.shareTextArea').html(iframeCode);
        this.highlightEmbedCode();
      },

      highlightEmbedCode: function() {
        $('.shareTextArea')[0].select();
      },

      highlightShareCode: function(){
        $('.shareInput')[0].select();
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
