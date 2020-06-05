import React from 'react';
import root from '../../controllers/index'
import MessageImage from '../../components/messageImage/MessageImage'
import MessageText from '../../components/messageText/MessageText'
import style from './Feed.module.css';
import {useObserver} from 'mobx-react-lite';
import {useEffect,useState} from "react";
import { autorun } from 'mobx';
function Feed() {

  const [Launched,setLaunched] = useState(false);
  useEffect (() => autorun(() => {
    if (!Launched){
      repeater();
    }
    setLaunched(true);
  }));
  
  
  
  const repeater =  () => {
    setTimeout(() => {
      root.messageController.addMessage();
      repeater();
    }, root.messageController.postSpeed);
  }

  return useObserver(() => (
  <>
  <div class = {style.wrapper}>
  <h2 class = {style.hidden}>Live Feed</h2>
  {
    root.messageController.messages.map(message =>(
      <>
      {(message.type === 0 ?
      <MessageImage/>
      :
      <MessageText/> 
      )}
      </>
    ))
  }
  
  </div>
  </>
  ));
}

export default Feed;
