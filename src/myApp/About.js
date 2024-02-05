import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer';
import BackallImg from './BackallImg';
import AboutPage from './AboutPage';


const About = () => {
  return (
   <>
    <div>
     <Navbar/>
     <BackallImg heading="ABOUT." text="I'm Friendly Front-End Developer"/>
    <AboutPage/>
    <Footer/>
    </div>
   </>
  )
}

export default About
