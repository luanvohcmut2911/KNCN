import { auth } from "../firebase/config"
import { signOut } from "firebase/auth"

export const handleSignOut = async ()=>{
  let isSignOut = false;
  await signOut(auth).then(()=>{
    isSignOut = true
  })
  return isSignOut;
}