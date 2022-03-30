import React, { useState } from "react";
import { useAuth } from "../../Context/authContext";
import { useNavigate } from "react-router-dom";
import { Alert } from "../../LandingPage/Alerts/Alert";
import { Formik, Form, Field, ErrorMessage } from "formik";
import './Register.css'

export const Register = (valores) => {
  const [sendForm, changeSendForm] = useState(false);
  const [gender, setGender] = useState(false);

  const renderGender = () => {
    //male 
      if(gender === false ){
       return (<h1>Es hombre</h1>)
    } else {
      return (<h1>Es mujer</h1>)
      }
  }
  return (
    <>
      <Formik //Contenedor Formik, para el formulario
        //aparece en blanco cada campo
        initialValues={{
          email: "",
          payment_days: "",
          next_payment: "",
          name: "",
          lastname: "",
          phone: "",
          phone_contact: "",
          gender: "",
          age: "",
          heigth: "",
          weigth: "",
          neck: "",
          waist: "",
          hip: "",
          ill: "",
          kind_of_ill: "",
          injuries: "",
          kind_of_injuries: "",
          allergies: "",
          kind_of_allergies: "",
          excercise: "",
          frequency: "",
          kind_of_excercises: "",
        }}
        //validación de email
        validate={(valores) => {
          console.log(valores); //muestra el objeto del registro
          let errores = {};

          if (!valores.email) {
            errores.email = "Ingresa un email";
          } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
            errores.email = "El correo sólo puede contener letras, números, puntos, guiones y guión bajo";
          }

          if (!valores.name) {
            errores.name = "Ingresa un nombre";
          } else if (!/^[a-zA-ZÁ-ÿ\s]{1,40}$/.test(valores.name)) {
            errores.name = "El nombre sólo puede contener letras y espacios";
          }

          if (!valores.lastname) {
            errores.lastname = "Ingresa al menos un apellido";
          } else if (!/^[a-zA-ZÁ-ÿ\s]{1,40}$/.test(valores.lastname)) {
            errores.lastname =
              "El apellido sólo puede contener letras y espacios";
          }

          if (!valores.phone) {
            errores.phone = "Ingresa un número telefónico móvil o local";
          } else if (/\D/.test(valores.phone)) {
            errores.phone = "Ingresa sólo números";
          }

          if (!valores.phone_contact) {
            errores.phone_contact =
              "Para caso de emergencias, por favor, ingresa número de teléfono de algún contacto";
          } else if (/\D/.test(valores.phone_contact)) {
            errores.phone_contact = "Ingresa sólo números";
          }

          if (!valores.next_payment) {
            errores.next_payment = 
              "Ingresa el próximo pago correspondiente"
          }

          if (!valores.gender) {
            errores.gender =
              "Selecciona una opción"
          }

          if (!valores.age) {
            errores.age = 
                "Ingresa un valor"
          }

          if (!valores.heigth) {
            errores.heigth = 
                "Ingresa un valor"
          }

          if (!valores.weigth) {
            errores.weigth = 
                "Ingresa un valor"
          }

          return errores;
        }}
        // "valores" ingresados desde el formulario
        onSubmit={(valores, { resetForm, values }) => {
          resetForm();
          // console.log(valores);
          // console.log('send form');
          changeSendForm(true); //si el "state" es true aparece 'Registro exitoso'
          setTimeout(() => changeSendForm(false), 3000);
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
        {({ errors, values }) => (
          //formulario para el registro
          <>
            {console.log(values)}
            <h2 className="title">Registro de nuevos usuarios:</h2>
            {/* {error && <Alert message={error} />} */}

            <Form className="formulario">
              <div>
                <label htmlFor="email">Email: </label>
                {/* //componente del mensaje de error debajo del actual campo*/}
                <ErrorMessage
                  name="email"
                  component={() => <div className="error">{errors.email}</div>}
                />
                <Field
                  type="mail"
                  name="email"
                  id="email"
                  placeholder="ejemplo_123@mail.com"
                />
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
                <label htmlFor="next_payment">Siguiente fecha de pago:</label>
                <ErrorMessage
                  name="name"
                  component={() => <div className="error">{errors.next_payment}</div>}
                />
                <Field
                  type="datetime-local"
                  name="next_payment"
                  id="next_payment"
                />
              </div>
              <div>
                <label htmlFor="name">Nombre:</label>
                <ErrorMessage
                  name="name"
                  component={() => <div className="error">{errors.name}</div>}
                />
                <Field
                  type="text"
                  name="name"
                  id="name"
                  placeholder="nombre(s)"
                />
                <label htmlFor="lastname">Apellido:</label>
                <ErrorMessage
                  name="lastname"
                  component={() => (
                    <div className="error">{errors.lastname}</div>
                  )}
                />
                <Field
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="apellido(s)"
                />
              </div>
              <div>
                <label htmlFor="phone">Teléfono:</label>
                <ErrorMessage
                  name="phone"
                  component={() => <div className="error">{errors.phone}</div>}
                />
                <Field
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="teléfono móvil o local"
                />
                <label htmlFor="phone_contact">Teléfono de contacto:</label>
                <ErrorMessage
                  name="phone_contact"
                  component={() => (
                    <div className="error">{errors.phone_contact}</div>
                  )}
                />
                <Field
                  type="tel"
                  name="phone_contact"
                  id="phone_contact"
                  placeholder="contacto móvil o local"
                />
              </div>
              <div>
                <div className="sexo" id="radio-gender">Sexo:</div>
                <ErrorMessage
                  name="gender"
                  component={() => (
                    <div className="error">{errors.gender}</div>
                  )}
                />
                  <label>
                    <Field type="radio" name="gender" value="femenino" />
                    femenino
                  </label>
                  <label>
                    <Field type="radio" name="gender" value="masculino" />
                    masculino
                </label>
              </div>
              <div className="general">
                <label htmlFor="age">Edad:</label>
                <ErrorMessage
                  name="age"
                  component={() => (
                    <div className="error">{errors.age}</div>
                  )}
                />
                <Field
                  type="number"
                  name="age"
                  id="age"
                  placeholder="edad"
                  min={1}
                  max={99}
                />
                <label htmlFor="heigth">Estatura:</label>
                <ErrorMessage
                  name="heigth"
                  component={() => (
                    <div className="error">{errors.heigth}</div>
                  )}
                />
                <Field
                  type="number"
                  name="heigth"
                  id="height"
                  placeholder="metros"
                  step={0.01}
                  precision={0.02}
                  min={0.5}
                  max={2.5}
                />
                <label htmlFor="weigth">Peso:</label>
                <ErrorMessage
                  name="weigth"
                  component={() => (
                    <div className="error">{errors.weigth}</div>
                  )}
                />
                <Field
                  type="number"
                  name="weigth"
                  id="weigth"
                  placeholder="kilogramos"
                  step={0.01}
                  precision={2}
                  min={10}
                  max={180}
                />
              </div>
              <div className="particular">
                <label htmlFor="neck">Cuello:</label>
                <Field
                  type="number"
                  name="neck"
                  placeholder="centimetros"
                  id="neck"
                  step={0.1}
                  precision={2}
                  min={10}
                  max={70}
                />
                <label htmlFor="waist">Cintura:</label>
                <Field
                  type="number"
                  name="waist"
                  id="waist"
                  placeholder="centimetros"
                  step={0.1}
                  precision={2}
                  min={20}
                  max={200}
                />             
                {/* Solo para el caso de mujeres */}
                <div> {( values.gender === "femenino" &&
                  <><label htmlFor="hip">Cadera:</label>
                    <Field
                      type="number"
                      name="hip"
                      id="hip"
                      placeholder="centimetros"
                      step={0.1}
                      precision={2}
                      min={20}
                      max={200} /></>
                    )}          
                </div>
              </div>
              <div>
                <div className="check" id="radio-ill">¿Padece alguna enfermedad?:</div>
                  <label>      
                    <Field type="radio" name="ill" value="no" />
                    no
                  </label>
                  <label>
                    sí
                    <Field type="radio" name="ill" value="sí" />
                </label>
                <div>{ 
                    (values.ill === "no" &&
                      <><label htmlFor="kind_of_ill">¿Qué enfermedades padece?</label><br /><>
                      <Field
                        as="textarea"
                        name="kind_of_ill"
                        id="kind_of_ill"
                        className="explain"
                        placeholder="Especifica las enfermedades que padece" />
                    </></>)}
                    </div>
                </div>            
              <div>
                <div className="check" id="radio-injuries">¿Padece alguna lesión?:</div>
                  <label>
                    <Field type="radio" name="injuries" value="no" />
                    no
                  </label>
                  <label>
                    <Field type="radio" name="injuries" value="sí" />
                    sí
                </label>
                <div>{
                  (values.injuries === "sí" &&
                    <><label htmlFor="kind_of_injuries">¿Qué lesiones padece?</label><br /><>
                      <Field
                      as="textarea"
                      name="kind_of_injuries"
                      id="kind_of_injuries"
                      className="explain"
                        placeholder="Especifica las lesiones que padece" />
                    </></>)}
                </div>
              </div>
              <div>
                <div className="check" id="radio-allergies">¿Padece alguna alergia?:</div>
                  <label>
                    <Field type="radio" name="allergies" value="no" />
                    no
                  </label>
                  <label>
                    <Field type="radio" name="allergies" value="sí" />
                    sí
                  </label>
                <div>{
                  (values.allergies === "sí" &&
                    <><label htmlFor="kind_of_allergies">Alergias:</label><br />
                      <Field
                      as="textarea"
                      name="kind_of_allergies"
                      id="kind_of_allergies"
                      className="explain"
                      placeholder="Incluye medicamentos, alimentos, ambiente, etc." /></>
                )}
                </div>
              </div>
              <div>
                <div className="check" id="radio-excercise">¿Realiza ejercicio cotidianamente?</div>
                  <label>
                    <Field type="radio" name="excercise" value="no" />
                    no
                  </label>
                  <label>
                    <Field type="radio" name="excercise" value="sí" />
                    sí
                </label>
                <div>{
                  (values.excercise === "sí" && 
                  <><label htmlFor="frequency">
                      ¿Con qué frecuencia realiza ejercicio a la semana?
                    </label><Field
                        type="range"
                        name="frequency"
                        id="frequency"
                        min={1}
                        max={7}
                        step={1} /></>
                  )
                }</div>
                </div>
              <div><center>
                <button className="send" type="submit"> Registrar </button>
                {sendForm && <p className="success">¡¡Registro exitoso!!</p>}
                </center></div>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
};