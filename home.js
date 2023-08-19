import { getAuth, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';
import { app } from './firebaseConfig.mjs';

const auth = getAuth();
const logoutButton = document.getElementById('logoutBtn');
const userDisplayName = document.getElementById('userDisplayName');
const publishButton = document.getElementById('btn');
const titleInput = document.getElementById('title');
const textInput = document.getElementById('text');
const blogsContainer = document.getElementById('blogsContainer');

logoutButton.addEventListener('click', () => {
  signOut(auth)
    .then(() => {
      window.location.replace('login.html');
    })
    .catch((error) => {
      console.error('Logout error:', error.message);
    });
});

onAuthStateChanged(auth, (user) => {
  if (user) {
    const displayName = user.displayName;
    userDisplayName.textContent = displayName;
  } else {
    userDisplayName.textContent = 'Guest';
  }
});

publishButton.addEventListener('click', () => {
  const title = titleInput.value;
  const text = textInput.value;

  const blogDiv = document.createElement('div');
  blogDiv.classList.add('blog-entry');
  const titleElement = document.createElement('h3');
  titleElement.textContent = title;
  const textElement = document.createElement('p');
  textElement.textContent = text;

  blogDiv.appendChild(titleElement);
  blogDiv.appendChild(textElement);
  blogsContainer.appendChild(blogDiv);

  titleInput.value = '';
  textInput.value = '';
});
