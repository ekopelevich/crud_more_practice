var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    port = 5000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Invoke CORS middleware
app.use(cors());

var results = {
  1: {
    'name': 'bob',
    'age': 23,
    'email': 'bob@camel.com'
  },
  2: {
    'name': 'angela',
    'age': 33,
    'email': 'angie@camel.com'
  },
  3: {
    'name': 'donald',
    'age': 15,
    'email': 'donny@camel.com'
  }
};

// List all the camels
app.get('/camels', function( req, res ){
  res.json( results );
});

// List one of the camels by id
app.get('/camels/:id', function( req, res ){
  res.json( results[req.params.id] );
});

// Create a new camel
app.post('/camels', function( req, res ){
  var newLlama = {};
  newLlama.name = req.body.name;
  newLlama.age = req.body.age;
  newLlama.email = req.body.email;

  results.newLlama = newLlama;

  console.log( results );
});

// Create a new camel
app.put('/camels/:id', function( req, res ){

});

app.delete('/camels/:id', function( req, res ){

});

app.listen(port, function(){
  console.log('Listening on port: ' + port);
});
