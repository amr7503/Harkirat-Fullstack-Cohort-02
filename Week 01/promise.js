/*const fs=require("fs")
const { resolve } = require("path")

function FileReading(){
    return new Promise (function(resolve){
        fs.readFile("a.txt","utf-8",function(err,data){
            resolve(data)
        })
    })
}

function OnDone(data){
    console.log("Hey hey "+data+" woww")
}

FileReading().then(OnDone)*/
                                                 ////////////////
var d=new Promise(function(resolve){
    setTimeout(function(){
        resolve("foo")
    },1000)
    })

function callback(){
    console.log(d);
}
console.log(d)
d.then(callback) /// .then gets called whenever the async function resolves