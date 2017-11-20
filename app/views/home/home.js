'use strict';

angular.module('app.home', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/Home', {
            templateUrl: 'views/home/home.html',
            controller: 'homeController'
        });
    }])
    .controller('homeController', function ($scope) {
        $scope.message = 'Home Page';
    });