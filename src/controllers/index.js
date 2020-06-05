import React from 'react';
import ChallengeController from "./ChallengeController";
import DonationController from "./DonationController";
import MessageController from "./MessageController";
import StylingController from './StylingController';
import 

{observable,action,decorate,configure} from "mobx"

class Root {
  constructor(){
  this.challengeController = new ChallengeController();
  this.donationController = new DonationController(this);
  this.messageController = new MessageController();
  this.stylingController = new StylingController();
  }
 
}

decorate(Root,{

})

configure({enforceActions: 'observed'});

const root = new Root();
export default root