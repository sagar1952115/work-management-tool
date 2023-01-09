import React from "react";
import { useContext } from "react";
import { DataContext } from "../context/context";

const CreateProject = () => {
  const { dispatch } = useContext(DataContext);
  const handleModal = () => {
    dispatch({ type: "TOGGLE_CREATE_PROJECT_MODAL" });
  };
  return (
    <>
      <div className="absolute inset-0 z-40 flex items-center justify-center w-screen h-screen bg-gray-900/60 ">
        <div className="rounded-md relative w-[25rem] min-h-[30rem] bg-gray-100">
          <button
            className="absolute top-0 right-0 text-xl w-9 h-9"
            onClick={handleModal}
          >
            X
          </button>
          <div className="text-center flex min-h-[30rem] flex-col items-center justify-center">
            <h1 className="mt-3 mb-1  text-[2.5rem]">Create Project</h1>
            <div className="flex min-h-[15rem] m-1 flex-col items-center justify-center ">
              <input
                className="text-center outline-none rounded-md h-[2.5rem] m-3 bg-gray-300"
                placeholder="Name"
                type="text"
              />
              <input
                className="text-center outline-none rounded-md h-[2.5rem] m-3 bg-gray-300"
                placeholder="Key"
                type="text"
              />
              <input
                className="text-center outline-none rounded-md h-[2.5rem] m-3 bg-gray-300"
                placeholder="type"
                type="text"
              />
            </div>
            <button
              className="min-w-[30%] text-white rounded px-2 py-1 bg-blue-800 m-3"
              type="text"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateProject;
