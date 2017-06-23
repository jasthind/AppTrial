
var mongoose = require('mongoose');

// config files
var db = require('../config/db');

// connect to our mongoDB database 
mongoose.connect(db.url); 

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'Database connection error:'));

// When successfully connected
db.on('connected', function () {  
  console.log('Database default connection open');
}); 

// When the connection is disconnected
db.on('disconnected', function () {  
  console.log('Database default connection disconnected'); 
});

// If the Node process ends, close the Mongoose connection 
process.on('SIGINT', function() {  
  db.close(function () { 
    console.log('Database default connection disconnected through app termination'); 
    process.exit(0); 
  }); 
}); 