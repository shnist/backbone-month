// Views

// 1. Create a new View called "TodoListView"
// 2. It should be an unordered list
// 3. It should have an id of "todolist"
// 4. Create a new View called "TodoListItemView"
// 6. It should be a list item
// 7. It should have a class of "item"
// 8. Add a template to TodoListItemView with the following text '<p><%= description %> <input type="checkbox" name="checked" value="true"></p>'
// 9. Define a render function which renders the template into the element
// 10. Create a new instance of TodoListView called todoListView

var TodoListView = Backbone.View.extend({
	tagName: 'ul',
	id: 'todolist',
	render: function () {
		this.collection.each(function (item) {
			var newItem = new TodoListItemView({ model: item });
			this.$el.append(newItem.render().el);
		}, this);
		return this;
	}
});

var TodoListItemView = Backbone.View.extend({
	tagName: 'li',
	className: 'item',
	template: _.template('<p><%= description %><input type="checkbox" name="checked" value="true"></p>'),
	render: function () {
		this.$el.append(this.template(this.model.toJSON()));
		return this;
	}
});

var todoListView = new TodoListView({
	collection: myTodoList
});



// 11. Pass in a collection attribute refering to myTodoList

// 12. Prepend the todoListView element to the body

// 13. Define a render method which loops over the collection, creates new TodoListItemView views for each model and appends to the todoListView element

// 14. Render todoListView

$("body").prepend(todoListView.render().el);
