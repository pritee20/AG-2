(function(ng) {
    'use strict';
    ng.module('trade').controller('homeCtrl', ['tradeDataService', '$scope',
        function(tradeDataService, $scope) {


            tradeDataService.getAllData().then(function(respdata){
                $scope.tradeData = respdata.data;
                $scope.filteredData = _.groupBy($scope.tradeData, 'Symbol');
            });

        }
    ]);



})(angular);
