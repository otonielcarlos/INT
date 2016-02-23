var app = angular.module("INT", ["ngRoute", "ngAnimate"]);


app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "sections/home.html",
        controller: "HomeController"
    }).when("/sections", {
        templateUrl: "sections/sections.html",
        controller: "SectionsController"
    }).when("/about", {
        templateUrl: "sections/about.html",
        controller: "AboutController"
    }).when("/rockstar", {
        templateUrl: "sections/rockstar.html",
        controller: "RockstarController"

    });

}]);



app.controller("HomeController", ["$scope", function ($scope) {
    $scope.pageClass = "sections";

}]);
app.controller("SectionsController", ["$scope", function ($scope) {
    $scope.pageClass = "sections";

}]);
app.controller("AboutController", ["$scope", function ($scope) {
    $scope.pageClass = "about";
}]);

app.controller("RockstarController", ["$scope", function ($scope) {
    $scope.pageClass = "rock";
}]);