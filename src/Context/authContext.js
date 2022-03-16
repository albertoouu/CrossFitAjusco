//Contexto: crear un estado por un archivo externo 
//Equivale a crear un UseState, solo que se puede exportar el User "Logueado" en todos los componentes
import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../components/firebase";

export const authContext = createContext();

export const useAuth = ( ) => {
    const context = useContext(authContext)
    if (!context) throw new Error ('There is not an auth provider')
    // console.log(context)
    return context
}

export const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    // const user = {
    //     login: true
    // }
//le permite autentificarse
//--------Todo componente "hijo" puede acceder al componente padre (objeto user)---------    

    const signup = (email, password) =>
        // console.log(email, password);
        //----desde la documentacion de FB----
        createUserWithEmailAndPassword(auth, email, password);

    const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

    const logout = () => signOut(auth);

    const loginWithGoogle = () => {
        const GooglProvider = new GoogleAuthProvider()
        signInWithPopup(auth, GooglProvider)
    }

    const resetPassword = (email) => {
        sendPasswordResetEmail(auth, email)
    }
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            //Permite ver los datos del usuario "logueado"
            // console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        });
        return () => unsubscribe
    }, []); 
    // console.log(user)
    return (
        <authContext.Provider value={{ signup, login, user, logout, loading, loginWithGoogle, resetPassword }} >
            {children}
        </authContext.Provider>
    )
}