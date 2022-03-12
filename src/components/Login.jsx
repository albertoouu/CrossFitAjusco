//Aquí está el botón que dice "Accede con Google" y su función
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import app from './firebase'
import { getAuth, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth'
// proveedor Google para autentificación
const googleProvider = new GoogleAuthProvider();
// se extrae lo de FB mediante la const "auth"
const auth = getAuth(app);

export const Login = () => {
    return (
        <>
            {/* Boton correspondiente para acceder con Google */}
            <Button variant="secondary" type="submit" style={{width: 300}} onClick={()=>signInWithRedirect(auth, googleProvider)}>
                Accede con Google
            </Button>
        </>
    )
}