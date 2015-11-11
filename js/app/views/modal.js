define([
'jquery',
'underscore',
'backbone',
'text!templates/modal/modal.html'], function ($, _, Backbone, ModalTemplate) {

"use strict";

var onKeyDown = function (e) {
  if (e.keyCode === 27) {
    var len = window.App.Modals.length;
    window.App.Modals[len-1].hide();
    return false;
  }
};

var ModalView = Backbone.View.extend({
  className: 'modal',
  initialize: function (opts) {
    opts = opts || {};
    this.content = opts.content;
    this.extraContent = opts.extraContent || false;
    this.guid = 122321;
  },

  render: function () {
    var html = _.template(ModalTemplate)({data: { content: this.content} });
    this.$el.append(html).hide();
    $('body').append(this.$el);
    if (this.extraContent) {
      $('.product-view').append(this.extraContent);
      $('.fg').unwrap();
    }
    
    return this;
  },

  show: function (cb) {
    _.defer(_.bind(function () {

      if (this.busy) return;

      var self = this;
      
      // this.$el.imagesLoaded().always(function () { 
      this.$el.show().addClass('active');
      // });

      window.App.Modals = window.App.Modals || [];
      window.App.Modals.push(this);

      if (window.App.Modals.length === 1) {
        var len = window.App.Modals.length;
        $('body').on('keydown.modal', onKeyDown);
      }


      /* Automatically Close if a success modal */
      if (
        this.$el.find('.alert-message.success')[0] ||
        this.$el.find('.alert-message.error')[0]
      ) {
        setTimeout(_.bind(this.hide, this), 5000);
      }

      if ( App.mobile && this.$el.hasClass('signup') ) {
        $('body').addClass('hide-content');
      }

    }, this));
    return this;
  },

  hide: function (e, doNotDestroy) {
    if (e) {
      e.preventDefault();
    }

    var self = this;

    var cb = function () {
      if (!doNotDestroy) {
        self.destroy();
        console.log('destroying');
        return undefined;
      }
    };

    this.$el.removeClass('active');
    _.delay(_.bind(cb, this), 500);

    window.App.Modals.pop();

    if (window.App.Modals.length === 0) {
      $('body').off('keydown.modal');
    }

    return this;
  },

  destroy: function () {
    //$('body').off('keydown.'+this.guid);
    $('body').removeClass('hide-content');
    this.undelegateEvents();
    this.$el.removeData().unbind().remove();
    // Remove view from DOM
    this.remove();
    Backbone.View.prototype.remove.call(this);
  },

  events: {
    'click .overlay': "hide",
    'click .close': "hide",
  }

});

return ModalView;

});
