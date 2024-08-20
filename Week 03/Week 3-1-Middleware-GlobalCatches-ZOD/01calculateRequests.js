const express = require('express');
const app = express();

let noOfRequests = 0;

function calculateRequests(req, res, next) {
  noOfRequests++;
  console.log(`Number of requests: ${noOfRequests}`);
  next();
}

app.get('/', calculateRequests, (req, res) => {
    res.send(`Number of requests: ${noOfRequests}`);
});

app.listen(3000);