var TodoList = TodoListApp || {};

TodoList.Model = Backbone.Model.extend({
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

TodoList.Collection = Backbone.Collection.extend({
    model: TodoList.Model
});

TodoList.Views = {};

TodoList.Views.List = Backbone.View.extend({
	tagName: "ul",
	id: "todolist",
	initialize: function() {
		_.bindAll(this, "appendTodo");
	},
	render: function() {
		this.$el.empty();
		this.collection.each(this.appendTodo);
		return this;
	},
	appendTodo: function(todo) {
		this.$el.append(new TodoList.Views.ListItem({
			model: todo
		}).render().el);
	}
});

TodoList.Views.ListItem = Backbone.View.extend({
	tagName: "li",
	className: "item",
	template: _.template('<p><%= description %> <input type="checkbox" name="checked" value="true"></p>'),
	render: function() {
		this.$el.empty().append(this.template(this.model.toJSON()));
		return this;
	}
});