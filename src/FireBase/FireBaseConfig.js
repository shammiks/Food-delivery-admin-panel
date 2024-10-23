import { Firestore, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDoPbeJEiBP5GtAf7G9nlhU5lNRX7d9_yM",
  authDomain: "foodapp2-4f8f1.firebaseapp.com",
  projectId: "foodapp2-4f8f1",
  storageBucket: "foodapp2-4f8f1.appspot.com",
  messagingSenderId: "25350339877",
  appId: "1:25350339877:web:400f4dbd8d31ccc604aecc"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export{db,storage};
