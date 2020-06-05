import React from 'react';
import {observer,action,decorate,configure, observable} from "mobx"

class MessageController{
  constructor(root)
  {
  this.root = root;
  this.messages = [];
  this.postSpeed = "";
  }

  changePostSpeed(value) {

  }

  addMessage(){

  }

}
decorate(MessageController,{
messages: observable,
postSpeed: observable,
changePostSpeed: action,
addMessage: action
})

configure({enforceActions: 'observed'});

export default MessageController;