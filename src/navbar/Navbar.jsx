import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

function BasicExample() {
  return (
    <Navbar className="navbar" expand="lg">
      <Container>
        <Navbar.Brand className="logo text-danger">MkDAzM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>
              <NavLink className="text-decoration-none fs-4 nav__item" to="/">
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                className="text-decoration-none fs-4 nav__item"
                to="/Todolist"
              >
                ToDo
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                className="text-decoration-none fs-4 nav__item"
                to="/Asia"
              >
                Asia
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                to="/Europa"
                className="text-decoration-none fs-4 nav__item"
              >
                Eorupa
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
