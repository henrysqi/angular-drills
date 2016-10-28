angular.module('myApp').controller('myController', function($scope, mainSvc) {
 $scope.employees = mainSvc.myData();
})