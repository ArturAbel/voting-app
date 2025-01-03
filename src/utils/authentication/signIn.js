import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    //NOTE:Just for testing
    const idTokenResult = await user.getIdTokenResult();
    console.log("Custom claims:", idTokenResult.claims);
    return user;
  } catch (error) {
    console.error("Error signing in:", error);
  }
};
