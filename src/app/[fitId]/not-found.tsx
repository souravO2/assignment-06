import Link from "next/link";
import React from "react";

const notfound = () => {
  return (
    <div className="flex items-center justify-center px-4">
      <div className="w-full max-w-lg rounded-3xl p-8 text-center sm:p-12">
        {/* 404 */}
        <h1 className="text-8xl font-black tracking-tight text-[#C2F800]">
          404
        </h1>

        {/* Emoji */}
        <div className="my-6 text-7xl">🏋️‍♂️💀</div>

        <h2 className="text-3xl font-bold">
          Bro... this workout doesn&apos;t exist.
        </h2>

        <p className="mt-4 text-gray-400">
          We searched everywhere. Under the bench, behind the dumbbells, even in
          the protein shaker. Nothing. 😭
        </p>

        {/* Fake stats */}
        <div className="my-8 grid grid-cols-3 gap-3">
          <div className="rounded-xl bg-slate-800/60 p-3">
            <p className="text-2xl font-bold text-[#C2F800]">0</p>
            <p className="text-xs text-gray-400">Workouts Found</p>
          </div>

          <div className="rounded-xl bg-slate-800/60 p-3">
            <p className="text-2xl font-bold">100%</p>
            <p className="text-xs text-gray-400">Confusion</p>
          </div>

          <div className="rounded-xl bg-slate-800/60 p-3">
            <p className="text-2xl font-bold">∞</p>
            <p className="text-xs text-gray-400">Regret</p>
          </div>
        </div>

        <p className="mb-6 text-sm text-gray-500">
          Maybe that URL needed one more rep.
        </p>

        <Link
          href="/"
          className="btn rounded-2xl bg-[#C2F800] px-8 font-semibold text-black hover:bg-[#b5eb00]"
        >
          🏠 Get Me Outta Here
        </Link>
      </div>
    </div>
  );
};

export default notfound;
