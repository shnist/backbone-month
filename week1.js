// LESSON 1: MODELS


// 1. Extend Backbone.Model to create a new Model called Todo

// 2. Add an attribute of 'completed' with a default value of false

// 3. Add a custom method 'complete' which sets the completed attribute to true

// 4. Add a custom method 'uncomplete' which sets the completed attribute to false

// 5. Create an instance of Todo named 'myFirstTodo' with a description attribute of "Buy Jamie and Nick a beer"

// 6. Create a new instance of Todo named 'mySecondTodo' with a description of "Play with Backbone Models"

// 7. Set mySecondTodo completed state to true

// BONUS

// 8. Add a new custom method to Todo named 'toggle' which toggles the completed state

// 9. Add a new attribute to Todo named 'priority' with a default value of 0

// 10. Add a new custom method to Todo named 'setPriority' which sets the priority attribute to the given value

// 11. Bind a handler to the 'change' event which sets global var changed to true when the model is changed

// 12. Bind a handler to the 'change:<attr>' event which sets global var changedPriority to true only when the priority attribute is changed



// LESSON 2: COLLECTIONS


// 1. Extend Backbone.Collection to create a new Collection called Todos

// 2. Define a sort function that automatically sorts the collection by completed state

// 3. Create an instance of Todos called myTodoList

// 4. Add the Todo models you created in Lesson 1 to this Collection

// 5. Add a third Todo to this collection called

// 6. Filter the collection to exclude completed Todos, and store the output in a new array called completedTodos

// 7. BONUS: Log the text "Updated!" to the console whenever a todo is added, changed or removed from the collection
