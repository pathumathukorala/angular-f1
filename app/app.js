'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.services',
  // 'myApp.view1',
  // 'myApp.view2',
  // 'myApp.version',
  'myApp.driversview',
  'myApp.individualView'
]).

config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  //$locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/drivers'});
}]);
