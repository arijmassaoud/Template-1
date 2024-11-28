import React from 'react';
import "./Features.css";
import { FaSearch, FaFlask, FaGlobe } from 'react-icons/fa'; // Pour Font Awesome
const Features = () => {
  return (
    <>
      <div className='features'>
      <div className='container'>
       <div className='feat'>
            <FaSearch className='fa-icon'/>
            <h3>Tell us your idea</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.</p>
        </div>
          <div className='feat'>
            <FaFlask className='fa-icon'/>
             <h3>We will do all the work</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.</p>
          </div>
            <div className='feat'>
              <FaGlobe className='fa-icon'/>
               <h3>Your product is worldwide</h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.</p>
            </div>
        </div>
      </div>
    </>
  );
}

export default Features;
