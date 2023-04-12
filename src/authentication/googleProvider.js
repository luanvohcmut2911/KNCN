import { GoogleAuthProvider, getAdditionalUserInfo, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/config";

const googleProvider = new GoogleAuthProvider();


export const handleGoogleLogin = async ()=>{
  let isVerified = false;
  let isNewUser = false;
  await signInWithPopup(auth, googleProvider)
  .then((result)=>{
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    // const user = result.user;
    const detail = getAdditionalUserInfo(result);
    // console.log(token); // save token to cookie
    // console.log(user);
    window.sessionStorage.setItem('user', JSON.stringify({
      isNewUser: detail.isNewUser,
      displayName: result.user.displayName,
      email: result.user.email,
      avatar: result.user.photoURL,
      uid: result.user.uid
    }));
    isVerified = true;
    isNewUser = detail.isNewUser;
  })
  .catch((err)=>{
    console.log(err);
  })
  return {
    isVerified: isVerified,
    isNewUser: isNewUser
  };
}


