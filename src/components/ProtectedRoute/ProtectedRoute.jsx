import { useAuth } from "../../Context/authContext";
import { Navigate, useNavigate } from "react-router-dom";
<<<<<<< HEAD:src/components/ProtectedRoute.jsx
import Dashboard from "./Dashboard.jsx";
import { UserView } from "./UserView/UserView";
=======
import Dashboard from "../Dashboard.jsx";
import { UserView } from "../userView/UserView";
>>>>>>> dbcffcc2eee5079cea8fe05a2da4173cad9aeba1:src/components/ProtectedRoute/ProtectedRoute.jsx

// Garantiza la proteccion de la ruta para que nadie que no esté logueado lo vea
export const ProtectedRoute = ({ children }) => {
  const { user, loading, users } = useAuth();
  const navigate = useNavigate();

  if (loading) return <h2>Cargando...</h2>;
  if (!user) return <Navigate to="/" />;

  const mails = users.map((elem) => {
    return elem.email;
  });

  if (user.email === "crossftajuscoweb@gmail.com") return <>{children}</>;
  if (mails.indexOf(user.email) != -1) return <Navigate to="/UserView" />;
  return <Navigate to="/" />;
};
