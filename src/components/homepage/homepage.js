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
    <div className="homepage" style={{backgroundImage: `url(${background})`, backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '800px'}}>
      <Navbar expand="lg" fixed="top">
        <Container fluid>
          <Navbar.Brand className= "navbar-brand"href="#home"><img
              src={logo}
              width="270"
              height="60"
              className="d-inline-block align-top"
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
