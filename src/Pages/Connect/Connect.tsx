import React from 'react';
import './Connect.css';
import Menu from '../../Menu/Menu'

const ConnectPage: React.FC = () => {
  return (
    <div className="connect-page">
      <nav><Menu/></nav>
        <div className='connect-container'>
    
        <h2>Contact</h2>
        <a href="mailto:swedishlovestoryband@gmail.com">
            swedishlovestoryband@gmail.com
          </a>

        <h2>Social</h2>
        <a 
          href="https://www.instagram.com/swedishlovestory" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a 
          href="https://www.tiktok.com/@swedishlovestory" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          TikTok
        </a>
        <a 
          href="https://www.facebook.com/swedishlovestory" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a 
          href="https://linktr.ee/swedishlovestory" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Linktree
        </a>

        </div>
      
    </div>
  );
};

export default ConnectPage;