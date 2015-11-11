define([
  'views/modal'], function(ModalView) {

"use strict";

var Projects = Backbone.View.extend({
  initialize: function() {
  },
  events: {
    'click img': function () {
      // use data attr to load the right templates
      new ModalView({ content: "hi", className: 'modal img' }).render().show();
    }
  }
});

return Projects;

});