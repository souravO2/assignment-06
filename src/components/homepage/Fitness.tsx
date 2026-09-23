import React from "react";
import DataCard from "./DataCard";
import { DataType } from "@/types/DataType";

const DataPromise = async () => {
  try {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    return res.json();
  } catch (error) {
    console.log("Error", error);
  }
};

const Fitness = async () => {
  const dataArray: DataType[] = await DataPromise();
  console.log(dataArray.length);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 my-8 items-center justify-center gap-8 container mx-auto">
      {dataArray.map((data) => (
        <DataCard key={data.id} data={data} />
      ))}
    </div>
  );
};

export default Fitness;
