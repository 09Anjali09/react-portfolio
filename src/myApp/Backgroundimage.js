import React from 'react';
import "./styleBackgroundimage.css";
import BackImage from "../images/background-image.jpg";
import { Link } from 'react-router-dom';


const Backgroundimage = () => {
  return (
    <>
    <div className='hero'>
        <div className='mask'>
            <img className='into-img' src={BackImage} alt="" />
        </div>
        <div className='content'>
          <p>Hi, I am Developer</p>
          <h1>Frontend Web Developer. </h1>
        <div>
          <Link to="/project" className="btn">Projects</Link>
          <Link to="/contact" className="btn-light">contact</Link>

        </div>
        </div>
    </div>
    </>
  )
}

export default Backgroundimage
