"use client";
import { useState } from "react";
import AllTask from "./AllTask";
import { useRouter } from "next/navigation";

const Tasklist = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [taskIdToEdit, setTaskIdToEdit] = useState(null);
  const handleSubmit = async () => {
    const res = await fetch("/api/todo", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    });

    if (res.ok) {
      const data = await res.json();
      setTitle("");
      setDescription("");
    }
  };

  const handleEdit = async (id, description, title) => {
    setTitle(title);
    setDescription(description);
    setIsEditing(true);
    setTaskIdToEdit(id);
  };

  const handleUpdate = async () => {
    if (isEditing) {
      const res = await fetch(`/api/todo/${taskIdToEdit}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },

        body: JSON.stringify({ title, description }),
      });
      if (res.ok) {
        setTitle("");
        setDescription("");
        setTaskIdToEdit(null);
        setIsEditing(false);
      }
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="  w-3/6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold mb-4">To-Do List</h1>
          <div className="flex space-x-2 mb-4">
            <input
              type="text"
              className="border border-gray-300 p-2 flex-grow"
              placeholder="Add a new task"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              className="border border-gray-300 p-2 flex-grow"
              placeholder="Add a new description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            {isEditing ? (
              <button
                onClick={handleUpdate}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Update
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Add
              </button>
            )}
          </div>
        </div>

        <AllTask handleEdit={handleEdit} />
      </div>
    </div>
  );
};

export default Tasklist;
