"use client";

import EmptyData from "@/components/planPage/EmptyData";
import { FitContext } from "@/context/FitContext";
import React, { useContext, useState } from "react";
import PlanDataPage from "@/components/planPage/PlanDataPage";
import SavedDataPage from "@/components/planPage/SavedDataPage";
import { DataType } from "@/types/DataType";

const Plan = () => {
  const { plan, save } = useContext(FitContext);

  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  const currentData = activeTab === "plan" ? plan : save;

  const [sort, setSort] = useState<"duration" | "calories" | "rating">(
    "duration",
  );
  const sortFits = (currentData: DataType[]) => {
    const sortedFit = [...currentData];
    if (sort === "duration") {
      sortedFit.sort((a, b) => b.duration - a.duration);
    } else if (sort === "calories") {
      sortedFit.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    } else if (sort === "rating") {
      sortedFit.sort((a, b) => b.rating - a.rating);
    }
    return sortedFit;
  };
  const sortCurrData = sortFits(currentData);

  return (
    <div className="container mx-auto my-8">
      <div className=" text-center leading-10 md:text-left pl-4" id="jump">
        <h1 className="font-bold text-4xl">THE PLAN</h1>
        <p className="text-slate-400">
          Cap of five lifts for today. Finish them load more.
        </p>
      </div>
      <div className="flex flex-col md:flex-row bg-slate-900/20 max-[768px]:space-y-4 justify-around text-center border rounded-2xl border-slate-600 m-4 px-4 py-8">
        <div className="leading-8">
          <p className="text-gray-400">Excercises</p>
          <h1 className="font-bold text-5xl text-[#C2F800]">
            {currentData.length}
          </h1>
        </div>
        <div className="divide-x md:divide-y max-[768px]:h-px md:w-px bg-slate-600"></div>
        <div className="leading-8">
          <p className="text-gray-400">Minutes</p>
          <h1 className="font-bold text-5xl">
            {currentData.reduce((sum, curr) => sum + curr.duration, 0)}
          </h1>
        </div>
        <div className="divide-x md:divide-y max-[768px]:h-px md:w-px bg-slate-600"></div>
        <div className="leading-8">
          <p className="text-gray-400">Calories</p>
          <h1 className="font-bold text-5xl">
            {currentData.reduce((sum, curr) => sum + curr.caloriesBurned, 0)}
          </h1>
        </div>
      </div>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box rounded-xl m-2 flex">
        <input
          type="radio"
          name="my_tabs_6"
          className="tab rounded-2xl"
          aria-label={`Today's Plan (${plan.length})`}
          checked={activeTab === "plan"}
          onChange={() => setActiveTab("plan")}
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {plan.length === 0 ? (
            <EmptyData />
          ) : (
            sortCurrData.map((data) => (
              <PlanDataPage key={data.id} data={data} />
            ))
          )}
        </div>
        <input
          type="radio"
          name="my_tabs_6"
          className="tab rounded-xl"
          aria-label={`Saved (${save.length})`}
          checked={activeTab === "saved"}
          onChange={() => setActiveTab("saved")}
        />

        <div className="tab-content bg-base-100 border-base-300 p-6">
          {save.length === 0 ? (
            <EmptyData />
          ) : (
            sortCurrData.map((data) => (
              <SavedDataPage key={data.id} data={data} />
            ))
          )}
        </div>
        <div className="ml-auto md:pr-2 flex item-center gap-2 whitespace-nowrap">
          <span className="hidden text-xs font-medium text-slate-400 sm:text-sm md:inline-flex items-center">
            Sort :
          </span>
          <select
            value={sort}
            onChange={(e) =>
              setSort(e.target.value as "duration" | "calories" | "rating")
            }
            className="select"
          >
            <option value={"duration"}>Duration</option>
            <option value={"calories"}>Calories</option>
            <option value={"rating"}>Rating</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Plan;
