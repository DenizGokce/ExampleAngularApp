var peopleService = angular.module('peopleService', ['app.config']);


peopleService.factory('peopleApi', function ($http, config) {
    var peopleApi = {};
    peopleApi.getPeople = function () {
        return $http.get(config.ApiEndpoint + '/people');
    }

    peopleApi.addPerson = function (person) {
        return $http.post(config.ApiEndpoint + '/people/' + person.id, person);
    }

    return peopleApi;
});