var warship = angular.module('warship', []);

function mainController($scope, $http) {
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
