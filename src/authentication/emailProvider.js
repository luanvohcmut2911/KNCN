import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";

export const handleEmailLogin = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
      console.log(userCredential.user);
    })
    .catch((err)=>{
      console.log(err);
    })
}

export const createNewUser = (email, password)=>{
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
      console.log(userCredential.user);
    })
    .catch((err)=>{
      console.log(err);
    })
}