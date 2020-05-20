var firebaseConfig = {
      apiKey: "AIzaSyA7pjwHUkMf8cTsJPs84obpX7ydujO0d4w",
      authDomain: "meetingdatabase-613e1.firebaseapp.com",
      databaseURL: "https://meetingdatabase-613e1.firebaseio.com",
      projectId: "meetingdatabase-613e1",
      storageBucket: "meetingdatabase-613e1.appspot.com",
      messagingSenderId: "469136335103",
      appId: "1:469136335103:web:d265674962bda81b13ecca",
      measurementId: "G-BEZSJBP6Z9"
};
    // Initialize Firebase

const app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();

import Firebase from "firebase";

if  ( ! Firebase . apps . length )  { 
      Firebase . initializeApp (firebaseConfig) ; 
}