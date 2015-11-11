define([], function () {

"use strict";

var AboutView = Backbone.View.extend({
  initialize: function() {
  },
  events: {
    "click .personal, .technical": function (e) {
      var $content = $(e.currentTarget).find('.content');
      if ($content.hasClass('active')) {
        $content.removeClass('active');
        return;
      } else {
        $('.content').removeClass('active');
        $content.toggleClass('active');
      }
    },
  }
});

return AboutView;
  
})