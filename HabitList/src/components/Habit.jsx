import React, { Component } from "react";

export class Habit extends Component {
  state = {
    count: 0,
  }

  handleIncrement = () => {
    // console.log(event);
    // 전체적인 state를 변경해줘야 한다.
    this.setState({ count: this.state.count + 1 });
  }

  handleDecrement = () => {
    const count = this.state.count - 1;
    this.setState({ count: count < 0 ? 0 : count });
  }

  render() {
    const { name, count } = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button className="habit-button habit-increase" onClick={this.handleIncrement}>
          <i className="fas fa-plus-square"></i>
        </button>
        <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
          <i className="fas fa-minus-square"></i>
        </button>
        <button className="habit-button habit-delete">
          <i className="fas fa-trash-square"></i>
        </button>
      </li>
    );
  }
}
