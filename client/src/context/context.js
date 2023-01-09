import React, { useEffect, useReducer, useState } from "react";
import DataReducer from "./DataReducer";
import { tasks } from "../data";

export const INITIAL_STATE = {
  user: "",
  isFetching: false,
  error: null,
  tasks: [],
  createProjectModal: false,
  modalOpen: false,
  currentTask: {},
  cached: true,
};

export const DataContext = React.createContext(INITIAL_STATE);

const randomizeSrc = () => {
  return `/assets/${Math.floor(Math.random() * (6 - 1 + 1) + 1)}.png`;
};
export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, INITIAL_STATE);
  const [src, setSrc] = useState("");
  const { user, isFetching, error, modalOpen,createProjectModal, currentTask, tasks, cached } =
    state;

  useEffect(() => {
    setSrc(randomizeSrc());
  }, []);
  return (
    <DataContext.Provider
      value={{
        user,
        isFetching,
        error,
        modalOpen,
        createProjectModal,
        tasks,
        currentTask,
        dispatch,
        src,
        cached,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
