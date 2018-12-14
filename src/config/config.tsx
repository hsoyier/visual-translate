import * as firebase from "firebase";
import * as Rebase from "re-base";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyB4QBFWtib8faWAoPOCsrUQDa028OmGqbc",
  authDomain: "visual-translate-ec78b.firebaseapp.com",
  databaseURL: "https://visual-translate-ec78b.firebaseio.com",
  messagingSenderId: "763356720476",
  projectId: "visual-translate-ec78b",
  storageBucket: "visual-translate-ec78b.appspot.com"
};
// firebase.initializeApp(config);

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());

export { base };
