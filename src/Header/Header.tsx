import React from 'react';
import Menu from '../Menu/Menu';
import './Header.css';

const Header: React.FC = () => {
  return (
    <div className="header-container">
      <video autoPlay loop muted playsInline className="background-video">
        <source src={`${process.env.PUBLIC_URL}/videos/patrikk.mov`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1 className="header-text">SWEDISH LOVE STORY</h1>
        <Menu />
      </div>
    </div>
  );
};

export default Header;
