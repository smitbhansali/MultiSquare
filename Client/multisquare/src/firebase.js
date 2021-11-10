import firebase from "firebase/compat/app";
import "firebase/compat/auth";
//project-518288332431
export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyDlVH5J8rGLKE0sYsVVHy24AcKDuoa1-Ds",
    authDomain: "multisquare-3e184.firebaseapp.com",
    projectId: "multisquare-3e184",
    storageBucket: "multisquare-3e184.appspot.com",
    messagingSenderId: "518288332431",
    appId: "1:518288332431:web:036397b922cbfb4213c2fa",
  })
  .auth();
