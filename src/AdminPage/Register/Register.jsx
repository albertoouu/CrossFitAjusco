import React, { useState } from "react";
import { useAuth } from "../../Context/authContext";
import { useNavigate } from "react-router-dom";
import { Alert } from "../../LandingPage/Alerts/Alert";
import { Formik, Form, Field, ErrorMessage } from "formik";
import './Register.css'

export const Register = (valores) => { // Props = valores : {objeto conformado por los initialValues y su valor}
  const [sendForm, changeSendForm] = useState(false); //useState inicia en false
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
  return (
    <>
      <Formik //Contenedor Formik, para el formulario (y funciones propias de Formik)
        //Declaración de las Keys iniciales con Value = ""
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
        //Validación de el prop "valores" /valores esperados/ vs valores.ingresados
        validate={(valores) => {
          console.log(valores); //Muestra el objeto del registro
          let errores = {}; //Auxiliar en los anuncios de error en la sintaxis ingresada (UI)
          //Se valora la información ingresada mediante if-else, equivale a "required"
          if (!valores.email) { //Validación para el mail
            errores.email = "Ingresa un email"; //Si no hay valores ingresados aparece mensaje
          } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
            errores.email = "El correo sólo puede contener letras, números, puntos, guiones y guión bajo"; //Si no se cumple con los valores para email válidos aparece mensaje.
          }

          if (!valores.name) { //Validación para el nombre
            errores.name = "Ingresa un nombre";
          } else if (!/^[a-zA-ZÁ-ÿ\s]{1,40}$/.test(valores.name)) {
            errores.name = "El nombre sólo puede contener letras y espacios";
          }

          if (!valores.lastname) { //Validación para el apellido
            errores.lastname = "Ingresa al menos un apellido";
          } else if (!/^[a-zA-ZÁ-ÿ\s]{1,40}$/.test(valores.lastname)) {
            errores.lastname =
              "El apellido sólo puede contener letras y espacios";
          }

          if (!valores.phone) { //Validación para el número telefónico ingresado
            errores.phone = "Ingresa un número telefónico móvil o local";
          } else if (/\D/.test(valores.phone)) {
            errores.phone = "Ingresa sólo números";
          }

          if (!valores.phone_contact) { //Validación para el teléfono de contacto
            errores.phone_contact =
              "Para caso de emergencias, por favor, ingresa número de teléfono de algún contacto";
          } else if (/\D/.test(valores.phone_contact)) {
            errores.phone_contact = "Ingresa sólo números";
          }

          if (!valores.next_payment) { //Validación para la próxima fecha de pago
            errores.next_payment = 
              "Ingresa el próximo pago correspondiente"
          }

          if (!valores.gender) { //Validación para el sexo
            errores.gender =
              "Selecciona una opción"
          }

          if (!valores.age) { //Validación para la edad
            errores.age = 
                "Ingresa un valor"
          }

          if (!valores.heigth) { //Validación para estatura
            errores.heigth = 
                "Ingresa un valor"
          }

          if (!valores.weigth) { //Validación para peso
            errores.weigth = 
                "Ingresa un valor"
          }

          return errores;
        }}
        //Al dar click en el <btn>Registrar</btn> (y pasar los test se activa)
        onSubmit={(valores, { resetForm, values }) => { 
          resetForm();//resetForm Limpia el formulario una vez validado
          // console.log(valores);
          // console.log('send form');
          changeSendForm(true); //si el "state" es true aparece 'Registro exitoso'
          setTimeout(() => changeSendForm(false), 3000); //Tiempo para volver useState a false
        }}
      >
        {/* errors para mensajes \ values  para evaluar nuevos campos en el formulario*/}
        {({ errors, values }) => (
          //Inicia formulario para el registro
          <>
              {console.log(values)}
              {/* {error && <Alert message={error} />} */}
              <Form className="formulario"> {/* <Form> imprime en el UI */}
                <h2 className="title">Registro de nuevos usuarios:</h2>
                  <div className="fields">
                    <label htmlFor="email" className="subtitles">Email: </label>
                    {/* //componente del mensaje de error debajo del titulo*/}
                    <ErrorMessage name="email" className="input"
                      component={() =>
                        <div className="error">{errors.email}</div>}
                    />
                    {/* cada Field es el input de Formik */}
                    <Field type="mail" name="email" id="email" placeholder="ejemplo_123@mail.com" className="input"/>
                  </div>
                  <div className="fields">
                    <label htmlFor="payment_days" className="subtitles">Fecha de pago:</label>
                    <Field type="date" name="payment_days" id="payment_days" className="input"/>
                  </div>
                  <div className="fields">
                    <label htmlFor="next_payment" className="subtitles">Siguiente fecha de pago:</label>
                    <ErrorMessage name="name"
                      component={() => <div className="error">{errors.next_payment}</div>}
                    />
                    <Field type="date" name="next_payment" id="next_payment" className="input"/>
                  </div>
                  <div className="fields">
                    <label htmlFor="name" className="subtitles">Nombre:</label>
                    <ErrorMessage name="name"
                      component={() => <div className="error">{errors.name}</div>}
                    />
                    <Field type="text" name="name" id="name" placeholder="nombre(s)" className="input" />
                  </div>
                  <div className="fields">
                    <label htmlFor="lastname" className="subtitles">Apellido:</label>
                    <ErrorMessage name="lastname"
                      component={() => (
                        <div className="error">{errors.lastname}</div>)} />
                    <Field type="text" name="lastname" id="lastname" placeholder="apellido(s)" className="input"/>
                  </div>
                  <div className="fields">
                    <label htmlFor="phone" className="subtitles">Teléfono:</label>
                    <ErrorMessage name="phone"
                      component={() => <div className="error">{errors.phone}</div>}
                    />
                    <Field type="tel" name="phone" id="phone" placeholder="teléfono móvil o local" className="input"/>
                  </div>
                  <div className="fields">
                    <label htmlFor="phone_contact" className="subtitles">Teléfono de contacto:</label>
                    <ErrorMessage name="phone_contact"
                      component={() => (
                        <div className="error">{errors.phone_contact}</div> )} />
                    <Field type="tel" name="phone_contact" id="phone_contact" placeholder="contacto móvil o local" className="input"/>
                  </div>
                  <div className="fields">
                    <div className="subtitles" id="radio-gender">Sexo:</div>
                    <ErrorMessage name="gender"
                      component={() => (
                        <div className="error">{errors.gender}</div> )} />
                      <label className="check">
                        <Field type="radio" name="gender" value="femenino" />
                        femenino
                      </label>
                      <label className="check">
                        <Field type="radio" name="gender" value="masculino" />
                        masculino
                    </label>
                  </div>
                  <div className="fields">
                    <label htmlFor="age" className="subtitles">Edad:</label>
                    <ErrorMessage name="age"
                      component={() => (
                        <div className="error">{errors.age}</div> )}
                    />
                    <Field type="number" name="age" id="age" placeholder="edad" min={1} max={99} className="inputNum" />
                  </div>
                  <div className="fields medida">
                    <label htmlFor="heigth" className="subtitles">Estatura:</label>
                    <ErrorMessage name="heigth"
                      component={() => (
                        <div className="error">{errors.heigth}</div> )}
                    />
                    <Field type="number" name="heigth" id="height" placeholder="metros" step={0.01} precision={0.02} min={0.5} max={2.5} className="inputNum"/>
                    <label htmlFor="weigth" className="subtitles">Peso:</label>
                    <ErrorMessage name="weigth"
                      component={() => (
                        <div className="error">{errors.weigth}</div> )}
                    />
                    <Field type="number" name="weigth" id="weigth" placeholder="kg" step={0.01} precision={2} min={10} max={180} className="inputNum"/>
                  </div>
                  <div className="fields medida">
                    <label htmlFor="neck" className="subtitles">Cuello:</label>
                    <Field type="number" name="neck" placeholder="cm" id="neck" step={0.1} precision={2} min={10} max={70} className="inputNum"/>
                    <label htmlFor="waist" className="subtitles">Cintura:</label>
                    <Field type="number" name="waist" id="waist" placeholder="cm" step={0.1} precision={2} min={20} max={200} className="inputNum"/>
                    {/* Solo para el caso de values.gender == "femenino" */}
                    <div>
                      {(values.gender === "femenino" && <>
                        <label htmlFor="hip" className="subtitles">Cadera:</label>
                        <Field type="number" name="hip" id="hip" placeholder="cm" step={0.1} precision={2} min={20} max={200} className="inputNum"/></>)}          
                    </div>
                  </div>
                  <div className="fields">
                    <div className="subtitles" id="radio-ill">¿Padece alguna enfermedad?:</div>
                      <label className="check">      
                        <Field type="radio" name="ill" value="no" />
                        no
                      </label>
                      <label className="check">
                      <Field type="radio" name="ill" value="sí" />
                      sí
                    </label>
                    <div>{ 
                      (values.ill === "sí" && <>
                        <label className="subtitles" htmlFor="kind_of_ill">¿Qué enfermedades padece?</label><br />
                        <><Field as="textarea" name="kind_of_ill" id="kind_of_ill" className="explain" placeholder="Especifica las enfermedades que padece" /> </></>)}
                    </div>
                  </div>            
                  <div className="fields">
                    <div className="subtitles" id="radio-injuries">¿Padece alguna lesión?:</div>
                      <label className="check">
                        <Field type="radio" name="injuries" value="no" />
                        no
                      </label>
                      <label className="check">
                        <Field type="radio" name="injuries" value="sí" />
                        sí
                    </label>
                    <div>{
                      (values.injuries === "sí" &&
                        <><label htmlFor="kind_of_injuries" className="subtitles">¿Qué lesiones padece?</label><br /><>
                          <Field as="textarea" name="kind_of_injuries" id="kind_of_injuries" className="explain" placeholder="Especifica las lesiones que padece"/>
                        </></>)}
                    </div>
                  </div>
                  <div className="fields">
                    <div className="subtitles" id="radio-allergies">¿Padece alguna alergia?:</div>
                      <label className="check">
                        <Field type="radio" name="allergies" value="no" />
                        no
                      </label>
                      <label className="check">
                        <Field type="radio" name="allergies" value="sí" />
                        sí
                      </label>
                    <div>{
                      (values.allergies === "sí" &&
                        <><label htmlFor="kind_of_allergies" className="subtitles">Alergias:</label><br />
                          <Field as="textarea" name="kind_of_allergies" id="kind_of_allergies" className="explain" placeholder="Incluye medicamentos, alimentos, ambiente, etc." /></> )}
                    </div>
                  </div>
                  <div className="fields">
                    <div className="subtitles" id="radio-excercise">¿Realiza ejercicio cotidianamente?</div>
                      <label className="check">
                        <Field type="radio" name="excercise" value="no" />
                        no
                      </label>
                      <label className="check">
                        <Field type="radio" name="excercise" value="sí" />
                        sí
                    </label>
                    <div>{
                      (values.excercise === "sí" && 
                      <><label htmlFor="frequency" className="subtitles">
                          ¿Con qué frecuencia realiza ejercicio a la semana?
                        </label><br/><Field type="range" name="frequency" id="frequency" min={0} max={7} step={1} /></>)}
                    </div>
                  </div>
              <div>
                <button className="send" type="submit"> Registrar </button>
                {sendForm && <p className="success">¡¡Registro exitoso!!</p>}
              </div>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
};