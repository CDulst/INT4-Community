import React from 'react';
import Slider from '../../components/slider/Slider';
import signal from '../../assets/signal.png';
function Footbar() {
  return (
  <>
  <div>
  <h2>Community involvement</h2>
  <Slider/>
  <div>
  <img src = {signal}/>
  <p>Live feed</p>
  </div>
  </div>
  </>
  )
}

export default Footbar;
