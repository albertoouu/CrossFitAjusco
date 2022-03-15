import { useAuth } from "../Context/authContext"
import { Navigate } from "react-router-dom"

// Garantiza la proteccion de la ruta para que nadie que no esté logueado lo vea
export const ProtectedRoute = ({children}) => {
    const { user, loading } = useAuth()
    if (loading) return <h2>Cargando...</h2>
    if (!user) return <Navigate to='/' />

    return <>{children}</>
    
}