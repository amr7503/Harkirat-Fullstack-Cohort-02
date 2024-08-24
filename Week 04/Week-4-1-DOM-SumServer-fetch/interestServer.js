const express=require('express');
const app=express();

//CORS - Cross Origin Resource Sharing - to allow requests from other servers
//npm install cors
const cors = require('cors');
app.use(cors());


app.get('/interest',(req,res)=>{
    let p=parseFloat(req.query.principal);
    let r=parseFloat(req.query.rate);
    let t=parseFloat(req.query.time);
    let si=(p*r*t)/100;
    let tot=p+si;
    res.status(200).json({interest:si,total:tot});
});

app.listen(8080,()=>{
    console.log('Server started on http://localhost:8080');
});


//WEEK 4-1 - DOM ,DYNAMIC FRONTEND, CONNECTING FRONTEND TO BACKEND
// DOM - Document Object Model - API IS A PROGRAMMING INTERFACE FOR WEB DOCUMENTS . IT REPRESENTS THE PAGE SO THAT PROGRAMMING LANGUAGES CAN CHANGE THE DOCUMENT STRUCTURE, STYLE AND CONTENT.THE DOM REPRESENTS THE DOCUMENT AS NODES AND OBJECTS. THAT WAY, PROGRAMMING LANGUAGES CAN CONNECT TO THE PAGE.(IT REPRESENTS THE DOCUMENT AS A TREE OF OBJECTS ; EACH OBJECT REPRESENTS A PART OF THE PAGE)


// Why are IDs useful in Html?
//They let you identify a specific element in the DOM. This is useful for styling, scripting, and other purposes. IDs are unique within a page, so you can be sure that you are targeting the right element.

//1:51:00 - promise chaining ,callback then , async await, fetch, axios
