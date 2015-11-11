define([], function() {

"use strict";

var SectionsView = Backbone.View.extend({
  initialize: function() {
  },
  events: {
    'click .tabs li': function (e) {
      var liIndex = $(e.currentTarget).index();
      $('.sections li').removeClass('active');
      $($('.sections li')[liIndex]).addClass('active');
      $('.tabs li').removeClass('active');
      $(e.currentTarget).addClass('active');
    },
  }
});

return SectionsView;

});