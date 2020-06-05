import React from 'react';
import {observer,action,decorate,configure, observable} from "mobx"
import Message from "../model/message"
class MessageController{
  constructor(root)
  {
  this.root = root;
  this.messages = [];
  this.postSpeed = 1000;
  this.addMessage();
  }

  changePostSpeed(value) {
  this.postSpeed = 800 - value * 1.5 ;
  }

  addMessage(){
  let randomNumber = Math.floor(Math.random() * 2);  
  let currentHashtag = "#FlowerAmsterdam";
  let message = new Message ({hashtag:currentHashtag,type:randomNumber})
  console.log(message);
  this.messages.unshift(message);
  }

  unlinkMessage(id){
  const index = this.messages.findIndex(message => message.id === id);
  this.messages.splice(index, 1);
  }

}
decorate(MessageController,{
messages: observable,
postSpeed: observable,
changePostSpeed: action,
addMessage: action,
unlinkMessage: action
})

configure({enforceActions: 'observed'});

export default MessageController;