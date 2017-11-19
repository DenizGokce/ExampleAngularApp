'use strict';

angular.module('app.add', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/Add', {
            templateUrl: 'views/add/add.html',
            controller: 'addController'
        });
    }])
    .controller('addController', function ($scope) {
        $scope.message = 'Add Person Page';
    });