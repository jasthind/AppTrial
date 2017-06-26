'use strict';
angular
    .module('app')
    .controller('menuController', menuController);

menuController.$inject = ['$scope','loginService', '$state'];

function menuController($scope, loginService, $state) {
    $scope.dishes = [
        {
            name: 'Butter Chicken',
            image:'img/menu/butterChicken.jpg',
            days: ['Mon', 'Tues']
        },
        {
            name: 'Chicken Tikka',
            image:'img/menu/chickenTikka.jpg',
            days: ['Wed', 'Thurs']
        },
        {
            name: 'Tandoori Chicken',
            image:'img/menu/tandooriChicken.jpg',
            days: ['Fri']
        },
        {
            name: 'Paneer Butter Masala',
            image:'img/menu/paneerButterMasala.jpg',
            days: ['Mon', 'Wed']
        }
    ];

    $scope.days = [
        {
            name: 'Monday',
            dishes: [
                {name:'Butter Chicken', image: 'img/menu/butterChicken.jpg'},
                {name:'Paneer Butter Masala', image: 'img/menu/paneerButterMasala.jpg'}
            ]
        },
        {
            name: 'Tuesday',
            dishes: [
                {name:'Butter Chicken', image: 'img/menu/butterChicken.jpg'}
            ]
        },
        {
            name: 'Wednesday',
            dishes: [
                {name:'Chicken Tikka', image: 'img/menu/chickenTikka.jpg'},
                {name:'Paneer Butter Masala', image: 'img/menu/paneerButterMasala.jpg'}
            ]
        },
        {
            name: 'Thursday',
            dishes: [
                {name:'Chicken Tikka', image: 'img/menu/chickenTikka.jpg'}
            ]
        },
        {
            name: 'Friday',
            dishes: [
                {name:'Tandoori Chicken', image: 'img/menu/tandooriChicken.jpg'}
            ]
        }
    ]


    $scope.selectDish = function selectDish() {
        $state.go('order');
    };
}

