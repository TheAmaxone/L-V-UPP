import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

window.loginWithGoogle = function () {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      alert(`Welcome ${user.displayName}`);
      document.getElementById('username').textContent = user.displayName;
      document.getElementById('profilePic').style.backgroundImage = `url(${user.photoURL})`;
    })
    .catch((error) => console.error(error));
};