import React from "react";
import Input from "./Input";
import List from "./List";

export default function Page({
  taskTitle,
  tasks,
  onClickAddTask,
  onChange,
  onClickDeleteTask,
}) {
  return (
    <div>
      <h1>TODO</h1>
      <Input
        taskTitle={taskTitle}
        onChange={onChange}
        onClick={onClickAddTask}
      />
      <List tasks={tasks} onClickDelete={onClickDeleteTask} />
    </div>
  );
}
