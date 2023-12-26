
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth} from "firebase/auth";
//pegar autenticação de senha, exportar as infos para utilizar, na hora do login -creates/users/logins


// Your web app's Firebase configuration

const firebaseConfig = {
//aqui supostamente eram pra ficar meus dados porém nn sei se dá problema outra pessoa acessar, então tirei

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
//é necessário exportar o getAuth também, para ver

