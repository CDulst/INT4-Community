import React from 'react';


function Slider() {
  return (
  <div>
  <div>
  <p> Low </p>  
  <p> Medium </p>
  <p> Hight </p>
  </div>
  <input type="range" min="1" max="100"  id="myRange"/>
  </div>
  );
}

export default Slider;
