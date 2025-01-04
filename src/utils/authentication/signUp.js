import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";

export const signUp = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error("Error signing up:", error);
  }
};
