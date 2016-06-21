var app = app || {};

app.Tweets = Backbone.Collection.extend({

  url: "/trend",

  model: app.Tweet,

  initialize: function () {
    console.log("Collection initialized");

    var appTweetView = new app.TweetView({
        model: app.Tweet
      });
      // Call render on this so we actually see the result on the page
      appTweetView.render();
      console.log("Collection was renderized?");

  }
});
