var Todo = Todo || {};

Todo.Model = Backbone.Model.extend({
	defaults: {
		completed: false,
		priority: 0
	},
	initialize: function() {

		this.on('change', function() {
			window.changed = true;
		});

		this.on("change:priority", function() {
			window.changedPriority = true;
		});
	},
	complete: function() {
		this.set('completed', true);
	},
	uncomplete: function() {
		this.set('completed', false);
	},
	toggle: function() {
		this.set('completed', !this.get('completed'));
	},
	setPriority: function(newPriority) {
		this.set('priority', newPriority);
	}
});

Todo.Collection = Backbone.Collection.extend({
    model: Todo.Model
});

Todo.Views = {};

Todo.Views.List = Backbone.View.extend({
	tagName: "ul",
	className: "list",
	events: {
		"change input[type='checkbox']": "toggleComplete"
	},
	toggleComplete: function(e) {
		this.collection.get(e.currentTarget.id.replace('checkbox-','')).toggle();
		this.render();
	},
	render: function() {
		this.$el.empty();
		var self = this;
		this.collection.each(function(todo){
			var listItemHtml = new Todo.Views.ListItem({
				model: todo
			}).render().el;
			self.$el.append(listItemHtml);
		});
		return this;
	}
});

Todo.Views.ListItem = Backbone.View.extend({
	tagName: "li",
	className: "item",
	template: _.template('<p><input id="checkbox-<%= id %>" type="checkbox" <% if(completed) { %> checked="checked"<% } %> /> <a href="/show/<%= id %>"><%= description %></a></p>'),
	render: function() {
		this.$el.empty().append(this.template(this.model.toJSON()));
		return this;
	}
});

Todo.Views.Detail = Backbone.View.extend({
	className: "detail",
	template: _.template('<dl><dt>Id:</dt><dd><%= id %></dd><dt>Description:</dt><dd><%= description %></dd><dt>Complete?</dt><dd><%= completed %></dd></dl><a href="/">Back</a>'),
	render: function() {
		this.$el.empty().html(this.template(this.model.toJSON()));
		return this;
	}
});