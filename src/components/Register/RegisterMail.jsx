import React, { useState } from "react"
import { useAuth } from '../../Context/authContext'
import { useNavigate } from 'react-router-dom'
import { Alert } from '../Alerts/Alert'
import { Formik, Form, Field, ErrorMessage} from 'formik'

export const Register = (valores) => {
    const [sendForm, changeSendForm] = useState(false);
    return (
        <>
            <Formik //Contenedor Formik, para el formulario
            //aparece en blanco cada campo
                initialValues={{
                    email: '',
                    payment_days: '',
                    name: '',
                    lastname: '',
                    phone: '',
                    phone_contact: '',
                    gender: '',
                    age: '',
                    heigth: '',
                    weigth: '',
                    neck: '',
                    waist: '',
                    hip: '',
                    ill: '',
                    kind_of_ill: '',
                    injuries: '',
                    kind_of_injuries: '',
                    allergies: '',
                    kind_of_allergies: '',
                    excercise: '',
                    frequency: '',
                    kind_of_excercises: ''
                }}
                //validación de email
                validate={(valores) => {
                     console.log(valores) //muestra el objeto del registro
                    let errores = {}
                    if (!valores.email) {
                        errores.email = 'Ingresa un email'
                    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
                        errores.email = 'El correo sólo puede contener letras, números, puntos, guiones y guión bajo'
                    }
                    
                    if (!valores.name) {
                        errores.name = 'Ingresa un nombre'
                    } else if (!/^[a-zA-ZÁ-ÿ\s]{1,40}$/.test(valores.name)) {
                        errores.name = 'El nombre sólo puede contener letras y espacios'
                    }

                    if (!valores.lastname) {
                        errores.lastname = 'Ingresa al menos un apellido'
                    } else if (!/^[a-zA-ZÁ-ÿ\s]{1,40}$/.test(valores.lastname)) {
                        errores.lastname = 'El apellido sólo puede contener letras y espacios'
                    }
                    
                    if (!valores.phone) {
                        errores.phone = 'Ingresa un número telefónico móvil o local'
                    } else if (/\D/.test(valores.phone)) {
                        errores.phone = 'Ingresa sólo números'
                    }

                    if (!valores.phone_contact) {
                        errores.phone_contact = 'Para caso de emergencias, por favor, ingresa número de teléfono de algun contacto'
                    } else if (/\D/.test(valores.phone_contact)) {
                        errores.phone_contact = 'Ingresa sólo números'
                    }

                    return errores;
                }}
                
                // "valores" ingresados desde el formulario
                onSubmit={(valores, {resetForm}) => {
                    resetForm();
                    // console.log(valores);
                    // console.log('send form');
                    changeSendForm(true) //si el "state" es true aparece 'Registro exitoso'
                    setTimeout(()=> changeSendForm(false), 3000)
            }}
            
            // const { signup } = useAuth();
            //     //const navigate = useNavigate();
            // const [error, setError] = useState();
            
            // const handleChange = ({target: {name, value}}) => 
            //         // console.log(e.target.name, e.target.value);
            //         //console.log(name, value)
            //     setUser({...user, [name]: value })
            //         // console.log(user);
            // const handleSubmit = async (e) => {
            //     e.preventDefault()
            //     setError('')
            //     try {
            //         await signup(user.email, user.password)
            //         //Si todo sale bien lo envía a la página en navigate (opcional)
            //         //navigate('/admin') 
            //     } catch (error) {
            //         //sino sale bien lanza un error
            //         // console.log(error.message);
            //             console.log(error.code)
            //         //personalización de los mensajes de error
            //         if (error.code === "auth/internal-error") {
            //             setError('Correo invalido')
            //         } else {
            //         setError(error.message)
            //         }
            //     }
            // }
            >  
                    {({ errors }) => (
                //formulario para el registro
                <>
                    <h2>Registro de nuevos usuarios:</h2><br/>
                    {/* {error && <Alert message={error} />} */}
                    
                    <Form>
                        <div>        
                            <label htmlFor="email">Email:</label>
                            <Field
                                type="mail"
                                name="email"
                                id="email"
                                placeholder="ejemplo_123@mail.com"
                            />
                                {/* //componente del mensaje de error debajo del actual campo*/}
                                <ErrorMessage name="email" component={() => (
                                    <div className="error">{ errors.email}</div>
                                )} />
                        </div>
                        <div>
                            <label htmlFor="payment_days">Fecha de pago:</label>
                            <Field
                                    type="datetime-local"
                                    name="payment_days"
                                    id="payment_days"
                            />    
                        </div>
                        <div>
                            <label htmlFor="name">Nombre:</label>
                            <Field
                                type="text"
                                name="name"    
                                id="name"
                                placeholder="nombre(s)"
                            />
                                <ErrorMessage name="name" component={() => (
                                    <div className="error">{ errors.name}</div>
                                )} />
                        
                            <label htmlFor="lastname">Apellido:</label>
                            <Field
                                type="text"
                                name="lastname"    
                                id="lastname"
                                placeholder="apellido(s)"
                            />
                                <ErrorMessage name="lastname" component={() => (
                                    <div className="error">{ errors.lastname}</div>
                                )} />
                            </div>
                            <div>
                            <label htmlFor="phone">Teléfono:</label>
                            <Field
                                type="tel"
                                name="phone"    
                                id="phone"
                                placeholder= "teléfono móvil o local"
                            />
                                <ErrorMessage name="phone" component={() => (
                                    <div className="error">{ errors.phone}</div>
                                )} />

                            <label htmlFor="phone_contact">Teléfono de contacto:</label>
                            <Field
                                type="tel"
                                name="phone_contact"    
                                id="phone_contact"
                                placeholder= "contacto móvil o local"
                            />
                                <ErrorMessage name="phone_contact" component={() => (
                                    <div className="error">{ errors.phone_contact}</div>
                                )} />
                        </div>
                        <div>
                            <div>
                                Sexo:
                                <label>
                                    <Field type="radio" name="gender" value="femenino" /> femenino
                                </label>
                                <label>
                                    <Field type="radio" name="gender" value="masculino" />
                                    masculino
                                </label>
                            </div>
                                
                            <label htmlFor="age">Edad:</label>
                            <Field
                                type="number"
                                name="age"
                                id="age"
                                placeholder="edad"
                                min={1} max={99}
                            />
                            <label htmlFor="heigth">Estatura:</label>
                            <Field
                                type="number"
                                name="heigth"
                                id="height"
                                step={0.01} precision={0.02}
                                min={0.5} max={2.5}
                            />m.
                            <label htmlFor="weigth">Peso:</label>
                            <Field
                                type="number"
                                name="weigth"
                                id="weight"
                                step={0.01} precision={2}
                                min={10} max={180}
                            />kg.
                        </div>
                        <div>
                            <label htmlFor="neck">Cuello:</label>
                                <Field
                                    type="number"
                                    name="neck"
                                    id="neck"
                                    step={0.1} precision={2}
                                    min={10} max={70}
                                />cm.
                            <label htmlFor="waist">Cintura:</label>
                                <Field
                                    type="number"
                                    name="waist"
                                    id="waist"
                                    step={0.1} precision={2}
                                    min={20} max={200}
                                />cm.
                                {/* Solo para el caso de mujeres */}
                            <label htmlFor="hip">Cadera:</label>
                                <Field
                                    type="number"
                                    name="hip"
                                    id="hip"
                                    step={0.1} precision={2}
                                    min={20} max={200}
                                />cm.
                            </div>
                            <div>
                                <div>
                                    ¿Padece alguna enfermedad?:
                                    <label>
                                        <Field type="radio" name="ill" value="no" />
                                        no
                                    </label>
                                    <label>
                                        <Field type="radio" name="ill" value="sí" />
                                        sí
                                    </label>
                                </div>
                                {/* En caso de padecer enfermedades */}
                                <label htmlFor="kind_of_ill">¿Qué enfermedades padece?</label>
                                <Field
                                    as="textarea"
                                    name="kind_of_ill"
                                    id="kind_of_ill"
                                    placeholder="Especifica las enfermedades que padece"
                                />
                            </div>
                            <div>
                                <div>
                                    ¿Padece alguna lesión?:
                                    <label>
                                        <Field type="radio" name="injuries" value="no" />
                                        no
                                    </label>
                                    <label>
                                        <Field type="radio" name="injuries" value="sí" />
                                        sí
                                    </label>
                                </div>
                                {/* En caso de padecer lesiones */}
                                <label htmlFor="kind_of_injuries">¿Qué lesiones padece?</label>
                                <Field
                                    as="textarea"
                                    name="kind_of_injuries"
                                    id="kind_of_injuries"
                                    placeholder="Especifica las lesiones que padece"
                                />
                            </div>
                            <div>
                                <div>
                                    ¿Padece alguna alergia?:
                                    <label>
                                        <Field type="radio" name="allergies" value="no" />
                                        no
                                    </label>
                                    <label>
                                        <Field type="radio" name="allergies" value="sí" />
                                        sí
                                    </label>
                                </div>
                                {/* En caso de padecer alergias */}
                                <label htmlFor="kind_of_allergies">Alergias:</label>
                                <Field
                                    as="textarea"
                                    name="kind_of_allergies"
                                    id="kind_of_allergies"
                                    placeholder="Incluye medicamentos, alimentos, ambiente, etc."
                                />
                            </div>
                            <div>
                                <div>
                                    ¿Realiza ejercicio cotidianamente?:
                                    <label>
                                        <Field type="radio" name="excercise" value="no" />
                                        no
                                    </label>
                                    <label>
                                        <Field type="radio" name="excercise" value="sí" />
                                        sí
                                    </label>
                                </div>
                                {/* En caso de practicar ejercicio */}
                                <div>
                                    <label htmlFor="frequency">¿Con qué frecuencia realiza ejercicio a la semana?</label>
                                    <Field
                                        type="range"
                                        name="frequency"
                                        id="frequency"
                                        min={1} max ={7} step={1}
                                    />
                                </div>
                                <Field
                                    type="text"
                                    name="kind_of_excercises"
                                    id="kind_of_excercises"
                                    placeholder="¿Qué tipo de ejercicio o actividad física practíca diariamente?"
                                />
                            </div>
                            <div>
                            <button type="submit"> Registrar </button>
                                {sendForm && <p className="success">¡¡Registro exitoso!!</p>}
                            </div>
        </Form>
    </>
            )}
            </Formik>
        </>
    )
}
