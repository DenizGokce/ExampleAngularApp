/*angular.module.exports = {
    ApiEndpoint: 'https://rest-api-example-go.herokuapp.com/'
}*/
'use strict';

var app = angular.module('app.config', []).constant('config', {
    ApiEndpoint: 'https://rest-api-example-go.herokuapp.com'
});