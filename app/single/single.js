'use strict';

angular.module('myApp.single', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/posts/:id', {
            templateUrl: 'single/single.html',
            controller: 'SingleCtrl'
        });
    }])

    .controller('SingleCtrl', ['$scope', '$http', '$routeParams', 'SERVER_URL', function($scope, $http, $routeParams, SERVER_URL) {
        $scope.SERVER_URL = SERVER_URL;

        $scope.loadPost = function(){
            $http.get(SERVER_URL + 'api/posts/' + $routeParams.id)
                .then(function(response){
                    $scope.post = response.data.post;
                })
        }
    }]);