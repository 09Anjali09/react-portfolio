import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer';
import BackallImg from './BackallImg';
import PriceCard from './PriceCard';
// import MyProject from './MyProject';
import WorkProject from './WorkProject';


const Project = () => {
  return (
   <>
   <div>
    <Navbar/>
    <BackallImg heading="PROJECTS." text="Some of my recent Projects."/>
    
    <WorkProject/>
    <PriceCard/>

    <Footer/>
   </div>
   </>
  )
}

export default Project
