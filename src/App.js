import React from "react";
import { Navigation } from "./components/navBar/NavBar.jsx";
import Dashboard from "./components/Dashboard.jsx";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Context/authContext.js";
import { ProtectedRoute } from "./components/ProtectedRoute";
import "./App.css";
import Footer from "./components/footer/footer";
import {Usuario} from './components/Usuario'
import { NotFoundPage } from "./components/NotFoundPage/NotFoundPage.jsx";
import { Home } from "./Home";

const App = () => {
  
  return (
    <AuthProvider>
      <div className="App">
        <div className="navBar">
          <Navigation />
          <div className="middle-component">
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/admin" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/user" element={<ProtectedRoute><Usuario /></ProtectedRoute>} />
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
