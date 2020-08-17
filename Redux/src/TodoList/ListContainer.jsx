import React from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "./List";
import { deleteTask } from "./actions";

export default function ListContainer() {
  const { tasks } = useSelector((state) => ({
    tasks: state.tasks,
  }));

  const dispach = useDispatch();

  function handleClickDeleteTask(id) {
    dispach(deleteTask(id));
  }

  return (
    <div>
      <List tasks={tasks} onClickDelete={handleClickDeleteTask} />
    </div>
  );
}
