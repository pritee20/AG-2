(function (ng) {
    'use strict';
    ng.module('trade').service('tradeDataService', function($http){

		this.getAllData = function() {
			return $http.get('static-data/trades.json')
			.then(function(response){
				return response;
			}, function(httpError){
				throw httpError.status + " : " + httpError.data;
			})

		}
    });


})(angular);