import React from 'react';
import style from './Slider.module.css';
import root from '../../controllers'
import {useObserver} from 'mobx-react-lite';

function Slider() {

  const handleChangeinput = (e) => {
    root.messageController.changePostSpeed(e.currentTarget.value);
    root.donationController.changeToAddMoney(e.currentTarget.value);
    root.donationController.changeWaitTime(e.currentTarget.value);
    root.donationController.changeCountTime(e.currentTarget.value);
  }

  return useObserver(() => (
  <div>
  <div className = {style.nameWrapper}>
  <p className = {style.location}> Low </p>  
  <p className = {style.location}> Medium </p>
  <p className = {style.location}> Hight </p>
  </div>
  <input className = {style.slider}  type="range" min="0" max="450"  id="myRange" onChange= {e => handleChangeinput(e)}/>
  </div>
  ));
}

export default Slider;
