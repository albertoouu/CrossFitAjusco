import { useState } from "react"
import { useAuth } from '../Context/authContext'
import { useNavigate } from 'react-router-dom'
import { Alert } from './Alert'

export const Register = () => {
    //aparecen en blanco cada campo
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const { signup } = useAuth();
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
            await signup(user.email, user.password)
            //Si todo sale bien lo envía a la página en navigate
            navigate('/admin')
        } catch (error) {
            //sino sale bien lanza un error
            // console.log(error.message);
            console.log(error.code)
            //personalización de los mensajes de error
            if (error.code === "auth/internal-error") {
                setError('Correo invalido')
            }
            // setError(error.message)
        }
    }

    return (
        //formulario para el registro
        <div>
            {error && <Alert message={error}/>}
            <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="ejemplo_123@mail.com" onChange={handleChange}></input>

            <label htmlFor="password"></label>
            <input type="password" name="password" id="password" onChange={handleChange} placeholder="Contraseña"/>
            
            <button > Registrarse </button>
        </form>
        </div>
    )
}