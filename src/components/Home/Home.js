import React from "react";
import "./Home.css";
const tavern = require('../../assets/compressed/tavernVideo.mp4')
export const Home = () => {
  return <div className="home w-full absolute flex justify-center">
    <video autoPlay loop muted playsInline className="video" src={tavern}></video>
  </div>;
};
