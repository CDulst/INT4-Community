import React from 'react';
import MessageImage from '../../components/messageImage/MessageImage'
import MessageText from '../../components/messageText/MessageText'
import style from './Feed.module.css';
function Feed() {
  return (
  <>
  <div class = {style.wrapper}>
  <h2 class = {style.hidden}>Live Feed</h2>
  <MessageImage/>
  <MessageText/>
  <MessageText/>
  <MessageText/>
  <MessageText/>
  </div>
  </>
  )
}

export default Feed;
