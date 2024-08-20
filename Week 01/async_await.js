//Async await -- just syntactic sugar. Still uses callbacks/Promises under the hood

function amrAsyncFunction(){
    let p=new Promise(function(resolve){
        resolve("HII amrrr")
    })
    return p
}

//Normal Promise-then Syntax
function main(){
    amrAsyncFunction().then(function(val){
        console.log(val)
    })
}

//async-await syntax (best)
async function main2(){
    const val=await amrAsyncFunction();
    console.log(val);
}
main()
main2();

 

/*Any function that wants to use
await, needs to be async.
Rather than using the
.then syntax, we add
await before and get the
final value in the variable

*/