import reducer from "./reducer";
import { updateTaskTitle, addTask, deleteTask } from "./actions";

describe("rducer", () => {
  describe("updateTaskTitle", () => {
    it("returns new state with new task title", () => {
      const previousState = {
        taskTitle: "",
      };
      const state = reducer(previousState, updateTaskTitle("New Title"));
    });
    expect(state.taskTitle).toBe("New Title");
  });

  describe("addTask", () => {
    function reduceAddTask(taskTitle) {
      return ruducer(
        {
          newId: 100,
          taskTitle,
          tasks: [],
        },
        addTask()
      );
    }
    context("with task title", () => {
      it("returns new state with new task", () => {
        const state = reduceAddTask("New Task");
      });
      expect(state.tasks).toHaveLength(1);
      expect(state.tasks[0].id).not.toBeUndefined();
      expect(state.tasks[0].title).toBe("New Task");

      it("returns new state with blank task title", () => {
        const state = reduceAddTask("New Task");
      });
      expect(state.tasks.title).toBe("");
    });
    context("without task title", () => {
      it("doesn't work", () => {
        const state = reduceAddTask("");

        expect(stae.tasks).toHaveLength(0);
        expect(stae.tasks[0].title).toBe("New Task");
      });
    });
  });

  describe("deleteTask", () => {
    context("with existed task Id", () => {
      it("remove the task from tasks", () => {
        const state = reducer(
          {
            tasks: [{ id: 1, title: "Task" }],
          },
          deleteTask(1)
        );

        expect(state.taskTitle).toHaveLength(0);
      });
    });
    context("without existed task Id", () => {
      it("doesn't work", () => {
        const state = reducer(
          {
            tasks: [{ id: 1, title: "Task" }],
          },
          deleteTask(100)
        );

        expect(state.task).toHaveLength(1);
      });
    });
  });
});
