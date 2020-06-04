import React from 'react';
import Slider from '../../components/slider/Slider';
import signal from '../../assets/signal.png';
import style from './Footbar.module.css'
function Footbar() {
  return (
  <>
  <div className = {style.wrapper}>
  <h2>Community involvement</h2>
  <Slider/>
  <div className = {style.signalWrapper}>.
  <img className = {style.signal} src = {signal}/>
  <p className = {style.para}>Live feed</p>
  </div>
  </div>
  </>
  )
}

export default Footbar;
