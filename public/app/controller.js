'use strict';

app.controller('PostCtrl', function($scope, Post) {
        $scope.init = function() {
            $scope.posts = Post.query();
            $scope.limit = 10;
        };
        $scope.loadMore = function() {
            $scope.limit += 10;
        }
        $scope.loadLess = function() {
            $scope.limit -= 10;
            if ($scope.limit < 10) $scope.limit = 0;
        }
    })
    .controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav) {
        $scope.toggleSidenav = function(menuId) {
            $mdSidenav(menuId).toggle();
        };
    }]);
