import React from "react";
import "./Performances.css";

import { Event } from "../Event/Event";
export const Performances = () => {
  return (
    <div id="performances" className="w-full md:w-8/12 my-10 px-3">
      <h2 className="section-title performances-title text-5xl mb-8 text-left relative">PERFORMANCES</h2>
      <Event />
      <Event />
      <Event />
      <Event />
    </div>
  );
};
