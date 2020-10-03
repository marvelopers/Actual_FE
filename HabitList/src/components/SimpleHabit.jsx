import React, { useState, useRef } from "react";
import { useCallback } from "react";
import { useEffect } from "react";

export const SimpleHabit = (props) => {
  const [count, setCount] = useState(0);
  const spanRef = useRef();
  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });

  useEffect(() => {
    console.log(`mounted & updated!: ${count}`)
  }, [count]);
  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">Reading</span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
      {/* <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
        <i className="fas fa-minus-square"></i>
      </button>
      <button className="habit-button habit-delete" onClick={this.handleDelete}>
        <i className="fas fa-trash"></i>
      </button> */}
    </li >
  );
}
