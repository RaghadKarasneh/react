import logo from './logo.svg';
import NavbarMain from './Components/Navbar/Navbar';
import Banner from "./Components/Banner/Banner";
import SingleMovie from './Components/SingleMovie/SingleMovie';
import './App.css';

import Home from './Home';
import About from './About';
import MovieList from './MovieList';
import {Container, Nav, NavDropdown} from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
 
    <div className="App">
         <BrowserRouter>
    <Routes>
        {/* <Route path="/" element={<Home/>}>Home</Route> */}
        {/* <Route path="/about-us" element={<About/>}>About Us</Route> */}
        <Route path="/movielist" element={<MovieList />}>Movie List</Route>
        <Route path="/single-movie" element={<SingleMovie />}></Route>
    </Routes>
</BrowserRouter> 
<NavbarMain />
       <Banner />
     <Home/>
    {/* <h1>Single movie</h1>
    <SingleMovie /> */}
    </div>
  );
}

export default App;
