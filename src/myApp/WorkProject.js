import React from 'react';
import "./styleMyProject.css";
import MyProject from './MyProject';
import DataProject from './DataProject';



const WorkProject = () => {
  return (
    <>
    <div className='work-container'>
        <h1 className='project-heading'>Projects</h1>
    <div className='project-container'>
        {DataProject.map((val, ind)=>{
            return(
                <MyProject 
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}
                />
            )
        })}
    </div>
    </div>
    </>
  )
}

export default WorkProject
