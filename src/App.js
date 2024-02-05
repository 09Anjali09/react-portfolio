import React from 'react';
import "./index.css";
import { Route, Routes } from 'react-router-dom';
import Home from './myApp/Home';
import Project from './myApp/Project';
import About from './myApp/About';
import Contact from './myApp/Contact';



const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/project' element={<Project/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App
