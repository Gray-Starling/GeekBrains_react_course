import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDDOvhdjxMoZO9eImopNmS4FMqpyOD6vkI",
  authDomain: "geekbrains-react-course.firebaseapp.com",
  databaseURL: "https://geekbrains-react-course-default-rtdb.firebaseio.com",
  projectId: "geekbrains-react-course",
  storageBucket: "geekbrains-react-course.appspot.com",
  messagingSenderId: "369156938728",
  appId: "1:369156938728:web:69426f9a3c4da1e81be25d",
};

const firebaseDB = firebase.initializeApp(firebaseConfig);
export const db = firebaseDB.database().ref();
export const auth = firebase.auth();
