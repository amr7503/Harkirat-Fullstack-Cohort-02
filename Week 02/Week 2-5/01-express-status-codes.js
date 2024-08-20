//creating an http server using express

const exp = require("constants")
const express=require("express") //npm install express
const app=express();

function sum(n){
    let s=0;
    for(let i=1;i<=n;i++){
        s+=i;
    }
    return s;
}

app.get("/",(req,res)=>{
    // const n=req.query.n;
    // const s=sum(n);
    // res.send(`Sum of first ${n} numbers is  ${s}`);
    // //res.send("Hello World");
    //console.log(1/0)
    throw new Error("This is an error"); //500
});

app.listen(3000);