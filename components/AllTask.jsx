"use client";
import React, { useState, useEffect } from "react";
import AllTaskList from "./AllTaskList";
import CompletedTask from "./CompletedTask";
import { useRouter } from "next/navigation";
const AllTask = ({ handleEdit }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getTopics = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/todo", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch topics");
        }
        const alldata = await res.json();
        setData(alldata.topics);
      } catch (error) {
        console.log("Error loading topics: ", error);
      }
    };
    getTopics();

    const intervalId = setInterval(() => {
      getTopics();
    }, 500);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="mt-8">
      <div className="flex space-x-4">
        <button
          onClick={() => setActiveTab(0)}
          className={`${
            activeTab === 0
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-600"
          } px-4 py-2 rounded-md focus:outline-none`}
        >
          All Task
        </button>
        <button
          onClick={() => setActiveTab(1)}
          className={`${
            activeTab === 1
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-600"
          } px-4 py-2 rounded-md focus:outline-none`}
        >
          Completed Task
        </button>
      </div>
      <div className="p-4 bg-white rounded-md mt-4">
        { activeTab === 0 && <AllTaskList task={ data } handleEdit={handleEdit } />}
        {activeTab === 1 && <CompletedTask />}
      </div>
    </div>
  );
};

export default AllTask;
