import React from 'react';
import image from '../../assets/image.png'
import profile from '../../assets/profile.png'
import style from './MessageImage.module.css';
function MessageImage() {
  return (
    <>
  <h3>Message</h3>
  <div className = {style.wrapper}>
  <img className = {style.photo} src = {profile}/>
  <div>
  <p className = {style.hashtag}> #FlowerAmsterdam </p>
  <img  src = {image} alt = "aids"/>
  </div>
  </div>
  </>
  
  );
}

export default MessageImage;
