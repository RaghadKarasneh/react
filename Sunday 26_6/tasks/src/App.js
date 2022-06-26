import logo from './logo.svg';
import {Routes,BrowserRouter, Route,Link} from "react-router-dom";
import HomePage from './Component/Home/Home';
import FormApp from './Component/Form/Form';

import About from './Component/About';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/Home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Form">Form</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/About" element={<About />}></Route>
      <Route path="/Form" element={<FormApp />}></Route>
    </Routes>
</BrowserRouter>
{/* <HomePage />
<About />
<FormApp /> */}
</>
  );
}

export default App;
