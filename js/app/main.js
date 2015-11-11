/* Requirejs configurations */
require.config({
	waitSeconds: 0,
	urlArgs: "bust=" + (new Date()).getTime(),
	baseUrl: "./js/app",
	paths: {
		"underscore": "../lib/underscore",
		"backbone": "../lib/backbone",
		"jquery": "../lib/jquery",
		"text": "../lib/text"
	},
	shim: {
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
		}
	}
});

/* Define our App global object */
var App = (function (App) {
	return App;
} (App || {}));

window.App = App;

/* Console fallback for ie8 */
window.console = window.console || {"log":function(){}};

/* Define device type */
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  App.mobile = true;
}

/* Define Mobile breakpoints */
App.Breakpoints = {};
App.Breakpoints.mobile = 690;
App.Breakpoints.tablet = 790;
App.Breakpoints.siteWidth = 1300;


/* Initialize script */
require([
	"jquery",
	"underscore",
	"backbone",
], function ($, _, Backbone) {

	require(["router"]);

});