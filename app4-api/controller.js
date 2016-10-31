angular.module('apiApp').controller('mainCtrl', function($scope, mainSvc){
	
	mainSvc.getPeople().then(function(res){
		$scope.people = res;
	})
	
})