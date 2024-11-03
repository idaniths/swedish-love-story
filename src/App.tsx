import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '../src/Header/Header'
import VideoPage from '../src/Pages/Video/Video';
import MusicPage from '../src/Pages/Music/Music'
import ConnectPage from '../src/Pages/Connect/Connect';
import About from '../src/Pages/About/About';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/video" element={<VideoPage />} />
        <Route path="/music" element={<MusicPage />} />
        <Route path="/connect" element={<ConnectPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
