import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import AuthService from '../../utils/auth';
import './Header.css';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    AuthService.logout();
  };

  return (
    <Navbar className="header" bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Tech Solutions</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            {AuthService.loggedIn() && (
              <>
                <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
              </>
            )}
          </Nav>
          <div>
            {AuthService.loggedIn() ? (
              <>
                <Button className="m-2" onClick={logout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button as={Link} variant="primary" className="m-2" to="/login">
                  Login
                </Button>
                <Button as={Link} variant="secondary" className="m-2" to="/signup">
                  Signup
                </Button>
              </>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
