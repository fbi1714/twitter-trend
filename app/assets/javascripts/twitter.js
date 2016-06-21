var app = app || {};

app.tweets = new app.Tweets();

$(document).ready(function() {

    if ($("#tweet").length === 0) {
        return
    };

    app.router = new app.tweetRouter();

    app.tweets.fetch();

    Backbone.history.start();

});
