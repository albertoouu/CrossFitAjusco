import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import "./Modal.css"

import {
  collection,
  addDoc,
  getDoc,
  getDocs,
  doc,
  onSnapshot,
  querySnapshot,
  deleteDoc,
} from 'firebase/firestore';
import { db } from '../firebase';

export const EditModal = ({id, setPosts}) => {
  //console.log(id, setPosts)
  const [open, setOpen] = useState(false);
  const [inputEdit, setInputEdit] = useState("");
    
    //Traer el documento a editar
  const getDocument = async (id) => {
    console.log(id);
    //Obtener documento a través de su ID con get()
    const docRef = doc(db, "Posts", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setInputEdit(docSnap.data().input);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    };
  
  //Abrir modal y esperar al documento a editar
  const handleOpen = async () => {
    setOpen(true)
    await getDocument(id)
    //Pasar documento a input del form para editarlo
    
  };

  const handleSendEdit = (e) => {
    e.preventDefault();
    
    
    
    setOpen(false);

  }

const handleClose = () => setOpen(false);

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

  return (
    <div>
      <EditIcon onClick={handleOpen} className="editButton"/>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            CrossFt Ajusco
          </Typography>
          <form >
            <input type="text" name="inputToEdit" value={setInputEdit.inputToEdit} onChange={((e)=> setInputEdit(e.target.value))}/>
            <CheckCircleOutlineIcon onClick={handleSendEdit} className='checkPostEdited'/>
          </form>
        </Box>
      </Modal>
    </div>
  );
}