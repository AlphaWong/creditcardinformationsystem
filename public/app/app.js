'use strict';

var app = angular.module('CreditCardApp', ['ngMaterial', 'ngRoute', 'ngResource']).config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('light-green')
        .accentPalette('orange');
});
