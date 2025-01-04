import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";

export const signIn = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;
  return user;
};
