import React from 'react';
import './Music.css';
import LinktreeModal from '../../LinktreeModal/LinktreeModal';
import Menu from '../../Menu/Menu'

const MusicScreen: React.FC = () => {
  return (
    <div className="music-page">
      <nav><Menu/></nav>
        <div className='album-container'>
        <img className="album-img"
        src={`${process.env.PUBLIC_URL}/image/wildlife.png`} // Use PUBLIC_URL to reference public assets
          alt="Album Cover" />
          <h2>Wildlife</h2>
          <p>Released: November 2021 </p>
          {/* <a href="https://open.spotify.com/album/6krRyNDqsbnHAkBk5fc9Mp?si=Pi0gxq5lT8WEdpX3Z35jxQ">Listen</a> */}

        <LinktreeModal />
        </div>
      
    </div>
  );
};

export default MusicScreen;