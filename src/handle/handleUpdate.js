import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase_setup/firebase';

const updateOne = async (collectionName, task, data) => {
    const taskRef = doc(db, collectionName, task);

    const taskUpdateRef = await updateDoc(taskRef, data);
    
    return taskUpdateRef;

};

export default updateOne;