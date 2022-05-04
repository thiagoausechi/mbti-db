import { collection, getDocs, doc, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase-config";

const PERSONALITIES = "personalities";
const GUESSES       = "guesses";

const DB_PERSONALITIES_REF  = collection(db, PERSONALITIES);
const DB_GUESSES_REF        = collection(db, GUESSES);

// CRUD!
export const create             = async (data, ref)      => await addDoc(collection(db, ref), data);
export const read               = async (ref)            => await getDocs(ref);
export const update             = async (id, data, ref)  => await updateDoc(doc(db, ref, id), data);
export const deleteData         = async (id, ref)        => await deleteDoc(doc(db, ref, id));

export const getPersonalities   = async ()               => await read(DB_PERSONALITIES_REF);
export const createPersonality  = async (data)           => await create(data, PERSONALITIES);
export const updatePersonality  = async (id, data)       => await update(id, data, PERSONALITIES);
export const deletePersonality  = async (id)             => await deleteData(id, PERSONALITIES);

export const getGuesses         = async ()               => await read(DB_GUESSES_REF);
export const createGuess        = async (data)           => await create(data, GUESSES);
export const updateGuess        = async (id, data)       => await update(id, data, GUESSES);
export const deleteGuess        = async (id)             => await deleteData(id, GUESSES);