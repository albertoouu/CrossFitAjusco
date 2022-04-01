import * as React from "react";
//import { Link } from 'react-router-dom';
import { useAuth } from "../../Context/authContext";




export const UserRules = () => {
  // Se declara una variable para guardar el id del usuario para
  const { user, users } = useAuth();
  console.log(user.email)
  //console.log(users[0])

  const userData = users.filter( (us) => {
    if (us.email === user.email) return true
  })
  console.log(userData[0])

  //configuración de los hoocks para
  const uD = userData[0]

  //Función para actualizar datos 
  
  return (
    
    <>        
      <div key={uD.id}>
        <h4>{uD.name} {uD.last_name}</h4>
        <h5>
            REGLAMENTO DEL USUARIO
        </h5>
          <p>
        Este reglamento está diseñado para informarle acerca de los servicios que proporciona CROSS F T AJUSCO, así como las reglas que deberá de respetar al asistir y hacer uso de las instalaciones, equipo y/o actividades de CROSS F T AJUSCO; ello con el objeto de proporcionarle un mejor servicio y lograr una convivencia armónica, agradable y de respeto para todos los que asisten. Por lo que el usuario se obliga a respetar las disposiciones contenidas en el presente reglamento:
          </p>   
      </div>          
    </>
   
  )
  }; 


