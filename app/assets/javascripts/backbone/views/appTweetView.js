var app = app || {};


app.TweetView = Backbone.View.extend({

  events: {
    "click .tweetHashTag": "showTweets"
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
    var a = '<a class="twitter-timeline"  href="https://twitter.com/hashtag/"' + $(this).text() + 'data-widget-id="745523145151418373">'+ $(this).text() + '</a> <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?\'http\':\'https\';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>';
    $(".panel-body").append(a);
  }
});
