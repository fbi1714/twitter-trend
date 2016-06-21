var app = app || {};

app.tweetRouter = Backbone.Router.extend({

    routes: {
        '': 'index'
    },

    index: function() {

        console.log("Router initialized");
        var appView = new app.TweetsView();
        appView.render();
    }
});
