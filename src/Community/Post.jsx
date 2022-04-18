import './Post.css';
//import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import React, { useState,useEffect } from 'react';
import { useAuth } from '../Context/authContext';
import { PhotoLibrary } from '@mui/icons-material';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

const Post = () => {
  const { user } = useAuth();
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    console.log(e.target.name);
    setInput(e.target.value);
    console.log(input);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const date = new Date().toString();
    console.log(input, user.email, user.displayName, date);
    //mandar strings a objeto en firestore
    try {
      const docRef = await addDoc(collection(db, 'Posts'), {
        input: input,
        email: user.email,
        date: date,
        author: user.displayName,
      });
      console.log('Document written with ID: ', docRef.id);
      e.target.entry.value = '';
      setInput('');
    } catch (e) {
      console.error('Error adding document: ', e);
      e.target.entry.value = '';
      setInput('');
    }
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
        />
        {input === '' ? null : <button>Publicar</button>}
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
