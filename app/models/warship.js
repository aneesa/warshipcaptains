/* Warship
	This file exports the model for Warship.
	
	Author: Aneesa Awaludin
*/

var mongoose = require('mongoose');

// Schema
// _id will be automatically created
var warshipSchema = new mongoose.Schema({
	name: String
});

// model
var Warship = mongoose.model('Warship', warshipSchema, 't_warship');

module.exports = Warship;