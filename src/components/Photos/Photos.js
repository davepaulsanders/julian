import React from "react";
import "./Photos.css";
const photos1 = require("../../assets/compressed/photos1.jpg");
const photos2 = require("../../assets/compressed/photos2.jpg");
const photos3 = require("../../assets/compressed/photos3.png");
const photos4 = require("../../assets/compressed/photos4.jpg");
const photos5 = require("../../assets/compressed/photos5.jpg");
const photos6 = require("../../assets/compressed/photos6.png");

export const Photos = () => {
  return (
    <div
      id="photos"
      className="w-full bg-slate-700 pt-6 md:pt-10 flex flex-col items-center"
    >
      <h2 className="w-1/12 self-start section-title photos-title relative left-4 md:left-[200px] text-slate-200 text-5xl mb-10">
        PHOTOS
      </h2>
      <div className="grid md:grid-cols-8 lg:grid-cols-12 w-full md:w-11/12 xl:w-3/4 gap-1 md:gap-2 md:grid-rows-3 lg:grid-rows-2 md:pb-20">
        <img
          className="col-start-1 md:col-end-5 lg:col-end-5"
          src={photos1}
          alt="Julian Berkowitz"
        />
        <img
          className="md:col-start-5 md:col-end-9"
          src={photos4}
          alt="Julian Berkowitz"
        />
        <img
          className="md:col-start-1 md:row-start-2 md:col-end-5 lg:row-start-1 lg:col-start-9 lg:col-end-13"
          src={photos2}
          alt="Julian Berkowitz"
        />
        <img
          className="md:col-start-5 md:row-start-2 md:col-end-9"
          src={photos3}
          alt="Julian Berkowitz"
        />
        <img
          className="md:col-start-1 md:row-start-3 md:col-end-5 lg:row-start-2"
          src={photos5}
          alt="Julian Berkowitz"
        />
        <img
          className="md:col-start-5 md:row-start-3 md:col-end-9 lg:row-start-2 lg:col-start-9 lg:col-end-13"
          src={photos6}
          alt="Julian Berkowitz"
        />
      </div>
    </div>
  );
};
