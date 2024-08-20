
//assignment - A website which has 2 endpoints - 
/*
POST /signin 
Body - { 
  username: string 
  password: string 
  } 
  Returns a json web token with username encrypted

GET /users 
Headers - 
Authorization header 
Returns an array of all users if user is signed in (token is correct) 
Returns 403 status code if not

  */


const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json());

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

function userExists(username, password) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array
  return ALL_USERS.some(user => user.username === username && user.password === password);
  // OR use for loop
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

// COPY THE TOKEN AND SEND A GET REQUEST TO /users WITH AUTHORIZATION HEADER AS BEARER TOKEN VALUE TO GET THE LIST OF USERS

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username
    res.json({users : ALL_USERS
      .filter(user => user.username !== username)
      .map(user => user.name)
    });
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});


// app.get("/users", function (req, res) {
//   console.log("GET /users request received");
  
//   const token = req.headers.authorization;

//   if (!token) {
//     console.log("No token provided");
//     return res.status(403).json({
//       msg: "No token provided",
//     });
//   }

//   try {
//     const decoded = jwt.verify(token, jwtPassword);
//     console.log("Token verified:", decoded);
    
//     const username = decoded.username;
//     console.log("Username from token:", username);

//     const users = ALL_USERS.filter(user => user.username !== username);
//     console.log("Returning users:", users);

//     return res.json(users);
//   } catch (err) {
//     console.log("Invalid token:", err);
//     return res.status(403).json({
//       msg: "Invalid token",
//     });
//   }
// });


app.listen(3000);


// //// ////  Improved userExists function with logging /// //// / //// ///////
//
// function userExists(username, password) {
//   console.log("Checking for user:", username, "with password:", password);
//   const user = ALL_USERS.find(user => user.username === username && user.password === password);
  
//   if (user) {
//     console.log("User found:", user);
//     return true;
//   } else {
//     console.log("User not found");
//     return false;
//   }
// }
