import React from "react";
import { LuClipboardEdit } from "react-icons/lu";
import { RiDeleteBin5Fill } from "react-icons/ri";

const CompletedTask = () => {
  return (
    <>
      <h2>All Complete task lists</h2>
      <div className="flex justify-between items-center bg-slate-300 py-5 px-4">
        <div>
          <h2 className="text-2xl capitalize">item 1</h2>
          <p>description</p>
        </div>
        <div>
          <button>
            <LuClipboardEdit className="text-2xl mr-5" />
          </button>
          <button>
            <RiDeleteBin5Fill className="text-2xl" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CompletedTask;
