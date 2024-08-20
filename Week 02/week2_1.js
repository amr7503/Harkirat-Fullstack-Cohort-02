const fs=require("fs")
fs.readFile("a.txt","utf-8",function(err,data){
    //console.log(err)
    data=data+" Swainnnnn"
    fs.writeFile("a.txt",data, function(err) {
        if (err) {
            console.log(err);
        }
    });
    //console.log(data)
})
