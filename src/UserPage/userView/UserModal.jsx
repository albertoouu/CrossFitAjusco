import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import  { useState } from 'react';
import {  updateDoc, doc, collection, getFirestore } from 'firebase/firestore';
import app from "../../firebase";
const db = getFirestore(app);



const UserModal = ({show, setShow, modalUserData, tipo}) => {
    const handleClose = () => setShow(false);
    const [date, setDate] = useState({});
    console.log(tipo)
    //creamos la funcion para actualizar los datos
    const update = async (e) =>{
        e.preventDefault()
        let docRef = doc (db, `Users/${modalUserData.id}`);
        await updateDoc(docRef, {
            edad: modalUserData.age,
            teléfono: modalUserData.teléfono,
            email: modalUserData.email, 
            alergias: modalUserData.alergies,
            injuries: modalUserData.injuries
        })
        setDate({});
        handleClose();
    };
    
    //creamos la función para traer los datos de la filaseleccionada
  

    return(
        <>
        <Modal show={show} onHide={handleClose} key={modalUserData.id}>
      <Modal.Header closeButton>
        <Modal.Title>Cambiar Datos:</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>{tipo}</Form.Label>
            <Form.Control
              type="number"
              placeholder='j'
              autoFocus
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={update}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
    </>

    )
}

export default UserModal;