angular.module('arrayApp').controller('arrayController', function($scope, mainSvc){
	
	$scope.data = mainSvc.data;
	
})