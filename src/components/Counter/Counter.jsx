import React from "react";
import { useState } from 'react';

export const Counter = ({ initialValue = 0, step = 1, setStep }) => {

  const [counter, setCounter] = useState(initialValue)
  
  const onIncrStepClick = () => {
    setStep(prevValue => prevValue + 1)
  }

  const onDecrStepClick = () => {
    setStep(prevValue => prevValue - 1)
  }

  const onIncrClick = () => {
    setCounter(prevValue => prevValue + step)
  }

  const onDecrClick = () => {
    setCounter(prevValue => prevValue - step)
  }

 

  return (
    <div>
        <button type="button" onClick={onIncrStepClick}>Increment step by 1</button>
        <button type="button" onClick={onDecrStepClick}>Decrement step by 1</button>

        <button type="button" onClick={onIncrClick}>Increment by {step}</button>
        <div>{counter}</div>
        <button type="button" onClick={onDecrClick}>Decrement by {step}</button>
    </div>
  );
}

