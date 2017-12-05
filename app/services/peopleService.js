var peopleService = angular.module('peopleService', ['app.config']);


peopleService.factory('peopleApi', function ($http, config) {
    var peopleApi = {};
    peopleApi.getPeople = function () {
        return $http.get(config.ApiEndpoint + '/people');
    }
    peopleApi.getPerson = function (id) {
        return $http.get(config.ApiEndpoint + '/people/' + id);
    }
    peopleApi.addPerson = function (person) {
        return $http.post(config.ApiEndpoint + '/people', person);
    }
    peopleApi.deletePerson = function (id) {
        return $http.delete(config.ApiEndpoint + '/people/' + id);
    }
    peopleApi.updatePerson = function (person) {
        return $http.put(config.ApiEndpoint + '/people/' + person.id, person);
    }
    return peopleApi;
});