import { getDocs, getDoc, doc, collection } from "firebase/firestore";
import { db } from "../firebase_setup/firebase";



export const fetchAll = async (collectionName) => {
    
    const querySnapshot = await getDocs(collection(db, collectionName));
    
    const allData = querySnapshot.docs.map((doc) => 
        ({
            ...doc.data(),
            id: doc.id
        })
    );
    
    return allData;
};

export const fetchOne = async (collectionName, id) => {
    const docData = await getDoc(doc(db, collectionName, id));
    if(docData.exists()){
        return await docData.data();
    }
}
