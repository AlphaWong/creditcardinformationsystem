'use strict';

var app = angular.module('CreditCardApp', ['ngMaterial', 'ngRoute', 'ngResource', 'ngSanitize', 'ngAria', 'ngTouch', 'angular-carousel', 'djds4rce.angular-socialshare'])
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('blue-grey')
            .accentPalette('light-green');
    })
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('docs-dark', 'default')
            .primaryPalette('yellow')
            .dark();
    })
    .config(function($locationProvider) {
        $locationProvider.html5Mode(true).hashPrefix('!');
    })
    .run(function ($rootScope) {
        $rootScope.language = 'en';
        $rootScope.changeLanguage = function () {
            $rootScope.isEnglish = !$rootScope.isEnglish;
            $rootScope.language = ($rootScope.isEnglish) ? 'en' : 'zh';
        }
    });
