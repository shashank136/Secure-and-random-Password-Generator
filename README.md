# Secure-and-random-Password-Generator
This is an opensource project to generate secure and random password for the user on a website while sign up and sing in without any hassle automatically using **Angular JS**. 
Works on multiple devices with sync facility.
Protect passwords with 3 levels of best encryption techniques applied to safe guard the password and client details. 

## How the plug-in looks in firefox browser:

### Creating and saving a secure password

![gif](https://github.com/shashank136/Secure-and-random-Password-Generator/blob/master/res/img/save.gif)

### Fetching the secure password for login

![gif](https://github.com/shashank136/Secure-and-random-Password-Generator/blob/master/res/img/get.gif)

## Features:

1. Feature to generate secure-random password in various formats.
2. Ability to save the password securly and provide them during sing-in or log-in.
3. Generate password of your required length with and without special characters of your wish.
4. works through browser extension.
5. Provides password encryption using ACS algorithm.
6. Using Google firestone NoSQL database.User need to have their own firebase account to run the project successfully.
7. Adding Support for plug-in in firefox, Chrome browser & Edge Browser

## Dependencies 

* Using [ngclipboard](https://sachinchoolur.github.io/ngclipboard/) for adding the copy to clipboard feature.
* Using [Bulma](https://bulma.io/) for CSS.
* Using [aes-js](https://www.npmjs.com/package/aes-js) for encryption (Still under improvement).


## How to Get Started:

* Download the project from github or clone the project to your local machine.
* Configure the google firebase for the project
	* Create a google account, if you don't have one and log into google firebase.
	* Follow the instruction to create firestone database.[firestone](https://firebase.google.com/docs/firestore/quickstart?authuser=0).
	* Start firestone app in test mode.
	* Update the below code with your firebase database details inside the file firebase.function.js file in the project directory.
```json

	//Firebase configurations (USERS HAVE TO UPDATE THE BELOW DETAILS WITH THEIR OWN FIREBASE PROJECT DETAILS)
    firebase.initializeApp({
        apiKey: "AIzaSyDwKUw_WudafwfAPYBmhhaMizMRfSYgtG8",
        authDomain: "password-9d02f.firebaseapp.com",
        projectId: "password-9d02f"
    });
```
* Enable plug-in support for the browsers:
	* For plug-in **firefox browser**, load the manifest.json file into the firefox from **about:debugging**(enter this in the address bar and hit enter) section by clicking on **Load Temporary Add-on**.

	* If on **chrome browser** then visit chrome://extensions in your browser and ensure that the Developer mode checkbox in the top right-hand corner is checked.Click **Load unpacked extension** and select the directory in which your extension files live.

	* In case of **Edge browser**visit **about:flags** and select the **Enable extension developer features** checkbox. Select More and select extension and load local extension.

* Make sure manifest.json file in the root directory of project has manifest_version is 2.

* Inside manifest.json add the following code

```json
	{
		"manifest_version":2,
		"name": "SecureKey",
		"version": "1.0.0",
		"author": "Shashank",
		"icon": {
			"48": "res/img/icon.png"
		},
		"browser_action": {
			"default_icon": "res/img/icon.png",
			"default_title": "Secure Key",
			"default_popup": "html/index.html"
		}
	}
```

* For facility to access some browser information which is not available in a regular browser app, such as the ability to access an opened window and retrieve all of it’s opened tabs.

```json
	"permissions": ["tabs"]
```

* When you visit a website for first time or want to have an account on that website click the add for secure password.
* generate new radom password and copy it to clipboard for the website then navigate to the sign-up page.
* enter your details and the passowrd
* when revisiting the website then simply click the button ```Click Me!!```
* that will get the password for you.
* Click the copy to clipboard option till you see the text int the text box is selected and then close.
* Now you are ready to enjoy your login.

