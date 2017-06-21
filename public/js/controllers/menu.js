'use strict';
angular
    .module('app')
    .controller('menuController', menuController);

menuController.$inject = ['$scope','loginService'];

function menuController($scope, loginService, $state) {
    $scope.dishes = [
        { name: 'Butter Chicken', days: ['Mon', 'Tues'] },
        { name: 'Chicken Tikka', days: ['Wed', 'Thurs'] },
        { name: 'Tandoori Chicken', days: ['Fri'] },
        { name: 'Paneer Masala', days: ['Mon', 'Wed'] }
    ];
}

