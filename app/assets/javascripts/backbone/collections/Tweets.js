var app = app || {};

app.Tweets = Backbone.Collection.extend({

  url: "/trend",

  model: app.Tweet,

  initialize: function () {
    console.log("Collection initialized");

      // this.on("add", function(tweet) {
      //   var appTweetView = new app.TweetView({
      //       model: tweet
      //   });
      //
      //   // appTweetView.render();
      // });
      // console.log("Collection was renderized?");

  }
});
