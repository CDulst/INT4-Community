import React from 'react';
import {observable,action,decorate,configure} from "mobx"

class ChallengeController  {
  constructor(root){
  this.root = root
  this.hashtags = [
  "#flowerAmsterdam"
  ];
  this.currentHashtag = this.hashtags[0];
}

changeCurrentHashtag(){

}

}
decorate(ChallengeController,{
hashtags: observable,
currentHashtag: observable,
changeCurrentHashtag: action
});

configure({enforceActions: 'observed'});

export default ChallengeController;