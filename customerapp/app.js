var express = require('express');
var bodyParser = require('body-parser')
var path = require('path');

var app = express();
/* Middleware must be before app.get else it will not work
var logger = function (req, res, next) {
  console.log('Logging...');
  next();
}

app.use(logger);
*/

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

var users = [
  {
  id: 1,
  first_name: 'John',
  last_name: 'Doe',
  email: 'johndoe@gmail.com'
  },
  {
    id: 2,
    first_name: 'Bob',
    last_name: 'Smith',
    email: 'bobsmith@gmail.com'
  },
  {
    id: 3,
    first_name: 'Jill',
    last_name: 'Jackson',
    email: 'jjackson@gmail.com'
  },
]

/*
var people = [
    {
    name: 'Jeff',
    age: 30
  },
  {
    name: "Sara",
    age: 22
  },
  {
    name: "Bill",
    age: 40
  }
]

app.get('/', function(req, res){
  res.json(people);
});

/*

/* route */
app.get('/', function (req, res) {
  res.render('index', {
    title: 'Customers',
    users: users
  });
});

/* listen */
app.listen(3000, function () {
  console.log("Server started on Port 3000....")
})