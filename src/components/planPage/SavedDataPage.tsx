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
    <div className="my-4 flex flex-col overflow-hidden rounded-xl border border-slate-700 bg-slate-900/20 md:flex-row md:items-center md:justify-between">
      {/* Image + Content */}
      <div className="flex flex-col md:flex-row min-w-0 items-center">
        <div className="shrink-0 p-4">
          <Image
            src={data.image}
            width={200}
            height={200}
            alt={data.description}
            className="h-52 w-full rounded-2xl object-cover md:h-50 md:w-50"
          />
        </div>

        <div className="min-w-0 space-y-4">
          <h1 className="truncate text-2xl font-bold">
            {data.name.toUpperCase()}
          </h1>

          <p className="truncate text-gray-400">{data.equipment}</p>

          <div className="grid grid-cols-3 divide-x divide-white/10">
            {/* Duration */}
            <div className="flex items-center gap-1">
              <IoTimeOutline className="shrink-0 text-xl text-[#C2F800]" />
              <span className="text-sm font-semibold">{data.duration} min</span>
            </div>

            {/* Calories */}
            <div className="flex items-center gap-1 px-2">
              <FaFire className="shrink-0 text-lg text-[#C2F800]" />
              <span className="text-sm font-semibold">
                {data.caloriesBurned}
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 px-2">
              <FaRegStar className="shrink-0 text-lg text-[#C2F800]" />
              <span className="text-sm font-semibold">4.8</span>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex md:flex-col lg:flex-row items-center justify-center gap-2 p-4 md:mx-8 md:p-0">
        <Link href={`${data.id}`}>
          <button className="btn rounded-2xl border-slate-700 bg-none font-normal">
            View Details
          </button>
        </Link>

        <button
          onClick={() => handleDeleteBtn(data)}
          className="flex cursor-pointer items-center p-2 hover:text-red-600"
        >
          <ImCross className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default SavedDataPage;
