import React from "react";
import "./Header.css";
export const Header = () => {
  return (
    <div>
      <nav>
        <h1>
          <a href="/">Julian Berkowitz</a>
        </h1>
        {/* hamburger */}
        <div>
            <ul>
                <li></li>
            </ul>
        </div>
      </nav>
    </div>
  );
};
