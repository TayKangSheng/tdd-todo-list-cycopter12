const assert = require('assert')
const todos = require('../controllers/todos_controller.js')

// // Use Assert to Test the functionality of all your CRUD methods e.g.

// create
var todoItem1={
  name: 'Take out the trash',
  description: 'trash',
  completed: true
}
var todoItem2={
  name:
  description:
  Completed:
}
var todoItem3={
  description:
  Completed:
}

assert.strictEqual(todos.create(todoItem1), true, 'Should return true')
assert.strictEqual(todos.create(todoItem2), false, 'Function create, object not create should have at least 5 length')
assert.strictEqual(todos.create(todoItem3), false, '')

// var todo = todos.list()[0]
// assert.strictEqual(todos.list().length, 1, 'params should be an object with keys for name, description and completed')
// assert.strictEqual(todo['name'], 'Take out the trash', 'Todo object should have a "name" property')
// assert.strictEqual(todo['description'], 'trash', 'Todo object should have a "description" property')
// assert.strictEqual(todo['completed'], true, 'Todo object should have a "completed" property')
// assert.strictEqual(todos.create({'name': 'dick'}), 'name is less than 5 characters, terminating process', 'constructor was denied from creating an object')
// assert.ok(todos.list()[0].hasOwnProperty('_id'), 'Should automatically create an _id property for each new TODO and assign it a UUID')
// // READ

// list
assert.strictEqual(todos.list().length, 0, 'List should return an array of all todos')

// //show
var checkId =todo.list()[0]._id
assert.strictEqual(todos.show(checkId), todos.list()[0], 'Show should return Todo object with specified id')
assert.strictEqual(todos.show('nonexistingID'), null, 'Should return null if no TODO with that id exists')

// update



//destroy

//Destroy(id)
