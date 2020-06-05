import React from 'react';
import {observable,action,decorate,configure} from "mobx"

class DonationController {
  constructor(root){
  this.root = root;
  this.donationSum = 0;
  this.donationSumString = "00000000.10";
  this.waitTime = 800;
  this.countTime = 20;
  this.toAddMoney = 0.55;
  this.addedMoney = 0;
  this.counterEnabled = false;
  this.EnableCounter();
  }
  changeToAddMoney(value){

  }
  changeWaitTime(value){

  }
  changeCountTime(value){

  }

  EnableCounter(){
    this.addedMoney = 0;
    setTimeout(() => {
      this.root.stylingController.addDonation();
      this.counterEnabled = true;
      }, this.waitTime);
  }


  
  donationCounter(){
  if (this.counterEnabled){
  this.donationSum += 0.01;
  this.addedMoney += 0.01;
  console.log(this.donationSum);
  let str = this.donationSum.toFixed(2).toString();
  let before = this.donationSumString.substring(0, 10 - str.length);
  this.donationSumString = `${before}${str}`;
  if (this.addedMoney >= this.toAddMoney){
      this.counterEnabled = false;
      this.EnableCounter();
  }
  }
  }
  

  
}
decorate(DonationController,{
donationSum: observable,
countTime: observable,
donationSumString: observable,
countSpeed: observable,
toAddMoney: observable,
changeCountTime: action,
changeWaitTime: action,
changeToAddMoney: action,
donationCounter: action,
donationToString: action
})

configure({enforceActions: 'observed'});

export default DonationController;

