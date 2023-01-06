import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { DataContext } from "../context/context";
import { update_tasks } from "../context/DataActions";
import DragColumns from "./DragColumns";

function DraggableContainer() {
  const { tasks, dispatch, user, cached, src, ...Other } =
    useContext(DataContext);
  const [state, setState] = useState(tasks);
  const { todos, inProgress, completed } = state;

  useEffect(() => {
    setState(tasks);
  }, [tasks]);

  const handleDragEnd = async (results) => {
    const { source, destination } = results;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;
    let modifiedFrom = state[source.droppableId];
    let modifiedTo = state[destination.droppableId];
    const [removed] = modifiedFrom.splice(source.index, 1);
    modifiedTo.splice(destination.index, 0, removed);
    setState((prev) => ({
      ...prev,
      [source.droppableId]: modifiedFrom,
      [destination.droppableId]: modifiedTo,
    }));
    dispatch(update_tasks(state));
    if (source.droppableId !== destination.droppableId) {
      try {
        await axios.put(`/todo/${removed._id}`, {
          src: removed.src,
          description: removed.description,
          username: removed.username,
          title: removed.title,
          status: destination.droppableId,
        });
      } catch (e) {
        console.log(e);
      }
    }
  };

  const addTask = async (id, todo) => {
    try {
      const data = {
        src,
        username: user.username,
        status: id,
        ...todo,
      };
      const res = await axios.post("/todo", data);
      setState((prev) => ({
        ...prev,
        [id]: [...state[id], res.data],
      }));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (!cached) return;
    try {
      const data = {
        tasks: state,
        user,
        ...Other,
      };
      localStorage.setItem("data", JSON.stringify(data));
    } catch (e) {
      console.log(e);
    }
  }, [state, dispatch]);

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="mt-5 flex gap-6 ">
        <DragColumns
          todos={todos}
          title="To Dos"
          id="todos"
          addTask={addTask}
        />
        <DragColumns
          todos={inProgress}
          title="In Progress"
          id="inProgress"
          addTask={addTask}
        />
        <DragColumns
          todos={completed}
          title="Completed"
          id="completed"
          addTask={addTask}
        />
      </div>
    </DragDropContext>
  );
}

export default DraggableContainer;
