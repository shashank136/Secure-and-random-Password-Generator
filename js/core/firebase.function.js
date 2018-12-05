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

        service.getFromServer =  async function(webUrl){
        	
        	var result;
        	var promise = await db.collection("users")
        		.where("websiteUrl", "==", webUrl)
        		.get() 	
            	.then(function(querySnapshot){
	            	querySnapshot.forEach(function(doc){
	            		result = doc.data().EncryptedPassword;
	            	});
	            })
	            .catch(function(error){
	            	console.log("Error getting the details");
	            });

            return result;
        }

        service.checkWebsite = async function(webUrl){
            var check = false;
            var promise = await db.collection("users")
                .where("websiteUrl", "==", webUrl)
                .get()  
                .then(function(querySnapshot){
                    querySnapshot.forEach(function(doc){
                        check = true;
                    });
                })
                .catch(function(error){
                    console.log("NO SUCH WEBSITE IN DB");
                });

            return check;
        }
	};

})();