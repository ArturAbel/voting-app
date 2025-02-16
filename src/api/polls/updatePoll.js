import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

export async function updatePoll({ pollId, update }) {
  try {
    const pollRef = doc(db, "polls", pollId);
    await updateDoc(pollRef, update);
    return;
  } catch (error) {
    throw new error("Failed to update poll: ", error);
  }
}
