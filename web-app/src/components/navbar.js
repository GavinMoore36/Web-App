import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const NavGuide = (props) => {

    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="home">Lori's Mystery-Box</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="home">Home</Nav.Link>
          <Nav.Link href="info">Info</Nav.Link>
          <Nav.Link href="products">Products</Nav.Link>
          <Nav.Link href="contact">Contact</Nav.Link>
        </Nav>
      </Navbar>
    )
  }

export default NavGuide;
