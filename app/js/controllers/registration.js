myApp.controller('RegistrationController', ['$scope', function($scope) {

	$scope.login = function() {
		$scope.message = "Welcome " + $scope.user.email;
	};

	$scope.register = function() {
		
			$scope.message = "Now you can access site features " + $scope.user.firstname + " \n Thanks for registering";
		

		
	};


}]);