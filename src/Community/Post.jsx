import './Post.css';
//import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import React, { useState } from 'react';
import { useAuth } from '../Context/authContext';
import { PhotoLibrary } from '@mui/icons-material';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const Post = ({ setPosts }) => {
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
    const date = new Date().toString();
    console.log(input, user.email, user.displayName, date);
    //mandar values a objeto en firestore
    try {
      const docRef = await addDoc(collection(db, 'Posts'), {
        input: input,
        email: user.email,
        date: date,
        author: user.displayName,
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
    console.log('getting data');
    const data = await getDocs(postsCollectionRef);
    //Actualizar estado
    setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  // Agregamos un input desde donde el usuario puede escribir sus mensajes
  return (
    <div className="message">
      <form onSubmit={handleSubmit}>
        <input
          name="entry"
          type="text"
          placeholder="¡Comparte con la comunidad!"
          onChange={handleChange}
          autoFocus
        />
        {input === '' ? null : (
          <button className="sendPostButton">
            <AddCircleOutlineIcon color="primary" fontSize="large" />
          </button>
        )}
      </form>

      <div className="messageSender_bottom">
        <div className="messageSender_option">
          <PhotoLibrary style={{ color: 'black' }} />
        </div>
      </div>
    </div>
  );
};
export { Post };
