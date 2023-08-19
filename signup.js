import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';

import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';

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
const auth = getAuth();


const signupEmail = document.getElementById('signupEmail');
const signupPassword = document.getElementById('signupPassword');
const signupBtn = document.getElementById('signupBtn');

signupBtn.addEventListener('click', () => {
  const email = signupEmail.value;
  const password = signupPassword.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('Signed up:', user);
      window.location.href = 'login.html';
    })
    .catch((error) => {
      console.error('Signup error:', error.message);
    });
});