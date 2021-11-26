import React from 'react';
// import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Link to='/'>
            <Navbar.Brand>Shopper</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Link to='/cart' className='nav-link'>
                <i className='fas fa-shopping-cart'></i>Cart
              </Link>
              <Link to='/login' className='nav-link'>
                <i className='fas fa-user'></i>Sign In
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
