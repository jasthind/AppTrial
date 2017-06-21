'use strict';
angular
    .module('app')
    .controller('orderController', orderController);

orderController.$inject = ['$scope','loginService'];

function orderController($scope, loginService, $state) {
    $scope.curries = [
        { name: 'Butter Chicken', selected: false },
        { name: 'Paneer Butter Masala', selected: false },
        { name: 'Rajma', selected: false },
        { name: 'Chicken Curry', selected: false }
    ];
    $scope.mains = [
        { name: 'Rice', selected: false },
        { name: 'Naan', selected: false }
    ];
    $scope.sides = [
        { name: 'Salad', selected: false },
        { name: 'Samosa', selected: false }
    ];
    $scope.drinks = [
        { name: 'Coke', selected: false },
        { name: 'Diet Coke', selected: false },
        { name: 'Sprite', selected: false },
        { name: 'Iced Tea', selected: false }
    ];
}