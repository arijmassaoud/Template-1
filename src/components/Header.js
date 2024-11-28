import React from 'react';
import "./Header.css";
const Header = () => {
  return (
    <>
      <div className='header'>
        <div className='container'>
          <img className='logo' src='/images/logo.png' alt="Logo" />
          <div className='links'>
          <span className='icon'>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <ul>
            <li><a href="#services">services</a></li>
            <li><a href="#portfolio">portfolio</a></li>
            <li><a href="#about">about</a></li>
            <li><a href="#contact">contact</a></li>
          </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
