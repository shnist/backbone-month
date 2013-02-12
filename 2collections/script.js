// LESSON 1 CODE: Do not edit!

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

// LESSON 2: COLLECTIONS
// 1. Extend Backbone.Collection to create a new Collection called Todos
// 2. Define a sort function that automatically sorts the collection by completed state
// 3. Create an instance of Todos called myTodoList containing
// 	  the models you created in Lesson 1 to this Collection
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
	console.log('New todo');
});