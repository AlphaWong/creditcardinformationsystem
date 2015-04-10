'use strict';

app.controller('PostCtrl', function($scope, Post) {
  $scope.init = function() {
    $scope.posts = Post.query();
  };
  $scope.test = function() {
    console.log(Post.query());
  };
})
