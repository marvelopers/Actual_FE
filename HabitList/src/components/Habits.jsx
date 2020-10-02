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
  handleIncrement = (habit) => {
    // console.log(event);
    // 전체적인 state를 변경해줘야 한다.
    // this.setState({ count: this.state.count + 1 });
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits });
  }

  handleDecrement = (habit) => {
    // const count = this.state.count - 1;
    // this.setState({ count: count < 0 ? 0 : count });
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits });
  }

  handleDelete = (habit) => {
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({ habits });
  }

  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete} />
        ))}
      </ul>
    );
  }
}
