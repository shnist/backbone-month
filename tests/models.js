describe("The Todo class", function() {

	it("exists", function() {
		expect(Todo).toBeDefined();
	});

	it("is a function", function() {
		expect(typeof Todo).toBe("function");
	});

	it("extends off Backbone's Model", function() {
		expect((new Todo()).cid).toBeDefined();
		expect((new Todo()).attributes).toBeDefined();
		expect((new Todo()).idAttribute).toBeDefined();
	});

	describe("should have a 'completed' attribute", function() {

		it("that exists", function() {
			expect((new Todo()).get('completed')).toBeDefined();
		});

		it("which can be true or false", function() {
			expect(typeof (new Todo()).get('completed')).toBe("boolean");
		});

		it("which defaults to false", function() {
			expect((new Todo()).get('completed')).toBe(false);
		});

	});

	describe("should have a 'complete' method", function() {

		it("that exists", function() {
			expect((new Todo()).complete).toBeDefined();
		});

		it("which is a function", function() {
			expect(typeof (new Todo()).complete).toBe("function");
		});

		it("which sets the completed to true when invoked", function() {
			var todo = new Todo();
			todo.complete();
			expect(todo.get('completed')).toBe(true);
		});

	});

	describe("should have a 'uncomplete' method", function() {

		it("that exists", function() {
			expect((new Todo()).uncomplete).toBeDefined();
		});

		it("which is a function", function() {
			expect(typeof (new Todo()).uncomplete).toBe("function");
		});

		it("which sets the completed to false when invoked", function() {
			var todo = new Todo();
			todo.uncomplete();
			expect(todo.get('completed')).toBe(false);
		});

	});

});

describe("Create a new instance of Todo", function() {

	it("with the name 'myFirstTodo'", function() {
		expect(window.myFirstTodo).toBeDefined();
	});

	it("with a 'description' attribute set to 'Buy Jamie and Nick a beer'", function() {
		expect(window.myFirstTodo.get('description')).toBeDefined();
		expect(typeof window.myFirstTodo.get('description')).toBe("string");
		expect(window.myFirstTodo.get('description')).toBe("Buy Jamie and Nick a beer");
	});

});

describe("Create a second instance of Todo", function() {

	it("with the name 'mySecondTodo'", function() {
		expect(window.mySecondTodo).toBeDefined();
	});

	it("with a 'description' attribute set to 'Play with Backbone Models'", function() {
		expect(window.mySecondTodo.get('description')).toBeDefined();
		expect(window.mySecondTodo.get('description')).toBe("Play with Backbone Models");
	});

	it("and set it's completed state to true", function() {
		expect(window.mySecondTodo.get('completed')).toBe(true);
	});

});

describe("Bonus tasks (if you have time):", function() {

	describe("Add a new custom method to the model", function() {

		it("with the name 'toggle'", function() {
			expect((new Todo()).toggle).toBeDefined();
		});

		it("which is a function", function() {
			expect(typeof (new Todo()).toggle).toBe("function");
		});

		it("which sets the 'completed' attribute to true when false", function() {
			var todo = new Todo();
			todo.toggle();
			expect(todo.get('completed')).toBe(true);
		});

		it("which sets the 'completed' attribute to false when true", function() {
			var todo = new Todo();
			todo.toggle();
			todo.toggle();
			expect(todo.get('completed')).toBe(false);
		});

	});

	describe("Add a new default attribute", function() {

		it("with the name 'priority'", function() {
			expect((new Todo()).get('priority')).toBeDefined();
		});

		it("which is a number", function() {
			expect(typeof (new Todo()).get('priority')).toBe("number");
		});

		it("which has a default value of '0'", function() {
			expect((new Todo()).get('priority')).toBe(0);
		});

	});

	describe("Add a new custom method to the model", function() {

		it("with the name 'setPriority'", function() {
			expect((new Todo()).setPriority).toBeDefined();
		});

		it("which is a function", function() {
			expect(typeof (new Todo()).setPriority).toBe("function");
		});

		it("which sets the 'priority' attribute to the given value", function() {
			var todo = new Todo();
			todo.setPriority(1);
			expect(todo.get('priority')).toBe(1);
		});

	});

	describe("Add a new listener for changes to the model", function() {

		it("which sets the global var 'changed' to true when the model changes", function() {
			window.changed = false;
			var todo = new Todo();
			todo.setPriority(3);
			expect(window.changed).toBe(true);
		});

	});

	describe("Add a new listener for changes to the priority attribute only", function() {

		it("which sets the global var 'changedPriority' to true only when the priority attribute changes", function() {
			window.changedPriority = false;
			window.changedDescription = false;
			var todo = new Todo();
			todo.on("change:completed", function() {
				window.changedCompleted = true;
			});
			todo.on("change:description", function() {
				window.changedDescription = true;
			});
			todo.setPriority(3);
			expect(window.changedCompleted).toBe(false);
			expect(window.changedDescription).toBe(false);
			expect(window.changedPriority).toBe(true);
		});

	});

});