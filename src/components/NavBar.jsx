import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

export const Navigation = () => {

    return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Cross Ft. Ajusco</Navbar.Brand>
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
            <Nav>
            {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
            <Nav.Link eventKey={2} href="#memes">
                Inicia sesión
            </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
            </Navbar>
    )
}