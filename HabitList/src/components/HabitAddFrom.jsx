import React, { Component } from "react";

export class HabitAddFrom extends Component {
  formRef = React.createRef();
  inputRef = React.createRef();
  onSubmit = event => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    // this.inputRef.current.value = '';
    this.formRef.current.reset();
  };
  render() {
    // REF

    return (
      <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="Typing your habit" />
        <button className="add-button">Add</button>
      </form>
    );
  }
}
