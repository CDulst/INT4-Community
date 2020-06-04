import React from 'react';
import style from './Slider.module.css';


function Slider() {
  return (
  <div>
  <div className = {style.nameWrapper}>
  <p className = {style.location}> Low </p>  
  <p className = {style.location}> Medium </p>
  <p className = {style.location}> Hight </p>
  </div>
  <input className = {style.slider} type="range" min="1" max="100"  id="myRange"/>
  </div>
  );
}

export default Slider;
