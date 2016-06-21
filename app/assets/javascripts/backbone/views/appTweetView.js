var app = app || {};

app.TweetView = Backbone.View.extend({

  tagName: 'li',

  render: function () {

    var tweetHashTag = "Mario";
    // Set the newly created li's text to be the content from the secret that was passed in
    this.$el.text( tweetHashTag );
    // Put the new li at the start of the element with the ID of secrets
    this.$el.prependTo( "#twid" );
  }
});
