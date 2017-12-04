'use strict';
angular.module('app.home', ['ngRoute', 'app.services'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/Home', {
            templateUrl: 'views/home/home.html',
            controller: 'homeController'
        });
    }])
    .controller('homeController', function ($rootScope, $scope, $location, config, peopleApi) {
        getPeople();

        function getPeople() {
            peopleApi.getPeople().then(function (people) {
                $scope.people = people.data;
            }).catch(function (error) {
                $scope.status = 'Unable to load people data: ' + error.message;
            });
        }
    });