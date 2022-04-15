// -------------------NabBar by Bootstrap, NavBar en landing page------------------
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Button,
  NavLink,
} from "react-bootstrap";
import { useAuth } from "../../Context/authContext";
import { useNavigate } from "react-router-dom";
import ModalPrice from "../Precios";

export const Navigation = () => {
  //para mostrar el modal
  //const [modalShow, setModalShow] = useState(false);

  //cerrar sesión desde navBar
  const { user, logout } = useAuth();
  //const para la redirección del usuario
  const navigate = useNavigate();
  //una vez que cierra sesión se va navigate('direccón')

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

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
              <NavDropdown.Item href="/Acerca_de">Acerca de</NavDropdown.Item>
              <NavDropdown.Item href="/Precios">Precio</NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Contacto</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/recomendaciones_de_salud">
              Recomendaciones de salud
            </Nav.Link>
            {}
          </Nav>
          {/* Botones de inicio de sesión */}
          {user ? (
            <Button variant="link" onClick={handleLogout}>
              Cerrar Sesión
            </Button>
          ) : (
            <Button variant="link" onClick={handleLogin}>
              Iniciar Sesión
            </Button>
          )}

          <Nav>{/* <Nav.Link href="#deets">More deets</Nav.Link> */}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
