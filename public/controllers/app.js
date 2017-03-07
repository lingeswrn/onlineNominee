var app = angular.module('onlineNominee', ['ngRoute']);
//ANGULAR ROUTING
app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {  
    $locationProvider.html5Mode({
	  enabled: true,
	  requireBase: false
	});
    $routeProvider
        .when("/user", {
            templateUrl: "pages/home.html",
			controller: "homeController"
        })
		.when("/user/login", {
			templateUrl: "pages/login.html"
		});
        // .otherwise({
        //     redirectTo: "/"
        // });
}]);

app.controller("homeController",['$http', function($http){
	$http.get("/login").then( function(data){
		console.log(data)
	});
}]);