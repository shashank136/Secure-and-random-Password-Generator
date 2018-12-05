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

            // Check if url is already save in DB
            async function checkKey(webUrl){
                var sendMe;
                var promise = await firebaseFunctions
                .checkWebsite(webUrl)
                .then(function(response){
                    sendMe = response;
                    console.log("succuess: "+response);
                })
                .catch(function(error){
                    console.log("Something went wrong: "+promise.state);
                });
                return sendMe;
            }

            // Get the URL of the website
            async function logTabs(tabs) {
                let tab = tabs[0]; 
                var x = tab.url;
                var r = /:\/\/(.[^/]+)/;
                console.log(x.match(r)[1]);
                $scope.webUrl = x.match(r)[1];
                $scope.webCheck = await checkKey($scope.webUrl);
                if($scope.webCheck===false)
                    firebaseFunctions.pushToServer($scope.toSend, $scope.webUrl);
                else
                    alert("key already exists");
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

        	async function getKey(webUrl){
        		var sendMe;
        		var promise = await firebaseFunctions
                .getFromServer(webUrl)
	        	.then(function(response){
	        		sendMe = response;
	        		console.log("succuess: "+response);
	        	})
	        	.catch(function(error){
	        		console.log("Something went wrong: "+promise.state);
	        	});
	        	return sendMe;
        	}

        	async function logTabs(tabs) {
                let tab = tabs[0]; 
                var x = tab.url;
                var r = /:\/\/(.[^/]+)/;

                
                $scope.webUrl = x.match(r)[1];
                console.log("website: "+$scope.webUrl);
                $scope.toSend = await getKey($scope.webUrl);

                $scope.getKey = passwordService.decryptMe($scope.toSend);
            	console.log("Decrypted password: "+$scope.getKey);
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