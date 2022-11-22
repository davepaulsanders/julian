import React, { useState } from "react";
import "./Photos.css";
const photos1 = require("../../assets/compressed/photos1.webp");
const photos2 = require("../../assets/compressed/photos2.webp");
const photos3 = require("../../assets/compressed/photos3.webp");
const photos4 = require("../../assets/compressed/photos4.webp");
const photos5 = require("../../assets/compressed/photos5.webp");
const photos6 = require("../../assets/compressed/photos6.webp");
const photosArray = [photos1, photos2, photos3, photos4, photos5, photos6];
export const Photos = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const handleResizeWindow = () => setWidth(window.innerWidth);
  // subscribe to window resize event "onComponentDidMount"
  window.addEventListener("resize", handleResizeWindow);
  return (
    <div
      id="photos"
      className="w-full h-screen bg-slate-700 pt-6 md:pt-10 flex flex-col items-center"
    >
      <h2 className="w-1/12 self-start section-title photos-title relative left-4 md:left-[230px] 2xl:left-[340px] text-slate-200 text-5xl mt-4 mb-10">
        PHOTOS
      </h2>
      {/* Switch to carousel instead of grid if screen is small */}
      {width < 750 ? (
        <div
          id="carouselControls"
          className="carousel slide relative w-full"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner relative w-full overflow-hidden">
            {photosArray.map((photo, i) => (
              <div
                key={photo}
                className={
                  i === 0
                    ? `carousel-item relative float-left w-full active`
                    : `carousel-item relative float-left w-full`
                }
              >
                <img
                  src={photo}
                  className="block w-full"
                  alt="julian berkowitz"
                />
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselControls"
            data-bs-interval="false"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-8 lg:grid-cols-12 w-full md:w-11/12 xl:w-11/12 2xl:w-3/4 gap-1 md:gap-2 md:grid-rows-3 lg:grid-rows-2 md:pb-20 justify-items-center">
          <img
            className="photo col-start-1 md:col-end-5 lg:col-end-5"
            src={photos1}
            alt="Julian Berkowitz"
          />
          <img
            className="photo md:col-start-5 md:col-end-9"
            src={photos4}
            alt="Julian Berkowitz"
          />
          <img
            className="photo md:col-start-1 md:row-start-2 md:col-end-5 lg:row-start-1 lg:col-start-9 lg:col-end-13"
            src={photos2}
            alt="Julian Berkowitz"
          />
          <img
            className="photo md:col-start-5 md:row-start-2 md:col-end-9"
            src={photos3}
            alt="Julian Berkowitz"
          />
          <img
            className="photo md:col-start-1 md:row-start-3 md:col-end-5 lg:row-start-2"
            src={photos5}
            alt="Julian Berkowitz"
          />
          <img
            className="photo md:col-start-5 md:row-start-3 md:col-end-9 lg:row-start-2 lg:col-start-9 lg:col-end-13"
            src={photos6}
            alt="Julian Berkowitz"
          />
        </div>
      )}
    </div>
  );
};
