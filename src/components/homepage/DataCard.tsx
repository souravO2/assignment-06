import { DataType } from "@/types/DataType";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFire, FaRegStar } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";

const DataCard = ({ data }: { data: DataType }) => {
  return (
    <div className="group m-2 overflow-hidden rounded-3xl bg-black text-white">
      <Link href={``}>
        {/* Image */}
        <div className="relative overflow-hidden">
          <Image
            src={data.image}
            width={500}
            height={400}
            alt={data.description}
            className="h-94 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Muscle groups */}
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

          {/* Title */}
          <h2 className="text-xl font-extrabold tracking-tight">
            {data.name.toUpperCase()}
          </h2>

          {/* Equipment */}
          <p className="mt-1 text-sm text-gray-400">{data.equipment}</p>

          {/* Divider */}
          <div className="my-5 h-px bg-white/10" />

          {/* Stats */}
          <div className="grid grid-cols-3 divide-x divide-white/10">
            {/* Duration */}
            <div className="flex flex-col items-center gap-1 px-2">
              <IoTimeOutline className="text-xl text-[#C2F800]" />
              <span className="text-sm font-semibold">{data.duration} min</span>
            </div>

            {/* Calories */}
            <div className="flex flex-col items-center gap-1 px-2">
              <FaFire className="text-lg text-[#C2F800]" />
              <span className="text-sm font-semibold">
                {data.caloriesBurned}
              </span>
            </div>

            {/* Rating */}
            <div className="flex flex-col items-center gap-1 px-2">
              <FaRegStar className="text-lg text-[#C2F800]" />
              <span className="text-sm font-semibold">4.8</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DataCard;
