const express=require('express');
const app=express();

app.use(express.json());

app.post('/' , (req,res) => {
    const kidneys=req.body.kidneys; //expected array []    { "kidneys" : [1,2] }
    const kidneyLength=kidneys.length;

    res.send(`The kidneys are ${kidneyLength} in number`);
});

//--------------------------    Global catches      -------------------------------
//helps users give the user a better error message
//Error-handling middleware -  this is a special middleware function that takes four arguments instead of three
//You define error-handling middleware last, after other app.use() and routes calls
// app.use((err,req,res,next) => {
//     res.json({
//         msg: "Sorry , something went wrong"
//     });
// });

app.use((err,req,res,next) => {
    res.json({
        msg: "Sorry , something went wrong"
    });
});


app.listen(3000);