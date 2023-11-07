
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCyzDDkMBhqfi9iJNTOQ27mf9XsYFUjbxo",
  authDomain: "reactlinks-8320c.firebaseapp.com",
  projectId: "reactlinks-8320c",
  storageBucket: "reactlinks-8320c.appspot.com",
  messagingSenderId: "571372476657",
  appId: "1:571372476657:web:8349616baf5e8157c33150"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

export { auth, db };