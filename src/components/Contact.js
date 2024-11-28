import React from 'react';
import './Contact.css';
import { CiFacebook } from "react-icons/ci";
import SpecialHeading from './SpecialHeading';
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <div className='container'>
        <SpecialHeading 
          text="Contact" 
          text2="We are born to create"
        />
        <div className='info'>
         <p className='label'>Feel free to drop us a line at:</p>
         <a className='link' href='mailto:Leonagency@gmail.com?subject=Contact'> Leonagency@gmail.com</a>
         <div className='social'>
            Find Us On Social Networks
            <CiFacebook className='social-icon'/>
            <CiTwitter className='social-icon'/>
            <FaInstagram className='social-icon'/>

         </div>
        </div>
    </div>
    </div>

  )
}

export default Contact