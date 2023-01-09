import React, { useState, useContext } from "react";
import CreateProject from "../components/CreateProject";
import { DataContext } from "../context/context";
// import { BsFilter } from "react-icons/bs";

const Project = () => {
  const { createProjectModal, dispatch } = useContext(DataContext);
  // const [modal, setModal] = useState(false);
  const handleModal = () => {
    dispatch({ type: "TOGGLE_CREATE_PROJECT_MODAL" });
  };
  return (
    <>
      <div className=" w-[80%] min-h-[100%] flex flex-col gap-[40px] p-8 pb-0 relative ml-[20%]">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-semibold cursor-pointer">Projects</h1>
          <div className="flex items-center">
            <button
              className="px-2 py-1 text-white bg-blue-800 rounded"
              onClick={handleModal}
            >
              Create Project
            </button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th className="py-2 text-left">Name</th>
              <th className="text-left">Key</th>
              <th className="text-left">Type</th>
              <th className="text-left">Lead</th>
              <th className="text-left"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-y">
              <td className="py-2">
                <a
                  className="text-blue-600 no-underline hover:underline"
                  href="/google.com"
                >
                  Physifit
                </a>
              </td>
              <td>PHYS</td>
              <td>Software</td>
              <td className="text-blue-600 ">Prince Kumar</td>
            </tr>
            <tr className="border-y">
              <td className="py-2">
                <a
                  className="text-blue-600 no-underline hover:underline"
                  href="/google.com"
                >
                  Newsapp
                </a>
              </td>
              <td>NEW</td>
              <td>Software</td>
              <td className="text-blue-600">Sagar Kumar</td>
            </tr>
          </tbody>
          {/* <tbody className="border-y">
              <tr>
                <td className="py-2">
                  <a
                    className="text-blue-600 no-underline hover:underline"
                    href="/google.com"
                  >
                    Newsapp
                  </a>
                </td>
                <td>NEW</td>
                <td>Software</td>
                <td className="text-blue-600">Sagar Kumar</td>
              </tr>
            </tbody> */}
        </table>
      </div>
      {createProjectModal && <CreateProject />}
    </>
  );
};

export default Project;
