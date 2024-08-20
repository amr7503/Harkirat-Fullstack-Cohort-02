const express = require('express')
const bodyParser= require("body-parser")
const app = express()
const port = 3000

//app.use(bodyParser.json()) OR
app.use(express.json())


app.get('/',(req,res)=>{
  res.status(401).send('Hello World')
})


/*
app.post('/backend-api/conversation',(req,res)=>{
  const msg=req.query.message
  console.log(msg)
  //res.send('Hello Worlddddd')
})
/*
let bod;
app.post('/',(req,res)=>{
  bod=req.body
  res.send('Hello Worlddddd')
})

app.get('/',(req,res)=>{
  //console.log(bod)
  //res.send(bod)
  res.send("bhak")
})


app.get('/route-handler', (req, res) => {
  res.json({
    name:"Amaresh",
    age:21
  
  //res.send('<b> hi there <b>')
})})*/

/*app.post('/conversations',(req,res) =>{
  console.log(req.headers["authorization"])
  res.send({
    msg : "2 + 2 = 4"
  })
})*/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})