(function(){
    'use strict';

    angular.module('passwordApp', [])
            .controller('passController', passController)
            .service('passwordService', passwordService);

    passController.$inject = ['$scope', 'passwordService'];
    
    function passController($scope, passwordService){
        var password = this;
        $scope.len = 8; // taking the default size to be 8
        $scope.check = '';

        if($scope.check.length>0){
            $scope.password =  passwordService.getRandomPassword($scope.len, $scope.check);
        }else{
            $scope.passwrd =  passwordService.getRandomPassword(size);
        }

    };

    function passwordService(){
        var service = this;
        var randomstring = require("randomstring");

        service.getRandomPassword = function(){
            return randomstring.generate();
        }

        service.getRandomPassword = function(size){
            return randomstring.generate(size);
        }

        service.getRandomPassword = function(size, format){
            return randomstring.generate({
                length: size,
                charset: format
            });
        }

         service.getRandomPassword = function(format){
            return randomstring.generate({
                charset: format
            });
        }
    };

})();