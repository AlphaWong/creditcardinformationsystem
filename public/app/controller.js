'use strict';

creditCardInfoSystemApp.controller('PostCtrl', function($scope, Post) {
        $scope.init = function() {

        };
        $scope.test = function() {
            console.log(Post.query());
        };
    })
    .config(function($mdThemingProvider) {
        // Configure a dark theme with primary foreground yellow
        $mdThemingProvider.theme('docs-dark', 'default')
            .primaryPalette('yellow')
            .dark();
    });
