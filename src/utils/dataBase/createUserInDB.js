import { doc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

export async function createUserInDB(userId, userData) {
  try {
    const docRef = doc(db, "users", userId);
    await setDoc(docRef, {
      ...userData,
      createdAt: new Date(),
    });
  } catch (error) {
    console.error("Error creating a user document: ", error);
  }
}
