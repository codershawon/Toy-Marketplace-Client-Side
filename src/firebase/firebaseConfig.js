// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9IoixVl0KkOSMSm0El1WBCmxrsnrJxRA",
  authDomain: "toy-marketplace-client-bd417.firebaseapp.com",
  projectId: "toy-marketplace-client-bd417",
  storageBucket: "toy-marketplace-client-bd417.appspot.com",
  messagingSenderId: "138713006061",
  appId: "1:138713006061:web:0209743d7c42021b2071e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;