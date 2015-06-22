var warshipCaptains = angular.module('warshipCaptains', []);

function warshipsController($scope, $http) {
	$scope.formData = {};

	// when landing on the page, get all warships and show them
	$http.get('/api/warships')
		.success(function(data) {
			$scope.warships = data;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

	// when submitting the add form, send the text to the node API
	$scope.createWarship = function() {
		$http.post('/api/warships', $scope.formData)
			.success(function(data) {
				$scope.formData = {}; // clear the form so our user is ready to enter another
				$scope.warships = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};
}

function captainsController($scope, $http) {
	$scope.formData = {};

	// when landing on the page, get all captains and show them
	$http.get('/api/captains')
		.success(function(data) {
			$scope.captains = data;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

	// when submitting the add form, send the text to the node API
	$scope.createCaptain = function() {
		$http.post('/api/captains', $scope.formData)
			.success(function(data) {
				$scope.formData = {}; // clear the form so our user is ready to enter another
				$scope.captains = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};
}

function shipCaptainsController($scope, $http) {
	$scope.formData = {};
	
	// set the drop downs
	$http.get('/api/captains')
		.success(function(data) {
			$scope.captains = data;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	
	$http.get('/api/warships')
		.success(function(data) {
			$scope.warships = data;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

	// when landing on the page, get all ship captains and show them
	$http.get('/api/shipcaptains')
		.success(function(data) {
			$scope.shipcaptains = data;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

	// when submitting the add form, send the text to the node API
	$scope.createShipCaptain = function() {
		$http.post('/api/shipcaptains', $scope.formData)
			.success(function(data) {
				$scope.formData = {}; // clear the form so our user is ready to enter another
				$scope.shipcaptains = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};
}
