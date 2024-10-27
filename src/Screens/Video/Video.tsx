import React from 'react';
import './Video.css';

const VideoScreen: React.FC = () => {
  return (
    <div className="video-screen">
      <div className="video-container">
        <iframe
          className="youtube-video"
          src="https://www.youtube.com/embed/SO44c9vycWY?si=VgBTfPMZn-l9yBVR"          
          title="YouTube Video"
          allowFullScreen
        ></iframe>
        <iframe
          className="youtube-video"
          src="https://www.youtube.com/embed/Hbk37Pc0x3w?si=TzJCGbA5PWfQcqK3"          
          title="YouTube Video"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoScreen;