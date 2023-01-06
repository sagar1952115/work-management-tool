import React, { useContext, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IoMdStats } from "react-icons/io";
import { AiOutlineFolderOpen, AiOutlineTeam } from "react-icons/ai";
import { BsChatDots, BsCalendarDate, BsSearch, BsFilter } from "react-icons/bs";
import { FiSettings, FiLogOut } from "react-icons/fi";
import DraggableContainer from "../components/DraggableContainer";
import LeftModal from "../components/LeftModal";
import { DataContext } from "../context/context";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { INITIAL_STATE } from "../context/context";
import Modal from "../components/Modal";

function Todos() {
  const navigate = useNavigate();
  const {
    currentTask,
    modalOpen,
    user: { username },
    dispatch,
    src,
  } = useContext(DataContext);

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
              <li className="flex items-center gap-3 hover:text-gray-600 cursor-pointer text-sm">
                <AiOutlineHome size={18} />
                OverView
              </li>
              <li className="flex items-center gap-3 hover:text-gray-600 cursor-pointer text-sm">
                <IoMdStats size={18} />
                Stats
              </li>
              <li className="flex items-center gap-3 hover:text-gray-600 cursor-pointer text-sm border-r-[3px] font-semibold text-black border-[#329C89]">
                <AiOutlineFolderOpen size={18} />
                Projects
              </li>
              <li className="flex items-center gap-3 hover:text-gray-600 cursor-pointer text-sm">
                <BsChatDots size={16} />
                Chats
              </li>
              <li className="flex items-center gap-3 hover:text-gray-600 cursor-pointer text-sm">
                <BsCalendarDate size={16} />
                Calendar
              </li>
              <li
                className="flex items-center gap-3 hover:text-gray-600 cursor-pointer text-sm font-medium text-black "
                onClick={handleModal}
              >
                <AiOutlineTeam size={16} />
                View Team
              </li>
            </ul>
            <ul className="  flex flex-col gap-5 mb-10 text-[#9A9A9A]">
              <li className="flex items-center gap-3 hover:text-gray-600 cursor-pointer text-sm">
                <FiSettings size={16} />
                Settings
              </li>
              <li
                className="flex items-center gap-3 hover:text-gray-600 cursor-pointer text-sm"
                onClick={handleLogOut}
              >
                <FiLogOut size={16} />
                Log out
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[80%] min-h-[100%] flex flex-col gap-[40px] p-8 pb-0 relative ml-[20%]">
          <div className="flex items-center w-[100%] justify-between">
            <div className="flex gap-4 w-[250px]  text-[#9A9A9A] items-center">
              <BsSearch size={16} />
              <input
                type="text"
                placeholder="Search"
                className="outline-none text-sm"
              />
            </div>
            <div className="relative flex">
              <img
                src="/assets/1.png"
                alt=""
                className="w-7 h-7 border border-gray-200 -ml-2 overflow-hidden bg-white rounded-full"
              />
              <img
                src="/assets/2.png"
                alt=""
                className="w-7 h-7 border border-gray-200 -ml-2 overflow-hidden bg-white rounded-full"
              />
              <img
                src="/assets/3.png"
                alt=""
                className="w-7 h-7 border border-gray-200 -ml-2 overflow-hidden bg-white rounded-full"
              />
              <img
                src="/assets/4.png"
                alt=""
                className="w-7 h-7 border border-gray-200 -ml-2 overflow-hidden bg-white rounded-full"
              />
              <img
                src="/assets/5.png"
                alt=""
                className="w-7 h-7 border border-gray-200 -ml-2 overflow-hidden bg-white rounded-full"
              />
              <img
                src="/assets/avatar.png"
                alt=""
                className="w-7 h-7 border border-gray-200 -ml-2 overflow-hidden bg-white rounded-full"
              />
            </div>
            <div className="flex gap-2 items-center">
              <p>Hi {username}</p>
              <img src={src} alt="avatar" className="w-10 h-10" />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-semibold  cursor-pointer">
                Projects
              </h1>
              <div className="flex items-center">
                <BsFilter />
                <span className="mr-2">Filter</span>
              </div>
            </div>
            <DraggableContainer />
          </div>
          <LeftModal task={currentTask} isOpen={modalOpen} />
        </div>
      </div>
      <Modal open={open} closeModal={handleModal} />
    </div>
  );
}

export default Todos;
