import { collection, getDocs, query, where } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "../../config/firebase";

export async function fetchMyPolls() {
  const auth = getAuth();

  const currentUser = await new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        unsubscribe();
        resolve(user);
      },
      (error) => reject(error)
    );
  });

  if (!currentUser) {
    throw new Response("User not authorized", { status: 401 });
  }

  const pollsRef = collection(db, "polls");
  const myPollsQuery = query(pollsRef, where("createdBy.user", "==", currentUser.uid));
  const snapshot = await getDocs(myPollsQuery);
  const polls = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return { polls };
}
