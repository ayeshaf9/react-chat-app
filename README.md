# React Native Chat App with Firebase

 A chat app built with React Native and Google Firebase.

## Demo

![React Chat App Demo](https://github.com/ayeshaf9/react-chat-app/blob/master/Images/ReactChatAppDemo.gif)

 ## Setup
 1. Install [Android Studio](https://developer.android.com/studio) to create and launch a virtual device from the AVD manager.

 2. Install react native (make sure NodeJS and NPM are installed prior to this step):

                npm install -g create-react-native-app

 3. Install Expo CLI to host the application on android, ios and web: 

                    npm install expo-cli --global  

4. Run `expo upgrade` command in the terminal to automatically adjust the library version requirements for Expo
5. React native libraries to install:
   - `npm install react-navigation/native`
   - `npm install react-native-gifted-chat`


## Steps

1. Browse to desired folder and Create a new react native application:

              create-react-native-app ReactChatApp

2. Install React Native CLI:  `npm install -g react-native-cli`

3. Install react native stack and gesture handler: 

![Install react-native-stack and react-native-gesture-handler](https://github.com/ayeshaf9/react-chat-app/blob/master/Images/installHandler.gif)

4. Make a new folder called `windows`. Inside this folder, create two new javascript files  `ChatWindow.js` and `LoginWindow.js` 

![Create a window folder with login and chat screen files](https://github.com/ayeshaf9/react-chat-app/blob/master/Images/makeFolder.gif)

5. Run an emulator from **Android Studio AVD manager** and enter `expo start` in terminal > Enter `a` to run app on emulator or `w` to run app in web browser (The app can also be run on a device by downloading the **Expo** app and scanning the generated QR code)

![Running the app on Expo](https://github.com/ayeshaf9/react-chat-app/blob/master/Images/expoStart.PNG)

6. Customize the Login window as required in the `LoginWindow.js` file to take in user input and design UI

7. Open and Edit `App.js` by importing `ChatWindow.js`and `LoginWindow.js`

![App.js Update](https://github.com/ayeshaf9/react-chat-app/blob/master/Images/AppJsEdit.gif)

8. Create a new javascript file `Firebase.js` and Install Firebase in the terminal.

![Install Firebase](https://github.com/ayeshaf9/react-chat-app/blob/master/Images/InstallFirebase.gif)

9. Go to [Firebase](https://firebase.google.com/) > Get Started > Create a new project > Copy authentication key as shown below > Add an app > Replace Authentication values in `Firebase.js`

![Start Firebase project and Grab Authentication values](https://github.com/ayeshaf9/react-chat-app/blob/master/Images/firebaseAuth.PNG)

10. In Firebase go to Authentication and navigate to Sign-In Method > `Enable` Anonymous > Go to Database and create a real time database > Navigate to Rules and set read and write parameters to `True`.

![Configuring Firebase](https://github.com/ayeshaf9/react-chat-app/blob/master/Images/firebaseSettings.gif)

## The app is now live!
