import React, { useState } from 'react';
import { PhotoLibrary } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import Form from 'react-bootstrap/Form';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from "../firebase"

export const AdPicture = () => {
  const styles = {
    cursor: 'pointer',
    marginTop: '3%',
    marginLeft: '2%',
    marginBottom: '2%',
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

  return (
    <div style={styles} >
      <Form.Control type="file" placeholder='picture' onChange={handlePicture} picture={picture}/>
      <IconButton >
        
        {/*<PhotoLibrary fontSize="medium" />*/}
      </IconButton>
    </div>
  );
};
