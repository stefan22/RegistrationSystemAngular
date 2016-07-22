myApp.controller('RegistrationController', ['$scope', '$firebaseAuth', '$firebaseObject',  function($scope,$firebaseAuth,$firebaseObject) {

	
		
	$scope.login = function() {

		var user = firebase.auth().currentUser;

		if (user) {
		    firebase.auth().signOut();
					
		} else {
			var email = $scope.user.email;
			var password = $scope.user.password;
		}			


			
		firebase.auth().signInWithEmailAndPassword(email,password)
			.then(function() {
				console.log("User signed in!");
			})
			.catch(function(error) {
				var errorCode = error.code;
				var errorMessage = error.message;

				if(errorCode === 'auth/wrong-password') {
					console.log(errorCode);					
					$scope.$apply(function (){
						$scope.message = errorCode;
					});

				} else {
					console.log('Error message');
					return true; //$scope.message = errorMessage;
				}
			});


			$scope.message = "Welcome back " + $scope.user.email + "!"; 

		}; //login


		$scope.register = function() {

			var email = $scope.user.email;
			var password = $scope.user.password;	

			firebase.auth().createUserWithEmailAndPassword(email, password).
			then(function() {				
				console.log("User created successfully");
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




		
		$scope.message = "At last, You're In! " + $scope.user.firstname + "!"; 
		

	

	}; //register


	firebase.auth().onAuthStateChanged(function(user) {
		var user = firebase.auth().currentUser;
		

		if(user) {
			//user is signed in
			

		} else {
			//user is not signed in

		}

	}); // onAuthStateChanged

	








}]); //controller