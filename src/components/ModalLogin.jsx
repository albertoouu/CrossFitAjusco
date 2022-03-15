// Este es el modal que aparece al darle click en "Iniciar sesión"
import { Button, Modal } from 'react-bootstrap'
import { Login } from './Login'
import './ModalLogin.css'
import { ModalRegister } from './ModalRegister'
import { useState } from 'react'

  //Extraido de 'react-bootstrap'
export const MyVerticallyCenteredModal = (props) => {

  const [modalShow, setModalShow] = useState(false);
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Cross Ft. Ajusco
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Inicia sesión:</h4>
          {/* Aquí inicimos sesión */}
          <Login />
          <Button variant="link" onClick={() => setModalShow(true)}>
            ¿Aún no tienes cuenta?
            <ModalRegister
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            </Button>
          <br />
          {/* Login con las redes */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
