import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAPH8K1dz1pjNDxssKFtnphTEOUtEqHYro",
  authDomain: "attributyinternship-1de1f.firebaseapp.com",
  projectId: "attributyinternship-1de1f",
  storageBucket: "attributyinternship-1de1f.appspot.com",
  messagingSenderId: "577384922366",
  appId: "1:577384922366:web:60f5ff9338154f5feef9af"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)