import React, { Component } from "react";
import { Habit } from "./Habit";
import { HabitAddFrom } from "./HabitAddFrom";

export class Habits extends Component {
  handleIncrement = (habit) => {
    this.props.onIncrement(habit);
  }

  handleDecrement = (habit) => {
    this.props.onDecrement(habit);
  }

  handleDelete = (habit) => {
    this.props.onDelete(habit);
  }
  handleAdd = (name) => {
    this.props.onAdd(name);
  }

  render() {
    return (
      <>
        <HabitAddFrom onAdd={this.handleAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete} />
          ))}
        </ul>
        <button className="habits-reset" onClick={this.props.onReset}>Reset All</button>
      </>
    );
  }
}
