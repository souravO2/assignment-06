import { DataType } from "@/types/DataType";
import React from "react";

const DataPromise = async () => {
  try {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    return res.json();
  } catch (error) {
    console.log("Error", error);
  }
};

const WorkoutDetail = async ({
  params,
}: {
  params: Promise<{ fitId: string }>;
}) => {
  const { fitId } = await params;
  const dataArray = await DataPromise();
  const data = dataArray.find(
    (book: DataType) => Number(fitId) === book.id,
  ) as DataType;
  return <div></div>;
};

export default WorkoutDetail;
