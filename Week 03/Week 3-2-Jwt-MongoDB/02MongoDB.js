// https://mongoosejs.com/
// https://gist.github.com/hkirat/23c42247d8a37de53b005d2668507a67


const mongoose = require('mongoose');

require('dotenv').config();
const api = process.env.MONGO_API;
mongoose.connect(api);

//describing user schema
const User = mongoose.model('Users', { name : String, email : String, password : String });

//creating a new user
const user = new User({ name: 'Amaresh',
     email: 'amaresh7503@gmail',
     password:'123' 
    });

//saving a new user
user.save().then(() => console.log('added'));
//kitty.save().then(() => console.log('meow'));