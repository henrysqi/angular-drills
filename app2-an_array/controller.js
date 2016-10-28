angular.module('app2').controller('app2Ctrl', function($scope, app2Service){
	$scope.data = app2Service.data;
})