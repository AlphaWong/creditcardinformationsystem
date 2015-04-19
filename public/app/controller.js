'use strict';
'use strict';
angular.module('app', ['djds4rce.angular-socialshare']);
angular.module('app', ['djds4rce.angular-socialshare']).config(function($locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
});
app.controller('PostGridCtrl', function($scope, Post) {
        $scope.init = function() {
            $scope.posts = Post.query();
            $scope.limit = 10;
        };
        $scope.loadMore = function() {
            $scope.limit += 10;
        }

        // $scope.reverse=false;
        // $scope.predicate='-title';
    })
    .controller('AppCtrl', ['$scope', '$mdSidenav', '$mdDialog', '$location', function($scope, $mdSidenav, $mdDialog, $location) {
        $scope.toggleSidenav = function(menuId) {
            $mdSidenav(menuId).toggle();
        };
        $scope.init = function() {
            $location.path('')
        }
        $scope.composePost = function(ev) {
            $mdDialog.show({
                controller: 'PostCtrl',
                template: '<md-dialog aria-label="List dialog" flex="66">' +
                    '  <md-content>' +
                    '    <compose></compose>' +
                    '  </md-content>' +
                    '  <div class="md-actions">' +
                    '    <md-button ng-click="closeDialog()">' +
                    '      Close Dialog' +
                    '    </md-button>' +
                    '  </div>' +
                    '</md-dialog>',
                targetEvent: ev
            });
        };
    }])

.controller('PostCtrl', ['$scope', '$mdDialog', '$timeout', '$location', '$http',
        function($scope, $mdDialog, $timeout, $location, $http) {
            $scope.reverse = false;
            $scope.predicate = 'title';
            if ($scope.post) {
                var title_ = $scope.post.title;
                var content = $scope.post.content;
            }
            $scope.showDetail = function(ev) {
                $location.hash($scope.post.post_id);
                $mdDialog.show({
                    targetEvent: ev,
                    templateUrl: '/partial/template/directive/dialog.html',
                    controller: DialogController
                });
                if ($scope.nextSlideTimer) {
                    $timeout.cancel($scope.nextSlideTimer);
                    nextSlide();
                }
            };

            function DialogController($scope, $mdDialog) {
                $scope.title_ = title_;
                    $scope.content = content;
                    console.log( $scope.content)
                $scope.cancel = function() {
                    $mdDialog.cancel();
                };
            }
            $scope.closeDialog = function() {
                $mdDialog.hide();
                $location.url('/');
            };
            $scope.init = function() {
                $scope.selectedIndex = Math.round(Math.random());
                nextSlide();
                $scope.fetchImg();
                $http.get('https://en.wikipedia.org/w/api.php?action=query&list=random&rnlimit=1&format=json').
                success(function(data) {
                    $scope.tab1Content = data.query.random.title;
                });
            };

            $scope.fetchImg = function() {
                $scope.imgUrl = 'http://lorempixel.com/400/200/technics/?t=' + Math.floor(Math.random() * 400);
            };


            function nextSlide() {
                $timeout(function() {
                    $scope.selectedIndex = Math.round(Math.random());
                    nextSlide();
                }, Math.floor(7 + Math.random() * 4) * 1000);
            }
        }
    ])
    .controller('CreditCardGridCtrl', function($scope, CreditCard) {
        $scope.init = function() {
            $scope.creditcards = CreditCard.query();
            $scope.limit = 10;
        };
        $scope.loadMore = function() {
            $scope.limit += 10;
            console.log('call')
        }
    }).controller('ComposeCtrl', function($scope, Post) {
        $scope.init = function() {

        };
        $scope.submit = function() {
            var post = new Post($scope.post);
            post.$save();
        };
    });
