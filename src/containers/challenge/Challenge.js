import React from 'react';
import longbar from '../../assets/challenge/longbar.svg';
import shortbar from '../../assets/challenge/shortbar.svg';
import style from './Challenge.module.css'
function Challenge() {
  return (
  <>
  
  <div className = {style.background}>
  <div className = {style.wrapper}> 
  <div>
  <h2>Destination Challenge</h2>
  <div>
  <img className = {style.longbar} src = {longbar}/>
  <img className = {style.longbar} src = {longbar}/>
  </div>
  </div>
  <p className = {style.hashtag}> #FlowerAmsterdam </p>
  </div>
  </div>
  </>
  )
}

export default Challenge;
