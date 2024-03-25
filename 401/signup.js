// signup.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

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

const signupForm = document.getElementById('signup-form');
const signupFirstName = document.getElementById('signup-firstname');
const signupLastName = document.getElementById('signup-lastname');
const signupEmail = document.getElementById('signup-email');
const signupPassword = document.getElementById('signup-password');
const signupMessage = document.getElementById('signup-message');

signupForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const email = signupEmail.value;
    const password = signupPassword.value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            signupMessage.textContent = "Signup successful: " + user.email;
            console.log("Signup successful:", user);
            // Optionally, redirect the user to another page after signup
        })
        .catch((error) => {
            const errorMessage = error.message;
            signupMessage.textContent = "Signup error: " + errorMessage;
            console.error("Signup error:", errorMessage);
        });
});
