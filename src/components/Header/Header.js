import React from "react";
import "./Header.css";

export const Header = () => {
  const toggleMenu = (e) => {
    e.preventDefault();
    if (document.querySelector(".link-container").classList.contains("open")) {
      console.log("here");
      document.querySelector(".link-container").classList.remove("open");
      document.querySelector(".bar-top").style.transform = "";
      document.querySelector(".bar-middle").style.transform = "";
      document.querySelector(".bar-middle").style.opacity = "";
      document.querySelector(".bar-bottom").style.transform = "";
    } else {
      document.querySelector(".link-container").classList.add("nav-transition");
      document.querySelector(".link-container").classList.add("open");
      document.querySelector(".bar-top").style.transform = "rotate(45deg)";
      document.querySelector(".bar-middle").style.transform =
        "translateX(1rem)";
      document.querySelector(".bar-middle").style.opacity = "0";
      document.querySelector(".bar-bottom").style.transform = "rotate(-45deg)";
    }
  };

  window.addEventListener("resize", () => {
    if (document.querySelector(".link-container").classList.contains("open")) {
      document.querySelector(".link-container").classList.remove("open");
      document.querySelector(".bar-top").style.transform = "";
      document.querySelector(".bar-middle").style.transform = "";
      document.querySelector(".bar-middle").style.opacity = "";
      document.querySelector(".bar-bottom").style.transform = "";
    }
    document
      .querySelector(".link-container")
      .classList.remove("nav-transition");
  });

  return (
    <div>
      <nav className="bg-transparent flex justify-between">
        <h1 className="title text-white text-3xl xl:text-5xl 2xl:text-6xl ml-5 lg:ml-14 mt-6">
          <a href="/">JULIAN BERKOWITZ</a>
        </h1>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className="bar-top"></div>
          <div className="bar-middle"></div>
          <div className="bar-bottom"></div>
        </div>
        <div className="mr-10 mt-4 link-container">
          <ul className="text-white flex">
            <a className="link" href="/bio">
              <li>BIO</li>
            </a>
            <a className="link" href="/bio">
              <li>PHOTOS</li>
            </a>
            <a className="link" href="/bio">
              <li>VIDEOS</li>
            </a>
            <a className="link" href="/bio">
              <li>PERFORMANCES</li>
            </a>
            <a className="link" href="/bio">
              <li>CONTACT</li>
            </a>
          </ul>
        </div>
      </nav>
    </div>
  );
};
