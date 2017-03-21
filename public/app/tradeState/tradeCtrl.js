(function(ng) {
    'use strict';
    ng.module('trade').controller('tradeCtrl', ['tradeDataCalService', '$scope',
        function(tradeDataCalService, $scope) {
            tradeDataCalService.getAllData().then(function(respdata){
                $scope.tradeList = respdata.data;
                $scope.filteredData = _.groupBy($scope.tradeList.trades, 'Symbol');
            });            

        }
    ]);



})(angular);
