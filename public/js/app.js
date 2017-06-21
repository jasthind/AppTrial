'use strict';

angular
    .module('app', [
        'ngMaterial',
        'ngMessages',
        'ui.router',
        'ngResource'])
    .config(function($mdThemingProvider, $urlRouterProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('pink')
            .backgroundPalette('cyan', {
                'default': '500'})
            .accentPalette('orange');
        $urlRouterProvider.otherwise("/");
    });
