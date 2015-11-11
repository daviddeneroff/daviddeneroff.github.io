define([
  "views/sections",
  "views/about",
  "views/projects",
  ], function (SectionsView, AboutView, ProjectsView) {
  
  "use strict";

  $(document).ready(function () {
    
    new SectionsView( { el: $('body')} );

    new AboutView({ el: $('.about')} );

    new ProjectsView({ el: $('.projects')} );

  })
})