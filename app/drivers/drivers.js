'use strict';

angular.module('myApp.driversview', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/drivers', {
    templateUrl: 'drivers/drivers.html',
    controller: 'driversController'
  });
}])

.controller('driversController', ['$scope', 'ergastAPIservice', function($scope, ergastAPIservice) {
	$scope.nameFilter = null;
    $scope.driversList = [];

    ergastAPIservice.getDrivers().success(function (response) {
        //Dig into the responde to get the relevant data
        $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    });

    $scope.searchFilter = function (driver) {
	    var keyword = new RegExp($scope.nameFilter, 'i');
	    return !$scope.nameFilter || keyword.test(driver.Driver.givenName) || keyword.test(driver.Driver.familyName);
	};

}]);