import React, { useState } from "react";
import Home from "./components/Home.jsx";
import  {Navigation} from "./components/NavBar.jsx";
import Dashboard from "./components/Dashboard.jsx";
import app from './components/firebase.js'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from "./Context/authContext.js";
import { ProtectedRoute } from "./components/ProtectedRoute.jsx";
import { Login } from './components/Login'

const App = () => {
  return (
    <AuthProvider>
      <Routes>
          <Route path="/admin" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element = {<Login/>} />
      </Routes>
    </AuthProvider>
  )
}
export default App;
