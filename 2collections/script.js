var Todo = Backbone.Model.extend({
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

var myFirstTodo = new Todo({
	'description': "Buy Jamie and Nick a beer"
});

var mySecondTodo = new Todo({
	'description': "Play with Backbone Models"
});

mySecondTodo.complete();


// BONUS

// 8. Add a new custom method to Todo named 'toggle' which toggles the completed state

// 9. Add a new attribute to Todo named 'priority' with a default value of 0

// 10. Add a new custom method to Todo named 'setPriority' which sets the priority attribute to the given value

// 11. Bind a handler to the 'change' event which sets global var changed to true when the model is changed

// 12. Bind a handler to the 'change:<attr>' event which sets global var changedPriority to true only when the priority attribute is changed


// LESSON 2: COLLECTIONS
// 1. Extend Backbone.Collection to create a new Collection called Todos
// 2. Define a sort function that automatically sorts the collection by completed state
// 3. Create an instance of Todos called myTodoList containing
//		the models you created in Lesson 1 to this Collection
// 5. Add a third Todo to this collection with a description of 'eat a cat'
// 6. Filter the collection to exclude completed Todos, and store the output in a new array called completedTodos
// 7. BONUS: Log the text "New todo" to the console whenever a todo is reset or models are added
//           from the collection
// 8. BONUS 2: Log the text "Completed total has changed" to the console whenever a the number
//             of completed todos changes

var Todos = Backbone.Collection.extend({
	model: Todo,
	initialize: function () {
		this.on('change:completed', function () {
			console.log('Completed total has changed');
		});
	}
}, {
	comparator: function (model) {
		return model.get('completed');
	}
});

var myTodoList = new Todos([myFirstTodo, mySecondTodo, {'description': 'eat a cat', 'completed': true}]);

var completedTodos = myTodoList.filter(Todos.comparator);

myTodoList.on('add reset', function () {
	console.log('added');
});

var Todos = Backbone.Collection.extend({
    model: Todo
});

// 2. Define a sort function that automatically sorts the collection by completed state
Todos.comparator = function(todo) {
    return todo.get("completed");
};

// 3. Create an instance of Todos called myTodoList
var myTodoList = new Todos();

// 4. Add the Todo models you created in Lesson 1 to this Collection
myTodoList.add(myFirstTodo);
myTodoList.add(mySecondTodo);

// 5. Add a third Todo to this collection called
myTodoList.add(new Todo({description: "eat a cat"}));

// 6. Filter the collection to exclude completed Todos, and store the output in a new array called completedTodos
var completedTodos = myTodoList.filter(function (todo) {
    return todo.get("completed") === true;
});

// 7. BONUS: Log the text "Updated!" to the console whenever a todo is added, changed or removed from the collection
myTodoList.on("add change remove", function() {
    console.log("Updated!");
});