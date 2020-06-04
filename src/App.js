import React from 'react';
import Donation from './containers/donation/Donation'
import Feed from './containers/feed/Feed'
import Footbar from './containers/footbar/Footbar'
import Challenge from './containers/challenge/Challenge'
import style from './App.module.css'
function App() {
  return (
  <>

  <h1 className = {style.hidden} >Community</h1>
  <div className = {style.wrapper}>
  <div>
  <Challenge/>
  <Donation/>
  </div>
  <Feed/>
  </div>
  <Footbar/>
  </>
  );
}

export default App;
