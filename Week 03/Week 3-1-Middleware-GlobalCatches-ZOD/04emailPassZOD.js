const zod=require('zod');

function validateInput(obj){
    const schema =zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    })

    const response=schema.safeParse(obj);
    console.log(response);
}

validateInput({email: 'Ama@bj.kk',
               password: '12345678'
            });

            //// OR /////
 
app.post("/login",function(req,res){
    const response=validateInput(req.body)
    if(!response.successs)
    {
        res.json({ msg:"Your inputs are invalid" })
        return;
    }

})






/*
function emailPassZOD(email, password){
    const schema=zod.object({
        email: zod.string().email(),
        password: zod.string().min(6)
    });

    const data={
        email: email,
        password: password
    };

    const response=schema.safeParse(data);

    if(!response.success){
        return {
            message: 'Invalid input data'
        };
    }else{
        return response;
    }
}

*/