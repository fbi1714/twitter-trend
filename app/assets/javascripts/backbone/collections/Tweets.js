var app = app || {};

app.Tweets = Backbone.Collection.extend({
  model: app.Tweet,

  initialize: function () {
    console.log("Collection initialized");
  }
});
