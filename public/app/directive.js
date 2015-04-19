'use strict';
app.directive('post', function() {
    return {
        restrict: 'E',
        templateUrl: '/partial/template/directive/post.html'
    };
}).directive('compose', function() {
    return {
        restrict: 'E',
        templateUrl: '/partial/template/directive/compose.html'
    };
})
.directive('headslide', function() {
    return {
        restrict: 'E',
        templateUrl: '/partial/template/directive/headSlide.html'
    };
});
