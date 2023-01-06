export const LoginStart = () => ({
  type: "LOGIN_START",
});
export const LoginSuccess = (user) => ({
  type: "LOGIN_START",
  payload: user,
});
export const LoginFail = (error) => ({
  type: "LOGIN_FAILURE",
  payload: error,
});

export const toggleModal = () => ({
  type: "TOGGLE_MODAL",
});

export const setCurrentTask = (task) => ({
  type: "SET_CURRENT_TASK",
  payload: task,
});

export const update_tasks = (tasks) => ({
  type: "UPDATE_TASKS",
  payload: tasks,
});
