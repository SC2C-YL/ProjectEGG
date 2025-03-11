import {id} from "uuidv4"
import { db } from "@/firebase/config";
import { collection, deleteDoc, doc, getDocs, onSnapshot } from "firebase/firestore";

export const subscribeToCart = (userEmail, callback) => {
    const itemsRef = collection(db, "cart", userEmail, "scholarship");
  
    return onSnapshot(itemsRef, (snapshot) => {
      const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      callback(items);
    }, (error) => {
      console.error("Error fetching cart items:", error);
    });
  };

export const removeItemFromCart = async (userEmail, Title) => {
    try {
      const itemRef = doc(db, "cart", userEmail, "scholarship", Title);
      await deleteDoc(itemRef);
      console.log("deleted")
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };