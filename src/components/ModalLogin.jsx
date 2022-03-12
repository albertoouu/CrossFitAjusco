import { Button, Modal } from 'react-bootstrap'
import { Login } from './Login'
import './ModalLogin.css'
  
export const MyVerticallyCenteredModal = (props) => {
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
          <Login/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
