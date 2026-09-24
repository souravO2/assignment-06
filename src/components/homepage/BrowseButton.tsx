"use client";

import React from "react";

const BrowseButton = () => {
  const handleClick = () => {
    document.getElementById("library")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleClick}
      className="btn font-semibold bg-[#C2F800] text-black rounded-xl px-4 border-none shadow-none"
    >
      Browse Workouts
    </button>
  );
};

export default BrowseButton;
