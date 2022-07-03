import React, { Component } from 'react';
import "./Forms.css";
import Forms from './Forms';
import Data from './Data';
import {Routes,BrowserRouter, Route,Link} from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
    <Naver/>
    {/* <Forms/> */}
    {/* <Data/> */}

    <BrowserRouter>

    <Routes>
      <Route path="/data"  element={<Data />}> </Route>
      <Route path="/form" element={<Forms />}> </Route>
    </Routes>
    </BrowserRouter>

</>
  );
}

export default App;