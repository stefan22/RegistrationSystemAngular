var myApp = angular.module('myApp', [
	'ngRoute',
	'firebase'
]);

myApp.config(function() {
	var config = {
		apiKey: "AIzaSyCo86nW1AANscAJoR7yhNUBViVeVsEhifo",
	    authDomain: "proj1-4928b.firebaseapp.com",
	    databaseURL: "https://proj1-4928b.firebaseio.com",
	    storageBucket: "proj1-4928b.appspot.com",
	    serviceAccount: "/serviceAccountCredentials.json"
	};
	firebase.initializeApp(config);

});


myApp.config(['$routeProvider', function($routeProvider) {

	$routeProvider.when('/login', {
		templateUrl: 'views/login.html',
		controller: 'RegistrationController'
	}).when('/register', {
		templateUrl: 'views/register.html',
		controller: 'RegistrationController'
	}).when('/success', {
		templateUrl:'views/success.html',
		controller: 'SuccessController'
	}).otherwise('/login', {
		redirectTo: '/login'
	});


}]);

