import * as React from "react";
import { useAuth } from "../../Context/authContext";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

 const Profile = () => {
  // Se declara una variable para guardar el id del usuario para
  const { user, users } = useAuth();
  console.log(user.email);
  //console.log(users[0])

  const userData = users.filter((us) => {
    if (us.email === user.email) return true;
  });
  console.log(userData[0]);

  //configuración de los hoocks para
  const uD = userData[0];

  //Función para actualizar datos
  console.log(uD.allergies);

  return (
    <>
    <div key={uD.id} style={{ height: 500, margin: "50px" }}>
    <h2>Mi Perfil</h2>
    <h4>
          {uD.name} {uD.last_name}
        </h4>
    <List
      sx={{
        width: '100%',
        maxWidth: 500,
        bgcolor: 'background.paper',
      }}
    >
      <ListItem>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
      <Divider component="li" />
      <li>
        <Typography
          sx={{ mt: 0.5, ml: 2 }}
          color="text.secondary"
          display="block"
          variant="caption"
        >
          Divider
        </Typography>
      </li>
      <ListItem>
        <ListItemText primary="Work" secondary="Jan 7, 2014" />
      </ListItem>
      <Divider component="li" variant="inset" />
      <li>
        <Typography
          sx={{ mt: 0.5, ml: 9 }}
          color="text.secondary"
          display="block"
          variant="caption"
        >
          Leisure
        </Typography>
      </li>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Vacation" secondary="July 20, 2014" />
      </ListItem>
    </List>      
      
        
       
        <h5>Edad:</h5>
        <p>{uD.age}</p>

        <h5>Teléfono:</h5>
        <p>{uD.phone}</p>

        <h5>Correo:</h5>
          <p>{uD.email}</p>
        
        <h5>Medidas:</h5>
        <p>Altura: {uD.heigth} mts.</p>
        <p>Peso: {uD.sizes.weigth} kg.</p>
        <p>Cinura: {uD.sizes.waist} cm.</p>
        <p>Cuello: {uD.sizes.neck} cm.</p>

        <h5>Afecciones:</h5>
        <p>{uD.injuries}</p>

        <h5>Alergias:</h5>
        <p>{uD.allergies}</p>
      </div>
    </>
  );
    
};

export default Profile; 