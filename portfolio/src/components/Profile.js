import React, { useState } from 'react';
import './Profile.css'
// import App from './App';

// import './index.css';



const Profile = () => {
    const [show , setshow] = useState(false)
    function buttons1 () {
        setshow (!show)
    }
    return( 
    <div id='main'>
          <div className='profile'>
            <b><i><p id='profile'>Profile Page</p></i></b>
          </div>

          <div className='box'>
            <i><b><h1 className='heading1'>This web-site is built by using React !!</h1></b></i>
            <i><h2 className='name'>Pratheeshwaran S</h2></i>
            <b><i><p>Artificial Intelligence and Data Science</p></i></b>
            <div className='year'>
            {
                show && <div className='cur_year'>
                    <b><i><p >I am studying third year</p></i></b>
                </div>
            }
               <button type='button' onClick={buttons1} className='dis_year'>Year</button>
            </div>
          </div>
          
        
    </div> 
    );
}
  
  export default Profile;