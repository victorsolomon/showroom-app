define([
    'underscore',
    'backbone'
], function (_, Backbone) {

  return {

    INITIAL_PLAY                   : "INITIAL_PLAY",
    OPEN_ACTIVE_DRAWER_CLICK       : "OPEN_ACTIVE_DRAWER_CLICK",
    CLOSE_ACTIVE_DRAWER_CLICK      : "CLOSE_ACTIVE_DRAWER_CLICK",
    OPEN_RECOMMENDED_DRAWER_CLICK  : "OPEN_RECOMMENDED_DRAWER_CLICK",
    CLOSE_RECOMMENDED_DRAWER_CLICK : "CLOSE_RECOMMENDED_DRAWER_CLICK",
    CB_PLAYBUTTON_CLICK            : "CB_PLAYBUTTON_CLICK",
    CB_PAUSEBUTTON_CLICK           : "CB_PAUSEBUTTON_CLICK",
    CB_JUMPTOTIME_CLICK            : "CB_JUMPTOTIME_CLICK",
    CB_SHAREBUTTON_CLICK           : "CB_SHAREBUTTON_CLICK",
    CB_FULLSCREEN_CLICK            : "CB_FULLSCREEN_CLICK",
    AC_LRG_ITEM_SCROLL_RIGHT       : "AC_LRG_ITEM_SCROLL_RIGHT",
    AC_LRG_ITEM_SCROLL_LEFT        : "AC_LRG_ITEM_SCROLL_LEFT",
    AC_LRG_ITEM_SIZE_SELECT        : "AC_LRG_ITEM_SIZE_SELECT",
    AC_LRG_ITEM_ADD_ITEM           : "AC_LRG_ITEM_ADD_ITEM",
    AC_RCM_ITEM_SCROLL_RIGHT       : "AC_RCM_ITEM_SCROLL_RIGHT",
    AC_RCM_ITEM_SCROLL_LEFT        : "AC_RCM_ITEM_SCROLL_LEFT",
    AC_RCM_ITEM_CLICK              : "AC_RCM_ITEM_CLICK",
    HOTSPOT_ITEM_CLICK             : "HOTSPOT_ITEM_CLICK",
    CHECKOUT_ITEM_REMOVED          : "CHECKOUT_ITEM_REMOVED",
    CHECKOUT_BUTTON_CLICK          : "CHECKOUT_BUTTON_CLICK",
    TAG_ITEM_CLICK                 : "TAG_ITEM_CLICK",
    ADD_ITEM_CLICK                 : "ADD_ITEM_CLICK",
    VID_INTERVAL_EVENT             : "VID_INTERVAL_EVENT",

    analyticVars : {

      INITIAL_PLAY : {
        'category' : 'initialPlay',
        'action' : 'play',
        'opt_label' : 'label',
        'opt_value' : 'value'
      },

      OPEN_ACTIVE_DRAWER_CLICK : {
        'category' : 'activeDrawer',
        'action' : 'openActiveDrawer',
        'opt_label' : 'label',
        'opt_value' : 'value'
      },

      OPEN_RECOMMENDED_DRAWER_CLICK : {
        'category' : 'recommendedDrawer',
        'action' : 'openRecommendedDrawer',
        'opt_label' : 'label',
        'opt_value' : 'value'
      },

      CLOSE_RECOMMENDED_DRAWER_CLICK : {
        'category' : 'recommendedDrawer',
        'action' : 'closeRecommendedDrawer',
        'opt_label' : 'label',
        'opt_value' : 'value'
      },

      CLOSE_ACTIVE_DRAWER_CLICK : {
        'category' : 'activeDrawer',
        'action' : 'closeActiveDrawer',
        'opt_label' : 'label',
        'opt_value' : 'value'
      },

      CB_SHAREBUTTON_CLICK : {
        'category' : 'controlBar',
        'action' : 'shareButtonClick',
        'opt_label' : 'label',
        'opt_value' : 'value'
      },

      CB_FULLSCREEN_CLICK : {
        'category' : 'controlBar',
        'action' : 'fullscreenClick',
        'opt_label' : 'label',
        'opt_value' : 'value'
      },

      AC_LRG_ITEM_SCROLL_RIGHT : {
        'category' : 'activeItem',
        'action' : 'activeItemScrollRight',
        'opt_label' : 'label',
        'opt_value' : 'value'
      },

      AC_LRG_ITEM_SCROLL_LEFT : {
        'category' : 'activeItem',
        'action' : 'activeItemScrollLeft',
        'opt_label' : 'label',
        'opt_value' : 'value'
      },

      AC_LRG_ITEM_SIZE_SELECT : {
        'category' : 'activeItem',
        'action' : 'sizeSelect',
        'opt_label' : 'label',
        'opt_value' : 'value'
      },

      AC_RCM_ITEM_SCROLL_RIGHT : {
        'category' : 'recommendedItem',
        'action' : 'recommendedItemScrollRight',
        'opt_label' : 'label',
        'opt_value' : 'value'
      },

      AC_RCM_ITEM_SCROLL_LEFT : {
        'category' : 'recommendedItem',
        'action' : 'recommendedItemScrollLeft',
        'opt_label' : 'label',
        'opt_value' : 'value'
      },

      AC_RCM_ITEM_CLICK : {
        'category' : 'recommendedItem',
        'action' : 'recommendedItemClick',
        'opt_label' : 'label',
        'opt_value' : 'value'
      },

      CHECKOUT_ITEM_REMOVED : {
        'category' : 'checkoutCart',
        'action' : 'checkoutItemRemovedClick',
        'opt_label' : 'label',
        'opt_value' : 'value'
      },

      //General/Global Events
      CB_PLAYBUTTON_CLICK : {
        'category' : 'controlBar',
        'action' : 'playButtonClick',
        'opt_label' : 'label',
        'opt_value' : 'value'
      },

      CB_PAUSEBUTTON_CLICK : {
        'category' : 'controlBar',
        'action' : 'pauseButtonClick',
        'opt_label' : 'label',
        'opt_value' : 'value'
      },

      CB_JUMPTOTIME_CLICK : {
        'category' : 'controlBar',
        'action' : 'jumpToTime',
        'opt_label' : 'label',
        'opt_value' : 'value'
      },

      TAG_ITEM_CLICK : {
        'category' : 'tag',
        'action' : 'tagClick',
        'opt_label' : 'label',
        'opt_value' : 'value'
      },

      ADD_ITEM_CLICK : {
        'category' : 'cart',
        'action' : 'addItem',
        'opt_label' : 'label',
        'opt_value' : 'value'
      },

      CHECKOUT_BUTTON_CLICK : {
        'category' : 'cart',
        'action' : 'checkoutItemClick',
        'opt_label' : 'label',
        'opt_value' : 'value'
      },

      VID_INTERVAL_EVENT : {
        'category' : 'vidInterval',
        'action' : 'none',
        'opt_label' : 'label',
        'opt_value' : 'value'
      },

    },

    getAnalyticsEventConfig : function(key) {
      return this.analyticVars[key];
    },

    GA_KEY : "",
    GA_SESSION_LENGTH : 10000, //in milliseconds

    USERID_GA_INDEX  : 1,
    MODULE_GA_INDEX  : 2,
    ROLLING_GA_INDEX : 3,

    GA_VISITOR_LEVEL_VAR_INDEX : 1,
    GA_SESSION_LEVEL_VAR_INDEX : 2,
    GA_PAGE_LEVEL_VAR_INDEX    : 3,

    userProfile      : "",
    moduleName       : "",
    isDebug          : false,
    sessionStartTime : "",


    initializeAnalytics : function(moduleName, isDebug, gaKey) {
      this.GA_KEY      = gaKey;
      this.isDebug     = isDebug;
      sessionStartTime = new Date().getTime();
      var userId       = this.getUserId();
      var moduleName   = "mainDemo";

      if (window._gaq) {
        return;
      }

      window._gaq = window._gaq || [];
      window._gaq.push(['_setAccount', this.GA_KEY ]);
      this.addCustomVar(this.USERID_GA_INDEX, 'userId', userId, this.GA_PAGE_LEVEL_VAR_INDEX);
      this.addCustomVar(this.MODULE_GA_INDEX, 'module', moduleName, this.GA_PAGE_LEVEL_VAR_INDEX);
      window._gaq.push(['_trackPageview']);

      var gaFile = this.isDebug ? 'u/ga_debug.js' : 'ga.js';

      (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/' + gaFile;
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
      })();

      var that = this;

      setInterval( function() {
        that.logWatchInterval();
      }, 10000);
    },

    addCustomVar : function(index, key, value, scope) {
      window._gaq.push(['_setCustomVar', index, key, value, scope]);
      this.ROLLING_GA_INDEX++;
    },

    deleteCustomVar : function(index) {
      window._gaq.push(['_deleteCustomVar', index]);
      this.ROLLING_GA_INDEX--;
    },

    logAnalyticEvent : function(eventConfig, pageLevelVars) {

      // eventConfig = AnalyticsConfig.getAnalyticsEventConfig( analyticEventConfigKey );

      var category           = eventConfig.category;
      var action             = eventConfig.action;
      var opt_label          = eventConfig.opt_label;
      var opt_value          = eventConfig.opt_value;
      var opt_noninteraction = eventConfig.opt_noninteraction;

      opt_label = (!opt_label) ? 'default' : opt_label;
      opt_value = (!opt_value) ? 'default' : opt_value;
      opt_noninteraction = (!opt_noninteraction) ? false : opt_noninteraction;
      console.log(pageLevelVars);

      for (var i in pageLevelVars) {
        this.addCustomVar(this.ROLLING_GA_INDEX, i, pageLevelVars[i], this.GA_PAGE_LEVEL_VAR_INDEX);
      }

      window._gaq.push(['_trackEvent', category, action, opt_label]);

      if (this.isDebug) {
        console.log( window._gaq );
        console.log( "GA Event tracked: Category" );
        console.log( eventConfig, pageLevelVars );
      }

      for (var i = this.ROLLING_GA_INDEX; i > this.MODULE_GA_INDEX; i--) {
        this.deleteCustomVar(i);
      }
    },

    logWatchInterval : function() {
      return;
      var totalSessionTime = new Date().getTime() - this.sessionStartTime;
      var currentPlaybackTime = videoController.getCurrentTime();
      var pageLevelVars = {'totalSessionTime' : totalSessionTime, 'currentPlaybackTime' : currentPlaybackTime};
      this.logAnalyticEvent( AnalyticsConfig.VID_INTERVAL_EVENT, pageLevelVars );
    },

    getUserId : function() {
      return "jeremy";
    },

    //start custom logging

    //GENERAL
    playButtonControlBarClick : function() {
      pageLevelVars = {};
      this.logAnalyticEvent(AnalyticsConfig.CB_PLAYBUTTON_CLICK, pageLevelVars);
    },

    pauseButtonControlBarClick : function() {
      pageLevelVars = {};
      this.logAnalyticEvent(AnalyticsConfig.CB_PLAYBUTTON_CLICK, pageLevelVars);
    },

    jumpToTimeClick : function(time) {
      pageLevelVars = { 'timeJumpedTo' : time };
      this.logAnalyticEvent(AnalyticsConfig.CB_JUMPTOTIME_CLICK, pageLevelVars);
    },

    shareButtonClick : function() {
        pageLevelVars = {};
        this.logAnalyticEvent(AnalyticsConfig.CB_SHAREBUTTON_CLICK, pageLevelVars);
    },

    fullscreenClick : function() {
      pageLevelVars = {};
      this.logAnalyticEvent(AnalyticsConfig.CB_FULLSCREEN_CLICK, pageLevelVars);
    },

    activeItemScrollRightClick : function() {
      pageLevelVars = {};
      this.logAnalyticEvent( AnalyticsConfig.AC_LRG_ITEM_SCROLL_LEFT, pageLevelVars );
    },

    activeItemScrollLeftClick : function() {
      pageLevelVars = {};
      this.logAnalyticEvent( AnalyticsConfig.AC_LRG_ITEM_SCROLL_RIGHT, pageLevelVars );
    },

    activeItemSizeSelectClick : function( size ) {
      pageLevelVars = { 'size' : size };
      this.logAnalyticEvent( AnalyticsConfig.AC_LRG_ITEM_SIZE_SELECT, pageLevelVars );
    },

    recommendedItemScrollRightClick : function() {
      pageLevelVars = {};
      this.logAnalyticEvent( AnalyticsConfig.AC_RCM_ITEM_SCROLL_RIGHT, pageLevelVars );
    },

    recommendedItemScrollLeftClick : function() {
      pageLevelVars = {};
      this.logAnalyticEvent( AnalyticsConfig.AC_RCM_ITEM_SCROLL_LEFT, pageLevelVars );
    },

    recommendedItemClick : function() {
      pageLevelVars = { "itemId" : itemId, "itemName" : itemName };
      this.logAnalyticEvent( AnalyticsConfig.ACR, pageLevelVars );
    },

    checkoutItemRemovedClick : function() {
      pageLevelVars = { "itemId" : itemId, "itemName" : itemName };
      this.logAnalyticEvent( AnalyticsConfig.CHECKOUT_ITEM_REMOVED, pageLevelVars );
    },

    tagItemControlBarClick : function(itemId, itemName) {
      pageLevelVars = { "itemId" : itemId, "itemName" : itemName };
      this.logAnalyticEvent( AnalyticsConfig.TAG_ITEM_CLICK, pageLevelVars );
    },

    addItemClick : function(itemId, itemName) {
      pageLevelVars = { "itemId" : itemId, "itemName" : itemName };
      this.logAnalyticEvent( AnalyticsConfig.ADD_ITEM_CLICK, pageLevelVars );
    },

    checkoutClick : function() {
      pageLevelVars = {};
      this.logAnalyticEvent( AnalyticsConfig.CHECKOUT_BUTTON_CLICK, pageLevelVars );
    }
  }
});
