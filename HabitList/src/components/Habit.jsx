import React, { Component } from "react";

export class Habit extends Component {
  render() {
    return (
      <li className="habit">
        <span className="habit-name"></span>
        <span className="habit-count">8</span>
        <button className="habit-button habit-increase">
          <i className="fas fa-plus-square"></i>
        </button>
        <button className="habit-button habit-decrease">
          <i className="fas fa-minus-square"></i>
        </button>
        <button className="habit-button habit-delete">
          <i className="fas fa-trash-square"></i>
        </button>
      </li>
    );
  }
}
