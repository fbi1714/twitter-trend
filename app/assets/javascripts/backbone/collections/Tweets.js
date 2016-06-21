var app = app || {};

app.Tweets = Backbone.Collection.extend({

  url: "/trend",

  model: app.Tweet,

  initialize: function () {
    console.log("Collection initialized");
  }
});
