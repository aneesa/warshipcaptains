var Warship = require('./models/warship');

module.exports = function(app) {

	// api ---------------------------------------------------------------------
	// get all warships
	app.get('/api/warships', function(req, res) {

		// use mongoose to get all warships in the database
		Warship.find(function(err, warships) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(warships); // return all warships in JSON format
		});
	});

	// create warship and send back all warships after creation
	app.post('/api/warships', function(req, res) {

		// create a warship, information comes from AJAX request from Angular
		Warship.create({
			name : req.body.text
		}, function(err, warship) {
			if (err)
				res.send(err);

			// get and return all the warships after you create another
			Warship.find(function(err, warships) {
				if (err)
					res.send(err)
				res.json(warships);
			});
		});

	});

	// delete a warship
	app.delete('/api/warships/:warship_id', function(req, res) {
		Warship.remove({
			_id : req.params.warship_id
		}, function(err, warship) {
			if (err)
				res.send(err);

			// get and return all the warships after you create another
			Warship.find(function(err, warships) {
				if (err)
					res.send(err)
				res.json(warships);
			});
		});
	});

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};