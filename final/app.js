'use strict';

(function () {
    angular
        .module("starterApp", ["ngRoute"])

        .config(function ($routeProvider) {
            $routeProvider
                .when("/", {
                    templateUrl: "pages/home.html",
                    controller: "HomeCtrl"
                })
                .when("/cars", {
                    templateUrl: "pages/cars.html",
                    controller: "CarCtrl"
                })
        })
        .factory("CarService", ["$http", function ($http) {
            return {
                query: "Audi A8",
                cars: function() {
                    return $http.get("./data/cars.json");
                }
            }
        }])
        .directive("carDetails", function() {
            return {
                restrict: "E",
                templateUrl: "directive/carDetails.html",
                replace: true,
                scope: {
                    car: "=",
                    currencySymbol: "@",
                    toDate: "&",
                    dateFormat: "@"
                },
                link: function(scope, element, attr) {
                    if(scope.car.make === "Audi") {
                        scope.important = true;
                    }
                },
                controller: ["$scope", "CarService", function($scope, CarService) {
                    $scope.showQuery = function() {
                        alert("Query: " + CarService.query);
                    }
                }]
            }
        })
        .controller("HomeCtrl", ["$scope", "$location", "CarService", function ($scope, $location, CarService) {
            $scope.query = CarService.query;
            $scope.search = function() {
                CarService.query = $scope.query;
                $location.url("cars");
            }
        }])
        .controller("CarCtrl", ["$scope", "CarService", function ($scope, CarService) {
            $scope.query = CarService.query;
            CarService.cars().success(function(data) {
                $scope.cars = data;
            });

            $scope.toDate = function(ts) {
                return new Date(ts);
            }
        }]);
})();
