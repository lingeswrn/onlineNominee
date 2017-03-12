app.controller("profileController",['$http', '$scope', function($http, $scope){
	$('#languages').select2();
	
	$scope.checkedProfile = true;
	$scope.checkedGenInfo = true;
	$scope.checkedAbout = true;
	$scope.editButton = false;
	
	$scope.profileEdit = function(){
		$scope.checkedProfile = false;
		$scope.editButton = true;
	}
	$scope.genInfoEdit = function(){
		$scope.checkedGenInfo = false;
		$scope.editButton = true;
	}
	$scope.aboutEdit = function(){
		$scope.checkedAbout = false;
		$scope.editButton = true;
	}
	
	$scope.cancelEditProfile = function(){
		$scope.checkedProfile = true;
		$scope.checkedGenInfo = true;
		$scope.checkedAbout = true;
		$scope.editButton = false;
	}
}]);