(function(){
	'use strict';

	angular.module('passwordApp')
		.controller('passController', passController);

	passController.$inject = ['$scope', 'passwordService', 'firebaseFunctions'];

	function passController($scope, passwordService, firebaseFunctions) {
        $scope.len = 8;

        $scope.getNewKey = function() {
            $scope.keyPass = passwordService.getRandomPassword($scope.len, $scope.check, $scope.spike);
        };

        $scope.getSpecialKey = function() {
            if ($scope.check === 'custom')
                $scope.keyPass = passwordService.getRandomPassword($scope.len, $scope.check, $scope.spike);            
        };

        $scope.repeatGenerate = function() {
            if ($scope.check) {
                if ($scope.check === 'custom')
                    $scope.keyPass = passwordService.getRandomPassword($scope.len, $scope.check, $scope.spike);
                else {
                    $scope.spike = "";
                    $scope.keyPass = passwordService.getRandomPassword($scope.len, $scope.check, $scope.spike);
                }
            }
        };

        $scope.save = function(){           

            $scope.toSend = passwordService.encryptMe($scope.keyPass); // get the password to encrypt
            // Get the URL of the website
            function logTabs(tabs) {
                let tab = tabs[0]; 
                var x = tab.url;
                var r = /:\/\/(.[^/]+)/;
                console.log(x.match(r)[1]);
                $scope.webUrl = x.match(r)[1];
                firebaseFunctions.pushToServer($scope.toSend, $scope.webUrl);
            }

            function onError(err) {
                console.error(err);
            }

            browser.tabs.query({
                currentWindow: true,
                active: true
            }).then(logTabs, onError);
        }

        $scope.getPassword = function(){

        	var promise = firebaseFunctions.getFromServer("www.instagram.com");
        	
        	console.log(promise);

        	function logTabs(tabs) {
                let tab = tabs[0]; 
                var x = tab.url;
                var r = /:\/\/(.[^/]+)/;
                console.log(x.match(r)[1]);
                $scope.webUrl = x.match(r)[1];
                $scope.getKey = passwordService.decryptMe($scope.toSend);
            	console.log("Decrypted password: "+$scope.decryptedKey);
            }

            function onError(err) {
                console.error(err);
            }

            browser.tabs.query({
                currentWindow: true,
                active: true
            }).then(logTabs, onError);
        }
    };

})();