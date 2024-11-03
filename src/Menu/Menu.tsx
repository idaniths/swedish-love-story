import React from 'react';
import { Link } from 'react-router-dom';

import './Menu.css';

const Menu: React.FC = () => {

 
  return (
    <nav className="menu">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/music">Music</Link></li>
        <li><Link to="/video">Video</Link></li>
        <li><Link to="/connect">Connect</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;
