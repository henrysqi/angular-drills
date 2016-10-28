angular.module('apiApp').controller('mainCtrl', function($scope, mainSvc){
	
	mainSvc.getShipInfo().then(function(ships){
		$scope.ships = ships;
	})
	
})