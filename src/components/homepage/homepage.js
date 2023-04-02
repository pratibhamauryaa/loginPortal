import React, { useState } from 'react';
import Login from '../login/login';
import './homepage.css';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import logo from "./homepage-logo.jpg"
import background from './slider1.jpg'

export default function Homepage() {
  const [showLogin, setShowLogin] = useState(false);

  const handleSignIn = () => {
    setShowLogin(true);
  };

  if (showLogin) {
    return <Login />;
  }

  return (
    <div className="homepage">
      <Navbar className='nav-welcome' expand="lg" fixed="top">
        <Container fluid>
          <Navbar.Brand className= "navbar-brand"><img
              src={logo}
            /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Button variant="outline-success" onClick={handleSignIn}>
              Sign In
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
