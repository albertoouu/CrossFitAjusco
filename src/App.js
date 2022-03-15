import React, { useState } from "react";
import Home from "./components/Home.jsx";
import  {Navigation} from "./components/NavBar.jsx";
import Dashboard from "./components/Dashboard.jsx";
import app from './components/firebase'
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(app)

function App() {

  const[GlobalUser, setGlobalUser] = useState(null);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setGlobalUser(user);
      console.log(GlobalUser)
    } else {
      setGlobalUser(null);
      console.log(GlobalUser)
    }
  });

  return (
    <>
      {GlobalUser ? (
        <Dashboard/>
      ) : (
        <Navigation/>
      )}
    </>
  );
}

export default App;
