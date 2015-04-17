'use strict';

var app = angular.module('CreditCardApp', ['ngMaterial', 'ngRoute', 'ngResource', 'ngSanitize', 'ngAria', 'ngTouch', 'angular-carousel'])
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('blue-grey')
            .accentPalette('light-green');
    }).config(function($mdThemingProvider) {
        $mdThemingProvider.theme('docs-dark', 'default')
            .primaryPalette('yellow')
            .dark();
    });;
