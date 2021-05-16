import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "your_key",
  authDomain: "Your_Domain",
  projectId: "cart-f9f44",
  storageBucket: "cart-f9f44.appspot.com",
  messagingSenderId: "Your_id",
  appId: "1:286803264935:web:c0c810da472371c61f6282",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// when upload in remote(github) then remove all the firebaseconfig
