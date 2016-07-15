'use strict';

angular.module('myApp.individualView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/drivers/:id', {
    templateUrl: 'drivers/individual.html',
    controller: 'individualController'
  });
}])

.controller('individualController', ['$scope', '$routeParams', 'ergastAPIservice', function($scope, $routeParams, ergastAPIservice) {
	$scope.id = $routeParams.id;
    $scope.races = [];
    $scope.driver = null;

    ergastAPIservice.getDriverDetails($scope.id).success(function (response) {
        $scope.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0]; 
    });

    ergastAPIservice.getDriverRaces($scope.id).success(function (response) {
        $scope.races = response.MRData.RaceTable.Races; 
    }); 

}]);