
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth} from "firebase/auth";
//pegar autenticação de senha, exportar as infos para utilizar, na hora do login -creates/users/logins


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_5NPTB_fk3-0RlajB5uQ_zP2U41RDzvQ",
  authDomain: "projetotdm2023.firebaseapp.com",
  projectId: "projetotdm2023",
  storageBucket: "projetotdm2023.appspot.com",
  messagingSenderId: "198914693022",
  appId: "1:198914693022:web:9133045ba767b1d60ba88f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
//é necessário exportar o getAuth também, para ver

