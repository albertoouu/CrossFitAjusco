import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CardMedia from '@mui/material/CardMedia';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  height: 'auto',
  bgcolor: 'background.paper',
  boxShadow: '0px 5px 7px -7px',
  p: 2,
};

export const Zoom = ({ img }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <CardMedia
        component="img"
        image={img}
        alt="img post"
        onClick={handleOpen}
        style={{ cursor: 'crosshair' }}
      />

      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <CardMedia
            component="img"
            image={img}
            alt="img post"
            onClick={handleClose}
            style={{ cursor: 'crosshair' }}
          />
        </Box>
      </Modal>
    </div>
  );
};
