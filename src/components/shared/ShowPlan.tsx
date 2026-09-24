"use client";

import { FitContext } from "@/context/FitContext";
import Link from "next/link";
import React, { useContext } from "react";

const ShowPlan = () => {
  const { plan } = useContext(FitContext);
  return (
    <Link href={"/Plan"} className="flex justify-center items-center">
      Plan&nbsp;
      <span className="w-6 h-6 bg-[#C2F800] text-black rounded-full flex items-center justify-center ">
        {plan.length}
      </span>
    </Link>
  );
};

export default ShowPlan;
