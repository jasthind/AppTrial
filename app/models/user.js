var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Users
var userSchema = Schema({
	firstname	: String,
	lastname	: String,
	email		: String,
	password	: String,
	phone		: Number,
	role		: String
})
var user = mongoose.model('user', userSchema);

module.exports = user