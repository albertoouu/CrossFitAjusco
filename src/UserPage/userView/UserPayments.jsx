import * as React from "react";
import { useAuth } from "../../Context/authContext";




export const UserPayments = () => {
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
  console.log(uD.allergies)
  
  return (
    
    <>        
      <div key={uD.id} style={{ height: 500, margin: "50px" }}>
        <h2>Mis Pagos</h2>
        <h4>{uD.name} {uD.last_name}</h4>
        <h5>Fecha de Inicio:</h5>
          <p>{uD.date_start}</p>
        
        <h5>Pago Actual:</h5>
          <p>{uD.payday}</p>
        
        <h5>Pago siguiente:</h5>
          <p>{uD.payment_days[0]}</p>
        
        <h5>Hacer Pago:</h5>
        <button type="button">Transferencia</button>
        
      </div>          
    </>
   
  );
  }; 
