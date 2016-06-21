var app = app || {};

app.TweetsView = Backbone.View.extend({
  el: "#tweet",

  render: function () {
    console.log( "An instance of app.TweetsView has just been rendered" );
    // Get the HTML that is inside the element with the ID of appViewTemplate
      // Defined in app/views/secrets/home.html.erb
    // var appViewTemplate = $("#appViewTemplate").html();
    // Set this.$el's current HTML to be whatever was in the script tag found above
    // this.$el.html( appViewTemplate );

    // After the appView is on the page, we can start loading other views in there
    // Create a new instance of the app.SecretInputView
    // var secretInputView = new app.SecretInputView();
    // Then render the secretInputView to the page (inside whatever element it defines or references)
    // secretInputView.render();
  }
});
