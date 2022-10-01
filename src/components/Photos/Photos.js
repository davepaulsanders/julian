import React from "react";
const bio = require("../../assets/bio.jpg");
const bio2 = require("../../assets/bio2.jpg");
const bio3 = require("../../assets/bio3.jpg");

export const Photos = () => {
  return (
    <div className="grid grid-cols-12 w-full gap-2 grid-rows-4 bg-gray-500 pt-10">
      <img
        className="col-start-3 col-end-7 row-start-1 row-span-2"
        src={bio}
        alt="Julian Berkowitz"
      />
      <img
        className="col-start-7 col-end-9 row-start-1 row-span-1"
        src={bio2}
        alt="Julian Berkowitz"
      />
      <img
        className="col-start-7 col-end-9 row-start-2 row-span-1"
        src={bio3}
        alt="Julian Berkowitz"
      />
      <img
        className="col-start-9 col-end-12 row-start-1 row-span-2 self-center"
        src={bio}
        alt="Julian Berkowitz"
      />
    </div>
  );
};
