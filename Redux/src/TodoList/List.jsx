import React from "react";
import Item from "./Item";
import ListContainer from "./ListContainer";
import InputContainer from "./InputContainer";

export default function List({ tasks, onClickDelete }) {
  return (
    <ol>
      {tasks.map((task) => {
        <Item key={task.id} task={task} onClick={onClickDelete} />;
      })}
    </ol>
  );
}
