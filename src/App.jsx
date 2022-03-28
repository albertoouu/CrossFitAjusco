import React from "react";
import { Navigation } from "./LandingPage/navBar/NavBar.jsx";
import Dashboard from "./AdminPage/Dashboard/Dashboard.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./Context/authContext.js";
import { ProtectedRoute } from "./ProtectedRoute/ProtectedRoute";
import { Home } from "./LandingPage/Home/Home.jsx";
import Footer from "./LandingPage/Footer/Footer";
import { NotFoundPage } from "./NotFoundPage/NotFoundPage.jsx";
import { UserView } from "./UserPage/userView/UserView.jsx";
import { Login } from "./LandingPage/LoginMail/Login.jsx";
import Profile from "./UserPage/userView/Profile.jsx";
import ProtectedRouteUser from "./ProtectedRoute/ProtectedRouteUser.jsx";
import { Register } from "./AdminPage/Register/RegisterMail";

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
              <Route path="/register" element={<Register />} />
              <Route
                path="/UserView"
                element={
                  <ProtectedRouteUser>
                    <UserView />
                    {/*  <Facebook />  */}
                   
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
