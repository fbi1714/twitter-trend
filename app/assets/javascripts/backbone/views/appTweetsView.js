var app = app || {};

app.TweetsView = Backbone.View.extend({

    events: {
      'keyup #searchTweet': 'filterTweet',
      'click #doTweet' : 'filterButton'
    },

    filterTweet: function (e) {
      e.stopPropagation(); // Stop the event bubbling (we only want to run one event)
      e.stopImmediatePropagation();

      var currentValue = $(e.currentTarget).val();
      var allRelevantTweets = app.tweets.filter(function (tweet) {
        return tweet.get("location").toLowerCase().startsWith( currentValue.toLowerCase() );
      });
      var tweetsView = new app.TweetsView({
        collection: new app.Tweets(allRelevantTweets)
      });
      tweetsView.render();
    },
    filterButton: function () {
      console.log("Search button was clicked");
    },

    el: "body",

    render: function() {

        console.log("An instance of app.TweetsView has just been rendered");

        var appTweetsTemplate = $("#appViewTweets").html();

        $("#tweet").html(appTweetsTemplate);


        this.collection.each(function (tweet) {
          var appTweetView = new app.TweetView({
              model: tweet
          });
          appTweetView.render();
        });
    }
});
