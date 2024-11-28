import React from 'react'
import SpecialHeading from './SpecialHeading';
import { FaPalette,FaSketch,FaVectorSquare,FaPencilRuler } from "react-icons/fa";
import './Services.css';
import image from './OIP.jpg';
const Services = () => {
  return (
    <>
    
    <div className='services' id='services'>
     <div className='container'>
     <SpecialHeading text="Services" text2="Don't be busy ,be productive"/>
      <div className="services-content">
        <div className='col'>
          <div className='serv'>
          <FaPalette className='i' />
          <div className='text'>
            <h3>Graphic Designer</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.</p>
          </div>
          </div>
          <div className='serv'>
            <FaSketch className='i'/>
            <div className='text'>
            <h3> Ui/Ux</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.</p>
          </div>
          </div>
          </div>
          <div className='col'>
          <div className='serv'>
            <FaVectorSquare className='i'/>
            <div className='text'>
            <h3>Web Designer</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.</p>
          </div>
          </div>
          <div className='serv'>
            <FaPencilRuler className='i'/>
            <div className='text'>
            <h3>Web development</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.</p>
          </div>
        </div>
        </div>
        <div className='col'>
          <div className='images image-column'>
           <img src={image}  alt=''/></div>
        </div>
    </div>
     </div>
    </div>
    </>
  )
}

export default Services