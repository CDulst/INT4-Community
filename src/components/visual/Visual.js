import React from 'react';
import HealhyFlowers from "../../assets/HealhyFlowers.png"
import style from './Visual.module.css'
import root from '../../controllers'
import {useObserver} from 'mobx-react-lite';
function Visual() {
  return useObserver(() => (
  <div className = {style.wrapper}>
   <div className = {style.centerWrapper}>
  <div className = {style.wrapperSum}>
  <img class = {style.image} src = {HealhyFlowers}/>
  {
 
  }
  <p className = {(root.stylingController.DonationAdd ? `${style.Add} ${style.AddOut}` : `${style.Add} ${style.Addin}` )}>€{root.donationController.toAddMoney}</p>
  </div>
  </div>
  </div>
 
  ));
}

export default Visual;
