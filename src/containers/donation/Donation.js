import React from 'react';
import Visual from '../../components/visual/Visual';
import Counter from '../../components/counter/Counter';
import style from './Donation.module.css';
function Donation() {
  return (
  <>
  <div>
  <h2 className = {style.title}>Interaction Counter</h2>
  <Visual/>
  <Counter/>
  </div>
  </>
  )
}

export default Donation;
