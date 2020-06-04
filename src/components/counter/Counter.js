import React from 'react';
import style from './Counter.module.css'
function Counter() {
  return (
  <>
  <h3 className = {style.hidden}>Counter</h3>
  <div className = {style.counter_wrapper}>
  <p className = {style.counter_number}> €9000000.00 </p>
  </div>
  </>
  );
}

export default Counter;
