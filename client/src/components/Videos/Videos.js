import React, { useState } from "react";
import "./Videos.css";
export const Videos = () => {
  const video1 = "https://www.youtube.com/embed/b-bpq7ZFA18";
  const video2 = "https://www.youtube.com/embed/36kbveZmygs";
  const video3 = "https://www.youtube.com/embed/JN9MOZJC-1s";
  const video4 = "https://www.youtube.com/embed/bEFWi6vPIdc";
  const videosArray = [video1, video2, video3, video4];
  return (
    <div
      id="videos"
      className="w-full min-h-screen pt-6 md:pt-10 pb-6 bg-slate-700 flex flex-col items-center"
    >
      <h2 className="w-1/12 self-start text-slate-200 section-title relative videos-title left-4 md:left-[230px] 2xl:left-[340px] text-5xl mt-4 mb-10">
        VIDEOS
      </h2>
      <div className="grid grid-cols-4 w-11/12 lg:w-10/12 2xl:w-8/12 gap-3 justify-items-center">
        <iframe
          className="col-start-1 lg:col-end-3 col-end-5 w-full max-w-[560px]"
          height="316"
          src={video1}
          title="Julian Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          className="col-start-1 lg:col-start-3 col-end-5 w-full max-w-[560px]"
          width="100%"
          height="316"
          src={video2}
          title="Julian Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          className="col-start-1 lg:col-end-3 col-end-5 w-full max-w-[560px]"
          width="100%"
          height="316"
          src={video3}
          title="Julian Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          className="col-start-1 lg:col-start-3 col-end-5 w-full max-w-[560px]"
          width="100%"
          height="316"
          src={video4}
          title="Julian Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        
        
      </div>
    </div>
  );
};
