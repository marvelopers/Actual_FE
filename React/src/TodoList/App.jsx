import React, { useState } from "react";
import Page from "./Page";

export default function App() {
  const [task, setTask] = useState({
    newId: 3,
    taskTitle: "",
    tasks: [{ id: 1, title: "매일매일 코딩하기" }],
  });

  function handelClickAddTask() {
    setTask({
      ...task,
      newId: newId + 1,
      taskTitle: "",
      tasks: [...tasks, { id: newId, title: taskTitle }],
    });
  }
  function handelClickTitle(event) {
    setTask({
      ...task,
      taskTitle: event.target.value,
    });
  }
  function handleClickDeleteTask(id) {
    setTask({
      ...task,
      tasks: task.filter((task) => task.id !== id),
    });
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
