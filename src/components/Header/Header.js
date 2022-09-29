import React from "react";
import "./Header.css";

export const Header = () => {
  const openMenuAnimation = () => {
    document.querySelector(".bar-top").style.transform = "rotate(45deg)";
    document.querySelector(".bar-middle").style.transform = "translateX(1rem)";
    document.querySelector(".bar-middle").style.opacity = "0";
    document.querySelector(".bar-bottom").style.transform = "rotate(-45deg)";
  };

  const closeMenuAnimation = () => {
    document.querySelector(".bar-top").style.transform = "";
    document.querySelector(".bar-middle").style.transform = "";
    document.querySelector(".bar-middle").style.opacity = "";
    document.querySelector(".bar-bottom").style.transform = "";
  };

  // toggle nav menu in mobile
  const toggleMenu = (e) => {
    e.preventDefault();
    // query selector for nav links container
    const linkContainer = document.querySelector(".link-container");
    if (linkContainer.classList.contains("open")) {
      closeMenuAnimation();
      linkContainer.classList.remove("open");
    } else {
      openMenuAnimation();
      linkContainer.classList.add("nav-transition");
      linkContainer.classList.add("open");
    }
  };

  window.addEventListener("resize", () => {
    // query selector for nav links container
    const linkContainer = document.querySelector(".link-container");
    if (linkContainer.classList.contains("open")) {
      linkContainer.classList.remove("open");
      document.querySelector(".bar-top").style.transform = "";
      document.querySelector(".bar-middle").style.transform = "";
      document.querySelector(".bar-middle").style.opacity = "";
      document.querySelector(".bar-bottom").style.transform = "";
    }
    linkContainer.classList.remove("nav-transition");
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
