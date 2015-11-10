require.config({
	waitSeconds: 0,
	urlArgs: "bust=" + (new Date()).getTime(),
	baseUrl: "/js/app",
	paths: {
		"underscore": "../lib/underscore",
		"backbone": "../lib/backbone",
		"jquery": "../lib/jquery",
		"text": "../lib/text",
		"imagesloaded": "../lib/imagesloaded.min"
	},
	jquery: {
	  exports: "$"
	},
	underscore: {
	  deps: ["jquery"],
	  exports: "_"
	},
	backbone: {
	  deps: ["jquery", "underscore"],
	  exports: "Backbone"
	},
	imagesloaded: {
		deps: ["jquery"]
	}
});

var App = (function (App) {
  return App;
} (App || {}));

/* Global sharing (only once necessary) */
window.App = App;

/* Console fallback for ie8 */
window.console = window.console || {"log":function(){}};

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  App.mobile = true;
}

// Mobile Breakpoints
App.Breakpoints = {};
App.Breakpoints.mobile = 650;
App.Breakpoints.tablet = 790;

App.guid = (function() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
               .toString(16)
               .substring(1);
  }
  return function() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
           s4() + '-' + s4() + s4() + s4();
  };
})();

require([
	"jquery",
	"underscore",
	"backbone"
], function() {
	require(["router"]);
});