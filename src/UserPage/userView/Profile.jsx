import React, { useEffect } from "react";
import { collection, getDoc } from "firebase/firestore";
import db from "../../firebase";


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