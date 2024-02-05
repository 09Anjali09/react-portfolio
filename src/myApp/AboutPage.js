import React from 'react';
import "./styleAboutPage.css";
import { Link } from 'react-router-dom';

import about1 from "../images/about1.jpg"
import about2 from "../images/about2.jpg"


const AboutPage = () => {
  return (
  <>
  <div className='about'>
    <div className='left'>
        <h1>Who Am I ?</h1>
        <p>I am React front-end Developer. Icreate responsive secure website for My Clients.</p>
    <Link to="/contact">
        <button className='btn'>Contact</button>
    </Link>
    </div>


    <div className='right'>
        <div className='img-container'>
            <div className='img-stack bottom'>
                <img src={about1} alt="" className='img'/>
            </div>

            <div className='img-stack top'>
                <img src={about2} alt="" className='img'/>
            </div>
        </div>
    </div>
  </div>
  </>
  )
}

export default AboutPage
