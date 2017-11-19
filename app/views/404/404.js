'use strict';

angular.module('app.404', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/404', {
            templateUrl: 'views/404/404.html',
            controller: '404Controller'
        });
    }])
    .controller('404Controller', [function () {

    }]);