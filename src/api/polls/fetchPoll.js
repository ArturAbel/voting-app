import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

export async function fetchPoll({ params }) {
  if (!params) {
    throw new Response("Error loading poll", { status: 401 });
  }

  const pollRef = doc(db, "polls", params.id);
  const snapshot = await getDoc(pollRef);
  if (snapshot.exists()) {
    const poll = { id: snapshot.id, ...snapshot.data() };
    return { poll };
  } else {
    throw new Error("Poll not found");
  }
}
