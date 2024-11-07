import React from 'react';
import Menu from '../Menu/Menu';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="header-container">
      <video autoPlay loop muted playsInline className="background-video">
        <source src={`${process.env.PUBLIC_URL}/videos/sls-home-video.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="logo-wrapper">
        <img className="sls-logo" src={`${process.env.PUBLIC_URL}/image/sls-logo.png`} alt="" />

      </div>
      <div className="content">
        {/* <h1 className="header-text">SWEDISH LOVE STORY</h1> */}
        <Menu />
      </div>
    </div>
  );
};

export default Home;
