import React from 'react';
import image from '../../assets/image.png'
import profile from '../../assets/profile.png'
function MessageImage() {
  return (
    <>
  <h3>Message</h3>
  <div>
  <img src = {profile}/>
  <div>
  <p> #FlowerAmsterdam </p>
  <img src = {image} alt = "aids"/>
  </div>
  </div>
  </>
  
  );
}

export default MessageImage;
