import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-storage.js";
// import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js';
const firebaseConfig = {
  apiKey: "AIzaSyDxPPlPA8MFaK5XWlu8RM76dW2Xai2_JSU",
  authDomain: "fir-project-b8e77.firebaseapp.com",
  databaseURL: "https://fir-project-b8e77-default-rtdb.firebaseio.com",
  projectId: "fir-project-b8e77",
  storageBucket: "fir-project-b8e77.appspot.com",
  messagingSenderId: "628059050394",
  appId: "1:628059050394:web:ba727c93e68b73815a2a23",
  measurementId: "G-LMXKNWKZQ6"
};

const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 export const db = getFirestore(app);
export  const storage = getStorage(app)