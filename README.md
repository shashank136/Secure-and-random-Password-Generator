# Secure-and-random-Password-Generator
This is an opensource project to generate secure and random password for user on website while sign up and sing in without any hassle automatically using **Angular JS**. 
Works on multiple devices with sync fecility.
Protect passwords with 3 levels of best encryption techniques applied to safe guard the password and client details. 


Works through browser plug-ins

## Features:

1) Feature to generate secure-random password in various formats.
2) Ability to save the password securly and provide them during sing-in or log-in.
3) Generate password of your required length with and without special characters of your wish.
4) works through browser extension.

### Using [ngclipboard](https://sachinchoolur.github.io/ngclipboard/) for adding the copy to clipboard feature.
### Using [Bulma](https://bulma.io/) for CSS.

## Adding Support for plug-in in firefox, Chrome browser & Edge Browser

### steps:

1) Add a manifest.json file in the root directory of project
2) Inside manifest.json add the following code

```json
	{
		"manifest_version":2,
		"name": "SecureKey",
		"version": "1.0.0",
		"suthor": "Shashank",
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

4) For plug-in firefox, load the manifest.json file into the firefox from add:debugging(enter this in the address bar and hit enter) section by clicking on **Load Temporary Add-on**.

5) If on **chrome browser** then visit chrome://extensions in your browser and ensure that the Developer mode checkbox in the top right-hand corner is checked.Click **Load unpacked extension** and select the directory in which your extension files live.

6) In case of **Edge browser**visit **about:flags** and select the **Enable extension developer features** checkbox. Select More and select extension and load local extension.

7) For facility to access some browser information which is not available in a regular browser app, such as the ability to access an opened window and retrieve all of it’s opened tabs.

```json
	"permissions": ["tabs"]
```

Add the above code to your manifest.json file. Here you can request for range of permission from the user.