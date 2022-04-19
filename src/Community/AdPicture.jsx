import React, { useState } from 'react';
//import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import { PhotoLibrary } from '@mui/icons-material';

export const AdPicture = () => {
  const [picture, setPicture] = useState('');

  const handlePicture = () => {
    console.log('subiendo imagen');
  };

  return (
    <div>
      <PhotoLibrary
        style={{ color: 'black' }}
        fontSize="medium"
        style={{
          marginTop: '3.5%',
          marginLeft: '2%',
          marginBottom: '2.5%',
          cursor: 'pointer',
        }}
        onClick={handlePicture}
      />
    </div>
  );
};
