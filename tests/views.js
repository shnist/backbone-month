describe("Views:", function() {

	describe("TodoListView", function() {

		it("exists", function() {
			expect(TodoListView).toBeDefined();
		});

		it("is a function", function() {
			expect(typeof TodoListView).toBe("function");
		});

		it("extends off Backbone's View", function() {
			var temp = new TodoListView();
			expect(temp.cid).toBeDefined();
			expect(temp.el).toBeDefined();
			expect(temp.options).toBeDefined();
		});

		it("it's element should be a list item", function() {
			var temp = new TodoListView();
			expect(temp.el.tagName).toBe("UL");
		});

		it("it's element should have an id of 'todolist'", function() {
			var temp = new TodoListView();
			expect(temp.el.id).toBe("todolist");
		});

	});

	describe("TodoListItemView", function() {

		it("exists", function() {
			expect(TodoListItemView).toBeDefined();
		});

		it("is a function", function() {
			expect(typeof TodoListItemView).toBe("function");
		});

		it("extends off Backbone's View", function() {
			var temp = new TodoListItemView();
			expect(temp.cid).toBeDefined();
			expect(temp.el).toBeDefined();
			expect(temp.options).toBeDefined();
		});

		it("it's element should be a list item", function() {
			var temp = new TodoListItemView();
			expect(temp.el.tagName).toBe("LI");
		});

		it("it's element should have a class of 'item'", function() {
			var temp = new TodoListItemView();
			expect(temp.el.className).toBe("item");
		});

		it("should have a template attribute", function() {
			var temp = new TodoListItemView();
			expect(temp.template).toBeDefined();
		});

		it("should start with an empty element", function() {
			var temp = new TodoListItemView();
			expect(temp.$el.html().length > 0).toBeFalsy();
		});

		describe("when rendered", function() {

			it("should render the template", function() {
				var temp = new TodoListItemView({
					model: new Todo({
						description: "Test"
					})
				}).render();
				expect(temp.$el.html().length > 0).toBeTruthy();
				expect(temp.$el.find("p").length === 1).toBeTruthy();
				expect(temp.$el.find("input").length === 1).toBeTruthy();
			});

		});

	});

	describe("The TodoListView instance", function() {

		it("should exist", function() {
			expect(todoListView).toBeDefined();
		});

		it("should have a collection attribute", function() {
			expect(todoListView.collection).toBeDefined();
		});

		it("should have a collection attribute which is an object", function() {
			expect(typeof todoListView.collection).toBe("object");
		});

		it("should have a collection attribute which is an instance of Todos", function() {
			expect(todoListView.collection.length).toBeDefined();
			expect(todoListView.collection.models).toBeDefined();
		});

		it("should be prepended to the body element", function() {
			expect($("body").find("> ul#todolist").length > 0).toBeTruthy();
		});

		describe("when rendered", function() {

			it("should render the three models", function() {
				todoListView.render();
				expect(todoListView.$el.html().length > 0).toBeTruthy();
				expect(todoListView.$el.find("p").length === 3).toBeTruthy();
				expect(todoListView.$el.find("li").length === 3).toBeTruthy();
			});

		});

	});

});