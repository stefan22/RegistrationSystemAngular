myApp.controller('RegistrationController', ['$scope', '$firebaseAuth',  function($scope,$firebaseAuth) {

	
	$scope.login = function() {
		$scope.message = "Welcome " + $scope.user.email;
	}; //login

	$scope.register = function() {

		var email = $scope.user.email;
		var password = $scope.user.password;	

		firebase.auth().createUserWithEmailAndPassword(email, password).
		then(function(userData) {
			console.log("User created with uid: " + userData.uid);
		}).
		catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          console.log('The password is too weak.');
        } else {
          console.log(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });



			
			

		
	}; //register


}]); //controller