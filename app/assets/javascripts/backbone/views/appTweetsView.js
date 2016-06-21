var app = app || {};

app.TweetsView = Backbone.View.extend({

    el: "#tweet",

    render: function() {

        console.log("An instance of app.TweetsView has just been rendered");

        var appTweetsTemplate = $("#appViewTweets").html();

        this.$el.html(appTweetsTemplate);

        // var appTweetView = new app.TweetView();
        //
        // appTweetView.render();
    }
});
