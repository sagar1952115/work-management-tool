import React, { useContext } from "react";
import { BiMessage } from "react-icons/bi";
import { DataContext } from "../context/context";
import { setCurrentTask, toggleModal } from "../context/DataActions";

function Card({ todo, provided }) {
  const { dispatch } = useContext(DataContext);
  const { title, description, src } = todo;
  return (
    <div
      className="w-[100%] p-3 flex flex-col gap-2 bg-white rounded-md"
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      onClick={() => {
        dispatch(setCurrentTask(todo));
        dispatch(toggleModal());
      }}
    >
      <h1 className="font-medium">{title}</h1>
      <p className="text-[12px] leading-4 font-light text-[ #6B6B6B] mb-2">
        {description}
      </p>
      <div className="flex justify-between items-center">
        <img src={src} alt="profile" className="w-6 h-6" />
        <div className="border-[#6B6B6B] border-l px-1">
          <BiMessage size={16} color={"#6B6B6B"} />
        </div>
      </div>
    </div>
  );
}

export default Card;
