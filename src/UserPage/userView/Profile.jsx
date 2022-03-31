import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import {db} from "../../firebase";
//import { Link } from 'react-router-dom';
//import { useAuth } from "../../Context/authContext";


/*

export const Profile = () => {
  // Se declara una variable para guardar el id del usuario para
  //const { user } = useAuth();
  //configuración de los hoocks para
  const [users, setUsers] = useState([Users])

  //referencia de la base de datos
  const usersRef = collection(db,"Users")

  //Función para mostrar datos del usurario 
  const getUsers = async () => {
  const data = await getDocs(usersRef)
  console.log(data.docs)
  setUsers(
    data.docs.map((doc) => ({...doc.data(), id:doc.id}))
  )
  }
  
  //Encendido de la función para traer datos en useEffect
  useEffect( () => {
    getUsers();
  },[])
  //Funcion para eliminar info

  //Función para actualizar datos 
  
  return (
    <>        
          
                  
    </>
   
  )
  }; 
/*










export const Profile = () => {

  async function loadData(){
    const usersRef = collection(db,'Users');

     try {
      const data = await getDoc(usersRef);
      
       console.log(data)
             
     } catch (err) {
       console.log(err)
     }

  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
          <div >
            <h3>Nombre: </h3>
            <p>Edad: </p>
            <p>Correo: </p>
          </div>
      
    </div>
  )    
};
*/