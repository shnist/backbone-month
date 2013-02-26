var TodoListView = Backbone.View.extend({
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
		this.$el.append(new TodoListItemView({
			model: todo
		}).render().el);
	}
});
var TodoListItemView = Backbone.View.extend({
	tagName: "li",
	className: "item",
	template: _.template('<p><%= description %> <input type="checkbox" name="checked" value="true"></p>'),
	render: function() {
		this.$el.empty().append(this.template(this.model.toJSON()));
		return this;
	}
});

var todoListView = new TodoListView({
	collection: myTodoList
});

$("body").prepend(todoListView.render().el);