
var mongoose = require('mongoose');

// define our database models

module.exports = mongoose.model('Order', {
    dish : {type : String, default: ''},
    quantity : { type : Number, default : 0 }
});
