'use strict';

app.controller('PostGridCtrl', function($scope, Post) {
        $scope.init = function() {
            $scope.posts = Post.query();
            $scope.limit = 10;
        };
        $scope.loadMore = function() {
            $scope.limit += 10;
            console.log('call')
        }
    })
    .controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav) {
        $scope.toggleSidenav = function(menuId) {
            $mdSidenav(menuId).toggle();
        };
    }])
    .controller('PostCtrl', function($scope, $mdDialog) {
        $scope.showDetail = function(ev) {
            $mdDialog.show(
                $mdDialog.alert()
                .title($scope.post.title)
                .content($scope.post.content)
                .ok('Got it!')
                .targetEvent(ev)
            );
        };
    })
    .controller('CreditCardGridCtrl', function($scope, CreditCard) {
        $scope.init = function() {
            $scope.creditcards = CreditCard.query();
            $scope.limit = 10;
        };
        $scope.loadMore = function() {
            $scope.limit += 10;
            console.log('call')
        }
    }).controller('ComposeCtrl', function($scope,Post) {
        $scope.init = function() {

        };
        $scope.submit = function () {
            var post=new Post($scope.post);
            post.$save();
        };
    });

