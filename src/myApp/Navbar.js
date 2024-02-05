import React, { useState } from 'react';
import "./styleNavbar.css";
import { Link } from 'react-router-dom';

import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {

    const[click, setClick]=useState(false);
    const handleClick=()=> setClick(!click);

    const[color, setColor]= useState(false);
    const changeColor=()=>{
        if(window.scrollY >= .1){
            setColor(true);
        }
        else{
            setColor(false);
        }
    };
        window.addEventListener("scroll",changeColor);
  return (
   <>
   <div className={color ? "header header-bg" :"header"}>
    <Link to='/'>
        <h1>Portfolio</h1>
    </Link>

    <ul className={click ? "nav-menu active":"nav-menu"}>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/project'>Project</Link>
        </li>
        <li>
            <Link to='/about'>About</Link>
        </li>
        <li>
            <Link to="/contact">Contact Us</Link>
        </li>
    </ul>

    <div className='hamburger' onClick={handleClick}>
        {
            click ? (<IoCloseSharp size={20} style={{color:"white"}}/>)
            :
            (<GiHamburgerMenu size={20} style={{color:"white"}} />)
        }
    
    
    </div>

   </div>
   </>
  )
}

export default Navbar
