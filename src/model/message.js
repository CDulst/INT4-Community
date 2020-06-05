import React from 'react';
import {observable,action,decorate,configure} from "mobx"
import root from "../controllers"

import { v4 } from "uuid";

class Message {
  constructor({id = v4(),hashtag,type}){
    this.id = id;
    this.hashtag = hashtag;
    this.type = type;
    this.removeSelf();
  }
  removeSelf(){
    setTimeout(() => {
        root.messageController.unlinkMessage(this.id);
    }, 4000);

}

}



decorate(Message,{
id: observable,
hashtag: observable,
type: observable,
removeSelf: action,
});

configure({enforceActions: 'observed'});

export default Message;