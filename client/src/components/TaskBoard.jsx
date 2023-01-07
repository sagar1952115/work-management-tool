import React, { useContext } from "react";
import DraggableContainer from "../components/DraggableContainer";
import { BsSearch, BsFilter } from "react-icons/bs";
import LeftModal from "../components/LeftModal";
import { DataContext } from "../context/context";

const TaskBoard = () => {
  const {
    currentTask,
    modalOpen,
    user: { username },
    src,
  } = useContext(DataContext);
  return (
    <div className="w-[80%] min-h-[100%] flex flex-col gap-[40px] p-8 pb-0 relative ml-[20%]">
      <div className="flex items-center w-[100%] justify-between">
        <div className="flex gap-4 w-[250px]  text-[#9A9A9A] items-center">
          <BsSearch size={16} />
          <input
            type="text"
            placeholder="Search"
            className="text-sm outline-none"
          />
        </div>
        <div className="relative flex">
          <img
            src="/assets/1.png"
            alt=""
            className="-ml-2 overflow-hidden bg-white border border-gray-200 rounded-full w-7 h-7"
          />
          <img
            src="/assets/2.png"
            alt=""
            className="-ml-2 overflow-hidden bg-white border border-gray-200 rounded-full w-7 h-7"
          />
          <img
            src="/assets/3.png"
            alt=""
            className="-ml-2 overflow-hidden bg-white border border-gray-200 rounded-full w-7 h-7"
          />
          <img
            src="/assets/4.png"
            alt=""
            className="-ml-2 overflow-hidden bg-white border border-gray-200 rounded-full w-7 h-7"
          />
          <img
            src="/assets/5.png"
            alt=""
            className="-ml-2 overflow-hidden bg-white border border-gray-200 rounded-full w-7 h-7"
          />
          <img
            src="/assets/avatar.png"
            alt=""
            className="-ml-2 overflow-hidden bg-white border border-gray-200 rounded-full w-7 h-7"
          />
        </div>
        <div className="flex items-center gap-2">
          <p>Hi {username}</p>
          <img src={src} alt="avatar" className="w-10 h-10" />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold cursor-pointer">Projects</h1>
          <div className="flex items-center">
            <BsFilter />
            <span className="mr-2">Filter</span>
          </div>
        </div>
        <DraggableContainer />
      </div>
      <LeftModal task={currentTask} isOpen={modalOpen} />
    </div>
  );
};

export default TaskBoard;
