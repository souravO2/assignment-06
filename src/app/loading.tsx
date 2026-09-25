import React from "react";

const loading = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <span className="loading loading-spinner loading-xl w-20 h-20 text-white"></span>
      <p className="text-4xl text-white">Loading workouts...</p>
    </div>
  );
};

export default loading;
