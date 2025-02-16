import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

export async function getUserFromDB(userId) {
  try {
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching users: ", error);
  }
}
