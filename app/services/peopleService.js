var peopleService = angular.module('peopleService', ['app.config']);


peopleService.factory('peopleApi', function ($http, config) {
    var peopleApi = {};
    peopleApi.getPeople = function () {
        return $http.get(config.ApiEndpoint + '/people');
    }
    return peopleApi;
});