"use client";

import { FitContext } from "@/context/FitContext";
import { DataType } from "@/types/DataType";
import React, { useContext } from "react";
import { FaRegBookmark } from "react-icons/fa";

const SaveButton = ({ data }: { data: DataType }) => {
  const { save, setSave } = useContext(FitContext);

  const handleSaveButton = (data: DataType) => {
    if (save.some((item) => item.id === data.id)) {
      alert("Its already added.");
      return;
    }
    setSave((prev) => [...prev, data]);
  };
  console.log(save);
  return (
    <button
      onClick={() => handleSaveButton(data)}
      className="btn text-white rounded-xl shadow shadow-white"
    >
      <FaRegBookmark />
      Save for later
    </button>
  );
};

export default SaveButton;
