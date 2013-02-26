var app = app || {};

$(document).on("click", "a[href^='/']", function(event) {
	var href = $(event.currentTarget).attr('href');
	event.preventDefault();
    var url = href.replace(/^\//,'');
    app.router.navigate(url, { trigger: true });
    return false;
});

Backbone.Collection = Backbone.Collection.extend({
	localStorage: new Backbone.LocalStorage("People")
});

app.router = new Router();

Backbone.history.start({ pushState: true });