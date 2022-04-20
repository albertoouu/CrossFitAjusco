import React, { useState } from 'react';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import IconButton from '@mui/material/IconButton';

export const AdPhoto = () => {
  const styles = {
    cursor: 'pointer',
    marginTop: '3%',
    marginLeft: '2%',
    marginBottom: '2%',
  };

  const [photo, setPhoto] = useState('');

  const handlePhoto = () => {
    console.log('adding photo');
  };

  return (
    <div style={styles}>
      <IconButton onClick={handlePhoto}>
        <PhotoCameraIcon />
      </IconButton>
    </div>
  );
};
