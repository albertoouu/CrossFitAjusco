import { useState } from "react"
import { useAuth } from '../Context/authContext'
import { useNavigate } from 'react-router-dom'
import { Alert } from "./Alert"

export const Login = () => {
    //aparecen en blanco cada campo
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const { login, loginWithGoogle, resetPassword } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState();
    
    const handleChange = ({target: {name, value}}) => 
        // console.log(e.target.name, e.target.value);
        //console.log(name, value)
        setUser({...user, [name]: value })
            // console.log(user);
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            await login(user.email, user.password)
            //Si todo sale bien lo envía a la página en navigate
            navigate('/admin')
        } catch (error) {
            //sino sale bien lanza un error
            // console.log(error.message);
            console.log(error.code)
            //personalización de los mensajes de error
            if (error.code === "auth/internal-error") {
                setError('Correo invalido')
            } else {
                setError(error.message)
            }
        }
    }

    const handleWithGoogleSignin = async() => {
        await loginWithGoogle()
        navigate('/admin')
    }

    const handleResetPassword = async() => {
        if (!user.email) return setError("Por favor, ingresa un email")
        try {
            await resetPassword(user.email)
            setError('Hemos enviado un correo con el enlace para reestablecer tu contraseña :D')
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        //formulario para el registro
        <div>
            {error && <Alert message={error}/>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" placeholder="ejemplo_123@mail.com" onChange={handleChange}></input>
                <br/>
                <label htmlFor="password">Contraseña:</label>
                <input type="password" name="password" id="password" onChange={handleChange} placeholder="Contraseña"/>
                <br/>
                <button style={{ width: 300 }}> Entrar </button>
            </form>
            <br/>
            <button style={{ width: 300 }} onClick={ handleWithGoogleSignin} variant="secundary">
                Inicia sesión con Google
            </button>
            <br/>
                <a href='#!' onClick={handleResetPassword}>¿Olvidaste tu contraseña? </a>
        </div>
    )
}