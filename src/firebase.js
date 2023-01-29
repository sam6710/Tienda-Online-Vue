import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyBC7seNIM7L4LmPVpE3iJMq02Mo8QpTdAk",
  authDomain: "tienda-online-vue.firebaseapp.com",
  projectId: "tienda-online-vue",
  storageBucket: "tienda-online-vue.appspot.com",
  messagingSenderId: "128584748169",
  appId: "1:128584748169:web:ba9b6099ed5f48b5408a58",
  measurementId: "G-TRJ3H72MB6"
});

export const db = getFirestore(firebaseApp)

export const productosCollection = collection(db, 'productos')

export const auth = getAuth(firebaseApp);

export const querySnapshot = await getDocs(collection(db, "productos"));
// querySnapshot.forEach((doc) => {
//     // doc.data() is never undefined for query doc snapshots
//     console.log(doc.id, " => ", doc.data());
// });

// export const docRef = doc(db, "productos", "productos");


// export const storage = getStorage();