import React from "react";
import Banner from "@/assets/banner.png";
import Image from "next/image";
import BrowseButton from "./BrowseButton";

const Hero = () => {
  return (
    <main className="flex flex-col items-center justify-between gap-12 p-8 md:container mx-2 md:mx-auto lg:flex-row lg:gap-25 lg:py-20 bg-[#222630] rounded-3xl my-8">
      <div className="flex flex-col justify-center gap-y-4 pl-0 md:pl-8 lg:gap-y-8 text-center lg:text-left w-full lg:w-1/2">
        <p className="text-[#C2F800] font-bold">WORKOUT LIBRARY</p>
        <h1 className="font-extrabold text-[40px] sm:text-[48px] lg:text-[60px] text-white leading-tight lg:leading-16">
          TRAIN WITH INTENT.
          <br />
          LOG EVERY SET.
        </h1>
        <p className="leading-6 text-gray-400">
          FitLog is a dark, no-nonsense gym companion: pick a lift,
          <br />
          lock it into today&apos;s plan, and watch the week&apos;s work add up.
        </p>
        <div className="flex flex-row justify-center lg:justify-start gap-4">
          <BrowseButton/>
        </div>
      </div>
      <div className="flex w-full justify-center lg:w-1/2">
        <Image
          src={Banner}
          alt="Hero Banner Photo"
          className="h-auto w-full max-w-122 object-contain md:max-w-122 lg:max-w-122"
        />
      </div>
    </main>
  );
};

export default Hero;
