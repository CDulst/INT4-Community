import React from 'react';
import {observable,action,decorate,configure} from "mobx"

class StylingController  {
  constructor (){
    this.DonationAdd = false;
  }

  addDonation(){
    console.log("hello");
    this.addTrue();
    setTimeout(() => {
      this.addFalse();
      }, 1000);
  }

  addTrue(){
  this.DonationAdd = true;
  }

  addFalse(){
  this.DonationAdd = false;
  }
  

}

decorate(StylingController,{
DonationAdd: observable,
addDonation: action,
addTrue: action,
addFalse: action
});



export default StylingController;