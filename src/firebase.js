import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyCp28Vd5uDZ08pIpKqO2nwYHbYsC3YB400",
  authDomain: "react-car-service-app.firebaseapp.com",
  projectId: "react-car-service-app",
  storageBucket: "react-car-service-app.appspot.com",
  messagingSenderId: "921820776734",
  appId: "1:921820776734:web:faf1796c71f42e5bb7210f",
  measurementId: "G-KT4DB784KD"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});

export { app, auth };