'use strict';
angular
    .module('app')
    .config(function ($stateProvider) {
        $stateProvider
            .state('start', {
                url: '/',
                templateUrl: 'views/login.html',
                controller: 'loginController'
            })
            .state('menu', {
                url: '/menu',
                templateUrl: 'views/menu.html',
                controller: 'menuController'
            })
            .state('order', {
                url: '/order',
                templateUrl: 'views/order.html',
                controller: 'orderController'
            })
    });