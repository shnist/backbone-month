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
	}
});

// 1. Create an empty route which passes itself to a function called index

// 2. In the index function, tell it to render the view TodoList.Views.List:
//    - passing this.myTodoList in as a collection
//	  - render into the DOM element with id #container

// 3. Create a route called show with a param of id which passes itself to a function called show

// 4. In the show function, tell it to render the view TodoList.Views.Detail:
//    - passing the correct model from the this.myTodoList in using the id param
//	  - render into the DOM element with id #container

// BONUS: Create a splat which takes a search term from an HTML input field and searches the collection
//		  for models with that particular word in their description and render them in out in a new list
//		  view
