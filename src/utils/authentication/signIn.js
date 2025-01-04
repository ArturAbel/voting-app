import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";

export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return user;
  } catch (error) {
    console.error("Error signing in:", error);
  }
};
