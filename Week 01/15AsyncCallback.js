//Asynchronous - happening in parts parallely . Multiple things are context switching with each other
/*
Some common Async functions are :::
1. setTimeout(func,1000*1)
2.fs.readFile - to read a file from file system
3.Fetch - to fetch some data from an api endpoint
*/

const fs=require("fs");
//filesystem moduel

fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data)
})


console.log("Hii there")
let a=0
for(let i=0;i<1000000000;i++)
{
    a++;
}
console.log("Hii there 2")


/*
   Promises are syntactical sugar that makes this code slightly more readable
   To create an async function of our own
      ------------------------->Ugly way - create a wrapper on top of async function (using cb)*/
      //const fs = require('fs');

// my own asynchronous function
function kiratsReadFile(cb) {
  fs.readFile("a.txt", "utf-8", function(err, data) {
    cb(data);
  });
}

function onDone(data) {
  console.log(data)
}

kiratsReadFile(onDone)
     
//----------------------------->Cleaner way - promises

//const fs = require('fs');
function kiratsReadFile() {
  return new Promise(function(resolve) {
    fs.readFile("a.txt", "utf-8", function(err, data) {
      resolve(data);
    });
  })
}

// callback function to call
function onDone(data) {
  console.log(data)
}

kiratsReadFile().then(onDone);

////////////////////////////////////////
