import { db } from "./config";
import { addDoc, collection, serverTimestamp, getDocs, query, where } from 'firebase/firestore';

export const addNewDocument = async (collectionName, data) => {
  const docRef = await addDoc(collection(db, collectionName), {
    ...data,
    createdAt: serverTimestamp()
  })
  return docRef;
};

export const getUser = async (collectionName, condition) =>{
  const collectionRef = collection(db, collectionName);
  const docSnap = await getDocs(
    query(
      collectionRef,
      where(
        condition.fieldName,
        condition.operator,
        condition.compareValue
      )
    )
  )
  return docSnap;
}