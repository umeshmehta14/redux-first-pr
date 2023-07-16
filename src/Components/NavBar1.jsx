import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const NavBar1 = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Yo Boii</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/cart" as={NavLink}>
            Cart ({cart.length})
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar1;
