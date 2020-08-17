
// action creator
export function updateTaskTitle(taksTitle) {
  return {
    type: "updateTaskTitle",
    payload: {
      taskTitle,
    },
  };
}
export function addTask() {
  const { newId } = state;
  return {
    type: "addTask",
  };
}

export function deleteTask(state, id) {
  const { taks } = state;
  return {
    type: "addTask",
    payload :{
      id
    }
}
