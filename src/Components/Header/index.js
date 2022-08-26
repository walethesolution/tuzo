import React from "react";
import "./index.scss";

function Header({ menuOpen, setMenuOpen }) {
  return (
    <div className={"header " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <h2>Tuzo Hookah</h2>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
