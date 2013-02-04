describe("The Todos collection", function() {
  it("exists", function() {
    expect(Todos).toBeDefined();
  });
  it("is a function", function() {
  	expect(typeof Todos).toBe("function");
  });
});