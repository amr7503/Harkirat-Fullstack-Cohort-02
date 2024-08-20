function promisifiedTimeout(time){
    let p=new Promise((resolve) => {
        setTimeout(resolve,time);
    })
    return p;
}

promisifiedTimeout(1000).then(function(){
    console.log("First is done")
    promisifiedTimeout(2000).then(()=>{
        console.log("Second one done")
    })
})

//But this also uses indentations - callback hell

//Promise chaining