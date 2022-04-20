import React, { useState } from 'react';
import { PhotoLibrary } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';

export const AdPicture = () => {
  const styles = {
    cursor: 'pointer',
    marginTop: '3%',
    marginLeft: '2%',
    marginBottom: '2%',
  };
  const [picture, setPicture] = useState('');

  const handlePicture = () => {
    console.log('adding picture');
  };

  return (
    <div style={styles}>
      <IconButton onClick={handlePicture}>
        <PhotoLibrary fontSize="medium" />
      </IconButton>
    </div>
  );
};
