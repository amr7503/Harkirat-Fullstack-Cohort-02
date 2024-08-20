const mongoose = require('mongoose');

require('dotenv').config();
const api = process.env.MONGO_API;

mongoose.connect(api).then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB:', err));


const express=require('express');
const app = express();
app.use(express.json());

//describing user schema
const User = mongoose.model('Users', { name : String, email : String, password : String });

app.post("/signup", async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = await User.findOne({email: username});
   //CRUD - create, read, update, delete   User.find(), User.findOne(), User.update(), User.delete()
    if(existingUser){
        return res.status(403).json({
            msg: "Username already taken",
        });
    }

       // await User.create({name, email: username, password}); // this is also correct

    const user = new User({ name: name,
        email: username ,
        password: password 
       });
   
   //saving a new user
   user.save();
   res.json({msg: "new Username added successfully"});
    
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});


