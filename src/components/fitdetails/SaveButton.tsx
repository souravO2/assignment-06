"use client";

import { FitContext } from "@/context/FitContext";
import { DataType } from "@/types/DataType";
import React, { useContext } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { toast } from "sonner";

const SaveButton = ({ data }: { data: DataType }) => {
  const { save, setSave } = useContext(FitContext);

  const handleSaveButton = (data: DataType) => {
    if (save.some((item) => item.id === data.id)) {
      toast.error("It's already added.", {
        className: "!bg-red-400 !border-none",
      });
      return;
    }
    setSave((prev) => [...prev, data]);
    toast.success(`Successfully saved '${data.name}'`, {
      className: "!bg-green-400 !border-none",
    });
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
