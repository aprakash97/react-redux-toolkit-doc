const UsersReducer = (users, action) => {
  switch (action.type) {
    case "changed": {
      return users.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return users.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

export default UsersReducer;
