import { useAuth } from "../Context/authContext"
import { Navigate, useNavigate } from "react-router-dom"
import Dashboard from "./Dashboard.jsx";
import { UserView }  from "./userView/UserView"; 

// Garantiza la proteccion de la ruta para que nadie que no esté logueado lo vea
export const ProtectedRoute = ({children}) => {
    const { user, loading } = useAuth()
    const navigate = useNavigate();
    if (loading) return <h2>Cargando...</h2>
    if (!user) return <Navigate to='/' />
    if (user.email === "crossftajuscoweb@gmail.com") { 
        return <Dashboard/>
    } else if (user.email !== "crossftajuscoweb@gmail.com") { 
        return <UserView/>
    }  
    console.log(!user)
    console.log(user.email)
    console.log(children)
    return <>{children}</>
    
}