import React from 'react';
//import Button from './Button.jsx'

import './Home.css';

function home() {
  return (
    <div className="Home">
      <h1>Las mejores recetas</h1>
      
      <button >Encuentra tu receta</button> 
      <button Link to='/'>Volver a Landing</button>
      <button Link to='/makeYourMeal'>Make Your Own Meal</button>
    </div>
  );
}

export default home;
