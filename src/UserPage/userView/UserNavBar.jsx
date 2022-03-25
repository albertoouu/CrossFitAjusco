import * as React from 'react';
import Avatar from '@mui/material/Avatar';  //Imagen de Perfil
import Stack from '@mui/material/Stack';

export default function ImageAvatar() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    </Stack>
  );
}
