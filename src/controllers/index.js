import React from 'react';
import DonationController from "./DonationController";
import MessageController from "./MessageController";
import StylingController from './StylingController';
import {Howl, Howler} from 'howler';
import mp3 from "../sound/amsterdam.mp3"

import {observable,action,decorate,configure} from "mobx"

class Root {
  constructor(){
  this.donationController = new DonationController(this);
  this.messageController = new MessageController(this);
  this.stylingController = new StylingController();
  this.Sound = new Howl({
    src: mp3
})
  this.playSound();
  }

  playSound(){
    this.Sound.play();
  }
 
}

decorate(Root,{

})

configure({enforceActions: 'observed'});

const root = new Root();
export default root