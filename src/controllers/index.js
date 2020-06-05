import React from 'react';
import DonationController from "./DonationController";
import MessageController from "./MessageController";
import StylingController from './StylingController';
import 

{observable,action,decorate,configure} from "mobx"

class Root {
  constructor(){
  this.donationController = new DonationController(this);
  this.messageController = new MessageController(this);
  this.stylingController = new StylingController();
  }
 
}

decorate(Root,{

})

configure({enforceActions: 'observed'});

const root = new Root();
export default root