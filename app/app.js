'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
    'app.route',
    'app.config',
    'app.services',
    'app.view',
    'app.version'
]).controller('mainController', function ($rootScope, $scope, $location) {
    $rootScope.isActive = function (viewLocation) {
        var active = (viewLocation === $location.url());
        return active;
    };
});
