// signin.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAHpwtUCwgIHDDE5DKF2eVZguImskFWxJw",
    authDomain: "prasanna-b97f9.firebaseapp.com",
    projectId: "prasanna-b97f9",
    storageBucket: "prasanna-b97f9.appspot.com",
    messagingSenderId: "989459911270",
    appId: "1:989459911270:web:82a620529570c8db45d3a7"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const signinForm = document.getElementById('signin-form');
const signinEmail = document.getElementById('signin-email');
const signinPassword = document.getElementById('signin-password');
const signinMessage = document.getElementById('signin-message');

signinForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const email = signinEmail.value;
    const password = signinPassword.value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            // Redirect to dashboard upon successful sign-in
            window.location.href = "index.html";
        })
        .catch((error) => {
            const errorMessage = error.message;
            signinMessage.textContent = "Signin error: " + errorMessage;
            console.error("Signin error:", errorMessage);
        });
});
