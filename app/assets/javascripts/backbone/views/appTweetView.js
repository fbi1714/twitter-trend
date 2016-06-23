var app = app || {};


app.TweetView = Backbone.View.extend({

  events: {
    "click a.tweetHashTag": "showTweets"
  },

  tagName: 'li',

  render: function () {
    console.log("One Tweet");
    var tweetDiv = $("<span>");
    var a = $("<a class='tweetHashTag'>");
    a.attr("href", "#");
    a.text(this.model.get("name"));
    var helperDiv = $("<span>");
    helperDiv.text(" " + this.model.get("location") + " " + this.model.get("value"));
    tweetDiv.append(a).append(helperDiv);

    // Set the newly created li's text to be the content from the secret that was passed in
    this.$el.html( tweetDiv );
    // Put the new li at the start of the element with the ID of secrets
    this.$el.prependTo( "#twid" );
  },

  showTweets: function() {
    console.log("Render the cliked link");
  }
});
