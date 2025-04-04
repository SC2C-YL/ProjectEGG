import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase/config";

export const subscribeToCart = (userEmail, callback) => {
  const scholarshipRef = collection(db, "cart", userEmail, "scholarship");
  const jobsRef = collection(db, "cart", userEmail, "jobs");

  const unsubscribeScholarships = onSnapshot(
    scholarshipRef,
    (snapshot) => {
      const scholarshipItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        title: doc.data().title || doc.id,
        description: doc.data().info || "No description available",
        due: doc.data().closeDate || "N/A",
        cost: doc.data().cost || "N/A",
        type: "scholarship",
      }));
      callback((prevItems) => [
        ...prevItems.filter(item => item.type !== "scholarship"),
        ...scholarshipItems
      ]);
    },
    (error) => {
      console.error("Error fetching scholarships:", error);
    }
  );

  const unsubscribeJobs = onSnapshot(
    jobsRef,
    (snapshot) => {
      const jobItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        title: doc.data().title || doc.id,
        description: doc.data().info || "No description available",
        due: doc.data().closeDate || "N/A",
        cost: doc.data().cost || "N/A",
        type: "job",
      }));
      callback((prevItems) => [
        ...prevItems.filter(item => item.type !== "job"),
        ...jobItems
      ]);
    },
    (error) => {
      console.error("Error fetching jobs:", error);
    }
  );

  return () => {
    unsubscribeScholarships();
    unsubscribeJobs();
  };
};


export const removeItemFromCart = async (userEmail, type, title) => {
  try {
      const itemRef = doc(db, "cart", userEmail, type, title);  // Uses type to remove correctly
      await deleteDoc(itemRef);
      console.log(`Deleted ${type}: ${title}`);
  } catch (error) {
      console.error("Error removing item from cart:", error);
  }
};
