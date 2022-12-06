import React from "react";
const instagram = require("../../assets/compressed/instagram.png");
const facebook = require("../../assets/compressed/facebook.png");

export const Footer = () => {
  return (
    <div className="w-full bg-black h-[3rem] flex items-center justify-center relative">
      <div className="flex items-center mr-4">
        <a href="https://www.instagram.com/julianberkowitzdrums/">
          <img
            className="w-[2rem] h-[2rem] mr-2"
            src={instagram}
            alt="instagram logo"
          />
        </a>
        <a href="https://www.facebook.com/julian.berkowitz">
          <img
            className="w-[1.65rem] h-[1.65rem]"
            src={facebook}
            alt="instagram logo"
          />
        </a>
      </div>
      <a
        className="text-white"
        href="https://davepaulsanders.github.io/react-portfolio/"
      >
        Site by Date Sanders
      </a>
    </div>
  );
};
