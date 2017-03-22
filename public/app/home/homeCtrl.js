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



    
