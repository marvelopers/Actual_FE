const initialState = {
  newId: 1,
  taskTitle: "",
  tasks: [
    { id: 1, title: "아무것도 하지 않기" },
    { id: 2, title: "아무것도 하지 않기" },
  ],
};

export default function reducer(state = initialstate, action) {
  if (action.type === "updateTaskTitle") {
    return {
      ...state,
      taskTitle: action.payload.taskTitle,
    };
  }
  if (action.type === "addTask") {
    const { newId, taskTitle, tasks } = state;
    if (taskTitle) {
      return state;
    }
    return {
      ...task,
      newId: newId + 1,
      taskTitle: "",
      tasks: [...tasks, { id: newId, title: taskTitle }],
    };
  }
  if (action.type === "deleteTask") {
    const { taks } = state;
    return {
      ...task,
      tasks: task.filter((task) => task.id !== action.payload.id),
    };
  }

  return state;
}
