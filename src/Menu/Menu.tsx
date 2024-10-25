import React from 'react';
import './Menu.css';

const Menu: React.FC = () => {

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <nav className="menu">
      <ul>
      <li><p onClick={() => handleScroll('music')}>Music</p></li>
        <li><p onClick={() => handleScroll('video')}>Video</p></li>
        <li><p onClick={() => handleScroll('contact')}>Contact</p></li>
        <li><p onClick={() => handleScroll('social-media')}>Social Media</p></li>
      </ul>
    </nav>
  );
};

export default Menu;
