import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../config/firebase";

export async function uploadProfileImage(file, location) {
  try {
    const storageRef = ref(storage, location);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  } catch (error) {
    console.error("Failed to upload profile image: ", error);
  }
}
