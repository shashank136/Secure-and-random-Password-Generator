# Secure-and-random-Password-Generator
This is an opensource project to generate secure and random password for user on website while sign up and sing in without any hassle automatically.
Works on multiple devices with sync fecility.
Protect passwords with 3 levels of best encryption techniques applied to safe guard the password and client details. 


Works through browser plug-ins


# Adding Support for plug-in in firefox browser

# steps:

1) Add a manifest.json file in the root directory of project
2) Inside manifest.json add the following code

```json
	{
		"manifest_version":2,
		"name": "SecureKey",
		"version": "1.0.0",
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
4) load the manifest.json file into the firefox from add:debugging(enter this in the address bar and hit enter) section by clicking on Load Temporary Add-on..
5) For facility to access some browser information which is not available in a regular browser app, such as the ability to access an opened window and retrieve all of it’s opened tabs.

```json
	"permissions": ["tabs"]
```

Add the above code to your manifest.json file. Here you can request for range of permission from the user.