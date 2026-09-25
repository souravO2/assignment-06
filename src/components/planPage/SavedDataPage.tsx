import { FitContext } from "@/context/FitContext";
import { DataType } from "@/types/DataType";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { FaFire, FaRegStar } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { IoTimeOutline } from "react-icons/io5";
import { toast } from "sonner";

const SavedDataPage = ({ data }: { data: DataType }) => {
  const { setSave } = useContext(FitContext);
  const handleDeleteBtn = (item: DataType) => {
    setSave((data) => data.filter((data) => data.id !== item.id));
    toast.success(`'${item.name}' has been deleted.`, {
      className: "!bg-red-400 !border-none",
    });
  };

  return (
    <div className="relative my-4 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-md shadow-xl transition-all duration-300 hover:border-slate-700/60 flex flex-col md:flex-row md:items-center md:justify-between">
      
      {/* Floating Delete Button for Mobile (Top-Right of Image) */}
      <button
        onClick={() => handleDeleteBtn(data)}
        aria-label="Delete saved item"
        className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-slate-950/60 text-slate-400 backdrop-blur-md transition-all active:scale-95 hover:bg-red-500/20 hover:text-red-400 md:hidden"
      >
        <ImCross className="h-3.5 w-3.5" />
      </button>

      {/* Image + Main Details */}
      <div className="flex flex-col min-w-0 md:flex-row md:items-center">
        {/* Banner Image for Mobile / Square Thumb for Desktop */}
        <div className="relative shrink-0 w-full md:w-auto md:p-3">
          <div className="relative h-56 w-full md:h-36 md:w-36 overflow-hidden md:rounded-2xl">
            <Image
              src={data.image}
              fill
              sizes="(max-width: 768px) 100vw, 144px"
              alt={data.description || data.name}
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
            {/* Subtle overlay gradient on mobile bottom for text contrast */}
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent md:hidden" />
          </div>
        </div>

        {/* Info Section */}
        <div className="min-w-0 p-4 md:p-2 space-y-3">
          <div>
            <h1 className="truncate text-xl font-black tracking-wide text-white uppercase md:text-2xl">
              {data.name}
            </h1>
            <p className="truncate text-xs font-medium tracking-wide text-slate-400 mt-0.5">
              {data.equipment}
            </p>
          </div>

          {/* Key Metrics Row */}
          <div className="flex items-center gap-2 pt-1">
            {/* Duration */}
            <div className="flex items-center gap-1.5 rounded-xl bg-slate-800/60 px-2.5 py-1.5 border border-slate-700/40 text-slate-200">
              <IoTimeOutline className="shrink-0 text-base text-[#C2F800]" />
              <span className="text-xs font-bold">{data.duration} min</span>
            </div>

            {/* Calories */}
            <div className="flex items-center gap-1.5 rounded-xl bg-slate-800/60 px-2.5 py-1.5 border border-slate-700/40 text-slate-200">
              <FaFire className="shrink-0 text-sm text-[#C2F800]" />
              <span className="text-xs font-bold">{data.caloriesBurned}</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1.5 rounded-xl bg-slate-800/60 px-2.5 py-1.5 border border-slate-700/40 text-slate-200">
              <FaRegStar className="shrink-0 text-sm text-[#C2F800]" />
              <span className="text-xs font-bold">4.8</span>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons / Actions Row */}
      <div className="flex items-center gap-2 p-4 pt-0 md:pt-4 md:mx-6 md:p-0 md:flex-col lg:flex-row">
        <Link href={`${data.id}`} className="w-full md:w-auto">
          <button className="btn w-full rounded-2xl border border-slate-700/80 bg-slate-800/40 px-5 py-3 text-xs font-semibold text-slate-300 transition-all active:scale-95 hover:border-slate-600 hover:bg-slate-800/80 md:w-auto">
            View Details
          </button>
        </Link>

        {/* Desktop-only delete button */}
        <button
          onClick={() => handleDeleteBtn(data)}
          aria-label="Delete saved item"
          className="hidden md:flex cursor-pointer items-center justify-center p-2 text-slate-500 transition-colors hover:text-red-500"
        >
          <ImCross className="h-4 w-4" />
        </button>
      </div>

    </div>
  );
};

export default SavedDataPage;