import PlanButton from "@/components/fitdetails/PlanButton";
import SaveButton from "@/components/fitdetails/SaveButton";
import { DataType } from "@/types/DataType";
import Image from "next/image";
import { notFound } from "next/navigation";
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
    (item: DataType) => item.id === Number(fitId),
  ) as DataType;

  if (!data) {
    notFound();
  }

  return (
    <div className="container px-4 md:px-8 py-10 justify-between mx-auto flex flex-col lg:flex-row">
      <div className="flex flex-row items-center mx-auto w-auto max-w-5xl">
        <Image
          src={data.image}
          width={600}
          height={500}
          alt={data.description}
          className="h-72 w-full rounded-3xl object-cover sm:h-80 md:h-96 xl:h-112 2xl:h-160"
        />
      </div>
      <div className="flex flex-col mt-4 lg:mt-0 space-y-4 text-left">
        <h1 className="font-bold text-4xl text-center lg:text-left">
          {data.name.toUpperCase()}
        </h1>
        <p className="text-gray-400 text-center lg:text-left">
          {data.description}
        </p>
        <div className="mb-4 flex flex-wrap gap-2">
          {data.muscleGroups.map((tag, id) => (
            <span
              key={id}
              className="rounded-full bg-[#C2F800] px-3 py-1 text-xs font-semibold text-black"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="rounded-2xl border border-slate-800 bg-[#121621] p-2 shadow-xl">
          <table className="w-full border-collapse">
            <tbody className="divide-y divide-slate-800">
              <tr>
                <td className="px-4 py-3.5 text-left text-xs font-bold text-slate-400">
                  EQUIPMENT
                </td>
                <td className="px-4 py-3.5 text-right text-sm font-semibold text-slate-100">
                  {data.equipment}
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3.5 text-left text-xs font-bold text-slate-400">
                  DIFFICULTY
                </td>
                <td className="px-4 py-3.5 text-right text-sm font-semibold text-slate-100">
                  {data.difficulty}
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3.5 text-left text-xs font-bold text-slate-400">
                  SETS
                </td>
                <td className="px-4 py-3.5 text-right text-sm font-semibold text-slate-100">
                  {data.sets}
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3.5 text-left text-xs font-bold text-slate-400">
                  REPS
                </td>
                <td className="px-4 py-3.5 text-right text-sm font-semibold text-slate-100">
                  {data.reps}
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3.5 text-left text-xs font-bold text-slate-400">
                  DURATION
                </td>
                <td className="px-4 py-3.5 text-right text-sm font-semibold text-slate-100">
                  {data.duration}
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3.5 text-left text-xs font-bold text-slate-400">
                  CALORIES
                </td>
                <td className="px-4 py-3.5 text-right text-sm font-semibold text-slate-100">
                  {data.caloriesBurned}
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3.5 text-left text-xs font-bold text-slate-400">
                  RATING
                </td>
                <td className="px-4 py-3.5 text-right text-sm font-semibold text-slate-100">
                  {data.rating}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="leading-8">
          <span className="font-bold text-xl">INSTRUCTION</span>
          <ol className="list-decimal list-inside ">
            {data.instructions.map((d, id) => (
              <li key={id}>{d}</li>
            ))}
          </ol>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 items-center lg:items-start">
          <PlanButton data={data} />
          <SaveButton data={data} />
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetail;
