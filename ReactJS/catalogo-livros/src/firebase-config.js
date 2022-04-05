import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBq4rV95C-6X6cFRdnaS0hDkq6eBSi_DzM",
  authDomain: "catalogo-livro.firebaseapp.com",
  projectId: "catalogo-livro",
  storageBucket: "catalogo-livro.appspot.com",
  messagingSenderId: "14695797102",
  appId: "1:14695797102:web:151916efa809b6d65bf17f"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);