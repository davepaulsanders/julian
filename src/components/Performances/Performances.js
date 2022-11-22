import React from "react";
import "./Performances.css";

import { Event } from "../Event/Event";
export const Performances = () => {
  return (
    <div
      id="performances"
      className="w-full min-h-screen pt-6 md:pt-10 flex flex-col items-center"
    >
      <h2 className="w-1/12 self-start section-title performances-title text-5xl mt-4 mb-10 left-4 md:left-[230px] 2xl:left-[340px] text-left relative">
        PERFORMANCES
      </h2>
      <div className="w-11/12 lg:w-10/12 xl:w-8/12">
        <Event />
        <Event />
        <Event />
        <Event />
      </div>
    </div>
  );
};
