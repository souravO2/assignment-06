import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 my-4 mb-16 justify-center md:justify-between items-center md:items-left container mx-auto">
      <div className="flex gap-2">
        <Image src={logo} width={32} height={32} alt="logo"></Image>
        <span className="font-bold text-2xl">FITLOG</span>
      </div>
      <div className="text-gray-400 text-center md:text-left">
        &copy; {new Date().getFullYear()} FitLog - Workout Library. Train hard,
        log honest.
      </div>
    </div>
  );
};

export default Footer;
