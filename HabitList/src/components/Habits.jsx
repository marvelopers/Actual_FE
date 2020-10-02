import React, { Component } from "react";
import { Habit } from "./Habit";

export class Habits extends Component {
  state = {
    habits: [
      { id: 1, name: 'A', count: 0 },
      { id: 2, name: 'B', count: 0 },
      { id: 3, name: 'C', count: 0 },
    ]
  }
  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (<Habit key={habit.id} habit={habit} />))}
      </ul>
    );
  }
}
