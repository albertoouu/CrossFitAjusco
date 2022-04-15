import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import './Modal.css';

import {
  collection,
  addDoc,
  getDoc,
  getDocs,
  doc,
  onSnapshot,
  querySnapshot,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../firebase';

export const EditModal = ({ id, setPosts }) => {
  //console.log(id, setPosts)
  const [open, setOpen] = useState(false);
  const [inputToEdit, setInputToEdit] = useState('');
  const postsCollectionRef = collection(db, 'Posts');

  //Traer el documento a editar
  const getDocument = async (id) => {
    console.log(id);
    //Obtener documento a través de su ID con get()
    const docRef = doc(db, 'Posts', id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data());
      //Pasar valores a form para editar
      await setInputToEdit(docSnap.data().input);
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!');
    }
  };

  //Abrir modal y esperar al documento a editar
  const handleOpen = async () => {
    setOpen(true);
    await getDocument(id);
  };

  const handleSendEdit = async (e) => {
    e.preventDefault();
    //Modelar nuevo objeto
    let input = e.target.inputToEdit.value;
    console.log('input: ', input);
    //Referencia a post
    const postRef = doc(db, 'Posts', id);
    //Actualizar nuevo input
    await updateDoc(postRef, {
      input: input,
    })
      .then(() => {
        console.log('Documento actualizado'); // Documento actualizado
      })
      .catch((error) => {
        console.error('Error de actualización de doumento', error);
      });
    //Actualizar DOM con nuevos cambios
    await getAllData();
    //Limpiar estado del input
    setInputToEdit('');
    //Cerrar modal
    setOpen(false);
  };

  //Traer nueva data actualizada
  const getAllData = async () => {
    console.log('getting data');
    const data = await getDocs(postsCollectionRef);
    //Actualizar estado
    setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

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
      <EditIcon onClick={handleOpen} className="editButton" />
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
          <form onSubmit={handleSendEdit}>
            <input
              type="text"
              name="inputToEdit"
              id="inputToEdit"
              defaultValue={inputToEdit}
              autoFocus
            />
            <button type="submit" className="editButtonSend">
              <CheckCircleOutlineIcon className="checkPostEdited" />
            </button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};
