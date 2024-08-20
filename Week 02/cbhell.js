//wrapping another async function to creat our own using callback
function myOwnSetTimeout(fn,time){
    setTimeout(fn,time);
}

//myOwnSetTimeout(function(){console.log("HElloo")},5000)

//CallBack Hell - Callbacks leading to unnecessary indentations 

//Create a func that logs sth after 1s and then waits for 2s to log another

setTimeout(function(){
    console.log("Hii there")
    setTimeout(function(){console.log("Hello there")},2000)
},1000)

//Can be fixed using promises

function promisifiedMyOwnSetTimeout2(duration)
{
    let p = new Promise(function(resolve){
        setTimeout(resolve,duration)
    })
    return p;
}
//async-await sytac OR promise chaining => TO get rid of callback hell
const ans = promisifiedMyOwnSetTimeout2(1000)
ans.then(function(){
    console.log("log first")
})