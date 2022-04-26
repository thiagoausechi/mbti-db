import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

// TODO Put this on a .env
const firebaseConfig = {
    // [REDACTED]
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);