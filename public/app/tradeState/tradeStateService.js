(function (ng) {
    'use strict';
    ng.module('trade').service('tradeDataCalService', function($http){

		this.getAllData = function() {
			return $http.get('static-data/cal.json')
			.then(function(response){
				return response;
			}, function(httpError){
				throw httpError.status + " : " + httpError.data;
			})

		}		
    });


})(angular);