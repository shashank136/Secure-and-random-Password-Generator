# Secure-and-random-Password-Generator
This is an opensource project to generate secure and random password for the user on a website while sign up and sing in without any hassle automatically using **Angular JS**. 
Works on multiple devices with sync facility.
Protect passwords with 3 levels of best encryption techniques applied to safe guard the password and client details. 

# Images:

![Browser plug-in](https://github.com/shashank136/Secure-and-random-Password-Generator/blob/master/res/img/demo.png)

Works through browser plug-ins

## Features:

1) Feature to generate secure-random password in various formats.
2) Ability to save the password securly and provide them during sing-in or log-in.
3) Generate password of your required length with and without special characters of your wish.
4) works through browser extension.
5) Provides password encryption using ACS algorithm.
6) Using Google firestone NoSQL database.User need to have their own firebase account to run the project successfully.

### Using [ngclipboard](https://sachinchoolur.github.io/ngclipboard/) for adding the copy to clipboard feature.
### Using [Bulma](https://bulma.io/) for CSS.
### Using [aes-js](https://www.npmjs.com/package/aes-js) for encryption (Still under improvement).

## Adding Support for plug-in in firefox, Chrome browser & Edge Browser

### steps:

1) Add a manifest.json file in the root directory of project
2) Inside manifest.json add the following code

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
	
3) Make sure that manifest_version is 2.

4) For plug-in **firefox browser**, load the manifest.json file into the firefox from **about:debugging**(enter this in the address bar and hit enter) section by clicking on **Load Temporary Add-on**.

5) If on **chrome browser** then visit chrome://extensions in your browser and ensure that the Developer mode checkbox in the top right-hand corner is checked.Click **Load unpacked extension** and select the directory in which your extension files live.

6) In case of **Edge browser**visit **about:flags** and select the **Enable extension developer features** checkbox. Select More and select extension and load local extension.

7) For facility to access some browser information which is not available in a regular browser app, such as the ability to access an opened window and retrieve all of it’s opened tabs.

```json
	"permissions": ["tabs"]
```

Add the above code to your manifest.json file. Here you can request for range of permission from the user.

## Configuring Google firebase for the project

1) Create a google account and log into google firebase.
2) Follow the instruction to create firestone database.[firestone](https://firebase.google.com/docs/firestore/quickstart?authuser=0).
3) Keep in mind you need to start in test mode.

# HOW TO USE

1) When you visit a website for first time or want to have an account on that website click the add for secure password.
2) generate new radom password and copy it to clipboard for the website then navigate to the sign-up page.
3) enter your details and the passowrd
4) when revisiting the website then simply click the button ```Click Me!!```
5) that will get the password for you.
6) Click the copy to clipboard option till you see the text int the text box is selected and then close.
7) Now you are ready to enjoy your login.

## DON'T SHARE YOUR GOOGLE ACCOUNT PASSWORD WITH ANYONE, THAT IS THE ONLY PASSWORD YOU NEED FIRST TO RUN THE PROJECT AT LEAST.
