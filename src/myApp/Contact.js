import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer';
import BackallImg from './BackallImg';
import ContactPage from './ContactPage';


const Contact = () => {
  return (
   <>
   <div>
    <Navbar/>
    <BackallImg heading="CONTACT." text="Lets chat."/>
   <ContactPage/>
    <Footer/>
   </div>
   </>
  )
}

export default Contact
