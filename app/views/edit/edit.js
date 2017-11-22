'use strict';

angular.module('app.edit', ['ngRoute', 'app.services'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/Edit', {
            templateUrl: 'views/edit/edit.html',
            controller: 'editController'
        });
    }])
    .controller('editController', function ($scope, peopleApi) {
        $scope.selectedItem = "Select Person";
        $scope.isDeletedItemVisible = false;

        getPeople();

        function getPeople() {
            peopleApi.getPeople().then(function (people) {
                $scope.people = people.data;
            }).catch(function (error) {
                $scope.status = 'Unable to load people data: ' + error.message;
            });
        }

        $scope.dropboxitemselected = function (person) {
            $scope.isDeletedItemVisible = true;
            $scope.selectedItem = person.firstname + " " + person.lastname;
            $scope.id = person.id;
            $scope.firstname = person.firstname;
            $scope.lastname = person.lastname;

        }

        $scope.UpdatePerson = function () {
            var person = {
                'id': $scope.id,
                'firstname': $scope.firstname,
                'lastname': $scope.lastname
            }
            peopleApi.updatePerson(person).then(function (response) {
                alert('Person Updated!');
                $scope.id = undefined;
                $scope.firstname = undefined;
                $scope.lastname = undefined;
                $scope.selectedItem = "Select Person";
                $scope.isDeletedItemVisible = false;
                getPeople();
            }).catch(function (error) {
                $scope.status = 'Unable to update person data: ' + error.message;
            });

        }
    });