var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Ordered Menu items
var orderItemSchema = Schema({
	menuitem 	: String,
	order		: String,
	quantity	: Number,
	price 		: Number
});
var orderItem = mongoose.model('orderitem', orderItemSchema);

module.exports = orderItem;