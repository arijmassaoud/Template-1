import React from 'react';
import './CardSection.css';

const CardSection = ({ text1, text2, img }) => {
  return (
    <div className='card'>
      <img src={img} alt={text1} />
      <div className='info'>
        <h3>{text1}</h3>
        <p>{text2}</p>
      </div>
    </div>
  );
}

export default CardSection;
