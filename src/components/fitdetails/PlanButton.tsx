"use client";

import { FitContext } from "@/context/FitContext";
import { DataType } from "@/types/DataType";
import React, { useContext } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

const PlanButton = ({ data }: { data: DataType }) => {
  const { plan, setPlan } = useContext(FitContext);

  const handlePlantButton = (data: DataType) => {
    if (plan.some((item) => item.id === data.id)) {
      alert("Its already added.");
      return;
    }
    setPlan((prev) => [...prev, data]);
  };
  console.log(plan);
  return (
    <button
      onClick={() => handlePlantButton(data)}
      className="btn bg-[#C2F800] text-black rounded-xl shadow shadow-black"
    >
      <FaRegCalendarAlt />
      Add to today&apos;s plan
    </button>
  );
};

export default PlanButton;
