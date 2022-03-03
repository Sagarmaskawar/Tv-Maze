import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Navbar from "./component/Navbar"
import Home from './pages/Home';
import About from './pages/About';
import Single from './pages/Single';

const App = () => {
  return (<Router>
    
    <Navbar/>
          <div className='container'> 
            <Routes>
               <Route path="/" element={<Home/>}/>
               <Route path="/About" element={<About/>}/>
               <Route path="/Single/:id" element={<Single/>}/>
              </Routes>
          </div>
            
          

  </Router>);
};

export default App;


