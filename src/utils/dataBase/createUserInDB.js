import { db, setDoc } from "firebase/firestore";

async function createUserInDB(userId, userData) {
  try {
    await setDoc(db, "users", userId, {
      ...userData,
      createdAt: new Date(),
    });
  } catch (error) {
    console.error("Error creating a user document: ", error);
  }
}
