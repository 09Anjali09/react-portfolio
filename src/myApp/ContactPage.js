import React from 'react';
import "./styleContactPage.css";

const ContactPage = () => {
  return (
   <>
   <div className='form'>
    <form action="">
        <label htmlFor="">Your Name</label>
        <input type="text" />

        <label htmlFor="">Your Name</label>
        <input type="text" />

        <label htmlFor="">Your Name</label>
        <input type="text" />

        <label htmlFor="">Your Name</label>
        <textarea placeholder='type your message here'/>
        <button className='btn'>SUMBIT</button>
    </form>
   </div>
   </>
  )
}

export default ContactPage
