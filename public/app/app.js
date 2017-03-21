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