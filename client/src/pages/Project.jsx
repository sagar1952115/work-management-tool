import React from "react";
// import { BsFilter } from "react-icons/bs";

const Project = () => {
  return (
    <>
      <div className="w-[80%] min-h-[100%] flex flex-col gap-[40px] p-8 pb-0 relative ml-[20%]">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-semibold cursor-pointer">Projects</h1>
          <div className="flex items-center">
            <button className="px-2 py-1 mr-1 bg-green-600 rounded text-slate-100">
              Join Project
            </button>
            <button className="px-2 py-1 bg-blue-800 rounded text-slate-100">
              Create Project
            </button>
          </div>
        </div>
        <table>
          <tr>
            <th className="py-2 text-left">Name</th>
            <th className="text-left">Key</th>
            <th className="text-left">Type</th>
            <th className="text-left">Lead</th>
            <th className="text-left"></th>
          </tr>
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
        </table>
      </div>
    </>
  );
};

export default Project;
