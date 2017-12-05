'use strict';
angular.module('app.home', ['ngRoute', 'app.services'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/Home', {
            templateUrl: 'views/home/home.html',
            controller: 'homeController'
        });
    }])
    .controller('homeController', function ($rootScope, $scope, $location, config, peopleApi) {
        $scope.loader = "loader-active";
        $scope.loader_view = "loader-inactive";
        getPeople();

        function getPeople() {
            peopleApi.getPeople().then(function (people) {
                $scope.loader = "loader-inactive";
                $scope.people = people.data;
                $scope.loader_view = "loader-active";
            }).catch(function (error) {
                $scope.loader = "loader-inactive";
                $scope.status = 'Unable to load people data: ' + error.message;
            });
        }
    });