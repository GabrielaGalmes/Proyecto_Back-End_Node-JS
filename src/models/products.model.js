// Importaciones
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../config/firebase.config.js";

// Referencia a la colección products
const productsCollection = collection(db, "products");

// Devuelve todos los productos
const getAll = async () => {
  const snapshot = await getDocs(productsCollection);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// Devuelve un producto por ID
const getById = async (id) => {
  const docRef = doc(db, "products", id);
  const snapshot = await getDoc(docRef);
  if (!snapshot.exists()) return null;
  return { id: snapshot.id, ...snapshot.data() };
};

// Crea un nuevo producto
const create = async (data) => {
  const docRef = await addDoc(productsCollection, data);
  return { id: docRef.id, ...data };
};

// Elimina un producto por ID
const remove = async (id) => {
  const docRef = doc(db, "products", id);
  await deleteDoc(docRef);
  return { id };
};

export { getAll, getById, create, remove };