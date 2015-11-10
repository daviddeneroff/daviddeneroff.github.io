define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {

"use strict";

$(document).ready(function() {

	var $page = $('#page');

	if ( $page.hasClass('index') ) {
		require(['pages/home']);
	}

});

});