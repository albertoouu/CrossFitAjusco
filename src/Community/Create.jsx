import React, { useState } from 'react';
import { useAuth } from '../Context/authContext';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { AdPhoto } from './AdPhoto';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from "../firebase"

export const CreatePost = ({ setPosts }) => {
  const { user } = useAuth();
  const [input, setInput] = useState('');
  const postsCollectionRef = collection(db, 'Posts');

  const handleChange = (e) => {
    console.log(e.target.name);
    setInput(e.target.value);
    console.log(input);
  };

    const [file, setFile] = useState('');
  
    const handleFile = async(e) => {
      console.log('adding file');
      //detectar archivo
      const localFile = e.target.files[0]
      console.log(localFile)
      //crear referencia de archivo
      const archRef = ref(storage, `filesCommunity/${localFile.name}`)
      //cargar archivo a firebase storage
      await uploadBytes(archRef, localFile)
      // obtener url de descarga
      const urlFile = await getDownloadURL(archRef)
      console.log(urlFile)
      await setFile(urlFile)
      console.log(file)
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const date = new Date();

    console.log(input, user.email, user.displayName, date, user.photoURL, file);
    //mandar values a objeto en firestore
    try {
      const docRef = await addDoc(collection(db, 'Posts'), {
        input: input,
        email: user.email,
        date: date,
        author: user.displayName,
        avatar: user.photoURL,
        file: file,
      });
      console.log('Document written with ID: ', docRef.id);
      //Limpiar form
      setInput('');
      e.target.entry.value = '';
      //Limpiar input file 
      setFile("")
      e.target.file.value=""
      //Actualizar estado
      getAllData();
    } catch (e) {
      console.error('Error adding document: ', e);
      //Limpiar Form
      e.target.entry.value = '';
      setInput('');
      //Limpiar input file
      setFile("")
      e.target.file.value=""
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
        <Form onSubmit={handleSubmit}>
          <FloatingLabel
            controlId="floatingTextarea1"
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
            </FloatingLabel>
            <Form.Control
              type='file'
              name="file"
              placeholder='ad file'
              onChange={handleFile}
              style={{ color: "gray", marginTop: "0.1%" }}
            />
          <div style={{ display: 'flex', flexDirection: 'raw' }}>
            <AdPhoto />
          </div>
          {input  === '' & file === '' ? null : (
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
        </Form>
      </div>
    </div>
  );
};