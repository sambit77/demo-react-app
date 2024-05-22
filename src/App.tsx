import React from 'react';
import './App.css';
import User from "./User";
import About from "./About";
import Home from "./Home";

import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";

function App() {
  return (

      <BrowserRouter>

      <nav>
            <Link to="/"> Home </Link>
            <Link to="about">About</Link>
      </nav>

      <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
      </Routes>

      <div>
        <User name = "Sambit" email="sambitgulu@gmail.com"/>
      </div>

      <div>
              <User name = "Msdika" email="msd7@gmail.com"/>
      </div>

    </BrowserRouter>
  );
}

export default App;
