const express = require('express');
const app = express();

app.get('/', (req, res ,next) => {
  //res.send('Hello World!');
  console.log("req1");
  next();
},function(req,res){
    console.log("req2");
    res.send("Hello World2");
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});


//Middleware - next()