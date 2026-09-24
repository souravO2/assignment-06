"use client";

import { FitContext } from "@/context/FitContext";
import Link from "next/link";
import React, { useContext } from "react";

const ShowSave = () => {
  const { save } = useContext(FitContext);
  return (
    <Link href={"/Plan"} className="flex justify-center items-center">
      Saved&nbsp;
      <span className="w-5 h-5 outline rounded-full flex items-center justify-center">
        {save.length  }
      </span>
    </Link>
  );
};

export default ShowSave;
