'use strict';

angular.module('myApp.home', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home/home.html',
            controller: 'HomeCtrl'
        });
    }])

    .controller('HomeCtrl', ['$scope', '$http', 'SERVER_URL', function($scope, $http, SERVER_URL) {
        $scope.posts = [];
        $scope.SERVER_URL = SERVER_URL;

        $scope.loadPosts = function(){
            $http.get(SERVER_URL + 'api/')
                .then(function(response){
                    $scope.posts = response.data.posts;
                });
        };
    }]);