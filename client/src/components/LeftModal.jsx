import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/context";
import { toggleModal } from "../context/DataActions";

function LeftModal() {
  const { currentTask, dispatch, modalOpen, createProjectModal } =
    useContext(DataContext);
  const { title, description = "", src, username } = currentTask;

  const [value, setValue] = useState(description);
  useEffect(() => {
    setValue(description);
  }, [currentTask]);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onEdit = async () => {
    if (value === "") return;
    const newTask = {
      ...currentTask,
      description: value,
    };
    try {
      await axios.put(`/todo/${newTask._id}`, {
        src: newTask.src,
        description: newTask.description,
        username: newTask.username,
        title: newTask.title,
        status: newTask.status,
      });
      dispatch({ type: "TASK_EDIT", payload: newTask });
      dispatch(toggleModal());
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div
      className={`${createProjectModal ? "blur-[2px]" : ""}  ${
        modalOpen ? "flex translate-x-0" : "hidden translate-x-7"
      } bg-white absolute right-0 top-[150px] h-[80%] p-4 shadow-lg  w-[60%] z-20 flex-col `}
    >
      <div className="mb-4">
        <h1 className="font-semibold">{title}</h1>
        <div className="my-2 w-7 h-1 px-1 bg-[#329C89]"></div>
      </div>
      <form className="flex flex-col gap-5 text-[13px] ">
        <div className="flex items-center">
          <span className="text-[#6B6B6B] w-[20%]">Created By</span>
          <div className="w-[80%] flex items-center gap-3">
            <img src={src} alt="" className="w-6 h-6" />
            <p>{username}</p>
          </div>
        </div>
        <div className="flex items-center">
          <span className="text-[#6B6B6B] w-[20%]">Description</span>
          <input
            type="text"
            placeholder={description}
            value={value}
            className="w-[80%] font-light text-[11px] py-2 outline-none focus:outline-none"
            onChange={onChange}
          />
        </div>
      </form>
      <div className="flex gap-3">
        <button
          className="p-2  my-10  w-[100px] px-3 text-sm text-white bg-green-700 rounded-sm"
          onClick={onEdit}
        >
          Edit
        </button>
        <button
          className="p-2  my-10  w-[100px] px-3 text-sm text-white bg-green-700 rounded-sm"
          onClick={() => dispatch(toggleModal())}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default LeftModal;
