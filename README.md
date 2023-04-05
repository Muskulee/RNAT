# Reactnative Starter Template
### React Native App Starter Template For Your Saas Project

Download, anyhow you know. Just get it from this repo.

In your project terminal, install the project dependencies by running the command:

> yarn install

Then, run the command 
> npx pod-install

## How To Change App Name
In Package.json change the app name: 

"name": "Whatever You Want To Name Your App Goes Here",

## For Android: 

In your code editor e.g VSCode open this path:
> android/app/src/main/res/values/string.xml

Now you can easily change the app name in the string tag. For example:
<string name="app_name">YOUR_APP_NAME</string>

### If you already installed the app, uninstall the app from your device and run these commands:
> ### $ cd android
> ### $ ./gradlew clean
> ### $ cd ..
> ### $ npx react-native run-android
> 

If you have any error, open this path android/app/src/main/java/com/dova/MainActivity.java and change the return value to your app name. e.g   protected 

>  `String getMainComponentName() {
>     return "YOUR_APP_NAME";
>    }`
  
Then re-run the commands above. 


## For IOS:
Open info.plist in your code editor, and change the value after the key to your app name. 
Eg.

`<key>CFBundleDisplayName</key>`
`<string>Change This To Your New App Name</string>`

Now uninstall the previous app from your device.  Run 
> npx pod-install

Now simply, you can install the new app on your device by running the code 

> npx react-native run-ios

If you run into any error, edit appmanifest in this path: 

> ios/Dova/AppDelegate.mm

Change the module name

	e.g self.moduleName = @"YOUR_APP_NAME";
	
Then rbuild the ios debug app


## Splashscreen

To change the splash screen color code

iOS: Open the path 

ios/Dova/LaunchScreen.storyboard

Replace/edit the rgb values in the file with yours as seen below. 
>  `<color key="backgroundColor" red="0.92549" green="0.40392"  blue="0.00784" alpha="1.00000" colorSpace="calibratedRGB"/>`
 
 android: open the path:  android/app/src/main/res/values/styles.xml
 
 Add the code below in between the style tag. Replace/edit the hex color code with your app color code. 
 
> ` <item name="android:windowBackground">#EC6702</item>`



## Components
Major Components include:
Intro/Slide Screen
UserAuthentication Screen
Signup Screen
Login screen 
Welcome Screen
NoInternet

and others are 
Custom NextButton, 
Paginator...

Media files are located in this path: app/assets/images

Redux files are located in this path: app/redux

Customize your styles or add more by editing the file in this path: app/styles/index.js

Constants values are stated in the constant file here: 

`app/styles/constants.js`

App colors are stated in the colors file here:
 
`app/styles/colors.js`

You can also change text fonts by downloading fonts from [google fonts](https://fonts.google.com/). Unarchive and add the .ttf files inside the assets folder in this path: assets/fonts. 

	Note, run the command: 
> $npx react-native-asset

to automatically link the font assets

This application uses reactnavtivevector icons. All icons are abstracted and used anywhere in the app. The path to each icon can be found here: 
> 	app/styles/icons

## Navigation

Navigation can be edited  @ 
> app/navigation

