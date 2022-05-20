import firebase from "firebase/compat";
import {collection} from "firebase/firestore";

const db = firebase.firestore();

const profileCollRef = collection(db,'profile');
const educationCollRef = collection(db,'education');
const skillCollRef = collection(db,'skill');
const projectCollRef = collection(db,'project');
const certificationCollRef = collection(db,'certification');

export {profileCollRef , educationCollRef ,skillCollRef ,projectCollRef,certificationCollRef};
