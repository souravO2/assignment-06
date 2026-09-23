import { DataType } from "@/types/DataType";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegBookmark, FaRegCalendarAlt } from "react-icons/fa";

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
    (data: DataType) => Number(fitId) === data.id,
  ) as DataType;

  console.log(data);
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
        <div className="w-full overflow-hidden rounded-2xl border border-slate-800 bg-[#121621] p-2 shadow-xl">
          <table className="w-full border-collapse">
            <tbody className="divide-y divide-slate-800/60">
              <tr className="transition-colors hover:bg-slate-800/20">
                <td className="px-4 py-3.5 text-left text-xs font-bold tracking-wider text-slate-400 uppercase">
                  EQUIPMENT
                </td>
                <td className="px-4 py-3.5 text-right text-sm font-semibold text-slate-100">
                  {data.equipment}
                </td>
              </tr>
              <tr className="transition-colors hover:bg-slate-800/20">
                <td className="px-4 py-3.5 text-left text-xs font-bold tracking-wider text-slate-400 uppercase">
                  DIFFICULTY
                </td>
                <td className="px-4 py-3.5 text-right text-sm font-semibold text-slate-100">
                  {data.difficulty}
                </td>
              </tr>
              <tr className="transition-colors hover:bg-slate-800/20">
                <td className="px-4 py-3.5 text-left text-xs font-bold tracking-wider text-slate-400 uppercase">
                  SETS
                </td>
                <td className="px-4 py-3.5 text-right text-sm font-semibold text-slate-100">
                  {data.sets}
                </td>
              </tr>
              <tr className="transition-colors hover:bg-slate-800/20">
                <td className="px-4 py-3.5 text-left text-xs font-bold tracking-wider text-slate-400 uppercase">
                  REPS
                </td>
                <td className="px-4 py-3.5 text-right text-sm font-semibold text-slate-100">
                  {data.reps}
                </td>
              </tr>
              <tr className="transition-colors hover:bg-slate-800/20">
                <td className="px-4 py-3.5 text-left text-xs font-bold tracking-wider text-slate-400 uppercase">
                  DURATION
                </td>
                <td className="px-4 py-3.5 text-right text-sm font-semibold text-slate-100">
                  {data.duration}
                </td>
              </tr>
              <tr className="transition-colors hover:bg-slate-800/20">
                <td className="px-4 py-3.5 text-left text-xs font-bold tracking-wider text-slate-400 uppercase">
                  CALORIES
                </td>
                <td className="px-4 py-3.5 text-right text-sm font-semibold text-slate-100">
                  {data.caloriesBurned}
                </td>
              </tr>
              <tr className="transition-colors hover:bg-slate-800/20">
                <td className="px-4 py-3.5 text-left text-xs font-bold tracking-wider text-slate-400 uppercase">
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
          <Link href={""}>
            <button className="btn bg-[#C2F800] text-black rounded-xl shadow shadow-black">
              <FaRegCalendarAlt />
              Add to today&apos;s plan
            </button>
          </Link>
          <Link href={""}>
            <button className="btn text-white rounded-xl shadow shadow-white">
              <FaRegBookmark />
              Save for later
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetail;
