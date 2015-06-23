var Warship = require('./models/warship');
var Captain = require('./models/captain');
var ShipCaptain = require('./models/shipcaptain');

module.exports = function(app) {

	// api ---------------------------------------------------------------------
	// get all warships
	app.get('/api/warships', function(req, res) {

		// use mongoose to get all warships in the database
		Warship.find(function(err, warships) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				return res.send(err)

			res.json(warships); // return all warships in JSON format
		});
	});

	// create warship and send back all warships after creation
	app.post('/api/warships', function(req, res) {

		// create a warship, information comes from AJAX request from Angular
		Warship.create({
			name : req.body.name
		}, function(err, warship) {
			if (err)
				return res.send(err);

			// get and return all the warships after you create another
			Warship.find(function(err, warships) {
				if (err)
					return res.send(err)
					
				res.json(warships);
			});
		});

	});

	// application -------------------------------------------------------------
	app.get('/warships', function(req, res) {
		res.sendfile('./public/warships.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
	
	// api ---------------------------------------------------------------------
	// get all captains
	app.get('/api/captains', function(req, res) {

		// use mongoose to get all captains in the database
		Captain.find(function(err, captains) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				return res.send(err)

			res.json(captains); // return all captains in JSON format
		});
	});

	// create captain and send back all captains after creation
	app.post('/api/captains', function(req, res) {

		// create a captain, information comes from AJAX request from Angular
		Captain.create({
			name : req.body.name,
			age : req.body.age
		}, function(err, captain) {
			if (err)
				return res.send(err);

			// get and return all the captains after you create another
			Captain.find(function(err, captains) {
				if (err)
					return res.send(err)
					
				res.json(captains);
			});
		});

	});

	// application -------------------------------------------------------------
	app.get('/captains', function(req, res) {
		res.sendfile('./public/captains.html'); // load the single view file (angular will handle the page changes on the front-end)
	});

	// api ---------------------------------------------------------------------
	// get all ship captains
	app.get('/api/shipcaptains', function(req, res) {

		// use mongoose to get all ship captains in the database
		ShipCaptain.find()
			.populate('captain')
			.populate('warship')
			.exec(function(err, shipcaptains) {

				// if there is an error retrieving, send the error. nothing after res.send(err) will execute
				if (err)
					return res.send(err)

				res.json(shipcaptains); // return all captains in JSON format
		});
	});
	
	// get all ship captain by id
	app.get('/api/shipcaptains/:captain_id', function(req, res) {

		// use mongoose to get all ship captains in the database
		// TODO: could not get a match while populating
		ShipCaptain.find()
			.populate('captain')
			.populate('warship')
			.exec(function(err, shipcaptains) {

				// if there is an error retrieving, send the error. nothing after res.send(err) will execute
				if (err)
					return res.send(err)
				
				shipcaptains = shipcaptains.filter(function (shipcaptain) {
					return shipcaptain.captain._id == req.params.captain_id;
				});

				res.json(shipcaptains); // return all captains in JSON format
		});
	});

	// create ship captain and send back all ship captains after creation
	app.post('/api/shipcaptains', function(req, res) {

		// create a ship captain, information comes from AJAX request from Angular
		ShipCaptain.create({
			captain : req.body.selectedCaptain._id,
			warship : req.body.selectedWarship._id
		}, function(err, shipcaptain) {
			if (err)
				return res.send(err);

			// get and return all the ship captains after you create another
			ShipCaptain.find(function(err, shipcaptains) {
				if (err)
					return res.send(err)
					
				res.json(shipcaptains);
			});
		});

	});

	// application -------------------------------------------------------------
	app.get('/shipcaptains', function(req, res) {
		res.sendfile('./public/shipcaptains.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};