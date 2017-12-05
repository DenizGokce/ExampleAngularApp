'use strict';

angular.module('app.add', ['ngRoute', 'app.config', 'app.services'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/Add', {
            templateUrl: 'views/add/add.html',
            controller: 'addController'
        });
    }])
    .controller('addController', function ($rootScope, $scope, $location, config, peopleApi) {
        $rootScope.isActive = function (viewLocation) {
            var active = (viewLocation === $location.url());
            return active;
        };
        $scope.addPerson = function () {
            var person = {
                'firstname': $scope.firstname,
                'lastname': $scope.lastname
            }
            peopleApi.addPerson(person).then(function (response) {
                alert('Person Added!');
                $scope.firstname = undefined;
                $scope.lastname = undefined;
            }).catch(function (error) {
                $scope.status = 'Unable to add person data: ' + error.message;
            });
        }
    });