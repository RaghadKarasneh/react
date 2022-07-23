import React from "react";
import Home from "./Home";
import LoginAndReg from "./LoginAndReg";
import {Routes,BrowserRouter, Route,Link} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginAndReg />}/>
        <Route path="/Home" element={<Home/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
