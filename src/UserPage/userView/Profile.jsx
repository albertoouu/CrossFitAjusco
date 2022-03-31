import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import {db} from "../../firebase";
//import { Link } from 'react-router-dom';
//import { useAuth } from "../../Context/authContext";




export const Profile = () => {
  // Se declara una variable para guardar el id del usuario para
  //const { user } = useAuth();
  //configuración de los hoocks para
  const [users, setUsers] = useState([])

  //referencia de la base de datos
  const usersRef = collection(db,"Users")

  //Función para mostrar datos del usurario 
  const getUsers = async () => {
  const data = await getDocs(usersRef)
  console.log(data.docs)
  setUsers(usersRef.docs)
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
  
   const [data, setData] = useState

  async function loadData(){
    

     try {
      const dataUsers = await firestore.collection('Users').get();
      setData(dataUsers.docs)
      
       console.log(data)
             
     } catch (err) {
       console.log(err)
     }

  }

  useEffect(() => {
    loadData();
  }, []);

  function renderItem ({item}){
    return (
      <view>
        <p>
          {item.data().name}
        </p>
      </view>
    )
  }
  return (
    <div>
          <div >
            <h3>Nombre: </h3>
            <FlatList 
            data = {data}
            renderItem = {renderItem}
            keyextractor = { item =>item.id }/>
          </div>
      
    </div>
  )    
};
*/