
'use strict';

var app = angular.module('app.route', [
    'ngRoute'
]).config(['$locationProvider', '$routeProvider',
    function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.when('/', {
            redirectTo: '/Home'
        }).when(' ', {
            redirectTo: '/Home'
        }).otherwise({
            redirectTo: '/404'
        })
    }]);