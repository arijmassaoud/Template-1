import React from 'react';
import SpecialHeading from './SpecialHeading';
import './Portfolio.css';
import CardSection from './CardSection';
import port1 from './prot1.jpg';
import port2 from './port2.jpg';
import port3 from './port3.jpg';

const Portfolio = () => {
  return (
    <div className='portfolio' id='portfolio'>
      <div className='container'>
        <SpecialHeading 
          text="Portfolio" 
          text2="If you do it right, it will last forever."
        />
        <div className="portfolio-content">
          <CardSection 
            img={port1} 
            text1="Project 1" 
            text2="Description for project 1."
          />
          <CardSection 
            img={port2} 
            text1="Project 2" 
            text2="Description for project 2."
          />
          <CardSection 
            img={port3} 
            text1="Project 3" 
            text2="Description for project 3."
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
