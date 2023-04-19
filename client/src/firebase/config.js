import { initializeApp } from "firebase/app";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA3O8bLqxnqZvGcXz6R5lj1-cLPr72VBbI",
  authDomain: "vizta-6e742.firebaseapp.com",
  projectId: "vizta-6e742",
  storageBucket: "vizta-6e742.appspot.com",
  messagingSenderId: "852960842650",
  appId: "1:852960842650:web:8e9284710e278042d36023"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
