//import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import React, { useState } from 'react';
import { useAuth } from '../Context/authContext';
import { PhotoLibrary } from '@mui/icons-material';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const CreatePost = ({ setPosts }) => {
  const { user } = useAuth();
  const [input, setInput] = useState('');
  const postsCollectionRef = collection(db, 'Posts');

  const handleChange = (e) => {
    console.log(e.target.name);
    setInput(e.target.value);
    console.log(input);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const date = new Date();

    console.log(input, user.email, user.displayName, date, user.photoURL);
    //mandar values a objeto en firestore
    try {
      const docRef = await addDoc(collection(db, 'Posts'), {
        input: input,
        email: user.email,
        date: date,
        author: user.displayName,
        avatar: user.photoURL,
      });
      console.log('Document written with ID: ', docRef.id);
      //Limpiar form
      setInput('');
      e.target.entry.value = '';
      //Actualizar estado
      getAllData();
    } catch (e) {
      console.error('Error adding document: ', e);
      e.target.entry.value = '';
      setInput('');
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
          </FloatingLabel>

          {input === '' ? null : (
            <div>
              <PhotoLibrary
                style={{ color: 'black' }}
                fontSize="medium"
                style={{ marginTop: '3.5%', marginLeft: '2%' }}
              />
              <button
                style={{
                  background: 'transparent',
                  borderStyle: 'none',
                  float: 'right',
                  padding: '1%',
                  marginTop: '1.5%',
                }}
              >
                <Fab
                  color="primary"
                  aria-label="add"
                  size="small"
                  className="addPicture"
                >
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
