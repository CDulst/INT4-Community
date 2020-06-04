import React from 'react';
import profile from '../../assets/profile.png';
import longbar from '../../assets/message/longbar.svg';
import shortbar from '../../assets/message/shortbar.svg';
import style from './MessageText.module.css';

function MessageText() {
  return (
  <div className = {style.wrapper}>
  <img src = {profile}/>
  <div>
  <img src = {longbar}/>
  <div class = {style.textWrapper}>
  <img src = {shortbar}/>
  <p class = {style.hashtag}> #FlowerAmsterdam</p>
  </div>
  </div>
  </div>
  
  );
}

export default MessageText;
