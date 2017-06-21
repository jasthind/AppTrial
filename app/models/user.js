
// grab the mongoose module
var mongoose = require('mongoose');

// define our database models

module.exports = mongoose.model('User', {
    name : {type : String, default: ''},
    password : {type : String, default: ''}
});