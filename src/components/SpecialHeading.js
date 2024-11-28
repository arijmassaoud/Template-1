import React from 'react';
import './SpecialHeading.css';

const SpecialHeading = ({ text ,text2}) => {
  return (
    <>
    <h2 className='special-heading'>{text}</h2>
    <p>{text2}</p>
    </>
  );
};

export default SpecialHeading;
