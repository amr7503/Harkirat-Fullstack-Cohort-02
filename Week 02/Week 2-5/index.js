const express = require('express');
const app = express();
app.use(express.json()); // to log the request body through postman POST request
var users = [{
    name : 'John' ,
    kidneys : [{
        healthy : true,
    },
    {
        healthy : false,
    }]

}];

app.get('/', (req, res) => {
    const johnKidney = users[0].kidneys;
   // console.log(johnKidney);
   const noOfKidneys = johnKidney.length;

   let noOfHealthyKidneys = 0;
   for(let i=0;i<noOfKidneys;i++){
       if(johnKidney[i].healthy){
           noOfHealthyKidneys++;
       }
   }
   const noOfUnhealthyKidneys = noOfKidneys - noOfHealthyKidneys;
   res.json({
       noOfKidneys,
       noOfHealthyKidneys,
       noOfUnhealthyKidneys
   });
});


app.post('/', (req, res) => {
    const isHealthy = req.body.isHealthy; //need line 3
    users[0].kidneys.push({
        healthy : isHealthy
    });
    res.json({
        message : 'Kidney added successfully'
    });
});

app.put('/', (req, res) => {    // PUT request to update the kidney status
    
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = req.body.isHealthy; //or true
    }

    res.json({
        message : 'Kidney updated successfully'
    }); //necessary for postman 
});

//remove all unhealthy kidneys 
app.delete('/', (req, res) => { // DELETE request to delete the kidney

  if(isThereAtleastOneUnhealthyKidney()){
    const newKidneys = [];
    for(let i=0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            //newKidneys.push(users[0].kidneys[i]);
            newKidneys.push({
                healthy : true
            });
        }
    }
     users[0].kidneys = newKidneys;
     res.json({
         message : 'Unhealthy Kidney removed successfully'
     }); 
  }
  else{
    res.status(411).json({
        message : 'No unhealthy kidney to remove'
    });
  }

});

function isThereAtleastOneUnhealthyKidney(){
    for(let i=0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            return true;
        }
    }
    return false;
}

app.listen(3000);   