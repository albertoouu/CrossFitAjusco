import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import app from './firebase'
import { getAuth, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth'

const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

export const Login = () => {
    return (
        <>
            <Button variant="secondary" type="submit" style={{width: 300}} onClick={()=>signInWithRedirect(auth, googleProvider)}>
                Accede con Google
            </Button>
        </>
    )
}