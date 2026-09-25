"use client";

import { FitContext } from "@/context/FitContext";
import { DataType } from "@/types/DataType";
import React, { useContext } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { toast } from "sonner";

const PlanButton = ({ data }: { data: DataType }) => {
  const { plan, setPlan } = useContext(FitContext);

  const handlePlantButton = (data: DataType) => {
    if (plan.some((item) => item.id === data.id)) {
      toast.error("Its already added.",{
        className : "!bg-red-400 !border-none"
      });
      return;
    }
    setPlan((prev) => [...prev, data]);
    toast.success(`Successfully added '${data.name}'`,{
      className : "!bg-green-400 !border-none"
    })
  };
  
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
