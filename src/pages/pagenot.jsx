import React from "react";
import { Link } from "react-router-dom";

const pageNotFound = () => {
  return (
    <div className="h-[80vh] w-full flex flex-col items-center justify-center gap-5 text-3xl xl:text-5xl font-semibold uppercase">
      <p className="animate-pulse text-nowrap">page not found</p>
      <Link className="text-sm bg-main hover:bg-main-hover rounded-full text-white px-10 py-3">back to Home</Link>
    </div>
  );
};

export default pageNotFound;
