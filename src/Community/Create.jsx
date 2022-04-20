import React, { useState } from 'react';
import { useAuth } from '../Context/authContext';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
//import { AdPicture } from './AdPicture';
import { AdPhoto } from './AdPhoto';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


import { PhotoLibrary } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from "../firebase"



const CreatePost = ({ setPosts }) => {
  const { user } = useAuth();
  const [input, setInput] = useState('');
  const postsCollectionRef = collection(db, 'Posts');

  const handleChange = (e) => {
    console.log(e.target.name);
    setInput(e.target.value);
    console.log(input);
  };





 
    const [picture, setPicture] = useState('');
  
    const handlePicture = async(e) => {
      console.log('adding picture');
      //detectar archivo
      const localPicture = e.target.files[0]
      console.log(localPicture)
      //crear referencia de archivo
      const archRef = ref(storage, `picturesCommunity/${localPicture.name}`)
      //cargar archivo a firebase storage
      await uploadBytes(archRef, localPicture)
      // obtener url de descarga
      const urlPicture = await getDownloadURL(archRef)
      console.log(urlPicture)
      await setPicture(urlPicture)
      console.log(picture)
    };
  
  
  







  const handleSubmit = async (e) => {
    e.preventDefault();
    const date = new Date();

    console.log(input, user.email, user.displayName, date, user.photoURL, picture);
    //mandar values a objeto en firestore
    try {
      const docRef = await addDoc(collection(db, 'Posts'), {
        input: input,
        email: user.email,
        date: date,
        author: user.displayName,
        avatar: user.photoURL,
        picture: picture,
      });
      console.log('Document written with ID: ', docRef.id);
      //Limpiar form
      setInput('');
      e.target.entry.value = '';
      //Limpiar input file picture
      setPicture("")
      e.target.picture.value=""
      //Actualizar estado
      getAllData();
    } catch (e) {
      console.error('Error adding document: ', e);
      //Limpiar Form
      e.target.entry.value = '';
      setInput('');
      //Limpiar input file picture
      setPicture("")
      e.target.picture.value=""
    }
  };

  //Traer nueva data actualizada
  const getAllData = async () => {
    const data = await getDocs(postsCollectionRef);
    //Recuperar nueva data
    const getData = data.docs
      .map((doc) => ({
        ...doc.data(),
        id: doc.id,
        fecha: doc.data().date.toDate().toDateString(),
        hora: doc.data().date.toDate().getHours(),
        minutes: doc.data().date.toDate().getMinutes(),
      }))
      .slice()
      .sort((a, b) => b.date - a.date);
    console.log(getData);
    //Actualizar Estado
    setPosts(getData);
  };

  // Agregamos un input desde donde el usuario puede escribir sus mensajes
  return (
    <div>
      <div
        style={{
          display: 'flex',
          margin: 'auto',
          flexDirection: 'column',
          backgroundColor: 'white',
          borderRadius: '10px',
          boxShadow: '0px 5px 7px -7px',
          padding: '1%',
          marginRight: '5%',
        }}
      >
        <form onSubmit={handleSubmit}>
          <FloatingLabel
            controlId="floatingTextarea1  "
            label="¡Comparte con la comunidad!"
            style={{ color: 'gray' }}
          >
            <Form.Control
              as="textarea"
              style={{
                height: '100px',
                borderColor: '#5DADE2',
              }}
              name="entry"
              type="text"
              placeholder="¡Comparte con la comunidad!"
              onChange={handleChange}
              autoFocus
            />
            <Form.Control
              type='file'
              name="picture"
              placeholder='ad picture'
              onChange={handlePicture}
            />



          </FloatingLabel>
          <div style={{ display: 'flex', flexDirection: 'raw' }}>
            <AdPhoto />
          </div>
          {input === '' ? null : (
            <div>
              <button
                style={{
                  background: 'transparent',
                  borderStyle: 'none',
                  float: 'right',
                  padding: '1%',
                  marginTop: '-60px',
                  position: 'sticky',
                }}
              >
                <Fab color="primary" aria-label="add" size="small">
                  <AddIcon />
                </Fab>
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
export { CreatePost };
