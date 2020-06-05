import React from 'react';
import style from './Counter.module.css'
import root from '../../controllers/index'
import {useObserver} from 'mobx-react-lite';
import {useEffect,useState} from "react";
import { autorun } from 'mobx';
const donationController = root.donationController;




function Counter() {

  const [Launched,setLaunched] = useState(false);
  useEffect (() => autorun(() => {
    if (!Launched){
      repeater();
    }
    setLaunched(true);
  }));
  
  
  
  const repeater =  () => {
    setTimeout(() => {
      donationController.donationCounter();
      repeater();
    }, root.donationController.countTime);
  }
  return useObserver(() => (
  <>
  <h3 className = {style.hidden}>Counter</h3>
  <div className = {style.counter_wrapper}>
  <p className = {style.counter_number}> €{root.donationController.donationSumString} </p>
  </div>
  </>
  ));
}

export default Counter;
