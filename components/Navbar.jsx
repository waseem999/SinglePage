import React from 'react';
import { Link } from 'react-router';

const Navbar = () => (
  <nav id="main-navbar">
        <h3 style={{float: 'left', marginLeft: '.8em'}}>designory.<font size="1">&reg;</font></h3>
          <ul>
            <li><Link to="/contact">CONTACT INFO</Link></li>
            <li><Link to="/journal">JOURNAL</Link></li>
            <li><Link to="/process">PROCESS</Link></li>
            <li><Link to="/portfolio">PORTFOLIO</Link></li>
          </ul>

  </nav>
);

export default Navbar;



