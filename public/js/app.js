'use strict';

angular
    .module('app', [
        'ngMaterial',
        'ngMessages',
        'ui.router',
        'ngResource'])
    .config(function($mdThemingProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
    });
