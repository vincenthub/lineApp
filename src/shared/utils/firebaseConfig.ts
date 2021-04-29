import { Platform } from "react-native";

// Your secondary Firebase project credentials for Android...
const androidCredentials = {
    appId: "1:180727270762:android:e23b6f762a7aab5b38a913",
    apiKey: "AIzaSyA2Hklq80HlAv-YgNJYT39JcGc-5yo3OF4",
    projectId: "line-app-91a80",
  };
  
  // Your secondary Firebase project credentials for iOS...
  const iosCredentials = {
    appId: "1:180727270762:ios:070f780ee5e8175b38a913",
    apiKey: "AIzaSyA2Hklq80HlAv-YgNJYT39JcGc-5yo3OF4",
    projectId: "line-app-91a80",
  };
  
  // Select the relevant credentials
  export const credentials = Platform.select({
    android: androidCredentials,
    ios: iosCredentials,
  });
  
  export const config = {
    name: "LINEAPP_FIREBASE_CONFIGS",
  };