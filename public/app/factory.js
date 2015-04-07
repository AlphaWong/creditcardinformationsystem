'use strict';

creditCardInfoSystemApp.factory('BroadCast', function($rootScope) {
        return function(event, value) {
            $rootScope.$broadcast(event, value);
        };
    })
    .factory('Post', ['$resource', function($resource) {
        return $resource('/api/creditcard/post/:post_id', {
            post_id: '@post_id'
        }, {});
    }]);
