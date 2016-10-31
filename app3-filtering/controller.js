angular.module('myApp').controller('mainCtrl', function($scope, mainSvc){
	
	$scope.data = mainSvc.data;
	
})