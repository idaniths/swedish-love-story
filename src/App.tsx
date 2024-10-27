import React from 'react';
import './App.css';
import Header from './Header/Header';
import Video from './Screens/Video/Video'
import Music from './Screens/Music/Music'

function App() {
  return (
    <div className="App">
     <Header />
     <div id="music"><Music /></div>      
      <div id="video"><Video /></div>
      <div id="contact">Contact Content</div>
      <div id="social-media">Social Media Content</div>
    </div>
  );
}

export default App;
