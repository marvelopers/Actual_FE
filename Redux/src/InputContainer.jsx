import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTaskTitle, addTask } from "./actions";
import Input from "./Input";

export default function InputContainer() {
  // store에서 필요한 값만 가져오는 역할
  const { taskTitle } = useSelector((state) => ({
    taskTitle: state.taskTitle,
  }));

  // 상태를 update하는 역할
  const dispach = useDispatch();
  function handelClickAddTask() {
    dispach(addTask());
  }
  function handelChageTitle(event) {
    dispach(updateTaskTitle(event.target.value));
  }

  return (
    <div>
      <Input
        taskTitle={taskTitle}
        onChange={handelChageTitle}
        onClick={handelClickAddTask}
      />
    </div>
  );
}
