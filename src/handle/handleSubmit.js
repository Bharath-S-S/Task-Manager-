import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase_setup/firebase";

const handleSubmit = async (collectionName, task) => {
  const ref = collection(db, collectionName);

  try {
    const docRef = await addDoc(ref, task);
    return docRef;
  } catch (err) {
    console.error(err);
  }
};

export default handleSubmit;
