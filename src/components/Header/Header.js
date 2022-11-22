import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  window.addEventListener("scroll", () => {
    const linkContainer = document.querySelector(".link-container");
    if (linkContainer.classList.contains("open")) {
      linkContainer.classList.remove("open");
      closeMenuAnimation();
    }
  });
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
    const linkContainer = document.querySelector("ul");
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
    const linkContainer = document.querySelector("ul");
    if (linkContainer.classList.contains("open")) {
      linkContainer.classList.remove("open");
      document.querySelector(".bar-top").style.transform = "";
      document.querySelector(".bar-middle").style.transform = "";
      document.querySelector(".bar-middle").style.opacity = "";
      document.querySelector(".bar-bottom").style.transform = "";
    }
    linkContainer.classList.remove("nav-transition");
  });
  const handleLinkClick = (e) => {
    e.preventDefault();
    const targetId = e.target.closest("button").getAttribute("id");
    toggleMenu(e);
    navigate(`/${targetId}`);
  };
  return (
    <nav className="w-full flex justify-between items-center">
      <h1 className="title overflow-hidden bg-transparent text-white text-2xl xl:text-5xl 2xl:text-6xl lg:ml-14">
        <a href="/" className="text-2xl xl:text-5xl">
          JULIAN BERKOWITZ
        </a>
      </h1>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className="bar-top"></div>
        <div className="bar-middle"></div>
        <div className="bar-bottom"></div>
      </div>
      <ul className="text-white flex text-lg xl:text-md 2xl:text-lg">
        <button id="bio" onClick={handleLinkClick} className="link">
          <li>BIO</li>
        </button>

        <button id="photos" onClick={handleLinkClick} className="link">
          <li>PHOTOS</li>
        </button>

        <button id="videos" onClick={handleLinkClick} className="link">
          <li>VIDEOS</li>
        </button>

        <button
          id="performances"
          onClick={handleLinkClick}
          className="link"
        >
          <li>PERFORMANCES</li>
        </button>

        <button id="contact" onClick={handleLinkClick} className="link">
          <li>CONTACT</li>
        </button>
      </ul>
    </nav>
  );
};
