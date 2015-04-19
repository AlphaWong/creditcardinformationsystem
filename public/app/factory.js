'use strict';

app.factory('BroadCast', function($rootScope) {
        return function(event, value) {
            $rootScope.$broadcast(event, value);
        };
    })
    .factory('Post', ['$resource', function($resource) {
        return $resource('/api/creditcard/post/:post_id', {
            post_id: '@post_id'
        }, {});
    }])
    .factory('CreditCard', ['$resource', function($resource) {
        return $resource('/api/creditcard/post/:post_id', {
            post_id: '@post_id'
        }, {});
    }])
    .factory('CreditCard', ['$resource', function($resource) {
        return $resource('/api/creditcard/post/:post_id', {
            post_id: '@post_id'
        }, {});
    }]);
