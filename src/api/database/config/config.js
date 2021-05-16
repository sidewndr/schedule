import firebase from 'firebase'
import 'firebase/database'
import {createContext} from "react";

firebase.initializeApp(
  {
    apiKey: "AIzaSyBvr5y-3ehxDhHi8NVuDc1-VtrOk0fhyiI",
    authDomain: "schedule-303c8.firebaseapp.com",
    databaseURL: "https://schedule-303c8-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "schedule-303c8",
    storageBucket: "schedule-303c8.appspot.com",
    messagingSenderId: "830285299280",
    appId: "1:830285299280:web:fa1e50fd3d6161eec41b55"
  }
);

const Context = createContext(null)

const database = firebase.database()

export const ContextProvider = (props) => (
  <Context.Provider value={{
      firebase,
      database
  }} >
      {props.children}
  </Context.Provider>
)
