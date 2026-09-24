import Link from "next/link";
import React from "react";

const EmptyData = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-y-4 p-10">
      <h1 className="font-bold text-2xl">NOTHING HERE YET</h1>
      <p className="text-gray-400">
        Browse the library and add a lift to get today&apos;s moving.
      </p>
      <Link href={"/"} className="p-8">
      <button className="btn font-semibold bg-[#C2F800] text-black rounded-xl px-4 border-none shadow-none">
        Go to Workouts
      </button>
      </Link>
    </div>
  );
};

export default EmptyData;
