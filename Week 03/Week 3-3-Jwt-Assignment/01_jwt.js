const jwt= require('jsonwebtoken');

//decode, verify , generate 

const value={
    name: "amaresh",
    accNo: "89176"
}

//jwt
const token=jwt.sign(value, 'secret');
console.log(token);

// this token has been generated using 'secret'  hence it can be verified using the same secret
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYW1hcmVzaCIsImFjY05vIjoiODkxNzYiLCJpYXQiOjE3MjQwMTEwMzZ9.p9SEWhP-Ej6Yh4JSG0huPISdsl3zGPP7nkT6_cFJrOs

const decoded=jwt.verify(token, 'secret');
console.log(decoded);