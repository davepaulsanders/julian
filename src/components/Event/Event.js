import React from "react";

export const Event = () => {

    const handleClick = (e) => {
    e.preventDefault();
    const eventDescription = e.target.nextSibling;
    const eventBox = e.target.closest(".event-box");
    const detailsButton = e.target.closest(".details-button");

    if (detailsButton.innerHTML === "More") {
      eventBox.classList.remove("short-event");
      eventBox.classList.add("tall-event");
      eventDescription.classList.remove("hidden-event");
      detailsButton.innerHTML = "Less";
    } else {
      eventBox.classList.remove("tall-event");
      eventBox.classList.add("short-event");
      eventDescription.classList.add("hidden-event");
      detailsButton.innerHTML = "More";
    }
  };
  return (
    <div className="event-box flex flex-col w-full text-left mt-2 mb-8 border-b border-black pb-4 px-0 short-event">
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 mr-2 pb-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
          />
        </svg>

        <h2 className="text-4xl font-thin">Fri. Nov. 4, 2022</h2>
      </div>
      <p className="text-2xl font-bold mb-1">
        Julian Berkowitz Trio at P.D. Brown Library
      </p>
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 inline-block"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            fill="black"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="white"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            fill="white"
          />
        </svg>
        <p className="text-sm">P.D. BROWN LIBRARY</p>
      </div>
      <button
        onClick={handleClick}
        className="details-button border-2 leading-5 py-2 border-black w-[120px] mt-2 hover:text-white hover:bg-black"
      >
        More
      </button>
      <p className="event-description hidden-event mt-4 w-full lg:w-3/4">
        The Julian Berkowitz Trio performs a set at P.D. Brown Memorial Branch
        Library in Waldorf, MD, as part of their Library After Hours music
        series from 7pm to 8pm. Registration is not required for this event. For
        more information, please visit:
        https://ccplonline.libnet.info/event/7200899
      </p>
    </div>
  );
};
