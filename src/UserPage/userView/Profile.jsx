import * as React from 'react';
import { collection } from "firebase/firestore";
import { db } from "../../firebase"


export const Profile = () => {
  const usersRef = collection(db, "Users");
 


  return (
    <div>
          <div key={usersRef.id}>
            <h3>Nombre: {usersRef.name}</h3>
            <p>Edad: {usersRef.age}</p>
            <p>Correo: {usersRef.email}</p>
          </div>
      
    </div>
  )    
    };