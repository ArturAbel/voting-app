import { getFunctions, httpsCallable } from "firebase/functions";

export const makeAdmin = async (uid) => {
  const functions = getFunctions();
  const addAdminRole = httpsCallable(functions, "addAdminRole");

  try {
    const result = await addAdminRole({ uid });
    console.log(result.data.message);
  } catch (error) {
    console.error("Error adding admin role:", error.message);
  }
};
