import { useAuth } from "../Context/authContext";
import { Navigate, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard.jsx";
import { UserView } from "./userView/UserView";

// Garantiza la proteccion de la ruta para que nadie que no esté logueado lo vea
export const ProtectedRoute = ({ children }) => {
  const { user, loading, users } = useAuth();
  const navigate = useNavigate();

  if (loading) return <h2>Cargando...</h2>;
  if (!user) return <Navigate to="/userView" />;

  const mails = users.map((elem) => {
    return elem.email;
  });

  if (user.email === "crossftajuscoweb@gmail.com") return <>{children}</>;
  if (mails.indexOf(user.email) != -1) return <Navigate to="/userView" />;
  return <Navigate to="/userView" />;
};
