import React, { useState } from "react";
import "./Videos.css";
export const Videos = () => {
  const [videosWidth, setVideosWidth] = useState(window.innerWidth);
  const handleResizeWindow = () => setVideosWidth(window.innerWidth);
  // subscribe to window resize event "onComponentDidMount"
  window.addEventListener("resize", handleResizeWindow);
  const video2 = "https://www.youtube.com/embed/36kbveZmygs";
  const video1 = "https://www.youtube.com/embed/b-bpq7ZFA18";
  const video3 = "https://www.youtube.com/embed/JN9MOZJC-1s";
  const video4 = "https://www.youtube.com/embed/bEFWi6vPIdc";
  const videosArray = [video1, video2, video3, video4];
  return (
    <div
      id="videos"
      className="w-full pt-6 md:pt-10 pb-20 flex flex-col items-center"
    >
      <h2 className="w-1/12 self-start section-title relative videos-title left-4 md:left-[230px] xl:left-[340px] text-5xl mt-4 mb-10">
        VIDEOS
      </h2>
      {/* Switch to carousel instead of grid if screen is small */}
      {videosWidth < 1150 ? (
        <div
          id="carouselControls2"
          className="carousel slide relative w-full"
          data-bs-ride="carousel"
          data-bs-interval="false"
        >
          <div className="carousel-inner relative w-full overflow-hidden">
            {videosArray.map((video, i) => (
              <div
                key={i}
                className={
                  i === 0
                    ? `carousel-item relative float-left w-full active`
                    : `carousel-item relative float-left w-full`
                }
              >
                <iframe
                  width="100%"
                  height="315"
                  src={video}
                  title="Julian Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev top-20 bottom-20 absolute flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselControls2"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next top-20 bottom-20 absolute flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselControls2"
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
        // Grid if screen is large enough
        <div className="grid grid-cols-4 w-full md:w-11/12 gap-3">
          <iframe
            className="col-start-1 col-end-3 justify-self-end"
            width="560"
            height="316"
            src={video1}
            title="Julian Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <iframe
            className="col-start-3 col-end-5 justify-self-start"
            width="560"
            height="316"
            src={video2}
            title="Julian Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <iframe
            className="col-start-1 col-end-3 justify-self-end"
            width="560"
            height="316"
            src={video3}
            title="Julian Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <iframe
            className="col-start-3 col-end-5 justify-self-start"
            width="560"
            height="316"
            src={video4}
            title="Julian Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};
