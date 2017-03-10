var app = angular.module('onlineNominee', ['ngRoute']);
//ANGULAR ROUTING
app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {  
    $locationProvider.html5Mode({
	  enabled: true,
	  requireBase: false
	});
    $routeProvider
        .when("/", {
            templateUrl: "pages/home.html",
			controller: "homeController"
        })
		.when("/login", {
			templateUrl: "pages/login.html",
			controller: "loginController"
		})
		.when("/forget-password", {
			templateUrl: "pages/forget-password.html",
			controller: "loginController"
		})
		.when("/registration", {
			templateUrl: "pages/registration.html",
			controller: "registrationController"
		})
		.when("/education", {
			templateUrl: "pages/education.html",
			controller: "educationController"
		})
		.when("/profile", {
			templateUrl: "pages/profile.html",
			controller: "profileController"
		})
		.when("/other-courses", {
			templateUrl: "pages/other-courses.html",
			controller: "coursesController"
		})
		.when("/career", {
			templateUrl: "pages/career.html",
			controller: "coursesController"
		});
        // .otherwise({
        //     redirectTo: "/"
        // });
}]);
