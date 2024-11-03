import React from 'react';
import './Video.css';
import Menu from '../../Menu/Menu'

const VideoPage: React.FC = () => {
  return (
    <div className="video-page">
      <nav><Menu/></nav>

      <div className="video-container">
        <iframe
          className="youtube-video"
          src="https://www.youtube.com/embed/SO44c9vycWY?si=VgBTfPMZn-l9yBVR"          
          title="YouTube Video"
          allowFullScreen
        ></iframe>
          <iframe
           className="youtube-video"
           src="https://www.youtube.com/embed/WXiGGZzjoQg?si=nd2TpSi4ZK2K49n5"          
           title="YouTube Video"
           allowFullScreen
         ></iframe>
        <iframe
          className="youtube-video"
          src="https://www.youtube.com/embed/6-SD9EQCgmg?si=TL8HcGFmt6H90GLY"          
          title="YouTube Video"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPage;


