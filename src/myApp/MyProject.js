import React from 'react';
import "./styleMyProject.css";

import { NavLink } from 'react-router-dom';

const MyProject = (props) => {
  return (
    <>
    <div className='work-container'>
       
    <div className='project-container'>
        <div className='project-card'>
            <img src={props.imgsrc} alt="projects" />
            <h2 className='project-title'>{props.title}</h2>
            <div className='pro-details'>
                <p>{props.text}</p>
                <div className='pro-btns'>
                    <NavLink to={props.view} className="btn">View</NavLink>
                    <NavLink to="url.com" className="btn">Source</NavLink>

                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default MyProject
