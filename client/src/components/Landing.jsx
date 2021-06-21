import React from 'react';
//import Button from './Button.jsx'
import './Landing.css';
import { Link } from 'react-router-dom';

/* <div className='Login-component'></div> */
function Landing() {  
  return (        
    <div className="Landing"  >
        <link rel="stylesheet" href="Landing.css"></link>
        <img src={'C:/Users/jkaun/Desktop/PI-Food/PI-Food/client/src/components/comida5.jpg'} alt='Fondo de bienvenida'></img>
        <h1>Henry Food</h1>
        <h3>BIENVENIDOS A MI PI FOOD!</h3>
        
        <navLink>
          <button Link to='/home'>Home</button>
        </navLink>
    </div>    
  );
}

export default Landing;
