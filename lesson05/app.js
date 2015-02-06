'use strict';

(function () {
    angular
        .module("starterApp", []) // @TODO Add ngRoute module dependency

        // @TODO Add config function that takes $routeProvider

        .factory("CarService", function () {
            return {
                query: "Audi A8"
                // @TODO Add cars method that uses $http service to return cars from data/cars.json
            }
        })
        .controller("HomeCtrl", ["$scope", "CarService", function ($scope, CarService) {
            $scope.query = CarService.query;

            // @TODO Add missing method that redirects to 'cars'

        }]);

        // @TODO Add CarCtrl showing cars returned from CarService

})();
