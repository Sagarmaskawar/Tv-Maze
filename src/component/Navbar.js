import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
      <div className="navbar">
           <div className='navcontainer'>
                <nav className='nav'>
                  <h3 className='navbrand'>
                  <Link to="/">
                    <img src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/000000/external-tv-monitor-4th-july-vitaliy-gorbachev-flat-vitaly-gorbachev.png" alt='tv'/>
                    Tv-Maze
                  </Link>
                  </h3>
                  <ul>
                    <li className='linkanc'> <Link to="/">Home</Link></li><br/><br/>
                    <li  className='linkanc'> <Link to="/About">About</Link></li>

                  </ul>

                 </nav>

           </div>
        

      </div>
  );
};

export default Navbar;
