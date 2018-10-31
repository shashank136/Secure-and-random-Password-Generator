(function(){
    'use strict';

    angular.module('passwordApp', ['ngclipboard'])
            .controller('passController', passController)
            .service('passwordService', passwordService);

    passController.$inject = ['$scope', 'passwordService'];
    
    function passController($scope, passwordService){
        $scope.len=8;

        $scope.getNewKey = function(){
            $scope.keyPass = passwordService.getRandomPassword($scope.len, $scope.check, $scope.spike);
        };

        $scope.getSpecialKey = function(){
            if($scope.check==='custom')
                $scope.keyPass = passwordService.getRandomPassword($scope.len, $scope.check, $scope.spike);
        };

    };

    function passwordService(){
        var service = this;
        var text = "";
        var temp1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";   // alphanumeric
        var temp2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";             // alphabetic
        var temp3 = "0123456789";                                                       // numeric
        var temp4 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";   // special characters

        service.getRandomPassword = function(size, format, spike){
            text = "";
            var temp="";
            if(format==="alphanumeric") temp = temp1;
            else if(format==="alphabetic") temp = temp2;
            else if(format==="numeric") temp = temp3;
            else {
                for(var i=0; i<size; i++){
                    if(i%3!=0)
                        text += temp1.charAt(Math.floor(Math.random() * temp1.length));
                    else
                        text += spike.charAt(Math.floor(Math.random() * spike.length));
                }
                return text;
            }

            for(var i=0; i<size; i++){
                text += temp.charAt(Math.floor(Math.random() * temp.length));
            }

            return text;
        }
    };

})();
