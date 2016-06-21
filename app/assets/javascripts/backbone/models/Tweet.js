var app = app || {};

app.Tweet = Backbone.Model.extend({


  initialize: function () {

    this.render();

  },
  render: function () {
    console.log("Fabio Camatti");
    var modelView = new app.TweetView();
    modelView.render();
  }

});
