'use strict';

angular.module('app.delete', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/Delete', {
            templateUrl: 'views/delete/delete.html',
            controller: 'deleteController'
        });
    }])
    .controller('deleteController', function ($scope) {
        $scope.message = 'Delete Person Page';
    });