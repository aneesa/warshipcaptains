/* Captain
	This file exports the model for Captain.
	
	Author: Aneesa Awaludin
*/

var mongoose = require('mongoose');

// Schema
// _id will be automatically created
var captainSchema = new mongoose.Schema({
	name: String,
	age: Number
});

// model
var Captain = mongoose.model('Captain', captainSchema, 't_captain');

module.exports = Captain;