import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyABHuP1604gUvshJkZr5G7jaaXnECasTp8",
  authDomain: "test-f1f17.firebaseapp.com",
  databaseURL: "https://test-f1f17.firebaseio.com",
  projectId: "test-f1f17",
  storageBucket: "test-f1f17.appspot.com",
  messagingSenderId: "101605465262",
  appId: "1:101605465262:web:fede24291e3db19ee2a13f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
