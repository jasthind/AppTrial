'use strict';
angular
    .module('app')
    .controller('loginController', loginController);

loginController.$inject = ['$scope','loginService', '$state'];

function loginController($scope, loginService, $state) {
    $scope.login = function login() {
        $state.go('menu');
    };


    $scope.googleUrl = 'http://google.com'
}