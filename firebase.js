// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';

import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCURuXNINmujm-sqFd3SLy9bKnFYOi_GF8',
  authDomain: 'insta-clone-7d67e.firebaseapp.com',
  projectId: 'insta-clone-7d67e',
  storageBucket: 'insta-clone-7d67e.appspot.com',
  messagingSenderId: '117103352696',
  appId: '1:117103352696:web:0601c270a3a355a855468d',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
