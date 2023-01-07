import React, { useContext, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IoMdStats } from "react-icons/io";
import { AiOutlineFolderOpen, AiOutlineTeam } from "react-icons/ai";
import { BsChatDots, BsCalendarDate } from "react-icons/bs";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { DataContext } from "../context/context";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { INITIAL_STATE } from "../context/context";
import Modal from "../components/Modal";
import Project from "./Project";
// import TaskBoard from "../components/TaskBoard";

function Todos() {
  const navigate = useNavigate();
  const { dispatch } = useContext(DataContext);
  const [open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen((op) => !op);
  };
  const handleLogOut = () => {
    localStorage.clear();
    setTimeout(() => {
      dispatch({
        type: "INIT",
        payload: INITIAL_STATE,
      });
      toast.success("Logout Successfull", 500);
      navigate("/login", { replace: true });
    }, 1000);
  };

  return (
    <div className="h-[100vh] min-h-screen bg-white">
      <Toaster
        position="top-center"
        toastOptions={{
          success: {
            style: {
              background: "#329C89",
              color: "white",
            },
          },
        }}
      />
      <div className="w-[100%] h-[100%] relative">
        <div className="w-[20%]  h-screen flex flex-col gap-[50px] p-8 pr-0 border-r border-r-[#F0F0F0] fixed">
          <h1 className="text-xl font-medium cursor-pointer">.taskez</h1>
          <div className="h-[70vh] flex flex-col justify-between">
            <ul
              className="flex flex-col gap-5  text-[#9A9A9A]
"
            >
              <li className="flex items-center gap-3 text-sm cursor-pointer hover:text-gray-600">
                <AiOutlineHome size={18} />
                OverView
              </li>
              <li className="flex items-center gap-3 text-sm cursor-pointer hover:text-gray-600">
                <IoMdStats size={18} />
                Stats
              </li>
              <li className="flex items-center gap-3 hover:text-gray-600 cursor-pointer text-sm border-r-[3px] font-semibold text-black border-[#329C89]">
                <AiOutlineFolderOpen size={18} />
                Projects
              </li>
              <li className="flex items-center gap-3 text-sm cursor-pointer hover:text-gray-600">
                <BsChatDots size={16} />
                Chats
              </li>
              <li className="flex items-center gap-3 text-sm cursor-pointer hover:text-gray-600">
                <BsCalendarDate size={16} />
                Calendar
              </li>
              <li
                className="flex items-center gap-3 text-sm font-medium text-black cursor-pointer hover:text-gray-600 "
                onClick={handleModal}
              >
                <AiOutlineTeam size={16} />
                View Team
              </li>
            </ul>
            <ul className="  flex flex-col gap-5 mb-10 text-[#9A9A9A]">
              <li className="flex items-center gap-3 text-sm cursor-pointer hover:text-gray-600">
                <FiSettings size={16} />
                Settings
              </li>
              <li
                className="flex items-center gap-3 text-sm cursor-pointer hover:text-gray-600"
                onClick={handleLogOut}
              >
                <FiLogOut size={16} />
                Log out
              </li>
            </ul>
          </div>
        </div>
        <Project />
        {/* <TaskBoard /> */}
      </div>

      <Modal open={open} closeModal={handleModal} />
    </div>
  );
}

export default Todos;
