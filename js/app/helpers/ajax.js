define([
"jquery",
"underscore"
], function ($, _) {

"use strict";
/*globals alert, console */

/* Default flow for ajax requests */
var post = function (url, data, success, failure) {
  var params;
  var json;
  if (typeof data === "string") {
    params = data;
  } else {
    params = $.param(data);
  }

  $.post(url, params, function (data, status, xhr) {
    if (status !== 'success') {
      alert('server error');
      return;
    }

    var json = $.parseJSON(data);
    console.log(json);

    if ( json.status === "SUCCESS" || json.status === 1 || json.success ) {
      if (_.isFunction(success)) {
        success(json);
      }
    } else {
      if (_.isFunction(failure)) {
        failure(json);
      }
    }

  });
};

var get = function (opts) {
  opts = opts || {};
  var url = opts.url;
  var success = opts.success;
  var failure = opts.failure;
  var serverError = opts.serverError;

  $.get(url, function (data, status, xhr) {
    if (status !== 'success') {
      if (_.isFunction(failure)) {
        failure(status);
      }
      return;
    }

    // check if object returned is string
      if(_.isString(data)){
          data = JSON.stringify(data);
      }
      var json = $.parseJSON(data);
      
    if (_.isFunction(success)) {
      success(json);
    }

  }).fail(function () {
    if (serverError) {
      serverError();
    }
  });

};

/* Available server ajax functions */
var AjaxHelper = {
  // addToCart: function (item, success, failure) {
  //   post("/bornajax/checkout_cart/add", item, success, failure);
  // },
  getNewTemplate: function (opts) {
    opts.url = "/bornajax/catalog_product/quickviewblock/id/"+opts.id;
    get(opts);
  },
};

return AjaxHelper;

});