import * as firebase from 'firebase';
import Environment from './environment';
// const Environment = {
//     FIREBASE_API_KEY: "AIzaSyD6mDtW1R_oImnjtFWSX4F4wEx3I5StQtk",
//     FIREBASE_AUTH_DOMAIN: "ggvision-54c22.firebaseapp.com",
//     FIREBASE_DATABASE_URL: "https://ggvision-54c22.firebaseio.com",
//     FIREBASE_PROJECT_ID: "ggvision-54c22",
//     FIREBASE_STORAGE_BUCKET: "ggvision-54c22.appspot.com",
//     FIREBASE_MESSAGING_SENDER_ID: "324047474660",
//     GOOGLE_CLOUD_VISION_API_KEY: 'AIzaSyAJCvIXQnh5taAilkKrBEQlh5aHKsAMPc0'
// }
firebase.initializeApp({
    apiKey: Environment['FIREBASE_API_KEY'],
    authDomain: Environment['FIREBASE_AUTH_DOMAIN'],
    databaseURL: Environment['FIREBASE_DATABASE_URL'],
    projectId: Environment['FIREBASE_PROJECT_ID'],
    storageBucket: Environment['FIREBASE_STORAGE_BUCKET'],
    messagingSenderId: Environment['FIREBASE_MESSAGING_SENDER_ID']
});

export default firebase;