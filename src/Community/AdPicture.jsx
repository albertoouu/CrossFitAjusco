import React, { useState } from 'react';
//import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import { PhotoLibrary } from '@mui/icons-material';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';

export const AdPicture = () => {
  const styles = {
    cursor: 'pointer',
    marginTop: '3%',
    marginLeft: '2%',
    marginBottom: '2%',
    cursor: 'pointer',
  };
  const [picture, setPicture] = useState('');

  const handlePicture = () => {
    console.log('adding picture');
  };

  return (
    <div style={styles}>
      <IconButton>
        <PhotoLibrary fontSize="medium" onClick={handlePicture} />
      </IconButton>
    </div>
  );
};
