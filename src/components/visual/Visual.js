import React from 'react';
import HealhyFlowers from "../../assets/HealhyFlowers.png"
import style from './Visual.module.css'
function Visual() {
  return (
  <div className = {style.wrapper}>
   <div className = {style.centerWrapper}>
  <div className = {style.wrapperSum}>
  <img class = {style.image} src = {HealhyFlowers}/>
  <p className = {style.Add}>+ €0.22</p>
  </div>
  </div>
  </div>
 
  );
}

export default Visual;
