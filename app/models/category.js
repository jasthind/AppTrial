var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Menu Categaories
var categorySchema = Schema({
    name 		: { type : String},
    description : { type : String, default : ''},
    img			: String
});
var category  = mongoose.model('category', categorySchema);

module.exports = category;