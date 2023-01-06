import React, { useContext } from "react";
import { ImCross } from "react-icons/im";
import { DataContext } from "../context/context";

function Modal({ open, closeModal }) {
  const { user, src } = useContext(DataContext);
  if (!open) return null;
  return (
    <div className="h-screen z-40 w-screen absolute inset-0 bg-gray-900/60 flex justify-center items-center ">
      <div className="h-[420px] w-[300px] bg-white rounded-lg p-5 relative">
        <span
          className="absolute right-5 top-7 cursor-pointer"
          onClick={closeModal}
        >
          <ImCross color="gray" size={10} />
        </span>
        <div className="mb-5">
          <h1 className="font-semibold text-lg">Project Members</h1>
          <div className="w-5 h-1 bg-green-600 "></div>
        </div>
        <ul className="flex flex-col gap-4">
          <li className="flex gap-2 w-[100%] items-center">
            <img src={src} alt="" className="h-10 w-10" />
            <div>
              <p className="font-semibold text-[11px]">{user.username} </p>
              <p className="text-[10px] text-gray-300 font-light">
                {user.email}
              </p>
            </div>
          </li>
          <li className="flex gap-2 w-[100%] items-center">
            <img src="/assets/6.png" alt="" className="h-10 w-10" />
            <div>
              <p className="font-semibold text-[11px]">Saundarya </p>
              <p className="text-[10px] text-gray-300 font-light">
                saundarya@idc.com
              </p>
            </div>
          </li>
          <li className="flex gap-2 w-[100%] items-center">
            <img src="/assets/1.png" alt="" className="h-10 w-10" />
            <div>
              <p className="font-semibold text-[11px]">Vaibhav </p>
              <p className="text-[10px] text-gray-300 font-light">
                vaibhav@idc.com
              </p>
            </div>
          </li>
          <li className="flex gap-2 w-[100%] items-center">
            <img src="/assets/2.png" alt="" className="h-10 w-10" />
            <div>
              <p className="font-semibold text-[11px]">Sudhanshu </p>
              <p className="text-[10px] text-gray-300 font-light">
                sudhanshu@idc.com
              </p>
            </div>
          </li>
          <li className="flex gap-2 w-[100%] items-center">
            <img src="/assets/3.png" alt="" className="h-10 w-10" />
            <div>
              <p className="font-semibold text-[11px]">Shruti </p>
              <p className="text-[10px] text-gray-300 font-light">
                shruti@idc.com
              </p>
            </div>
          </li>
          <li className="flex gap-2 w-[100%] items-center">
            <img src="/assets/4.png" alt="" className="h-10 w-10" />
            <div>
              <p className="font-semibold text-[11px]">Himanshu </p>
              <p className="text-[10px] text-gray-300 font-light">
                himanshu@idc.com
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Modal;
