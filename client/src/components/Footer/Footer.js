import React from "react";
import "./Footer.css";
const instagram = require("../../assets/compressed/instagram.png");
const facebook = require("../../assets/compressed/facebook.png");

export const Footer = () => {
  return (
    <footer className="footer w-full h-[3rem] flex items-center justify-center md:justify-end relative md:pr-4">
      <div className="flex items-center mr-4">
        <a href="https://www.instagram.com/julianberkowitzdrums/">
          <img
            className="w-[2rem] h-[2rem] md:w-[1.25rem] md:h-[1.25rem] mr-2"
            src={instagram}
            alt="instagram logo"
          />
        </a>
        <a href="https://www.facebook.com/julian.berkowitz">
          <img
            className="w-[1.65rem] md:w-[1rem] h-[1.65rem] md:h-[1rem]"
            src={facebook}
            alt="instagram logo"
          />
        </a>
      </div>
      <a
        className="text-white text-xl md:text-sm"
        href="https://davepaulsanders.github.io/react-portfolio/"
      >
        Site by Dave Sanders
      </a>
    </footer>
  );
};
