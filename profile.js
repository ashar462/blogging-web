import { app } from './firebaseConfig.mjs';
import {db , storage} from "./firebaseConfig.mjs"
import {  addDoc, collection, getDocs, doc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js "
import {ref, uploadBytes ,getDownloadURL,deleteObject } from " https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js "


const auth = getAuth(app);

const storage = getStorage();
const profilePictureInput = document.getElementById('profilePicture');
const changePictureBtn = document.getElementById('changePictureBtn');

changePictureBtn.addEventListener('click', async () => {

  const profilePictureElement = document.getElementById('profilePicture');

if (userProfile && userProfile.profilePictureURL) {
  profilePictureElement.src = userProfile.profilePictureURL;
} else {
  profilePictureElement.classList.add('default-profile-picture');
}


  const profilePictureFile = profilePictureInput.files[0];
  const storageRef = ref(storage, `profilePictures/${userId}`);
  
  await uploadBytes(storageRef, profilePictureFile);
  const downloadURL = await getDownloadURL(storageRef);
});
