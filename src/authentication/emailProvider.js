import { signInWithEmailAndPassword, createUserWithEmailAndPassword, getAdditionalUserInfo } from "firebase/auth";
import { auth } from "../firebase/config";

export const handleEmailLogin = async (email, password) => {
  let isVerified = false;
  let isNewUser = false;
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
      console.log(userCredential.user);
      window.sessionStorage.setItem('user', JSON.stringify({
        isNewUser: getAdditionalUserInfo(userCredential).isNewUser,
        displayName: userCredential.user.displayName,
        email: userCredential.user.email,
        avatar: userCredential.user.photoURL,
        uid: userCredential.user.uid
      }));
      isVerified = true;
      isNewUser = getAdditionalUserInfo(userCredential).isNewUser;
    })
    .catch((err)=>{
      console.log(err);
    })
  return {
    isVerified: isVerified,
    isNewUser: isNewUser
  }
}

export const createNewUser = async (email, password)=>{
  let isVerified = false;
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
      console.log(userCredential.user);
      window.sessionStorage.setItem('user', JSON.stringify({
        isNewUser: getAdditionalUserInfo(userCredential).isNewUser,
        displayName: userCredential.user.displayName,
        email: userCredential.user.email,
        avatar: userCredential.user.photoURL,
        uid: userCredential.user.uid
      }));
      isVerified = true;
    })
    .catch((err)=>{
      console.log(err);
    })
  return {
    isVerified: isVerified,
    isNewUser: true
  };
}