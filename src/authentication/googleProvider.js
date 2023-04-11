import { GoogleAuthProvider, getAdditionalUserInfo, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/config";

const googleProvider = new GoogleAuthProvider();


export const handleGoogleLogin = ()=>{
  signInWithPopup(auth, googleProvider)
  .then((result)=>{
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // const user = result.user;
    const detail = getAdditionalUserInfo(result);
    console.log(token); // save token to cookie
    // console.log(user);
    console.log(detail); //
  })
  .catch((err)=>{
    console.log(err);
  })
}


