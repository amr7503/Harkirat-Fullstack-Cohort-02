/*
* Todo {
   title: String,
    description: String,
    completed: Boolean
  }
*/

const mongoose = require('mongoose');
//const { title } = require('process');
require('dotenv').config();
const api = process.env.MONGO_API;
mongoose.connect(api);


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
