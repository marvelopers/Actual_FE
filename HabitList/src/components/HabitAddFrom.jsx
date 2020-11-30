import React, { memo } from "react";

const HabitAddFrom = memo((Props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = event => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset();
  };
  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Typing your habit" />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddFrom;

// Class형 컴포넌트 
// import React, { PureComponent } from "react";

// export class HabitAddFrom extends PureComponent {
//   formRef = React.createRef();
//   inputRef = React.createRef();
//   onSubmit = event => {
//     event.preventDefault();
//     const name = this.inputRef.current.value;
//     name && this.props.onAdd(name);
//     // this.inputRef.current.value = '';
//     this.formRef.current.reset();
//   };
//   render() {
//     // REF

//     return (
//       <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
//         <input
//           ref={this.inputRef}
//           type="text"
//           className="add-input"
//           placeholder="Typing your habit" />
//         <button className="add-button">Add</button>
//       </form>
//     );
//   }
// }
