import React, { useState } from 'react';
import './Resume.css'
import image from './image.jpg'
import html5 from './html.png'
import css3 from './css.webp'
import js from './JavaScript.png'
import rjs from './react.png'
import py from './python.png'


const Resume=()=>{
    return(
        <div className = "res_main">
            <div className='resume1'>
                <b><i><p className="resume">My Resume </p></i></b>
            </div>

            <div className="about">
                <i><h2 id = "about_part">About Me</h2></i>
                <div  class = "image" >
                    <img src={image}  alt="me"></img>
                </div>

                <i>
                    <p className='me'>
                        Hello, I'm Pratheeshwaran S, an aspiring Artificial Intelligence and Data Science student at Kumaraguru College of Technology.
                    </p>
                    <p className='me'>
                        I am a dedicated engineering student who is interested in learning new stacks.
                        I am passionate about the areas of machine learning and data analysis.
                    </p>
                </i>

                <div className='res'>
                    <div className='education'>
                        <u><i><h3>Education:</h3></i></u>
                        <ul>
                            <i><li>10th - Lotus Matric Higher Secondary School </li></i>
                            <i><li>12th - Lotus Matric Higher Secondary School</li></i>
                            <i><li>UG - Kumaraguru College of Technology </li></i>
                        </ul>
                    </div> 
                    
                    <div className='hobbies'>
                        <u><i><h3>Hobbies:</h3></i></u>
                        <ol type="i">
                            <i><li>Reading Comics</li></i>
                            <i><li>Shuttle</li></i>
                            <i><li>Listening music</li></i>
                        </ol>
                    </div>
                </div>
                
                <i><h2 id = "skill">Skills</h2></i>
                <div className='skills'>
                    <div className='html'>
                        <img src={html5} alt='logo' className='ski_img'></img>
                        <b><i><p className='description'>HTML</p></i></b>
                    </div>

                    <div className='css'>
                        <img src={css3} alt='logo' className='ski_img'></img>
                        <b><i><p className='description'>CSS</p></i></b>
                    </div>

                    <div className='js'>
                        <img src={js} alt='logo' className='ski_img'></img>
                        <b><i><p className='description'>JAVASCRIPT</p></i></b>
                    </div>

                    <div className='react'>
                        <img src={rjs} alt='logo' className='ski_img'></img>
                        <b><i><p className='description'>REACTJS</p></i></b>
                    </div>

                    <div className='python'>
                        <img src={py} alt='logo' className='ski_img'></img>
                        <b><i><p className='description'>PYTHON</p></i></b>
                    </div>
                </div>                    
                
            </div>

        </div>
        
    )
};
export default Resume;