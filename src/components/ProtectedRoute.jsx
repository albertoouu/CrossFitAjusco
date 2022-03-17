import { useAuth } from "../Context/authContext"

import { Dashboard } from "@mui/icons-material"
import { Usuario } from "./Usuario"
import { Home } from "../Home"

// Garantiza la proteccion de la ruta para que nadie que no esté logueado lo vea
export const ProtectedRoute = ({children}) => {
    const { user, loading } = useAuth()
    if (loading) return <h2>Cargando...</h2>

    if (user.email === "crossftajuscoweb@gmail.com") {
        return <Dashboard />
    } else if (user.email !== "crossftajuscoweb@gmail.com") {
        return <Usuario />
    } else {
        if (!user) {
            return <Home/>
        }
            
    }
    return <>{children}</>
    
}