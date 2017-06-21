'use strict';

angular
    .module('app')
    .factory('loginService', loginService);

function loginService() {
    return {
        login: function login(userLogin) {
            var userLogin = {
                email: '',
                password: '',
            };
            return userLogin;
        }
    };
}