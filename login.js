

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

// Rest of your login.js code
// ...


const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');
const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('click', () => {
  const email = loginEmail.value;
  const password = loginPassword.value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('Logged in:', user);

      // Redirect to the home page after successful login
      window.location.href = './home.html';
    })
    .catch((error) => {
      console.error('Login error:', error.message);
    });
});