// app/models/nerd.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our database models

module.exports = mongoose.model('Dish', {
    name : { type : String, default : '' },
    price : { type : Number, default : 0 },
    description : {type : String, default : ''}
});
