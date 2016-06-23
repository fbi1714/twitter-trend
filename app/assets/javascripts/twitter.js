var app = app || {};

app.tweets = new app.Tweets();

$(document).ready(function() {


    if ($("#tweet").length === 0) {
        return;
    };

    app.router = new app.tweetRouter();

    Backbone.history.start();
    // console.log("From Twitter file");

    //DONN
    var passData = function (data) {
      console.log(data);
    };

    $.ajax({
      url: "http:\/\/localhost:3000\/trend",
      dataType: "JSON",
      type: "GET"
    }).done( passData );

  });
