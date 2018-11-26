(function(){
	'use strict';

	angular.module('passwordApp')
		.service('firebaseFunctions', firebaseFunctions);

	function firebaseFunctions(){
		var service = this;
        
        //Firebase configurations (USERS HAVE TO UPDATE THE BELOW DETAILS WITH THEIR OWN FIREBASE PROJECT DETAILS)
        firebase.initializeApp({
            apiKey: "AIzaSyDwKUw_WudafwfAPYBmhhaMizMRfSYgtG8",
            authDomain: "password-9d02f.firebaseapp.com",
            projectId: "password-9d02f"
        });

        // Initialize Cloud Firestore through Firebase
        var db = firebase.firestore();

        // Disable deprecated features
        db.settings({
            timestampsInSnapshots: true
        });

        service.pushToServer = function(encryptedKey, webUrl){

            console.log("inside the firebase functions: "+encryptedKey+" "+webUrl);

            db.collection("users").add({
                EncryptedPassword: encryptedKey,
                websiteUrl: webUrl
            })
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
        }

        service.getFromServer = function(webUrl){
        	
        	db.collection("users").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                	var temp = `${doc.data().websiteUrl}`;
                	if(temp===webUrl){
                		console.log(`${doc.data().EncryptedPassword}`);
                		return `${doc.data().EncryptedPassword}`;
                	}                 
                });
            });
        }
	};

})();