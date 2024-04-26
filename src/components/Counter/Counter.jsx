import React from "react";


export const Counter = ({ step = 1 }) => {
  
  return (
    <div>
        <span>0</span>
        <button type="button">Increment by {step}</button>
        <button type="button">Decrement by {step}</button>
    </div>
  );
}

