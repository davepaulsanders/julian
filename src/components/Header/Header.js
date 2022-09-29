import React from "react";
import "./Header.css";
export const Header = () => {


  return (
    <div>
      <nav className="bg-transparent flex justify-between">
        <h1 className="title text-white text-xl xl:text-5xl 2xl:text-6xl ml-5 lg:ml-14 mt-6">
          <a href="/">JULIAN BERKOWITZ</a>
        </h1>
        <div class="hamburger-menu">
          <div class="bar-top"></div>
          <div class="bar-middle"></div>
          <div class="bar-bottom"></div>
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
