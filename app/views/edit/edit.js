'use strict';

angular.module('app.edit', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/Edit', {
            templateUrl: 'views/edit/edit.html',
            controller: 'editController'
        });
    }])
    .controller('editController', function ($scope) {
        $scope.message = 'Edit Person Page';
    });