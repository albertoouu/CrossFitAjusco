// -------------------NabBar by Bootstrap, NavBar en landing page------------------
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import { useAuth } from "../../Context/authContext";
import { useNavigate } from "react-router-dom";
import {ImageAvatar} from "../../UserPage/userView/UserNavBar.jsx" //Imagen de Perfil de Us

export const Navigation = () => {
  //para mostrar el modal
  //const [modalShow, setModalShow] = useState(false);

  //cerrar sesión desde navBar
  const { user, logout } = useAuth()
  //const para la redirección del usuario
  const navigate = useNavigate()
  //una vez que cierra sesión se va navigate('direccón')

  const handleLogin = () => {
    navigate('/login')
  }

  const handleLogout = async () => {
    await logout()
    navigate('/')
  }

  // if (!user) {
  //   handleLogin()
  // } else {
  //   handleLogin()
  // }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Cross Ft. Ajusco</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="¿Quienes somos?" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Acerca de</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Misión</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Visión</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Contacto</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#features">Próximos eventos</Nav.Link>
            <Nav.Link href="#pricing">Recomendaciones de salud</Nav.Link>
          </Nav>
          {/* Botones de inicio de sesión */}
          <Button variant="link" onClick={handleLogin}>
            Inicia Sesión
          </Button>
          <Button variant="link" onClick={handleLogout}>
            Cerrar Sesión
          </Button>
          <Nav>{/* <Nav.Link href="#deets">More deets</Nav.Link> */}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
