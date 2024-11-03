import React from 'react';
import './Music.css';
import Menu from '../../Menu/Menu'

const MusicScreen: React.FC = () => {
  return (
    <div className="music-page">
      <nav><Menu/></nav>
        <div className='album-container'>
        <div className='single-album'>
          <img className="album-img"
          src={`${process.env.PUBLIC_URL}/image/sls-milkys.png`} 
          alt="Album Cover" />
          <div className='text-content'>
          <h2>Milky's Ghost Ship Choir EP</h2>
          <p>Released: November 2023 </p>
          <a href="https://linktr.ee/swedishlovestory?lt_utm_source=lt_share_link#341094184">Listen</a>
          </div>
          </div>
          <div className='single-album'>
          <img className="album-img"
          src={`${process.env.PUBLIC_URL}/image/wildlife.png`} 
          alt="Album Cover" />
          <div className='text-content'>
          <h2>Wildlife</h2>
          <p>Released: November 2021 </p>
          <a href="https://linktr.ee/swedishlovestory?lt_utm_source=lt_share_link#233095368">Listen</a>
          </div>
          </div>
       
        </div>
      
    </div>
  );
};

export default MusicScreen;