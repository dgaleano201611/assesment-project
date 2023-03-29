import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={NavLink} to={"/"}>Home</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link as={NavLink} to={"/about"}>About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export {Navigation};