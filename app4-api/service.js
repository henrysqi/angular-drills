angular.module('apiApp').service('mainSvc', function($http){
	
	this.getPeople = function(){
		return $http({
			method: 'GET',
			url: 'http://swapi.co/api/people/'
		}).then(function(res){
			if (res.status === 200){
				return res.data.results;
			}
			else {
				return "shit's broken";
			}
		})
	}
	
})