var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Menu Items
var menuSchema = Schema({
    name 		: { type : String},
    price 		: Number,
    description : { type : String, default : ''},
	category	: String,
	daysofweek	: { type : Array},
    img 		: String
});
var menuItem  = mongoose.model('menuitem', menuSchema);

module.exports = menuItem;