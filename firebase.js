// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';
import { getAuth, initializeAuth } from 'firebase/auth';
import { Capacitor } from '@capacitor/core';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBXR8v4ULW-p64oiAIcMwx9A2xFHwWXpvU',
  authDomain: 'rezonate-1bb66.firebaseapp.com',
  projectId: 'rezonate-1bb66',
  storageBucket: 'rezonate-1bb66.appspot.com',
  messagingSenderId: '260148209498',
  appId: '1:260148209498:web:e9bc328a4b88948a46b563',
  measurementId: 'G-V2187MMR2Z',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const db = getFirestore(app);

function whichAuth() {
  let auth;
  if (Capacitor.isNativePlatform()) {
    auth = initializeAuth(app, {
      persistence: indexedDBLocalPersistence,
    });
  } else {
    auth = getAuth(app);
  }
  return auth;
}

const auth = getAuth(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);
export { app, storage, auth };
