import * as React from "react";
import { useAuth } from "../../Context/authContext";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import StraightenIcon from '@mui/icons-material/Straighten';
import Button from 'react-bootstrap/Button';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import UserModal from "./UserModal";
import { useEffect, useState } from "react";
import { getFirestore, collection, query, onSnapshot} from "firebase/firestore";
import app from "../../firebase";
const db = getFirestore(app);



 const Profile = () => {
  const { user } = useAuth();
  // Traemos el id del usuario desde useAuth 
    const [ users, setUsers ] = useState({});
    const [tipo, setTipo] = useState('');
    const  [data, setData] = useState('');

    const [modalUserData, setModalUserData] = useState({});
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
  // Utilizamos el método filter para los usuarios y checar si existe uno igual en la base de datos
  const handleClick = (e) => {
    console.log('paso')
    setModalUserData ({
      edad: user[0].age,
      teléfono: user[0].phone,
      email: user[0].email, 
      alergias: user[0].alergies,
      injuries: user[0].injuries,
      id: user[0].id
    }) 
    handleShow();
  }

  useEffect(() =>{
    let info = {}
    const q = query(collection(db,"Users"));
    const unsub = onSnapshot(q, (snap) => {
      const array = snap.docs.filter((doc) => {
        if(user.email == doc.data().email) {
          console.log(doc.id)
          info = doc.data()
          info.id = doc.id
          console.log('paso')
          return true
        }
      });
      console.log(info)
      setUsers(info)
    });
    return () => {
      unsub();
    };
  }, []);
  console.log(users)
 

  
  //creamos la funcion para actualizar los datos
  
  //creamos la función para traer los datos de la filaseleccionada

  //mostramos en pantalla los datos del usuario  
  return (
    <>
          <UserModal show={show} setShow={setShow}  tipo={tipo} modalUserData={users} data={data}/>

    <div key={modalUserData.id} style={{ height: 500, margin: "50px", padding:"30px" }}>
    <h2>Mi Perfil</h2>
    <h4>
          { users.name} {users.last_name}
        </h4>
    <List
      sx={{
        width: '100%',
        maxWidth: 800,
        bgcolor: 'background.paper',
      }}
    >
      <ListItem>
        <ListItemText primary="Edad:" secondary={users.age}/>
        <Button variant="primary" onClick={()=> {
          handleShow()
          setTipo('Edad:')
          setData(users.age)
        }} 
          onSelectEvent={handleClick}>
         <EditOutlinedIcon />
         
        </Button>
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
        <ListItemText primary="Teléfono:" secondary={users.phone} />
        <Button variant="primary" onClick={()=> {
          handleShow()
          setTipo('Teléfono')
          setData(users.phone)
        }}onSelectEvent={handleClick} >
         <EditOutlinedIcon />
        </Button>
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
        <ListItemText primary="Email:" secondary={users.email} />
        <Button variant="primary" onClick={()=> {
          handleShow()
          setTipo('Emial')
          setData(users.email)
        }}onSelectEvent={handleClick}>
         <EditOutlinedIcon />
        </Button>
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
        <ListItemText primary="Alergias:" secondary={users.allergies} />
        <Button variant="primary" onClick={()=> {
          handleShow()
          setTipo('Alergias')
          setData(users.allergies)
        }}onSelectEvent={handleClick}>
         <EditOutlinedIcon />
        </Button>
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
        <ListItemText primary="Condición médica:" secondary={users.injuries} />
        <Button variant="primary" onClick={()=> {
          handleShow()
          setTipo('Condición Médica')
          setData(users.injuries)
        }}onSelectEvent={handleClick}>
         <EditOutlinedIcon />
        </Button>
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
            <StraightenIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Altura:"  />
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
           <StraightenIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Peso"  />
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
           <StraightenIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Cintura"  />
      </ListItem>
    </List>      
      </div>
    </>
  );    
};

export default Profile; 
/*
import * as React from "react";
import { useAuth } from "../../Context/authContext";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import StraightenIcon from '@mui/icons-material/Straighten';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Form from 'react-bootstrap/Form';
import  { useState, useEffect } from 'react';
import { getDoc, updateDoc, doc, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import { Navigate } from "react-router-dom";


 const Profile = () => {
  // Traemos el id del usuario desde useAuth 
  const { user, users } = useAuth();
  // Utilizamos el método filter para los usuarios y checar si existe uno igual en la base de datos
  const userData = users.filter((us) => {
    if (us.email === user.email) return true;
  });
  //Guardamos el id en una variable entrando al primer índice del usuario en la base de datos
  const uD = userData[0];

  const [edad, setEdad] = useState([]);
  const [telefono, setTelefono] = useState([]);
  const [email, setEmail] = useState('');
  const [alergias, setAlegias] = useState('');
  const [injuries, setInjuries] = useState('');

  //creamos la funcion para actualizar los datos
  const update = async (e) =>{
      e.preventDefault()
      const datos = doc(db, 'Users', uD)
      const  data = {
          edad: edad,
          phone: telefono,
          email: email, 
          alergies: alergias, 
          injuries: injuries }
      await updateDoc(datos,data)
      Navigate('/Profile')
  }

  //creamos la función para traer los datos de la filaseleccionada


  useEffect(() => {
   
  }, [])


  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
      
  const handleClose = () => setShow(false);
  const handleClose2 = () => setShow2(false);
  const handleClose3 = () => setShow3(false);
  const handleClose4 = () => setShow4(false);
  const handleClose5 = () => setShow5(false);

  const handleShow = () => setShow(true);
  const handleShow2 = () => setShow2(true);
  const handleShow3 = () => setShow3(true);
  const handleShow4 = () => setShow4(true);
  const handleShow5 = () => setShow5(true);

  //mostramos en pantalla los datos del usuario  
  return (
    <>
    <div key={uD.id} style={{ height: 500, margin: "50px", padding:"30px" }}>
    <h2>Mi Perfil</h2>
    <h4>
          {uD.name} {uD.last_name}
        </h4>
    <List
      sx={{
        width: '100%',
        maxWidth: 800,
        bgcolor: 'background.paper',
      }}
    >
      <ListItem>
        <ListItemText primary="Edad:" secondary={uD.age}/>
        <Button variant="primary" onClick={handleShow}>
         <EditOutlinedIcon />
        </Button>
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
        <Button variant="primary" onClick={handleShow2}>
         <EditOutlinedIcon />
        </Button>
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
        <Button variant="primary" onClick={handleShow3}>
         <EditOutlinedIcon />
        </Button>
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
        <Button variant="primary" onClick={handleShow4}>
         <EditOutlinedIcon />
        </Button>
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
        <Button variant="primary" onClick={handleShow5}>
         <EditOutlinedIcon />
        </Button>
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
            <StraightenIcon />
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
           <StraightenIcon />
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
           <StraightenIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Cintura" secondary={uD.sizes.waist} />
      </ListItem>
    </List>      
      </div>

      <Modal show={show} onHide={handleClose} key={uD.id} >
      <Modal.Header closeButton>
        <Modal.Title>Cambiar Datos:</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Edad</Form.Label>
            <Form.Control
              type="number"
              placeholder={uD.age}
              autoFocus
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>

    <Modal show={show2} onHide={handleClose2} key={uD.id} >
      <Modal.Header closeButton>
        <Modal.Title>Cambiar Datos:</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Teléfono:</Form.Label>
            <Form.Control
              type="string"
              placeholder={uD.phone}
              autoFocus
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose2}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose2}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>

    <Modal show={show3} onHide={handleClose3} key={uD.id} >
      <Modal.Header closeButton>
        <Modal.Title>Cambiar Datos:</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              placeholder={uD.email}
              autoFocus
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose3}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose3}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>

    <Modal show={show4} onHide={handleClose4} key={uD.id}>
      <Modal.Header closeButton>
        <Modal.Title>Cambiar Datos:</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Alergias:</Form.Label>
            <Form.Control
              type="string"
              placeholder={uD.allergies}
              autoFocus
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose4}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose4}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>

    <Modal show={show5} onHide={handleClose5} key={uD.id} >
      <Modal.Header closeButton>
        <Modal.Title>Cambiar Datos:</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Condición Médica:</Form.Label>
            <Form.Control
              type="string"
              placeholder={uD.injuries}
              autoFocus
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose5}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose5}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
    </>
  );    
};



export default Profile; 
*/