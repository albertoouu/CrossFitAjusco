import * as React from "react";
//import { Link } from 'react-router-dom';
import { useAuth } from "../../Context/authContext";




export const Profile = () => {
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
        <h5>Edad:
          <p>{uD.age}</p>
        </h5>
        <h5>Teléfono:
          <p>{uD.phone}</p>
        </h5>
        <h5>Correo:
          <p>{uD.email}</p>
        </h5>
      </div>          
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