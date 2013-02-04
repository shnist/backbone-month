describe("The Todo class", function() {

  it("exists", function() {
    expect(Todo).toBeDefined();
  });

  it("is a function", function() {
  	expect(typeof Todo).toBe("function");
  });
  
  it("is a Backbone Model", function() {
  	expect((new Todo()).cid).toBeDefined();
  	expect((new Todo()).attributes).toBeDefined();
  	expect((new Todo()).idAttribute).toBeDefined();
  });

});