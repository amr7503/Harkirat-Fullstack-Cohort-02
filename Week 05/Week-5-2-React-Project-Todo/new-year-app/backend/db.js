/*
* Todo {
   title: String,
    description: String,
    completed: Boolean
  }
*/

const mongoose = require('mongoose');
//const { title } = require('process');
mongoose.connect('mongodb+srv://amaresh7503:1wqgqbxjzn@cluster0.vkuorvr.mongodb.net/todos');


//describing user schema
const todoSchema = mongoose.Schema({ 
    title : String, 
    description : String, 
    completed : Boolean 
});

const todo = mongoose.model('todos', todoSchema);


module.exports = {
    todo
}
