describe("The Todos collection", function() {
    it("exists", function() {
        expect(Todos).toBeDefined();
    });
    it("is a function", function() {  
        expect(typeof Todos).toBe("function");
    });
    it("has a comparator function defined", function() {  
        expect(typeof Todos.comparator).toBe("function");
    });
});

describe("The myTodoList instance", function() {
    it("exists", function() {  
        expect(myTodoList).toBeDefined();
    });
    it("is an instance of Todos", function() {  
        expect(myTodoList instanceof Todos).toBeTruthy();
    });
    it("contains the models from the 1st lesson", function() {  
        expect(myTodoList.length).toBeGreaterThan(0);
    });
    it("now contains 3 models", function() {  
        expect(myTodoList.length).toBe(3);
    });
});

describe("The completedTodos array", function() {
    it("exists", function() {  
        expect(completedTodos).toBeDefined();
    });
    it("is an instance of array", function() {  
        expect(completedTodos instanceof Array).toBeTruthy();
    });
    it("contains at least 1 model", function() {  
        expect(completedTodos.length).toBeGreaterThan(0);
    });
    it("all models in completedTodos are completed", function() {  
        expect(completedTodos.length).toBe(myTodoList.where({completed: true}).length);
    });
});