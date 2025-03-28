import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase_setup/firebase';

export const deleteOne = async (collectionName, taskId) =>{
    await deleteDoc(doc(db, collectionName, taskId));
}