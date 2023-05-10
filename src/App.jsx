import { createRoot } from "react-dom/client";
import { useReducer } from "react";
import UsersReducer from "./UsersReducer";
import UserList from "./UserList";

const initialTasks = [
  { id: 0, text: "first User", done: true },
  { id: 1, text: "adadad", done: false },
  { id: 2, text: "adadas", done: false },
];

const App = () => {
  // const [tasks, dispatch] = useReducer(TasksReducer, initialTasks);
  const [users, dispatch] = useReducer(UsersReducer, initialTasks);

  function handleChangeTask(task) {
    dispatch({
      type: "changed",
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  }

  return (
    <div>
      <h1>Testing</h1>
      <UserList
        users={users}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
