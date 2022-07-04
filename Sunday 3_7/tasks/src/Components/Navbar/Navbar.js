import React from 'react';
import './Navbar.css';
import Home from "../../Home"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';

function NavbarMain() {
    return (
        <div className='navbar'>
            {/* <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
            <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
            <BrowserRouter>
                <Routes>
                    <Route path="/" component={Home}>Home</Route>
                    
                </Routes>
            </BrowserRouter> */}
            
       <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand ><img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="./">Home</Nav.Link>
            <Nav.Link href="./about-us">About Us</Nav.Link>
            <Nav.Link href="./movielist">MovieList</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
        </div>
    )
}

export default NavbarMain;