/* Ship Captain
	This file exports the model for Ship Captain.
	
	Author: Aneesa Awaludin
*/

var mongoose = require('mongoose');

// Schema
// _id will be automatically created
var shipCaptainSchema = new mongoose.Schema({
	captain: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Captain'
	},
	warship: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Warship'
	}
});

// model
var ShipCaptain = mongoose.model('ShipCaptain', shipCaptainSchema, 't_ship_captain');

module.exports = ShipCaptain;