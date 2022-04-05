import { initializeApp } from "firebase/app";
import { getFirestore, collection} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCNzqzyf2ro0zMVdkw0B_cqEcorKVF43L4",
  authDomain: "catalogo-filme.firebaseapp.com",
  projectId: "catalogo-filme",
  storageBucket: "catalogo-filme.appspot.com",
  messagingSenderId: "411705887288",
  appId: "1:411705887288:web:8817a4a6cc7c86d46cb4cd"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const citiesColRef = collection(db, "cities");
export default citiesColRef;