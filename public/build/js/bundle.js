//Basic Angular Application
(function (ng) {
    'use strict';
    ng.module('trade', ['ui.router', 'ui.bootstrap', 'angular.filter']);
    ng.element(document).ready(function () {
        //angular application bootstraping
        ng.bootstrap(document, ['trade']);
        console.info("application bootstrap");
    });
    ng.module('trade').config(configFunc);
    configFunc.$inject = ['$stateProvider', '$locationProvider'];
    ng.module('trade').run(function () {
        //application run phase
        console.info("application run");
    });

    function configFunc($stateProvider, $locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        var homeState = {
            name: 'home',
            url: '/',
            templateUrl: 'public/app/home/home.html'
        };
        var tradeState = {
            name: 'tradeState',
            url: '/tradeState',
            templateUrl: 'public/app/tradeState/tradeState.html'
        };
        $stateProvider.state(homeState);
        $stateProvider.state(tradeState);
        console.info("application config phase");
    }
})(angular);
(function(ng) {
    'use strict';
    ng.module('trade').controller('homeCtrl', ['tradeDataService', '$scope',
        function(tradeDataService, $scope) {

            tradeDataService.getAllData().then(function(respdata){
                $scope.tradeData = respdata.data;
                $scope.groups = _.groupBy($scope.tradeData, "Symbol");
                $scope.sortType = 'MarketValue';
                $scope.sortReverse = false;
                


  
            });
        }
    ]);



})(angular);



    


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
(function(ng) {
    'use strict';
    ng.module('trade').controller('tradeCtrl', ['tradeDataCalService', '$scope',
        function(tradeDataCalService, $scope) {
            tradeDataCalService.getAllData().then(function(respdata){
                $scope.tradeList = respdata.data;
                $scope.groups = _.groupBy($scope.tradeList.trades, "Symbol");
                $scope.sortType = 'MarketValue';
                $scope.sortReverse = false;

            });            

        }
    ]);



})(angular);

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