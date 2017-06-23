var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Customers
var customerSchema = Schema({
	firstname	: String,
	lastname	: String,
	email		: String,
	password	: String,
	phone		: Number,
	location	: String
});
var customer  = mongoose.model('customer', customerSchema);

module.exports = customer;