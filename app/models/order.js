var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Order
var orderSchema = Schema({
	orderitems 		: Array,
	customer 		: String,
	invoice			: Number,
	total_price		: Number,
	details			: String,
	order_placed_date	: Date,
	order_deliver_date	: Date,
	order_status	: String
});
var order = mongoose.model('order', orderSchema);

module.exports = order;