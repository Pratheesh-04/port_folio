import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout.js';
import Profile from './components/Profile.js';
import Projects from './components/Projects.js';
import Resume from './components/Resume.js';
import Contact from './components/Conatct.js'


function App() {
  return (
    <div class = "body">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Profile />} /> 
          <Route path="Resume" element={<Resume />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="Contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <div  class = "image" >
        <img src={logo}  alt="me"></img>
      </div>

      <div> 
        <u><i><h3>Education:</h3></i></u>

        <ul>
            <li>10th - Lotus Matric Higher Secondary School </li>
            <li>12th - Lotus Matric Higher Secondary School</li>
            <li>UG - Kumaraguru College of Technology </li>
        </ul>

        <u><i><h3>Skills:</h3></i></u>
        <ol type="i">
            <li>Python</li>
            <li>Machine Learning</li>
            <li>Data Science</li>
            <li>HTML</li>
            <li>CSS</li>
        </ol>

        <u><i><h3>Contact me:</h3></i></u>
        <ul>
            <li><a href="https://www.linkedin.com/in/pratheeshwaran-s-628ab0242" target="_blank">Linkedin</a></li>
            <li><a href="https://www.instagram.com/pratheeshwaran2004/" target="_blank">Instagram</a></li>
            <li><a href="https://github.com/Pratheesh-04" target="_blank">Github</a></li>
        </ul>
      </div> 

      <div class="grid-container" >
        <div class="grid-items">Project 1</div>
        <div class="grid-items">Project 2</div>
      </div>

      <div class="flex-container" >
        <div class="flex-items">Project 3</div>
        <div class="flex-items">Project 4</div>
      </div> */}
    
    </div>
    
        

  );
}

export default App;
