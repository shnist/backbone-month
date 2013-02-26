// LESSON 1: MODELS

// 1. Extend Backbone.Model to create a new Model called Todo
// 2. Add an attribute of 'completed' with a default value of false
// 3. Add a custom method 'complete' which sets the completed attribute to true
// 4. Add a custom method 'uncomplete' which sets the completed attribute to false
// 5. Create an instance of Todo named 'myFirstTodo' with a description attribute of "Buy Jamie and Nick a beer"
// 6. Create a new instance of Todo named 'mySecondTodo' with a description of "Play with Backbone Models"


// 6. Create a new instance of Todo named 'mySecondTodo' with a description of "Play with Backbone Models"



// 7. Set mySecondTodo completed state to true



// BONUS

// 8. Add a new custom method to Todo named 'toggle' which toggles the completed state

var changed,
	changedPriority;


var Todo = Backbone.Model.extend({

	defaults: {
		completed: false,
		priority: 0
	},
	initialize: function () {
		this.on('change', function () {
			changed = true;
		});

		this.on('change:priority', function () {
			changedPriority = true;
		});
	},
	complete: function () {
		this.set('completed', true);
	},
	uncomplete: function () {
		this.set('completed', false);
	},
	toggle: function () {
		this.set('completed', !this.get('completed'));
	},
	setPriority: function (priority) {
		this.set('priority', priority);
	}

});

var myFirstTodo = new Todo({
	description: 'Buy Jamie and Nick a beer'
});

var mySecondTodo = new Todo({
	description: 'Play with Backbone Models'
});

mySecondTodo.complete();





// 9. Add a new attribute to Todo named 'priority' with a default value of 0

// 10. Add a new custom method to Todo named 'setPriority' which sets the priority attribute to the given value

// 11. Bind a handler to the 'change' event which sets global var changed to true when the model is changed

// 12. Bind a handler to the 'change:<attr>' event which sets global var changedPriority to true only when the priority attribute is changed
