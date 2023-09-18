"use client";
import React from "react";

import { RiDeleteBin5Fill } from "react-icons/ri";

const RemoveBtn = ({ id }) => {
  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:3000/api/todo?id=${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      const data = res.json();
      console.log(data.message);
    }
  };

  return (
    <button onClick={() => handleDelete(id)}>
      <RiDeleteBin5Fill className="text-2xl mr-5" />
    </button>
  );
};

export default RemoveBtn;
