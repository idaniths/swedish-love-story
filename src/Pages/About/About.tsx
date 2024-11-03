import React from 'react';
import './About.css';
import Menu from '../../Menu/Menu'

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <nav><Menu/></nav>
        <div className='about-container'>
            <img className='band-img' src={`${process.env.PUBLIC_URL}/image/sls-band.png`} alt=""/>
            <p>Though based in Gothenburg, the members of Swedish Love Story hail from all over the country: from the snowy north to the rocky west coast. Through exploring soundscapes with inspiration from landscapes, they blend the rawness and sonic universe of alternative rock and dream pop with the intimacy and melodic sensibilities of indie.Their latest EP Milky's Ghost Ship Choir is an equally introspective and inviting trip through the airy, dreamy and grand with songs like the atmospheric “Run” and the soaring and catchy single “Thank You”.</p>
  

        </div>
      
    </div>
  );
};

export default AboutPage;