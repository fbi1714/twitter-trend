var app = app || {};

app.tweetRouter = Backbone.Router.extend({

    routes: {
        '': 'index'
    },

    index: function() {
      app.tweets.fetch().done(function () {
        // Ask for all of the tweets and then give them all to a new TweetsView to render
        var allRelevantTweets = app.tweets.filter(function (tweet) {
          return tweet.get("location").toLowerCase().startsWith( "s" );
        });
        var tweetsView = new app.TweetsView({
          collection: new app.Tweets( allRelevantTweets )
        });
        tweetsView.render();
      });
    }
});
