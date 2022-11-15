import React from "react";
import "./Home.css";
const tavern = require('../../assets/compressed/tavernVideo.mp4')
export const Home = () => {
  return <div className="home w-100 flex justify-center md:justify-end items-center pb-40">
    <video autoPlay loop muted playsInline className="video mt-40 md:mt-0 mr-0 md:mr-40" src={tavern}></video>
  </div>;
};
