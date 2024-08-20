const fs=require("fs")

function putCopyrightToFile(cb){
    fs.readFile("a.txt","utf-8",function(err,data){
        if(err)
            console.log(err)
        else{
            data=data +"\n CopyRight@2024 Amaresh"
            fs.writeFile("a.txt",data,function(err){
                if(err)
                {
                    console.log(err)
                }
                cb();
            })
        }
    })
}

putCopyrightToFile(function(){
    console.log("CR has been put ");
})
//what is wrong


