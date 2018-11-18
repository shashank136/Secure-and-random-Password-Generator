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
            passwordService.encryptMe($scope.keyPass)
        };

        $scope.getSpecialKey = function(){
            if($scope.check==='custom')
                $scope.keyPass = passwordService.getRandomPassword($scope.len, $scope.check, $scope.spike);
                passwordService.encryptMe($scope.keyPass);
        };

        $scope.repeatGenerate = function(){
            if($scope.check){
                if($scope.check==='custom')
                    $scope.keyPass = passwordService.getRandomPassword($scope.len, $scope.check, $scope.spike);
                else{
                    $scope.spike="";
                    $scope.keyPass = passwordService.getRandomPassword($scope.len, $scope.check, $scope.spike);
                }
                passwordService.encryptMe($scope.keyPass)
            }              
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

        service.encryptMe = function(temp){
        
            // An example 128-bit key (16 bytes * 8 bits/byte = 128 bits)
            var key = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ];
             
            // Convert text to bytes
            var text = temp;//'Text may be any length you wish, no padding is required.';
            var textBytes = aesjs.utils.utf8.toBytes(text);
             
            // The counter is optional, and if omitted will begin at 1
            var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
            var encryptedBytes = aesCtr.encrypt(textBytes);
             
            // To print or store the binary data, you may convert it to hex
            var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
            console.log(encryptedHex);
            // "a338eda3874ed884b6199150d36f49988c90f5c47fe7792b0cf8c7f77eeffd87
            //  ea145b73e82aefcf2076f881c88879e4e25b1d7b24ba2788"
             
            // When ready to decrypt the hex string, convert it back to bytes
            var encryptedBytes = aesjs.utils.hex.toBytes(encryptedHex);
             
            // The counter mode of operation maintains internal state, so to
            // decrypt a new instance must be instantiated.
            var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
            var decryptedBytes = aesCtr.decrypt(encryptedBytes);
             
            // Convert our bytes back into text
            var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
            console.log(decryptedText);
            // "Text may be any length you wish, no padding is required."
        }
    };

})();
