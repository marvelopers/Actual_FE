import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Page from "./Page";
import { updateTaskTitle, addTask, deleteTask } from "./actions";

function selector(state) {
  return {
    taskTitle: state.taskTitle,
    tasks: state.tasks,
  };
}

export default function App() {
  // store에서 필요한 값만 가져오는 역할
  const { taskTitle, tasks } = useSelector(selector);

  // 상태를 update하는 역할
  const dispach = useDispatch();
  function handelClickAddTask() {
    dispach(addTask());
  }
  function handelClickTitle(event) {
    dispach(updateTaskTitle(event.target.value));
  }
  function handleClickDeleteTask(id) {
    dispach(deleteTask(id));
  }

  return (
    <div>
      <Page
        taskTitle={taskTitle}
        onChange={handelClickTitle}
        tasks={tasks}
        onClickAddTask={handelClickAddTask}
        onClickDeleteTask={handleClickDeleteTask}
      />
    </div>
  );
}
