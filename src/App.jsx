import React, { useState } from "react";
import Home from "./components/Home.jsx";
import { Navigation } from "./components/navBar/NavBar.jsx";
import Dashboard from "./components/Dashboard.jsx";
import app from "./components/firebase.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Context/authContext.js";
import { ProtectedRoute } from "./components/ProtectedRoute";
import ".App.css";
import { Carrousel } from "./components/Carrousel/Carrousel";
import { Cards } from "./components/cards/Cards";
import { Footer } from "./components/footer/Footer";
const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Home />} />
      </Routes>
    </AuthProvider>
  );
};
export default App;
