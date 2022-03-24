import React from "react";
import { Navigation } from "./components/navBar/NavBar.jsx";
import Dashboard from "./components/Dashboard.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./Context/authContext.js";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import "./App.css";
import Footer from "./components/footer/Footer";
import { NotFoundPage } from "./components/NotFoundPage/NotFoundPage.jsx";
import { Home } from "./Home";
import { UserView } from "./components/userView/UserView.jsx";
import { Login } from "./components/LoginMail/Login";
import Facebook from "./components/userView/SocialMedia.jsx";
import Profile from "./components/userView/Profile.jsx";
import ProtectedRouteUser from "./components/ProtectedRouteUser.jsx";
import { Register } from './components/Register/RegisterMail'

const App = () => {
  return (
    <AuthProvider>
      <div className="App">
        <div className="navBar">
          <Navigation />
          <div className="middle-component">
            <Routes>
              <Route path="/crossfit_ajusco" element={<Navigate to="/" />} />
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/admin"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route path="/register" element={<Register/>}/>
              <Route
                path="/userView"
                element={
                  <ProtectedRouteUser>
                    <UserView />
                    {/*  <Facebook />  */}
                    <Profile />
                  </ProtectedRouteUser>
                }
              />
              <Route path="*" element={<NotFoundPage />} />
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
