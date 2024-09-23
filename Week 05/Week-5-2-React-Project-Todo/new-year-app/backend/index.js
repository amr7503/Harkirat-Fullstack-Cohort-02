const express=require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const app=express();
const cors=require('cors');

app.use(express.json());
app.use(cors());


//body {
//    title:string,
//    description:string
//}

app.post("/todo",async function(req,res){ //post request to add a new todo
    const createPayload=req.body;
    const parsedPayload=createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You sent the wrong inputs"
        });
        return;
    }
    //put in mongodb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed:false
    })

    res.json({
        msg:"Todo created"
    });
});

app.get("/todos",async function(req,res){  //get request to get all todos
        const todos=await todo.find();
        res.json({
            todos
        });
});

app.put("/completed",async function(req,res){ //put request to mark a todo as completed
    const updatePayload=req.body;
    const parsedPayload=updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You sent the wrong inputs"
        });
        return;
    }
    //update in mongodb
    // await todo.update({
    //     _id:req.body.id
    // },{
    //     completed:true
    // });
    // res.json({
    //     msg:"Todo marked as completed"
    // })
     
    // Update in MongoDB using findByIdAndUpdate
    try {
        const result = await todo.findByIdAndUpdate(req.body.id, {
            completed: true,
        });

        if (result) {
            res.json({
                msg: "Todo marked as completed",
            });
        } else {
            res.status(404).json({
                msg: "Todo not found",
            });
        }
    } catch (err) {
        res.status(500).json({
            msg: "Error updating todo",
        });
    }
   
});


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});



