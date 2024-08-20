const express=require('express');
const zod=require('zod');
const app=express();

const schema=zod.array(zod.number()); //schema is defined to validate the input data

app.use(express.json());

app.post('/' , (req,res) => {
    const kidneys=req.body.kidneys; //expected array []    { "kidneys" : [1,2] }

    const response=schema.safeParse(kidneys);    //safeParse() method is used to validate the input data

    if(!response.success){
        res.status(401).json({
            message: 'Invalid input data'
        });
        return;
    }else{
        res.send(response);
    }
    
    //const kidneyLength=kidneys.length;
   // res.send(`The kidneys are ${kidneyLength} in number`);
});


app.listen(3000);