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
        <ListItemText primary="Edad:" secondary={uD.age} />
      </ListItem>
      <Divider component="li" />
      <li>
        <Typography
          sx={{ mt: 0.5, ml: 2 }}
          color="text.secondary"
          display="block"
          variant="caption"
        >
        </Typography>
      </li>
      <ListItem>
        <ListItemText primary="Teléfono:" secondary={uD.phone} />
      </ListItem>
      <Divider component="li" />
      <li>
        <Typography
          sx={{ mt: 0.5, ml: 2 }}
          color="text.secondary"
          display="block"
          variant="caption"
        >
        </Typography>
      </li>
      <ListItem>
        <ListItemText primary="Email:" secondary={uD.email} />
      </ListItem>
      <Divider component="li" />
      <li>
        <Typography
          sx={{ mt: 0.5, ml: 2 }}
          color="text.secondary"
          display="block"
          variant="caption"
        >
        </Typography>
      </li>
      <ListItem>
        <ListItemText primary="Alergias:" secondary={uD.allergies} />
      </ListItem>
      <Divider component="li" />
      <li>
        <Typography
          sx={{ mt: 0.5, ml: 2 }}
          color="text.secondary"
          display="block"
          variant="caption"
        >
        </Typography>
        <ListItem>
        <ListItemText primary="Condición médica:" secondary={uD.injuries} />
      </ListItem>
      <Divider component="li" />
      <li>
        <Typography
          sx={{ mt: 0.5, ml: 2 }}
          color="text.secondary"
          display="block"
          variant="caption"
        >
        </Typography>
      </li>
      </li>
      <ListItem>
        <ListItemText primary="Medidas:"  />
      </ListItem>
      <Divider component="li" variant="inset" />
      <li>
        <Typography
          sx={{ mt: 0.5, ml: 9 }}
          color="text.secondary"
          display="block"
          variant="caption"
        >
        </Typography>
      </li>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Altura" secondary={uD.heigth} />
      </ListItem>
      <li>
        <Typography
          sx={{ mt: 0.5, ml: 9 }}
          color="text.secondary"
          display="block"
          variant="caption"
        >
        </Typography>
      </li>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Peso" secondary={uD.sizes.weight} />
      </ListItem>
      <li>
        <Typography
          sx={{ mt: 0.5, ml: 9 }}
          color="text.secondary"
          display="block"
          variant="caption"
        >
        </Typography>
      </li>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Cintura" secondary={uD.sizes.waist} />
      </ListItem>
    </List>      
      </div>
    </>
  );
    
};

export default Profile; 