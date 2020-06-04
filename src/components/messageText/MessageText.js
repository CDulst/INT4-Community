import React from 'react';
import profile from '../../assets/profile.png';
import longbar from '../../assets/longbar.svg';
import shortbar from '../../assets/shortbar.svg';

function MessageText() {
  return (
  <div>
  <img src = {profile}/>
  <div>
  <img src = {longbar}/>
  <div>
  <img src = {shortbar}/>
  <p> #FlowerAmsterdam</p>
  </div>
  </div>
  </div>
  
  );
}

export default MessageText;
