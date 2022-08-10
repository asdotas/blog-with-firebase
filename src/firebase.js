import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import {getFirestore, setFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCGFR2JfoiHbQhph97wNSkMLnriFKZg8Jw",
  authDomain: "blog-4db8f.firebaseapp.com",
  projectId: "blog-4db8f",
  storageBucket: "blog-4db8f.appspot.com",
  messagingSenderId: "615300676276",
  appId: "1:615300676276:web:e568ad287980815f21f5e1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };