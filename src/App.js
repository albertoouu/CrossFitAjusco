import React from "react";
import { Navigation } from "./components/navBar/NavBar.jsx";
import Dashboard from "./components/Dashboard.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./Context/authContext.js";
import { ProtectedRoute } from "./components/ProtectedRoute";
import "./App.css";
import Footer from "./components/footer/Footer";
import { NotFoundPage } from "./components/NotFoundPage/NotFoundPage.jsx";
import { Home } from "./Home";
import { User } from "./components/User.jsx";
import { Login } from "./components/LoginMail/Login";

const App = () => {
  
  return (
    <AuthProvider>
      <div className="App">
        <div className="navBar">
          <Navigation />
          <div className="middle-component">
            <Routes>
              <Route path="/crossfit_ajusco" element={<Navigate to="/" />} />
                <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>} />
              <Route path="/admin" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/user" element={<ProtectedRoute><User /></ProtectedRoute>} />
              <Route path="*" element={<NotFoundPage/>}/>
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
