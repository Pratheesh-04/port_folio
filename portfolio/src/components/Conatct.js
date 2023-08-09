import React, { useState } from 'react';
import './Contact.css'
import li from './linkedin.png'
import insta from './instagram.webp'
import git from './github.png'
import gmail from './gmail.png'
import wa from './whatsapp.png'

const Contact=() => {
    return(
        <div className='cont_main'>
            <div className='contact1'>
                <b><i><p className="contact">Contact me </p></i></b>
            </div>

            <div className='details'>
                <div className='linkedin'>
                    <img src={li} alt='linkedin'></img>
                    <i><a href="https://www.linkedin.com/in/pratheeshwaran-s-628ab0242" target="_blank">Linkedin</a></i>     
                </div>

                <div className='instagram'>
                    <img src={insta} alt='instagram'></img>
                    <i><a href="https://www.instagram.com/pratheeshwaran2004/" target="_blank">Instagram</a></i>    
                </div>

                <div className='github'>
                    <img src={git} alt='github'></img>
                    <i><a href="https://github.com/Pratheesh-04" target="_blank">Github</a></i>
                </div>

                <div className='g-mail'>
                    <img src={gmail} alt='gmail'></img>
                    <i><a href='#' target='_blank'>pratheeshwaran04@gmail.com</a></i>
                </div>

                <div className='no'>
                    <img src={wa} alt='whatsapp'></img>
                    <i><a href='#' target='_blank'>+91 8610682268</a></i>
                </div>
            </div>
        </div>
        
    )
};

export default Contact