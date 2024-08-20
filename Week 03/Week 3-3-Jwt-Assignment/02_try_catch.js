try{
let a;
console.log(a.length); // Uncaught TypeError: Cannot read property 'length' of undefined
console.log("Hello World");
}
catch(e){
    console.log(e.name + ": " + e.message);
}
