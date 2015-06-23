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
	$scope.createWarship = function(isValid) {
		
		// check if the fields are valid
		if(isValid) {
			// create the warship and get all of the warships back
			$http.post('/api/warships', $scope.formData)
				.success(function(data) {
					$scope.formData = {}; // clear the form so our user is ready to enter another
					$scope.warships = data;
					console.log(data);
				})
				.error(function(data) {
					console.log('Error: ' + data);
				});
		}
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
	$scope.createCaptain = function(isValid) {
		
		// check if the fields are valid
		if(isValid) {
			// create the captain and get all of the captains back
			$http.post('/api/captains', $scope.formData)
				.success(function(data) {
					$scope.formData = {}; // clear the form so our user is ready to enter another
					$scope.captains = data;
					console.log(data);
				})
				.error(function(data) {
					console.log('Error: ' + data);
				});
		}
	};
}

// declare a new directive to validated ship captains
warshipCaptains.directive('isAvailable', ['$http', function($http) {
	return {
		require: 'ngModel',
		link: function(scope, element, attrs, ctrl) {
		  scope.$watch(attrs.ngModel, function(value) {
			$http.get('/api/shipcaptains/' + value._id)
				.success(function(data) {
					if(data.length === 0) {
						ctrl.$setValidity('notavailable', true);
					}else {
						scope.validation = 'Captain '+data[0].captain.name+
							' has been assigned to Warship '+data[0].warship.name;
						ctrl.$setValidity('notavailable', false);
					}
				})
				.error(function(data) {
					ctrl.$setValidity('notavailable', false);
				});
		  });
		}
	}
}]);

function shipCaptainsController($scope, $http) {
	$scope.formData = {};
	$scope.validation == null;
	
	// set the drop downs selections for captains
	// NOTE: it would be better to remove the already existing captains
	//			in the shipcaptains table, but for the purpose of validation
	//			we're including all captains.
	$http.get('/api/captains')
		.success(function(data) {
			$scope.captains = data;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	
	// set the drop downs selections for warships
	// NOTE: it would be better to remove the already existing warships
	//			in the shipcaptains table, but for the validation purpose
	//			we're including all warships.
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
	$scope.createShipCaptain = function(isValid) {
		
		// check if the fields are valid
		if(isValid) {
			// create the ship captains and get all of the ship captains back
			$http.post('/api/shipcaptains', $scope.formData)
				.success(function(data) {
					$scope.formData = {}; // clear the form so our user is ready to enter another
					$scope.shipcaptains = data;
					console.log(data);
				})
				.error(function(data) {
					console.log('Error: ' + data);
				});
		}
	};
}