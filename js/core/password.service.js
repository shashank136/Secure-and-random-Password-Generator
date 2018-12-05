(function(){
	'use strict';

	angular.module('passwordApp')
		.service('passwordService', passwordService);

	function passwordService(){
		var service = this;
        var text = "";
        var temp1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; // alphanumeric
        var temp2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; // alphabetic
        var temp3 = "0123456789"; // numeric
        var temp4 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; // special characters

        service.getRandomPassword = function(size, format, spike) {
            text = "";
            var temp = "";
            if (format === "alphanumeric") temp = temp1;
            else if (format === "alphabetic") temp = temp2;
            else if (format === "numeric") temp = temp3;
            else {
                for (var i = 0; i < size; i++) {
                    if (i % 3 != 0)
                        text += temp1.charAt(Math.floor(Math.random() * temp1.length));
                    else
                        text += spike.charAt(Math.floor(Math.random() * spike.length));
                }
                return text;
            }

            for (var i = 0; i < size; i++) {
                text += temp.charAt(Math.floor(Math.random() * temp.length));
            }

            return text;
        }

        service.encryptMe = function(temp) {

            var key = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

            // Convert text to bytes
            var text = temp; 
            var textBytes = aesjs.utils.utf8.toBytes(text);

            // The counter is optional, and if omitted will begin at 1
            var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
            var encryptedBytes = aesCtr.encrypt(textBytes);

            // To print or store the binary data, you may convert it to hex
            var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
            console.log(encryptedHex);
            
            return encryptedHex;
        }

        service.decryptMe = function(encryptedHex){
            console.log("here for decryption");
            console.log(encryptedHex);
            var key = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

            // When ready to decrypt the hex string, convert it back to bytes
            var encryptedBytes = aesjs.utils.hex.toBytes(encryptedHex);

            // The counter mode of operation maintains internal state, so to
            // decrypt a new instance must be instantiated.
            var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
            var decryptedBytes = aesCtr.decrypt(encryptedBytes);

            // Convert our bytes back into text
            var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
            console.log(decryptedText);

            return decryptedText;
        }
	};

})();