var express = require('express');
var bodyParser = require('body-parser')
var path = require('path');

var app = express();

/* route */
app.get('/', function(req, res){
  res.send('Hello World');
});

/* listen */
app.listen(3000, function () {
  console.log("Server started on Port 3000....")
})