'use strict';

angular.module('app.delete', ['ngRoute', 'app.services'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/Delete', {
            templateUrl: 'views/delete/delete.html',
            controller: 'deleteController'
        });
    }])
    .controller('deleteController', function ($scope, peopleApi) {
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

        $scope.DeletePerson = function () {
            var id = $scope.id
            peopleApi.deletePerson(id).then(function (response) {
                alert('Person Deleted!');
                $scope.id = undefined;
                $scope.firstname = undefined;
                $scope.lastname = undefined;
                $scope.selectedItem = "Select Person";
                $scope.isDeletedItemVisible = false;
                getPeople();
            }).catch(function (error) {
                $scope.status = 'Unable to delete person data: ' + error.message;
            });

        }
    });