const uuidGenerator = require('uuid/v4')
const fs = require('fs')

const todos = []
//// the following line will instead load the todos from a json file when the app starts
// const todos = require('../data.json')

//// The following function can be used to save the todos array to the json data file
// function save () {
//   const json = JSON.stringify(todos)
//   fs.writeFileSync('data.json', json, 'utf8')
// }

// CREATE - params should be an object with keys for name, description and completed
function create (params) {
  if(!params.name)throw new Error('Name is required')
  if(!params.name.length < 5) throw new Error('Name is too short')
  if(!params.description)params.description = 'My new todo list'
  if(!params.completed)params.completed =false

  params._id =uuidGenerator()
  todos.push(params)
}

  if (typeof params === 'object' && params.name.length >= 5) {
      todos.push({
        _id: uuidGenerator(),
        name: params.name,
        description: params.description || params.name,
        completed: params.completed || false
      })
    } else {
      return false
}
}
// READ (list & show)
function list () {
  // return list of all TODOs
  return todos
}
function show (id) {
  // find the TODO with this id
  var allTodos=list()
  for (var i = 0; i < allTodos.length; i++) {
    if(allTodos[i]._id===id) return allTodos[i]
  }
  return null;

//   allTodos=allTodos.filter(function(todo){
//     if(todo._id === id) return todo
//   })
//   return(allTodos[0]) ? allTodos[0]:null
// }

// UPDATE - params should be an object with KVPs for the fields to update
function update (id, params) {
  var todoById = show(id)
  if(!params.name)return false
  if(params.name.length < 5)return false

  for(var key in params){
    if(todoById.hasOwnProperty(key)){
      todoById[key] =params[key]
      }
    }
    return true
  }

// DESTROY (destroy & destroyAll)
function destroy (id) {
  var todoByid= show(id)
  var deletedIndex = todos.indexof(todoById)

  if(!todoById) return false
  if(todo.splice(deletedIndex, 1))return true
}

//   if(todos['_id']===id){
//     for(var i=0; i<todos.length;i++){
//       if(todos[i]['_id']===id){
//         todos.splice(i,1)
//         return true
//       }
//     }
//   }else return false
// }
function destroyAll(){
  todos.forEach(function(todo){
    destroy(todo._id)
  })
  return true
}
module.exports = {
  create,
  list,
  show,
  update,
  destroy
}
