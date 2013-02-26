// Routers

var Router = Backbone.Router.extend({
	initialize: function() {
		this.myFirstTodo = new Todo.Model({
			'id': 1,
			'description': "Buy Jamie and Nick a beer"
		});

		this.mySecondTodo = new Todo.Model({
			'id': 2,
			'description': "Play with Backbone Models"
		});

		this.mySecondTodo.complete();

		this.myTodoList = new Todo.Collection([
			this.myFirstTodo,
			this.mySecondTodo
		]);

		this.myTodoList.add(new Todo.Model({'id': 3, description: "eat a cat"}));
	},
// 1. Create an empty route which passes itself to a function called index
// 3. Create a route called show with a param of id which passes itself to a function called show
	routes: {
		'show/:id':'show',
		'':'index'
	},
// 2. In the index function, tell it to render the view Todo.Views.List:
//	- passing this.myTodoList in as a collection
//	- render into the DOM element with id #container
	index: function (myTodoList) {
		var toDoView = new Todo.Views.List({
			el: '#container',
			collection: this.myTodoList
		}).render();
	},
// 4. In the show function, tell it to render the view TodoList.Views.Detail:
//	- passing the correct model from the this.myTodoList in using the id param
//	- render into the DOM element with id #container
	show: function (id){
		var toDoDetail = new Todo.Views.Detail({
			model: this.myTodoList.get(id)
		}).render().el;

		$('.detail').remove();
		$('#container').append(toDoDetail);
	}
});

/**
	Create a search view that is rendered at the same time
	add some event listeners for the on click event when the form is submitted
	this would be routed
	triggeres the rendering of another view with the search items
*/

// BONUS: Create a splat which:
//		  - takes a search term from an HTML input field
//		  - calls a search function when a button is pressed
//		  - searches the myTodoList collection for models with the search term in their description
//		  - render out the matching models to a new view, with a back button
//		  - show a "not found" message if no model descriptions match that term