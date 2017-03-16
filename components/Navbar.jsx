import React from 'react';
import { Link } from 'react-router';

const Navbar = () => (
  <nav id="main-navbar">
        <ul>
            <li><Link to="/contact">CONTACT INFO</Link></li>
            <li><Link to="/journal">JOURNAL</Link></li>
            <li><Link to="/process">PROCESS</Link></li>
            <li><Link to="/portfolio">PORTFOLIO</Link></li>
        </ul>

  </nav>
);

export default Navbar;



