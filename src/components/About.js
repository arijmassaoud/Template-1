import React from 'react'
import './About.css';
import SpecialHeading from './SpecialHeading';
import image from './about.jpg';
const About = () => {
  return (
    <div className='about' id='about'>
      <div className='container'>
        <SpecialHeading 
          text="About" 
          text2="Less is more work"
        />
        <div className='about-content'>
        <div className='image'>
            <img src={image} alt='about'/>
        </div>
        <div className='text'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </p>
        <hr/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        </div>
       </div>
       </div>
    </div>
  )
}

export default About