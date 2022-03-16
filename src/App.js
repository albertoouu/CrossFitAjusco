import React, { useState } from "react";
import Home from "./components/Home.jsx";
import { Navigation } from "./components/navBar/NavBar.jsx";
import Dashboard from "./components/Dashboard.jsx";
import app from "./components/firebase.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Context/authContext.js";
import { ProtectedRoute } from "./components/ProtectedRoute";
import "./App.css";
import Footer from "./components/footer/Footer.jsx";
import { User } from "./components/User.jsx";

const App = () => {
  return (
    <AuthProvider>
      <div className="App">
        <div className="navBar">
          <Navigation />
          <div className="middle-component">
            <Routes>
              <Route
                path="/admin"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/user"
                element={
                  <ProtectedRoute>
                    <User />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </AuthProvider>
  );
};
export default App;
