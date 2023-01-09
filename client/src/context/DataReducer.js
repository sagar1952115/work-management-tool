const DataReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        ...state,
        user: null,
        isFetching: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: null,
      };
    case "LOGIN_FAIL":
      return {
        ...state,
        user: null,
        isFetching: false,
        error: action.payload,
      };
    case "TOGGLE_MODAL":
      return {
        ...state,
        modalOpen: !state.modalOpen,
      };
    case "TOGGLE_CREATE_PROJECT_MODAL":
      return {
        ...state,
        createProjectModal: !state.createProjectModal
      };
    case "SET_CURRENT_TASK":
      return {
        ...state,
        currentTask: action.payload,
      };
    case "UPDATE_TASKS":
      return {
        ...state,
        tasks: action.payload,
      };
    case "TASK_EDIT":
      return taskEdit(state, action.payload);
    case "INIT":
      return action.payload;
    case "CACHE_TOGGLE":
      return {
        ...state,
        cached: !state.cached,
      };
    default:
      return state;
  }
};

const taskEdit = (state, task) => {
  const filtered = state.tasks[task.status].map((item) =>
    item._id === task._id ? task : item
  );

  return {
    ...state,
    tasks: {
      ...state.tasks,
      [task.status]: filtered,
    },
  };
};

export default DataReducer;
