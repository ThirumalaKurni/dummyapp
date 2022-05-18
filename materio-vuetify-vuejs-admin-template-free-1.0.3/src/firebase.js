import { initializeApp } from "firebase/app";
import {getFirestore,collection} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBMAq84IhFPCtvGB9yZ474t6NcDvWVZJds",
  authDomain: "resumebuilder-d1f9e.firebaseapp.com",
  projectId: "resumebuilder-d1f9e",
  storageBucket: "resumebuilder-d1f9e.appspot.com",
  messagingSenderId: "82917111936",
  appId: "1:82917111936:web:7327724481d181439c4e65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const profileCollRef = collection(db,'profile');
const educationCollRef = collection(db,'education');
const skillCollRef = collection(db,'skill');
const projectCollRef = collection(db,'project');
const certificationCollRef = collection(db,'certification');
export { profileCollRef , educationCollRef ,skillCollRef ,projectCollRef,certificationCollRef};
