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
        app.bindClickTouch(this.$('.embedSelector > li'), function(event) {
          that.playerSizeSelected(event);
        });
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

        var iframeWidth  = $(event.currentTarget).attr('data-width');
        var iframeHeight = $(event.currentTarget).attr('data-height');
        var iframeCode   = "&lt;iframe width=" + iframeWidth + " height=" + iframeHeight + " src='" + app.config.shareEmbedBaseUrl + "'&gt;&lt;/iframe&gt;"

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
